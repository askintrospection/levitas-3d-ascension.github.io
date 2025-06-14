import { motion } from 'framer-motion';
import { MinimalistBackground } from '../components/MinimalistBackground';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative">
      <MinimalistBackground />
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6 brand-title text-foreground stable-text">About Cars 404</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto stable-text">
            Named after the relentless pursuit of solutions to impossible challenges, Cars 404 embodies our 
            philosophy of defying conventional limits through innovative engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary stable-text">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground mb-6 stable-text">
              At Cars 404, we believe that the future of motorsport lies not just in speed, 
              but in the harmony of aerodynamics, materials science, and human ingenuity. 
              Our team pushes the boundaries of what's possible in F1 in Schools competition.
            </p>
            <p className="text-lg text-muted-foreground stable-text">
              Every curve of our car, every line of code in our simulations, and every 
              strategic decision is guided by our commitment to excellence and innovation.
            </p>
          </motion.div>

          <motion.div
            className="floating-card p-8 rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 brand-title text-foreground stable-text">Competition Goals</h3>
            <ul className="space-y-4">
              {[
                'Fastest car design optimization',
                'Outstanding engineering portfolio',
                'Professional presentation excellence',
                'Innovative marketing strategy',
                'Sustainable engineering practices'
              ].map((goal, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-foreground stable-text">{goal}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 brand-title text-foreground stable-text">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {[
              { phase: 'Design Phase', desc: 'Advanced CAD modeling and aerodynamic optimization' },
              { phase: 'Manufacturing', desc: 'Precision machining and composite construction' },
              { phase: 'Testing', desc: 'Wind tunnel validation and track testing' },
              { phase: 'Competition', desc: 'Regional and national championship events' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center mb-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-1">
                  <div className={`floating-card p-6 rounded-xl ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <h3 className="text-xl font-bold text-primary mb-2 stable-text">{item.phase}</h3>
                    <p className="text-muted-foreground stable-text">{item.desc}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full mx-4"></div>
                <div className="flex-1">
                  {index % 2 !== 0 && (
                    <div className="floating-card p-6 rounded-xl mr-8">
                      <h3 className="text-xl font-bold text-primary mb-2 stable-text">{item.phase}</h3>
                      <p className="text-muted-foreground stable-text">{item.desc}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 brand-title text-foreground stable-text">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: 'Constantly pushing technological boundaries' },
              { title: 'Excellence', desc: 'Striving for perfection in every detail' },
              { title: 'Collaboration', desc: 'Working together toward common goals' }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="floating-card p-8 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary stable-text">{value.title}</h3>
                <p className="text-muted-foreground stable-text">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
