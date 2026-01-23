import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Auto scroll to top on route change
 * Handles: direct links, programmatic navigation, browser back/forward
 */
export function useScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
}
