
import { motion } from 'framer-motion';

export const MinimalistBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/60 via-white to-yellow-100/40" />
      
      {/* Moving gradient waves */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
        animate={{ 
          x: [-1000, 1000, -1000],
          scaleY: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-l from-transparent via-accent/5 to-transparent"
        animate={{ 
          x: [1000, -1000, 1000],
          scaleY: [1, 0.8, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      
      {/* Floating geometric shapes with more visibility */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full border-2 border-primary/20 bg-primary/5"
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={{ 
          scale: [0.8, 1.1, 0.9, 1],
          opacity: [0.3, 0.6, 0.4, 0.5],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-48 h-48 rounded-full border-2 border-accent/20 bg-accent/5"
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={{ 
          scale: [0.8, 1.3, 0.9, 1],
          opacity: [0.3, 0.7, 0.4, 0.6],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Enhanced animated hexagons */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-2 border-primary/15 bg-primary/5 transform rotate-45" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-24 h-24"
        animate={{ 
          rotate: [360, 0],
          scale: [1, 0.7, 1]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-2 border-accent/15 bg-accent/5 transform rotate-12" />
      </motion.div>
      
      {/* Enhanced floating lines with more visibility */}
      <motion.div
        className="absolute top-1/3 left-1/4 h-1 bg-gradient-to-r from-primary/30 via-primary/60 to-transparent rounded-full"
        initial={{ width: 0 }}
        animate={{ 
          width: [0, 128, 96, 128],
          opacity: [0.4, 0.8, 0.5, 0.7]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 h-1 bg-gradient-to-l from-accent/30 via-accent/60 to-transparent rounded-full"
        initial={{ width: 0 }}
        animate={{ 
          width: [0, 96, 72, 96],
          opacity: [0.4, 0.7, 0.5, 0.8]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Enhanced animated dots pattern with better visibility */}
      <div className="absolute inset-0 opacity-60">
        <motion.div 
          className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-primary/50"
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-accent/50"
          animate={{ 
            scale: [1, 2.2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-primary/60"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/4 w-2 h-2 rounded-full bg-accent/55"
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
      
      {/* Enhanced mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8" />
      
      {/* Enhanced moving particles effect */}
      <motion.div
        className="absolute top-0 left-0 w-2 h-2 bg-primary/40 rounded-full shadow-lg"
        animate={{
          x: [0, window.innerWidth || 1200],
          y: [100, 200, 300, 150]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-0 right-0 w-1 h-1 bg-accent/50 rounded-full shadow-lg"
        animate={{
          x: [0, -(window.innerWidth || 1200)],
          y: [200, 100, 400, 250]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 3 }}
      />
      
      {/* Additional floating elements for more dynamic feel */}
      <motion.div
        className="absolute top-1/2 left-1/6 w-16 h-16 border border-primary/20 rounded-lg bg-primary/5"
        animate={{
          rotate: [0, 360],
          y: [-10, 10, -10]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/5 w-12 h-12 border border-accent/20 rounded-full bg-accent/5"
        animate={{
          scale: [1, 1.2, 1],
          x: [-5, 5, -5]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};
