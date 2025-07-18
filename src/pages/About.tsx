
import { motion } from 'framer-motion';
import { MinimalistBackground } from '../components/MinimalistBackground';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-6 relative">
      <MinimalistBackground />
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 brand-title text-foreground stable-text">About Levitas</h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto stable-text leading-relaxed">
            Team Levitas is a dynamic STEM racing team driven by a passion for innovation, precision engineering, and sustainable impact. Competing in the prestigious STEM Racing challenge, we design, analyze and manufacture high-performance miniature F1 cars using tools like CAD, CFD, and FEA. Our process is rooted in collaboration and experimentation, where every failure fuels our next breakthrough. Beyond engineering, we focus on branding, outreach, and environmental responsibility. At Levitas, we don't just build racecars, we build future-ready minds.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary stable-text">Our Philosophy</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 stable-text leading-relaxed">
              At Team Levitas, we believe that true innovation comes from a mix of curiosity, teamwork, and a willingness to learn from every mistake. We don't just build fast cars, we explore ideas, test boundaries, and grow as individuals along the way. Each team member brings something unique, and it's that blend of perspectives that helps us turn problems into creative solutions. We take pride in putting real thought and effort into every part of the process, from design sketches to final testing.
            </p>
            <p className="text-base md:text-lg text-muted-foreground stable-text leading-relaxed">
              But for us, it's about more than just winning races. We care deeply about the kind of impact we make on our environment, our community and each other. That's why we've committed to planting a tree for every new follower, turning support into something meaningful. Sustainability is at the core of everything we do - from eco-friendly design concepts to reducing our environmental footprint while maintaining peak performance. Levitas is about learning, growing, and building something bigger than ourselves, together.
            </p>
          </motion.div>

          <motion.div
            className="floating-card p-6 md:p-8 rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 brand-title text-foreground stable-text">What makes us different</h3>
            <ul className="space-y-3 md:space-y-4">
              {[
                'Every curve, cut, and contour on our car is driven by data and future-proof thinking and not just speed.',
                'We test in simulations, analyze failures, and redesign before even hitting the track. The race starts in our minds.',
                'We don\'t just go green, we grow green. One follower equals one tree, turning digital support into real change.',
                'Our car tells a story of progress. From early sketches to final builds, every stage reflects our learning journey.',
                'We treat mistakes like blueprints. Every misstep helps us innovate smarter and build better.'
              ].map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm md:text-base text-foreground stable-text leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 brand-title text-foreground stable-text">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Innovation', desc: 'Constantly pushing technological boundaries' },
              { title: 'Sustainability', desc: 'Building for a greener, more responsible future' },
              { title: 'Collaboration', desc: 'Working together toward common goals' }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="floating-card p-6 md:p-8 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary stable-text">{value.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground stable-text leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
