
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scene3D } from '../components/Scene3D';
import { ChevronDown, Zap, Shield, Cpu } from 'lucide-react';

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const [cinematicComplete, setCinematicComplete] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    const timer1 = setTimeout(() => setShowContent(true), 4000);
    const timer2 = setTimeout(() => setCinematicComplete(true), 12000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Loading Screen */}
      <AnimatePresence>
        {loadingProgress < 100 && (
          <motion.div
            className="fixed inset-0 z-50 bg-white flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center">
              <motion.div
                className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full mx-auto mb-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.h2 
                className="text-2xl font-bold brand-title text-foreground mb-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                CARS 404 | NATIONAL FINALS 2025
              </motion.h2>
              <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full gradient-bg"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">{Math.round(loadingProgress)}%</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Cinematic Scene */}
      <div className="absolute inset-0">
        <Scene3D />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6">
        <AnimatePresence>
          {showContent && (
            <motion.div
              className="text-center fade-in"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.div
                className="clean-card p-8 rounded-2xl mb-8"
                initial={{ backdropFilter: "blur(0px)" }}
                animate={{ backdropFilter: "blur(10px)" }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <motion.h1 
                  className="text-7xl md:text-9xl font-bold mb-4 brand-title text-foreground"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  LEVITAS
                </motion.h1>
                <motion.h2 
                  className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  CARS 404
                </motion.h2>
                <motion.p 
                  className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                >
                  Engineering Excellence • Innovation • Precision Racing
                </motion.p>
                <motion.div
                  className="text-xl text-primary font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                >
                  "SPEED • PRECISION • VICTORY"
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Indicator */}
        {cinematicComplete && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="clean-card p-3 rounded-full">
                <ChevronDown className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground font-medium tracking-wider">EXPLORE</span>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Content Sections */}
      {cinematicComplete && (
        <motion.div
          className="relative z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {/* Mission Section */}
          <section className="py-24 px-6 clean-card">
            <div className="container mx-auto text-center">
              <motion.h2
                className="text-5xl font-bold mb-12 brand-title text-foreground"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Racing Innovation Division
              </motion.h2>
              <motion.p
                className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                To forge the future of motorsport through precision engineering, cutting-edge technology, 
                and relentless pursuit of perfection. Cars 404 represents the apex of innovation 
                in competitive racing excellence.
              </motion.p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-24 px-6">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { 
                    icon: Zap, 
                    title: 'Aerodynamics', 
                    desc: 'Advanced computational fluid dynamics for optimal downforce and minimal drag coefficients.'
                  },
                  { 
                    icon: Shield, 
                    title: 'Materials', 
                    desc: 'Cutting-edge composite materials engineered for maximum strength-to-weight ratios.'
                  },
                  { 
                    icon: Cpu, 
                    title: 'Innovation', 
                    desc: 'Revolutionary design concepts pushing the boundaries of competitive racing technology.'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="team-card p-8 hover-lift"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <feature.icon className="w-12 h-12 text-primary mx-auto" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-24 px-6">
            <motion.div
              className="container mx-auto text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="clean-card p-16 rounded-2xl">
                <h2 className="text-4xl font-bold mb-8 brand-title text-foreground">
                  Join Cars 404
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                  Experience the cutting edge of racing technology. Witness precision engineering 
                  that defies conventional limitations.
                </p>
                <motion.button
                  className="gradient-bg text-white px-12 py-4 rounded-lg font-semibold text-lg hover-lift"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Explore Our Technology
                </motion.button>
              </div>
            </motion.div>
          </section>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
