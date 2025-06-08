
import { motion } from 'framer-motion';
import { Rocket, Layout, LayoutDashboard } from 'lucide-react';

const Sponsorship = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6 neon-text">Partnership Opportunities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us in our mission to push the boundaries of engineering excellence. 
            Partner with Levitas and be part of the next generation of automotive innovation.
          </p>
        </motion.div>

        {/* Value Proposition */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: 'Innovation Showcase',
                desc: 'Associate your brand with cutting-edge engineering and technological innovation that shapes the future of motorsport.'
              },
              {
                icon: <LayoutDashboard className="w-8 h-8" />,
                title: 'Brand Visibility',
                desc: 'Gain exposure at regional and national competitions, plus digital presence across our marketing channels.'
              },
              {
                icon: <Layout className="w-8 h-8" />,
                title: 'Future Talent',
                desc: 'Connect with the next generation of engineers and innovators who will drive your industry forward.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="glass p-8 rounded-xl text-center hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-primary">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sponsorship Tiers */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">Sponsorship Packages</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                tier: 'Silver',
                price: '$500',
                features: [
                  'Logo on car body',
                  'Website acknowledgment',
                  'Social media mentions',
                  'Competition updates'
                ],
                color: 'from-slate-400 to-slate-600'
              },
              {
                tier: 'Gold',
                price: '$1,000',
                features: [
                  'Prominent logo placement',
                  'Portfolio feature',
                  'Press release inclusion',
                  'Team presentation mentions',
                  'Merchandise branding'
                ],
                color: 'from-yellow-400 to-yellow-600',
                popular: true
              },
              {
                tier: 'Platinum',
                price: '$2,500',
                features: [
                  'Primary sponsor status',
                  'Car naming rights',
                  'Exclusive partnership benefits',
                  'Direct team collaboration',
                  'Competition hospitality',
                  'Annual performance report'
                ],
                color: 'from-primary to-accent'
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                className={`glass p-8 rounded-xl relative hover-lift ${
                  tier.popular ? 'ring-2 ring-primary' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                    {tier.price}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-primary to-accent text-white glow'
                      : 'glass border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Choose {tier.tier}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Custom Partnerships */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-dark p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6 neon-text">Custom Partnership Solutions</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Every partnership is unique. We work closely with our sponsors to create 
              custom packages that align with your business objectives and marketing goals. 
              Let's discuss how we can create a winning partnership together.
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary to-accent px-8 py-3 rounded-lg font-semibold text-white hover-lift glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss Custom Partnership
            </motion.button>
          </div>
        </motion.section>

        {/* ROI Information */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">Partnership Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '10,000+', desc: 'Annual competition spectators' },
              { metric: '50,000+', desc: 'Digital reach across platforms' },
              { metric: '5+', desc: 'Competition events per season' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-primary mb-2 neon-text">{stat.metric}</div>
                <p className="text-muted-foreground">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Sponsorship;
