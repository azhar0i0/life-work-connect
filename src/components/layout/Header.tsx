import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useEscapeKey } from '@/hooks/useFocusTrap';
import logo from '@/assets/logo.png';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/why-work-with-us', label: 'Why Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  
  // Close menu on Escape key
  useEscapeKey(closeMenu, isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-human',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <div className="container mx-auto px-6">
        <nav
          className="flex items-center justify-between h-16 md:h-20"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="hover-lift focus-ring rounded-md"
            aria-label="Nexalight - Go to homepage"
          >
            <motion.img 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={logo} 
              alt="Nexalight Virtual Solutions" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
            role="menubar"
            aria-label="Main menu"
          >
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.href} 
                role="none"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  to={link.href}
                  role="menuitem"
                  aria-current={location.pathname === link.href ? 'page' : undefined}
                  className={cn(
                    'relative text-sm font-medium transition-colors duration-150 ease-human focus-ring rounded-sm py-1',
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                  {location.pathname === link.href && (
                    <motion.span 
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" 
                      aria-hidden="true"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/apply"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 press-effect focus-ring group rounded-full"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 transition-transform duration-150 ease-human group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-150 focus-ring rounded-md"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
            aria-label="Mobile navigation"
          >
            <motion.ul 
              className="container mx-auto px-6 py-4 space-y-2" 
              role="menu"
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05 }
                },
                closed: {}
              }}
            >
              {navLinks.map((link) => (
                <motion.li 
                  key={link.href} 
                  role="none"
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -10 }
                  }}
                >
                  <Link
                    to={link.href}
                    role="menuitem"
                    tabIndex={isMenuOpen ? 0 : -1}
                    aria-current={location.pathname === link.href ? 'page' : undefined}
                    className={cn(
                      'block py-3 text-base font-medium transition-colors duration-150 ease-human focus-ring rounded-md px-2',
                      location.pathname === link.href
                        ? 'text-primary bg-primary/5'
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li 
                role="none"
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -10 }
                }}
              >
                <Link
                  to="/apply"
                  role="menuitem"
                  tabIndex={isMenuOpen ? 0 : -1}
                  className="flex items-center justify-center gap-2 mt-4 w-full px-5 py-3 bg-primary text-primary-foreground font-medium rounded-full transition-all duration-150 ease-human hover:bg-primary/90 press-effect focus-ring"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
