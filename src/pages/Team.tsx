
import { motion } from 'framer-motion';
import { MinimalistBackground } from '../components/MinimalistBackground';

const Team = () => {
  const teamMembers = [
    {
      name: "Lakshay Bhati",
      role: "Team Manager / Design Engineer",
      image: "/lakshya.png"
    },
    {
      name: "Kushagra Sethia",
      role: "Strategy & Resource Lead", 
      image: "/kushagra.png"
    },
    {
      name: "Ishani Verma",
      role: "Graphic Designer / Co-leader",
      image: "/ishani.png"
    },
    {
      name: "Aayam Bansal",
      role: "Manufacturing Engineer",
      image: "/aayam.png"
    },
    {
      name: "Naisha Kapoor",
      role: "Social Media Manager",
      image: "/naisha.png"
    },
    {
      name: "Aadit Arora",
      role: "Sponsorship Manager",
      image: "/aadit.png"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative">
      <MinimalistBackground />
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-8 brand-title text-foreground stable-text">Meet the Team</h1>
          <p className="text-xl body-light text-muted-foreground max-w-3xl mx-auto stable-text">
            The brilliant minds behind Levitas - where engineering excellence meets creative innovation.
          </p>
        </motion.div>

        {/* Team Member Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Photo Section */}
              <div className="aspect-square bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center p-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Info Section */}
              <div className="p-6 text-center">
                <p className="text-sm font-medium text-muted-foreground mb-2 stable-text">{member.role}</p>
                <h3 className="text-xl font-bold mb-4 text-foreground stable-text">{member.name}</h3>
                
                <div className="warm-gradient text-white p-4 rounded-lg">
                  <p className="font-semibold text-sm stable-text">
                    Levitas | National Finals 2025
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Philosophy */}
        <motion.section
          className="text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 brand-title text-foreground stable-text">Team Philosophy</h2>
          <div className="mb-12">
            <p className="text-lg body-light text-muted-foreground mb-8 max-w-4xl mx-auto stable-text">
              Every great achievement begins with a team that shares a common vision. 
              At Cars 404, we believe that diversity of thought, combined with technical 
              excellence, creates the perfect formula for innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="floating-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary stable-text">Collaboration</h3>
              <p className="text-muted-foreground body-light stable-text">
                We foster an environment where every voice is heard and every idea 
                has the potential to revolutionize our approach.
              </p>
            </div>
            
            <div className="floating-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary stable-text">Innovation</h3>
              <p className="text-muted-foreground body-light stable-text">
                Our team thrives on pushing boundaries and exploring uncharted 
                territories in automotive engineering.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Team;
