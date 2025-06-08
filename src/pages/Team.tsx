
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6 neon-text">Meet the Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The brilliant minds behind Levitas - where engineering excellence meets creative innovation.
          </p>
        </motion.div>

        {/* Team Member Cards - Coming Soon */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }, (_, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-xl text-center hover-lift"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">?</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-primary">Team Member</h3>
              <p className="text-muted-foreground mb-4">Role & Specialization</p>
              
              <div className="bg-accent/20 p-4 rounded-lg">
                <p className="text-accent font-semibold neon-text-purple">
                  COMING SOON
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Philosophy */}
        <motion.section
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 neon-text">Team Philosophy</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Every great achievement begins with a team that shares a common vision. 
              At Levitas, we believe that diversity of thought, combined with technical 
              excellence, creates the perfect formula for innovation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-primary">Collaboration</h3>
                <p className="text-muted-foreground">
                  We foster an environment where every voice is heard and every idea 
                  has the potential to revolutionize our approach.
                </p>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-primary">Innovation</h3>
                <p className="text-muted-foreground">
                  Our team thrives on pushing boundaries and exploring uncharted 
                  territories in automotive engineering.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Join Us Section */}
        <motion.section
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="glass-dark p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6 neon-text">Join Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Are you passionate about engineering, innovation, and pushing the limits 
              of what's possible? We're always looking for talented individuals to join our team.
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary to-accent px-8 py-3 rounded-lg font-semibold text-white hover-lift glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Team;
