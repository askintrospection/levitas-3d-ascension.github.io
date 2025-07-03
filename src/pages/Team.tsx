
import { motion } from 'framer-motion';
import { MinimalistBackground } from '../components/MinimalistBackground';

const Team = () => {
  const teamMembers = [
    {
      name: "Lakshay Bhati",
      role: "Team Manager / Design Engineer",
      image: "/lovable-uploads/74c4ad86-ea91-4a26-a9fc-426af8fc529c.png"
    },
    {
      name: "Kushagra Sethia",
      role: "Strategy & Resource Lead", 
      image: "/lovable-uploads/552358ef-f370-416e-a014-a40ca7cbfb6e.png"
    },
    {
      name: "Ishani Verma",
      role: "Graphic Designer / Co-leader",
      image: "/lovable-uploads/391ed31a-4fb4-408d-a9ba-8c4203c3116e.png"
    },
    {
      name: "Aayam Bansal",
      role: "Manufacturing Engineer",
      image: "/lovable-uploads/ef5d9b82-fef1-498b-8e24-9b1a46952c44.png"
    },
    {
      name: "Naisha Kapoor",
      role: "Social Media Manager",
      image: "/lovable-uploads/bad0e490-2aae-4d5b-94d3-a3ecf27ab964.png"
    },
    {
      name: "Aadit Arora",
      role: "Sponsorship Manager",
      image: "/lovable-uploads/e9e72990-d881-4602-91cf-e1bbcdc973a0.png"
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

        {/* Team Manager Box */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-card border border-border px-8 py-4 rounded-xl">
            <p className="text-lg font-semibold text-primary stable-text">Team Manager - Akshar Yadav</p>
          </div>
        </motion.div>

        {/* Team Member Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
            >
              {/* Photo Section */}
              <div className="aspect-square bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center p-4">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-4xl font-bold text-muted-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Info Section */}
              <div className="p-6 text-center">
                <p className="text-sm font-medium text-muted-foreground mb-2 stable-text">{member.role}</p>
                <h3 className="text-xl font-bold mb-4 text-foreground stable-text">{member.name}</h3>
                
                <div className="warm-gradient text-white p-4 rounded-lg flex items-center justify-center space-x-3">
                  <img 
                    src="/lovable-uploads/a8441236-826e-48c8-83de-e6b6a1f96819.png"
                    alt="Levitas Logo"
                    className="h-6 w-6 object-contain"
                  />
                  <img 
                    src="/lovable-uploads/07a3e2f4-830d-4ac2-a1a7-1e609fbd3949.png"
                    alt="Levitas Text"
                    className="h-4 object-contain"
                  />
                  <div className="h-4 w-px bg-white/50"></div>
                  <p className="font-semibold text-sm stable-text">
                    National Finals 2025
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
              excellence and sustainable practices, creates the perfect formula for innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

            <div className="floating-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary stable-text">Sustainability</h3>
              <p className="text-muted-foreground body-light stable-text">
                We are committed to developing eco-friendly solutions that protect 
                our environment while maintaining peak performance standards.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Team;
