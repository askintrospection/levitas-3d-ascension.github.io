
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, Volume2, VolumeX } from 'lucide-react';

interface NavbarProps {
  onToggleAudio?: () => void;
  isMuted?: boolean;
}

export const Navbar = ({ onToggleAudio, isMuted }: NavbarProps) => {
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
                src="/levitas_logo.png" 
                alt="Levitas Logo"
                className="h-8 w-8 object-contain"
                onError={(e) => {
                  console.log('Navbar Levitas logo failed to load from /levitas_logo.png');
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = './levitas_logo.png';
                }}
                onLoad={() => console.log('Navbar Levitas logo loaded successfully')}
              />
              <span className="text-xl levitas-font">Levitas</span>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="flex items-center space-x-2">
              <img 
                src="/stemracing_logo.png" 
                alt="STEM Racing Logo"
                className="h-6 w-6 object-contain"
                onError={(e) => {
                  console.log('Navbar STEM Racing logo failed to load from /stemracing_logo.png');
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = './stemracing_logo.png';
                }}
                onLoad={() => console.log('Navbar STEM Racing logo loaded successfully')}
              />
              <span className="text-lg stem-racing-font">STEM Racing</span>
            </div>
          </div>
        </Link>

        {/* Navigation */}
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
          
          {/* Audio Toggle */}
          {onToggleAudio && (
            <motion.button
              onClick={onToggleAudio}
              className="ml-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors stable-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </motion.button>
          )}
        </div>

        {/* Mobile menu button */}
        <motion.div 
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/50 stable-text">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
};
