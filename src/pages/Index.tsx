
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scene3D } from '../components/Scene3D';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 3000);
    const timer2 = setTimeout(() => setIntroComplete(true), 6000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Scene3D />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
            LEVITAS
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            F1 in Schools Team • Defying Gravity • Engineering Excellence
          </p>
          <motion.div
            className="text-lg text-primary neon-text-purple"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            "Lightness • Innovation • Victory"
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        {introComplete && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Content sections */}
      {introComplete && (
        <motion.div
          className="relative z-20 bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {/* Mission Section */}
          <section className="py-20 px-6">
            <div className="container mx-auto text-center">
              <motion.h2
                className="text-4xl font-bold mb-8 neon-text"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Our Mission
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                To engineer the future of motorsport through innovative design, cutting-edge technology, 
                and the relentless pursuit of speed. Levitas represents the pinnacle of student engineering 
                excellence in the F1 in Schools competition.
              </motion.p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20 px-6 bg-card/50">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Aerodynamics', desc: 'Cutting-edge CFD analysis for optimal downforce' },
                  { title: 'Materials', desc: 'Advanced composite materials for maximum strength' },
                  { title: 'Innovation', desc: 'Revolutionary design concepts pushing boundaries' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="glass p-6 rounded-xl hover-lift"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
