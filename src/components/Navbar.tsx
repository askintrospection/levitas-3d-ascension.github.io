
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/team', label: 'Team' },
    { path: '/car', label: 'Car' },
    { path: '/sponsorship', label: 'Sponsorship' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'clean-card py-3' : 'py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Team Branding */}
        <Link to="/" className="flex items-center space-x-4 group">
          <motion.div 
            className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center hover-lift"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Car className="w-6 h-6 text-white" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold brand-title text-foreground">LEVITAS</span>
            <span className="text-sm text-muted-foreground font-medium tracking-wider">CARS 404</span>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative group"
            >
              <motion.div
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : 'text-foreground hover:text-primary hover:bg-secondary/50'
                }`}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-foreground rounded-full"
                    layoutId="activeTab"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <motion.div 
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
};
