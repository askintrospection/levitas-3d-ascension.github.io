
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
          <source src="/song.mp3" type="audio/mpeg" />
          <source src="/song.wav" type="audio/wav" />
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
                className="mb-8 flex items-center justify-center space-x-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img 
                  src="/lovable-uploads/4a8fc42c-1769-44d1-8f2c-f5f425457b5e.png" 
                  alt="Levitas"
                  className="h-16 object-contain"
                />
              </motion.div>
              
              <motion.div
                className="mb-8 flex items-center justify-center space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <img 
                  src="/lovable-uploads/7cb26c52-e8f3-4c84-98e2-ecf579a94c7a.png" 
                  alt="STEM Racing"
                  className="h-8 object-contain"
                />
                <div className="h-6 w-px bg-gray-600"></div>
                <p className="text-lg text-gray-300 tracking-wider font-bold">
                  National Finals 2025
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
                Cars 404
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
            <motion.div 
              className="mb-6"
              animate={{ 
                scale: phase >= 5 ? [1, 1.05, 1] : 1
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <img 
                src="/lovable-uploads/4a8fc42c-1769-44d1-8f2c-f5f425457b5e.png" 
                alt="Levitas"
                className="h-20 mx-auto object-contain"
                style={{
                  filter: phase >= 5 ? 'drop-shadow(0 0 20px #ff6b35)' : 'none'
                }}
              />
            </motion.div>
            <motion.div 
              className="flex items-center justify-center space-x-3"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <img 
                src="/lovable-uploads/7cb26c52-e8f3-4c84-98e2-ecf579a94c7a.png" 
                alt="STEM Racing"
                className="h-6 object-contain"
              />
              <div className="h-4 w-px bg-gray-400"></div>
              <p className="text-xl text-gray-300 tracking-wider font-bold">
                National Finals 2025
              </p>
            </motion.div>
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
