import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PawPrint, Phone } from 'lucide-react';
import { navigation, clinicInfo } from '@/data/siteConfig';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

    const isHome = location.pathname === '/';
    const showBackground = scrolled || !isHome;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showBackground
                    ? 'py-2 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)] border-b border-white/20'
                    : 'py-4 bg-transparent'
                }`}
        >
      <div className="container-main">
        <nav className="flex items-center justify-between transition-all duration-500 h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-text-dark font-[var(--font-heading)]">
                {clinicInfo.name}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-6 py-2.5 text-[15px] font-medium transition-colors duration-300 group"
                >
                  <span className={`${isActive ? 'text-primary' : 'text-text-muted group-hover:text-primary'}`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -inset-0.5 bg-bg-pink-soft rounded-full -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute bottom-1 left-5 right-5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full opacity-0 group-hover:opacity-100" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-[15px] font-semibold text-text-dark hover:text-primary transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-bg-pink-soft flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="hidden xl:inline">{clinicInfo.phone}</span>
            </a>
            <Button to="/book" size="sm">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-text-dark hover:bg-bg-pink-soft transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border-soft overflow-hidden rounded-b-3xl"
          >
            <div className="container-main py-6 flex flex-col gap-2">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-6 py-3.5 rounded-2xl text-base font-semibold transition-all ${location.pathname === item.path
                        ? 'text-primary bg-bg-pink-soft'
                        : 'text-text-muted hover:text-primary hover:bg-bg-pink-soft/50'
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6 mt-4 border-t border-border-soft flex flex-col gap-4">
                <a
                  href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 px-6 py-3 text-base font-bold text-text-dark bg-bg-blush rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  {clinicInfo.phone}
                </a>
                <Button to="/book" size="lg" className="w-full h-14">
                  Book Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
