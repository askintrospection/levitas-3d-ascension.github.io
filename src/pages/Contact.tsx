
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:team@levitas.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6 neon-text">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join our mission or have questions about our project? 
            We'd love to hear from you and discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="glass p-8 rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="sponsorship">Sponsorship Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="general">General Question</option>
                  <option value="media">Media Request</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your inquiry..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent py-3 rounded-lg font-semibold text-white hover-lift glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Quick Contact */}
            <div className="glass p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6 text-primary">Quick Contact</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Team Manager</h4>
                  <p className="text-muted-foreground">manager@levitas.in</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Sponsorship Inquiries</h4>
                  <p className="text-muted-foreground">sponsor@levitas.in</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Media Relations</h4>
                  <p className="text-muted-foreground">media@levitas.in</p>
                </div>
              </div>
            </div>

            {/* Competition Schedule */}
            <div className="glass p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6 text-primary">Upcoming Events</h3>
              <div className="space-y-4">
                {[
                  { event: 'National Finals', date: 'July 2025', location: 'Noida' },
                  { event: 'Internationals', date: 'September 2025', location: 'To be announced' }
                ].map((event, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold">{event.event}</h4>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                    <p className="text-sm text-muted-foreground">{event.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6 text-primary">Follow Our Journey</h3>
              <div className="space-y-3">
                {[
                  { 
                    platform: 'Instagram', 
                    handle: '@levitas.racing', 
                    desc: 'Behind the scenes content',
                    link: 'https://www.instagram.com/levitas.racing/'
                  },
                  { 
                    platform: 'LinkedIn', 
                    handle: 'Levitas F1 Team', 
                    desc: 'Professional updates',
                    link: 'https://www.linkedin.com/company/levitasf1/'
                  }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-background/50 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer block"
                    whileHover={{ x: 5 }}
                  >
                    <div>
                      <div className="font-semibold">{social.platform}</div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                    <div className="text-xs text-muted-foreground text-right">
                      {social.desc}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.section
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-dark p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6 neon-text">Ready to Join Our Mission?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're interested in sponsorship, collaboration, or simply want to learn 
              more about our innovative approach to F1 in Schools, we're excited to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-primary to-accent px-8 py-3 rounded-lg font-semibold text-white hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Meeting
              </motion.button>
              <motion.button
                className="glass border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Media Kit
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
