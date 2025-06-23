
import { motion } from 'framer-motion';
import { MinimalistBackground } from '../components/MinimalistBackground';
import { ExternalLink, Zap, Shield, Cpu } from 'lucide-react';

const Car = () => {
  return (
    <div className="min-h-screen pt-16 md:pt-24 pb-12 px-4 md:px-6 relative">
      <MinimalistBackground />
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/13539e01-a337-4dff-9eea-5b0d04909982.png"
              alt="Levitas"
              className="h-12 md:h-16 object-contain"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 brand-title text-foreground stable-text">Our F1 Car</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto stable-text">
            Engineering excellence meets aerodynamic perfection in our championship-winning design.
          </p>
        </motion.div>

        {/* Car Image Display */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-background to-muted/20 rounded-2xl md:rounded-3xl p-4 md:p-8 overflow-hidden">
              <div className="relative aspect-video w-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl md:rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-16 h-16 md:w-24 md:h-24 text-primary mx-auto mb-4" />
                  <p className="text-lg md:text-xl font-semibold text-foreground stable-text">Levitas F1 Racing Car</p>
                  <p className="text-sm md:text-base text-muted-foreground mt-2 stable-text">Championship Winning Design</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.section
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 brand-title text-foreground stable-text">Technical Specifications</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: 'Weight', value: '65g', desc: 'Optimized for minimum weight' },
              { label: 'Length', value: '210mm', desc: 'Maximum regulation length' },
              { label: 'Drag Coefficient', value: '0.245', desc: 'Wind tunnel optimized' },
              { label: 'Top Speed', value: '78.5 km/h', desc: 'Track tested maximum' }
            ].map((spec, index) => (
              <motion.div
                key={index}
                className="floating-card p-4 md:p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-xl md:text-3xl font-bold text-primary mb-2 brand-title stable-text">{spec.value}</div>
                <div className="text-sm md:text-lg font-semibold mb-2 stable-text">{spec.label}</div>
                <div className="text-xs md:text-sm text-muted-foreground stable-text">{spec.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 brand-title text-foreground stable-text">Design Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Zap,
                title: 'Advanced Aerodynamics',
                desc: 'Multi-element wing configuration for optimal downforce distribution while minimizing drag.'
              },
              {
                icon: Shield,
                title: 'Lightweight Construction', 
                desc: 'Carbon fiber composite body with strategic weight distribution for maximum performance.'
              },
              {
                icon: Cpu,
                title: 'Precision Engineering',
                desc: 'CNC machined components and 3D printed prototypes guarantee dimensional accuracy.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="floating-card p-4 md:p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <feature.icon className="w-8 h-8 md:w-12 md:h-12 text-primary mx-auto" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-primary stable-text">{feature.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground stable-text">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="floating-card p-6 md:p-12 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 brand-title text-foreground stable-text">Championship Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { metric: 'Track Records', value: '3', desc: 'Regional competition victories' },
                { metric: 'Fastest Lap', value: '1.24s', desc: '20-meter track record time' },
                { metric: 'Design Awards', value: '2', desc: 'Engineering excellence recognition' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2 brand-title stable-text">{stat.value}</div>
                  <div className="text-base md:text-lg font-semibold mb-1 stable-text">{stat.metric}</div>
                  <div className="text-sm text-muted-foreground stable-text">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Car;
