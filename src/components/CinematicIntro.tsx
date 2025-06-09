
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { Progress } from './ui/progress';
import { Scene3D } from './Scene3D';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [phase, setPhase] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showCar, setShowCar] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Loading sequence
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => setPhase(1), 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    // Phase timing for crazy sequence
    const timer1 = setTimeout(() => {
      setShowCar(true);
      setPhase(2);
    }, 3000);
    
    const timer2 = setTimeout(() => setPhase(3), 5000);
    const timer3 = setTimeout(() => setPhase(4), 7000);
    const timer4 = setTimeout(() => setPhase(5), 9000);
    const timer5 = setTimeout(() => {
      setPhase(6);
      setTimeout(onComplete, 2000);
    }, 11000);

    return () => {
      clearInterval(loadingInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  useEffect(() => {
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {
        // Auto-play might be blocked
      });
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Audio */}
        <audio
          ref={audioRef}
          loop
          muted={isMuted}
          preload="auto"
        >
          <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMeCjuVz/LNfiwGJnbD7N+TQwoXXrPn5KlXGQZBnNvz0XkpBCQ=" type="audio/wav" />
        </audio>

        {/* Audio Controls */}
        <motion.button
          className="audio-controls"
          onClick={toggleMute}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </motion.button>

        {/* Loading Phase */}
        {phase === 0 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center max-w-md">
              <motion.div
                className="mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="text-4xl font-bold text-white mb-2 brand-title">
                  LEVITAS
                </h1>
                <p className="text-lg text-gray-300 tracking-wider">
                  STEM Racing | National Finals 2025
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <Progress value={loadingProgress} className="w-full h-2" />
                <motion.p 
                  className="text-sm text-gray-400"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Initializing Racing Systems...
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Crazy Glitch Transition */}
        {phase === 1 && (
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Matrix-style glitch effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-20"
              animate={{ 
                x: [-1000, 1000],
                scaleX: [1, 2, 1]
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            
            {/* Scan lines */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-10"
              animate={{ y: [-100, window.innerHeight + 100] }}
              transition={{ duration: 0.5, ease: "linear" }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-6xl font-bold text-white"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotateX: [0, 360, 0],
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                CARS 404
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* 3D Car Scene */}
        {showCar && phase >= 2 && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Scene3D phase={phase - 2} />
          </motion.div>
        )}

        {/* Final Brand Overlay */}
        {phase >= 4 && (
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: phase >= 4 ? 1 : 0,
              y: phase >= 4 ? 0 : 50 
            }}
            transition={{ duration: 1.5 }}
          >
            <motion.h1 
              className="text-6xl font-bold text-white mb-4 brand-title"
              animate={{ 
                textShadow: phase >= 5 ? [
                  "0 0 10px #ff6b35",
                  "0 0 20px #ff6b35",
                  "0 0 10px #ff6b35"
                ] : "none"
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              LEVITAS
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 tracking-wider"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              CARS 404 | National Finals 2025
            </motion.p>
          </motion.div>
        )}

        {/* Dramatic exit effect */}
        {phase === 6 && (
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};
