import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
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
          ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm'
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
            <img 
              src={logo} 
              alt="Nexalight Virtual Solutions" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul
            className="hidden md:flex items-center gap-8"
            role="menubar"
            aria-label="Main menu"
          >
            {navLinks.map((link) => (
              <li key={link.href} role="none">
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
                    <span 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" 
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            to="/get-started"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium text-sm transition-all duration-150 ease-human hover:bg-primary/90 press-effect focus-ring group rounded-3xl"
          >
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform duration-150 ease-human group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-150 focus-ring rounded-md"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-background border-b border-border overflow-hidden transition-all duration-300 ease-human',
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <ul className="container mx-auto px-6 py-4 space-y-2" role="menu">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
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
            </li>
          ))}
          <li role="none">
            <Link
              to="/get-started"
              role="menuitem"
              tabIndex={isMenuOpen ? 0 : -1}
              className="flex items-center justify-center gap-2 mt-4 w-full px-5 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-150 ease-human hover:bg-primary/90 press-effect focus-ring"
            >
              Get Started
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
