
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled ? 'floating-card py-3 mx-4 mt-4 rounded-xl' : 'py-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Team Branding */}
          <Link to="/" className="flex items-center space-x-6 group">
            <motion.div 
              className="w-12 h-12 warm-gradient rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Car className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/a8441236-826e-48c8-83de-e6b6a1f96819.png"
                  alt="Levitas Logo"
                  className="h-8 w-8 object-contain"
                />
                <img 
                  src="/lovable-uploads/07a3e2f4-830d-4ac2-a1a7-1e609fbd3949.png"
                  alt="Levitas Text"
                  className="h-6 object-contain"
                />
              </div>
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/dbddc9d8-1ff0-461e-87aa-94369873ec78.png"
                  alt="STEM Racing Logo"
                  className="h-16 object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                <motion.div
                  className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg stable-text ${
                    location.pathname === item.path
                      ? 'bg-primary text-primary-foreground font-semibold'
                      : 'text-foreground hover:text-primary hover:bg-secondary/50'
                  }`}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
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
            <button 
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/50 stable-text"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
          >
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-card border-l border-border shadow-xl"
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center space-x-2">
                    <img 
                      src="/lovable-uploads/a8441236-826e-48c8-83de-e6b6a1f96819.png"
                      alt="Levitas Logo"
                      className="h-8 w-8 object-contain"
                    />
                    <img 
                      src="/lovable-uploads/07a3e2f4-830d-4ac2-a1a7-1e609fbd3949.png"
                      alt="Levitas Text"
                      className="h-6 object-contain"
                    />
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </button>
                </div>
                
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        location.pathname === item.path
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:text-primary hover:bg-secondary/50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
