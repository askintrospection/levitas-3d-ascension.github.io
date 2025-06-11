
import { motion } from 'framer-motion';

export const MinimalistBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full border border-primary/10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-48 h-48 rounded-full border border-accent/10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
      
      {/* Floating lines */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-32 h-0.5 bg-gradient-to-r from-primary/20 to-transparent"
        initial={{ width: 0 }}
        animate={{ width: 128 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-0.5 bg-gradient-to-l from-accent/20 to-transparent"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ duration: 1.5, delay: 2 }}
      />
      
      {/* Subtle dots pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-primary/40" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-accent/40" />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-primary/40" />
        <div className="absolute top-3/4 left-1/4 w-1 h-1 rounded-full bg-accent/40" />
      </div>
      
      {/* Very subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
    </div>
  );
};
