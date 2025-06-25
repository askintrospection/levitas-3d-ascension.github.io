import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MinimalistBackground } from '../components/MinimalistBackground';
import { ChevronDown, Zap, Shield, Cpu, ExternalLink, Play } from 'lucide-react';

const Index = () => {
  return (
    <div className="relative min-h-screen cursor-custom">
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
              <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-3 mb-4 md:mb-6">
                <img 
                  src="/lovable-uploads/06c94ed1-7ecf-4770-a093-c653729d1e4f.png"
                  alt="Levitas Logo"
                  className="h-12 md:h-16 w-12 md:w-16 object-contain"
                />
                <img 
                  src="/lovable-uploads/47b143d5-ab87-412a-a2af-626641192bb5.png"
                  alt="Levitas Text"
                  className="h-8 md:h-12 object-contain"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 mb-4 md:mb-6">
                <img 
                  src="/lovable-uploads/d69fa71e-9825-443a-b765-e7bca5ff106d.png"
                  alt="STEM Racing Logo"
                  className="h-6 md:h-8 object-contain"
                />
                <div className="hidden md:block h-4 w-px bg-border"></div>
                <span className="text-lg md:text-xl text-muted-foreground">National Finals 2025</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold stable-text text-foreground">
                Engineering Excellence
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl body-light text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto stable-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Levitas represents the pinnacle of innovation in competitive racing technology. 
              We push boundaries through precision engineering and relentless pursuit of perfection.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="bg-card border border-border px-4 md:px-8 py-3 md:py-4 rounded-xl hover-panel">
                <span className="text-sm md:text-lg font-semibold text-primary stable-text">SPEED</span>
              </div>
              <div className="bg-card border border-border px-4 md:px-8 py-3 md:py-4 rounded-xl hover-panel">
                <span className="text-sm md:text-lg font-semibold text-primary stable-text">PRECISION</span>
              </div>
              <div className="bg-card border border-border px-4 md:px-8 py-3 md:py-4 rounded-xl hover-panel">
                <span className="text-sm md:text-lg font-semibold text-primary stable-text">VICTORY</span>
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
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground font-medium tracking-wider stable-text">EXPLORE</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="py-24 md:py-32 px-4 md:px-6 relative z-10">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-8 brand-title text-foreground stable-text">
                Our Mission
              </h2>
              <p className="text-xl body-light text-muted-foreground max-w-4xl mx-auto leading-relaxed stable-text">
                Our mission is to inspire and innovate through STEM. We aim to develop industry-relevant skills such as CAD modeling, computational fluid dynamics, finite element analysis, branding, and business management all within the structure of a competitive, team-oriented platform. With every project and prototype, we aim not only to compete, but to spark a lifelong passion for engineering excellence. All this includes not only focusing on achieving the trophy but the process of working in sustainable and meaningful ways.
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
        <section className="py-24 md:py-32 px-4 md:px-6 relative z-10">
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
                Join Team Levitas on our journey of speed, innovation, and sustainability—where every follower helps us grow a greener future. For every new Instagram follow, we plant one tree, turning digital support into real-world impact.
              </p>
              <motion.a
                href="https://www.instagram.com/levitas.racing/"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button inline-block"
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
