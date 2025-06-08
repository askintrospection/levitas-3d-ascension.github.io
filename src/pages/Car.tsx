
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
import { Car3D } from '../components/Car3D';

const Car = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6 neon-text">Our F1 Car</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineering excellence meets aerodynamic perfection in our championship-winning design.
          </p>
        </motion.div>

        {/* Interactive 3D Car Display */}
        <motion.div
          className="h-96 glass rounded-xl mb-16 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Canvas camera={{ position: [8, 3, 8], fov: 50 }}>
            <color attach="background" args={['#0a0a0f']} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
            
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
            
            <Suspense fallback={null}>
              <Car3D introComplete={true} />
            </Suspense>
            
            <OrbitControls 
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={3}
              maxDistance={15}
              autoRotate={true}
              autoRotateSpeed={1}
            />
          </Canvas>
        </motion.div>

        {/* Technical Specifications */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Weight', value: '65g', desc: 'Optimized for minimum weight' },
              { label: 'Length', value: '210mm', desc: 'Maximum regulation length' },
              { label: 'Drag Coefficient', value: '0.245', desc: 'Wind tunnel optimized' },
              { label: 'Top Speed', value: '78.5 km/h', desc: 'Track tested maximum' }
            ].map((spec, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl text-center hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-primary mb-2 neon-text">{spec.value}</div>
                <div className="text-lg font-semibold mb-2">{spec.label}</div>
                <div className="text-sm text-muted-foreground">{spec.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Design Features */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">Design Features</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  title: 'Advanced Aerodynamics',
                  desc: 'Our front wing design incorporates multi-element configuration for optimal downforce distribution while minimizing drag.'
                },
                {
                  title: 'Lightweight Construction', 
                  desc: 'Carbon fiber composite body with strategic weight distribution ensures maximum performance within regulation limits.'
                },
                {
                  title: 'Precision Engineering',
                  desc: 'CNC machined components and 3D printed prototypes guarantee dimensional accuracy and surface finish quality.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass p-6 rounded-xl"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-8">
              {[
                {
                  title: 'CFD Analysis',
                  desc: 'Computational Fluid Dynamics simulations optimize airflow patterns for maximum efficiency and minimal turbulence.'
                },
                {
                  title: 'Wind Tunnel Testing',
                  desc: 'Validated designs through extensive wind tunnel testing to ensure real-world performance matches simulation data.'
                },
                {
                  title: 'Performance Optimization',
                  desc: 'Iterative design process with continuous refinement based on track testing and competition feedback.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass p-6 rounded-xl"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Performance Stats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass-dark p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-8 neon-text">Championship Performance</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { metric: 'Track Records', value: '3', desc: 'Regional competition victories' },
                { metric: 'Fastest Lap', value: '1.24s', desc: '20-meter track record time' },
                { metric: 'Design Awards', value: '2', desc: 'Engineering excellence recognition' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2 neon-text-purple">{stat.value}</div>
                  <div className="text-lg font-semibold mb-1">{stat.metric}</div>
                  <div className="text-sm text-muted-foreground">{stat.desc}</div>
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
