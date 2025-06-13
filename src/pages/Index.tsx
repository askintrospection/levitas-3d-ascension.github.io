import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CinematicIntro } from '../components/CinematicIntro';
import { MinimalistBackground } from '../components/MinimalistBackground';
import { ChevronDown, Zap, Shield, Cpu } from 'lucide-react';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleIntroComplete = () => {
    console.log('Intro completed, transitioning to main content');
    setShowIntro(false);
    setTimeout(() => setShowContent(true), 500);
  };

  return (
    <div className="relative min-h-screen">
      {/* Cinematic Intro */}
      <AnimatePresence>
        {showIntro && (
          <CinematicIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen relative"
          >
            <MinimalistBackground />
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 relative z-10">
              <motion.div
                className="text-center max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <img 
                      src="/levitas_logo.png" 
                      alt="Levitas Logo"
                      className="h-20 w-20 object-contain"
                      onError={(e) => {
                        console.log('Main page Levitas logo failed to load');
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = './levitas_logo.png';
                      }}
                    />
                    <h1 className="text-6xl levitas-font">
                      Levitas
                    </h1>
                  </div>
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <img 
                      src="/stemracing_logo.png" 
                      alt="STEM Racing Logo"
                      className="h-6 w-6 object-contain"
                      onError={(e) => {
                        console.log('Main page STEM Racing logo failed to load');
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = './stemracing_logo.png';
                      }}
                    />
                    <span className="text-xl stem-racing-font">STEM Racing</span>
                    <div className="h-4 w-px bg-border"></div>
                    <span className="text-xl text-muted-foreground">National Finals 2025</span>
                  </div>
                  <h2 className="text-5xl font-bold stable-text text-foreground">
                    Engineering Excellence
                  </h2>
                </motion.div>
                
                <motion.p 
                  className="text-xl body-light text-muted-foreground mb-12 max-w-3xl mx-auto stable-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Levitas represents the pinnacle of innovation in competitive racing technology. 
                  We push boundaries through precision engineering and relentless pursuit of perfection.
                </motion.p>

                <motion.div
                  className="flex flex-wrap justify-center gap-6 mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <div className="bg-card border border-border px-8 py-4 rounded-xl">
                    <span className="text-lg font-semibold text-primary stable-text">SPEED</span>
                  </div>
                  <div className="bg-card border border-border px-8 py-4 rounded-xl">
                    <span className="text-lg font-semibold text-primary stable-text">PRECISION</span>
                  </div>
                  <div className="bg-card border border-border px-8 py-4 rounded-xl">
                    <span className="text-lg font-semibold text-primary stable-text">VICTORY</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="bg-card border border-border p-3 rounded-full">
                    <ChevronDown className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium tracking-wider stable-text">EXPLORE</span>
                </motion.div>
              </motion.div>
            </section>

            {/* Mission Section */}
            <section className="py-32 px-6 relative z-10">
              <div className="container mx-auto">
                <motion.div
                  className="text-center mb-20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl font-bold mb-8 brand-title text-foreground stable-text">
                    Racing Innovation Division
                  </h2>
                  <p className="text-xl body-light text-muted-foreground max-w-4xl mx-auto leading-relaxed stable-text">
                    To forge the future of motorsport through precision engineering, cutting-edge technology, 
                    and relentless pursuit of perfection. Levitas represents the apex of innovation 
                    in competitive racing excellence.
                  </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
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
                      className="bg-card border border-border p-8 text-center rounded-xl"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="mb-6"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <feature.icon className="w-12 h-12 text-primary mx-auto" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground stable-text">{feature.title}</h3>
                      <p className="text-muted-foreground body-light stable-text">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-32 px-6 relative z-10">
              <motion.div
                className="container mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-card border border-border p-16 rounded-2xl max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold mb-8 brand-title text-foreground stable-text">
                    Join Levitas
                  </h2>
                  <p className="text-xl body-light text-muted-foreground mb-12 max-w-3xl mx-auto stable-text">
                    Experience the cutting edge of racing technology. Witness precision engineering 
                    that defies conventional limitations.
                  </p>
                  <motion.button
                    className="primary-button"
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
      </AnimatePresence>
    </div>
  );
};

export default Index;
