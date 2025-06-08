
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [phase, setPhase] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Phase timing
    const timer1 = setTimeout(() => setPhase(1), 2000);
    const timer2 = setTimeout(() => setPhase(2), 4000);
    const timer3 = setTimeout(() => setPhase(3), 6000);
    const timer4 = setTimeout(() => {
      setPhase(4);
      setTimeout(onComplete, 1000);
    }, 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  useEffect(() => {
    // Start ambient audio
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {
        // Auto-play might be blocked, that's okay
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
        transition={{ duration: 1 }}
      >
        {/* Audio */}
        <audio
          ref={audioRef}
          loop
          muted={isMuted}
          preload="auto"
        >
          <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMeCjuVz/LNfiwGJnbD7N+TQwoXXrPn5KlXGQZBnNvz0XkpBCQAAAAAAAAAAAA=" type="audio/wav" />
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

        {/* Cinematic Car Reveal */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Hangar Environment */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 0 ? 1 : 0 }}
            transition={{ duration: 2 }}
          />

          {/* Dramatic Lighting */}
          <motion.div
            className="absolute top-0 left-1/2 w-96 h-96 bg-white rounded-full opacity-20 blur-3xl"
            initial={{ scale: 0, x: "-50%" }}
            animate={{ 
              scale: phase >= 1 ? 1 : 0,
              y: phase >= 2 ? -100 : 0 
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* F1 Car Silhouette */}
          <motion.div
            className="relative"
            initial={{ x: -400, opacity: 0 }}
            animate={{ 
              x: phase >= 1 ? 0 : -400,
              opacity: phase >= 1 ? 1 : 0 
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <svg
              width="300"
              height="120"
              viewBox="0 0 300 120"
              className="text-white fill-current"
            >
              {/* F1 Car Shape */}
              <path d="M50 60 L80 50 L200 50 L250 60 L250 70 L200 80 L80 80 L50 70 Z" />
              <circle cx="80" cy="75" r="12" />
              <circle cx="220" cy="75" r="12" />
              <path d="M200 45 L240 50 L240 55 L200 50 Z" />
              <path d="M260 55 L290 50 L290 65 L260 70 Z" />
            </svg>
          </motion.div>

          {/* Camera Movement Effects */}
          <motion.div
            className="absolute inset-0 border-2 border-white opacity-10"
            initial={{ scale: 1.2, rotate: 0 }}
            animate={{ 
              scale: phase >= 2 ? 1 : 1.2,
              rotate: phase >= 3 ? 0 : -2 
            }}
            transition={{ duration: 1.5 }}
          />

          {/* Text Overlay */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: phase >= 2 ? 1 : 0,
              y: phase >= 2 ? 0 : 30 
            }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold text-white mb-2 brand-title">
              LEVITAS
            </h1>
            <p className="text-lg text-gray-300 tracking-wider">
              STEM RACING | NATIONAL FINALS 2025
            </p>
          </motion.div>

          {/* Lens Flare Effect */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-4 h-4 bg-white rounded-full opacity-80"
            initial={{ scale: 0 }}
            animate={{ 
              scale: phase >= 3 ? [0, 1, 0] : 0,
              opacity: phase >= 3 ? [0, 0.8, 0] : 0 
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
