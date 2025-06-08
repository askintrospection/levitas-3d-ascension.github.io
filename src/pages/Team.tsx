
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: "Team Member",
      role: "Engineer",
      image: "/placeholder.svg"
    },
    {
      name: "Team Member",
      role: "Designer", 
      image: "/placeholder.svg"
    },
    {
      name: "Team Member",
      role: "Manager",
      image: "/placeholder.svg"
    },
    {
      name: "Team Member",
      role: "Technician",
      image: "/placeholder.svg"
    },
    {
      name: "Team Member",
      role: "Analyst",
      image: "/placeholder.svg"
    },
    {
      name: "Team Member",
      role: "Developer",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6 brand-title text-foreground">Meet the Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The brilliant minds behind Cars 404 - where engineering excellence meets creative innovation.
          </p>
        </motion.div>

        {/* Team Member Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">?</span>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                
                <div className="gradient-bg text-white p-3 rounded-lg">
                  <p className="font-semibold text-sm">
                    CARS 404 | NATIONAL FINALS 2025
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Philosophy */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 brand-title text-foreground">Team Philosophy</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Every great achievement begins with a team that shares a common vision. 
              At Cars 404, we believe that diversity of thought, combined with technical 
              excellence, creates the perfect formula for innovation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="team-card p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Collaboration</h3>
                <p className="text-muted-foreground">
                  We foster an environment where every voice is heard and every idea 
                  has the potential to revolutionize our approach.
                </p>
              </div>
              
              <div className="team-card p-6">
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
          <div className="clean-card p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6 brand-title text-foreground">Join Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Are you passionate about engineering, innovation, and pushing the limits 
              of what's possible? We're always looking for talented individuals to join our team.
            </p>
            <motion.button
              className="gradient-bg text-white px-8 py-3 rounded-lg font-semibold hover-lift"
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
