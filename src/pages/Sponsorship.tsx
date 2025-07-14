
import { motion } from 'framer-motion';
import { Check, Rocket, Layout, LayoutDashboard } from 'lucide-react';
import { MinimalistBackground } from '../components/MinimalistBackground';

const Sponsorship = () => {
  const handleGetStarted = () => {
    window.location.href = 'mailto:sponsorship@levitas.in?subject=Sponsorship Inquiry&body=Hello Team Levitas,%0D%0A%0D%0AI am interested in learning more about your sponsorship opportunities.%0D%0A%0D%0APlease provide more details.%0D%0A%0D%0AThank you!';
  };

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
          <h1 className="text-6xl font-bold mb-6 brand-title text-foreground stable-text">Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto stable-text">
            Join us in our mission to push the boundaries of engineering excellence. 
            Partner with Levitas and be part of the next generation of automotive innovation.
          </p>
        </motion.div>

        {/* Sponsorship Tiers - New Format */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                tier: 'Silver Plan',
                price: '$350',
                period: '/season',
                features: [
                  'Logo on car body',
                  'Website acknowledgment',
                  'Social media mentions',
                  'Competition updates',
                  'Basic security features'
                ],
                buttonText: 'Get Started',
                buttonStyle: 'border border-border text-foreground hover:bg-secondary'
              },
              {
                tier: 'Gold Plan',
                price: '$550',
                period: '/season',
                features: [
                  'Prominent logo placement',
                  'Portfolio feature',
                  'Press release inclusion',
                  'Team presentation mentions',
                  'Merchandise branding',
                  'Advanced security features'
                ],
                buttonText: 'Get Started',
                buttonStyle: 'warm-gradient text-white',
                popular: true
              },
              {
                tier: 'Platinum Plan',
                price: '$800',
                period: '/season',
                features: [
                  'Primary sponsor status',
                  'Car naming rights',
                  'Exclusive partnership benefits',
                  'Direct team collaboration',
                  'Competition hospitality',
                  'Advanced security features'
                ],
                buttonText: 'Get Started',
                buttonStyle: 'border border-border text-foreground hover:bg-secondary'
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                className={`bg-card border border-border rounded-2xl p-8 relative ${
                  tier.popular ? 'ring-2 ring-primary border-primary/20' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Standard Plan
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-muted-foreground mb-4 stable-text">{tier.tier}</h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-foreground stable-text">{tier.price}</span>
                    <span className="text-muted-foreground ml-2 stable-text">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground stable-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  onClick={handleGetStarted}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${tier.buttonStyle}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tier.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Value Proposition */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 brand-title text-foreground stable-text">Why Partner With Us?</h2>
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
                className="bg-card border border-border rounded-xl p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-primary stable-text">{benefit.title}</h3>
                <p className="text-muted-foreground stable-text">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Partnership Impact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 brand-title text-foreground stable-text">Partnership Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { metric: '10,000+', desc: 'Annual competition spectators' },
              { metric: '50,000+', desc: 'Digital reach across platforms' },
              { metric: '5+', desc: 'Competition events per season' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-primary mb-2 brand-title stable-text">{stat.metric}</div>
                <p className="text-muted-foreground stable-text">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Sponsorship;
