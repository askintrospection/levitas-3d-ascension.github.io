
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, Instagram, Linkedin } from 'lucide-react';
import { MinimalistBackground } from '../components/MinimalistBackground';

const Contact = () => {
  const handleSendMessage = () => {
    const subject = 'Message from Website';
    const body = 'Hello Team Levitas,%0D%0A%0D%0AI would like to get in touch with you.%0D%0A%0D%0AMessage:%0D%0A%0D%0A%0D%0AThank you!';
    window.location.href = `mailto:sponsorship@levitas.in?subject=${subject}&body=${body}`;
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
          <h1 className="text-6xl font-bold mb-6 brand-title text-foreground stable-text">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto stable-text">
            Get in touch with Team Levitas for inquiries, collaborations, and sponsorship opportunities.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Email */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="text-primary mb-4">
                <Mail className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground stable-text">Email</h3>
              <p className="text-muted-foreground stable-text">
                <a href="mailto:sponsorship@levitas.in" className="hover:underline">
                  sponsorship@levitas.in
                </a>
              </p>
            </div>

            {/* Location */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="text-primary mb-4">
                <MapPin className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground stable-text">Location</h3>
              <p className="text-muted-foreground stable-text">
                Gurgaon, India
              </p>
            </div>

            {/* Availability */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="text-primary mb-4">
                <Calendar className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground stable-text">Availability</h3>
              <p className="text-muted-foreground stable-text">
                Mon - Fri, 9am - 6pm
              </p>
            </div>
          </div>
        </motion.section>

        {/* Social Media Links */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 brand-title text-foreground stable-text">Connect With Us</h2>
          <div className="flex justify-center space-x-8">
            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/levitas.racing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Instagram className="w-8 h-8" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/company/levitas-racing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.section>

        {/* Call to Action Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            onClick={handleSendMessage}
            className="primary-button inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Send us a Message
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
