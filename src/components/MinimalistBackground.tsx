
import { motion } from 'framer-motion';

export const MinimalistBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-white to-yellow-50/20" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full border border-primary/10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1, 0.9, 1],
          opacity: [0, 1, 0.8, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-48 h-48 rounded-full border border-accent/10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.2, 0.9, 1],
          opacity: [0, 1, 0.7, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Animated hexagons */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border border-primary/5 transform rotate-45" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-24 h-24"
        animate={{ 
          rotate: [360, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border border-accent/5 transform rotate-12" />
      </motion.div>
      
      {/* Floating lines with animation */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-32 h-0.5 bg-gradient-to-r from-primary/20 to-transparent"
        initial={{ width: 0 }}
        animate={{ 
          width: [0, 128, 96, 128],
          opacity: [0.2, 0.6, 0.3, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-0.5 bg-gradient-to-l from-accent/20 to-transparent"
        initial={{ width: 0 }}
        animate={{ 
          width: [0, 96, 72, 96],
          opacity: [0.2, 0.5, 0.4, 0.6]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-40">
        <motion.div 
          className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-primary/30"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-accent/30"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-primary/40"
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/4 w-1.5 h-1.5 rounded-full bg-accent/35"
          animate={{ 
            scale: [1, 1.6, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
      
      {/* Subtle mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />
      
      {/* Moving particles effect */}
      <motion.div
        className="absolute top-0 left-0 w-1 h-1 bg-primary/20 rounded-full"
        animate={{
          x: [0, window.innerWidth || 1200],
          y: [100, 200, 300, 150]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-0 right-0 w-0.5 h-0.5 bg-accent/30 rounded-full"
        animate={{
          x: [0, -(window.innerWidth || 1200)],
          y: [200, 100, 400, 250]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 3 }}
      />
    </div>
  );
};
