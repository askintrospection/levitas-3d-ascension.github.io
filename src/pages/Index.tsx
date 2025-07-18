
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MinimalistBackground } from '../components/MinimalistBackground';
import { ChevronDown, Zap, Shield, Cpu, ExternalLink, Play } from 'lucide-react';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen relative"
      >
        <MinimalistBackground />
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 pt-20 md:pt-24 relative z-10">
          <motion.div
            className="text-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="mb-6 md:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 md:mb-6">
                <img 
                  src="/lovable-uploads/a8441236-826e-48c8-83de-e6b6a1f96819.png"
                  alt="Levitas Logo"
                  className="h-10 sm:h-12 md:h-16 w-10 sm:w-12 md:w-16 object-contain"
                />
                <img 
                  src="/lovable-uploads/07a3e2f4-830d-4ac2-a1a7-1e609fbd3949.png"
                  alt="Levitas Text"
                  className="h-6 sm:h-8 md:h-12 object-contain"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4 md:mb-6">
                <img 
                  src="/lovable-uploads/dbddc9d8-1ff0-461e-87aa-94369873ec78.png"
                  alt="STEM Racing Logo"
                  className="h-8 sm:h-10 md:h-12 object-contain"
                />
                <div className="hidden sm:block h-4 w-px bg-border"></div>
                <span className="text-base sm:text-lg md:text-xl text-muted-foreground">National Finals 2025</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold stable-text text-foreground">
                Engineering Excellence
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl body-light text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto stable-text leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Levitas represents the pinnacle of innovation in competitive racing technology. 
              We push boundaries through precision engineering and relentless pursuit of perfection.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-6 mb-12 md:mb-16 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="bg-card border border-border px-3 sm:px-4 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl hover-panel">
                <span className="text-xs sm:text-sm md:text-lg font-semibold text-primary stable-text">SPEED</span>
              </div>
              <div className="bg-card border border-border px-3 sm:px-4 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl hover-panel">
                <span className="text-xs sm:text-sm md:text-lg font-semibold text-primary stable-text">PRECISION</span>
              </div>
              <div className="bg-card border border-border px-3 sm:px-4 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl hover-panel">
                <span className="text-xs sm:text-sm md:text-lg font-semibold text-primary stable-text">VICTORY</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="bg-card border border-border p-2 md:p-3 rounded-full hover-panel">
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground font-medium tracking-wider stable-text">EXPLORE</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="py-16 sm:py-20 md:py-32 px-4 md:px-6 relative z-10">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-12 md:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 brand-title text-foreground stable-text">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg md:text-xl body-light text-muted-foreground max-w-4xl mx-auto leading-relaxed stable-text">
                Our mission is to inspire and innovate through STEM. We aim to develop industry-relevant skills such as CAD modeling, computational fluid dynamics, finite element analysis, branding, and business management all within the structure of a competitive, team-oriented platform. With every project and prototype, we aim not only to compete, but to spark a lifelong passion for engineering excellence. All this includes not only focusing on achieving the trophy but the process of working in sustainable and meaningful ways.
              </p>
            </motion.div>

            {/* Our Values Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 max-w-6xl mx-auto">
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
                  title: 'Sustainability', 
                  desc: 'Revolutionary eco-friendly design concepts reducing environmental impact while maintaining peak performance.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-card border border-border p-6 md:p-8 text-center rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="mb-4 md:mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto" />
                  </motion.div>
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-foreground stable-text">{feature.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground body-light stable-text leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-20 md:py-32 px-4 md:px-6 relative z-10">
          <motion.div
            className="container mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border p-8 md:p-16 rounded-2xl max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 brand-title text-foreground stable-text">
                Join Levitas
              </h2>
              <p className="text-base sm:text-lg md:text-xl body-light text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto stable-text leading-relaxed">
                Join Team Levitas on our journey of speed, innovation, and sustainability—where every follower helps us grow a greener future. For every new Instagram follow, we plant one tree, turning digital support into real-world impact.
              </p>
              <motion.a
                href="https://www.instagram.com/levitas.racing/"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button inline-block text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Follow @levitas.racing
              </motion.a>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
};

export default Index;
