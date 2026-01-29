import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Helper to render with router context
function renderWithRouter(ui: React.ReactElement) {
  return render(
    <BrowserRouter>
      {ui}
    </BrowserRouter>
  );
}

describe('Accessibility Tests', () => {
  describe('Layout Components', () => {
    it('Header should have proper ARIA attributes', async () => {
      const { Header } = await import('@/components/layout/Header');
      const { container } = renderWithRouter(<Header />);
      
      // Should have nav with aria-label
      const nav = container.querySelector('nav[aria-label]');
      expect(nav).toBeInTheDocument();
      
      // Should have proper role
      const header = container.querySelector('header[role="banner"]');
      expect(header).toBeInTheDocument();
    });

    it('Footer should have proper semantic structure', async () => {
      const { Footer } = await import('@/components/layout/Footer');
      const { container } = renderWithRouter(<Footer />);
      
      const footer = container.querySelector('footer[role="contentinfo"]');
      expect(footer).toBeInTheDocument();
    });
  });

  describe('UI Components', () => {
    it('SkipLink should be keyboard accessible', async () => {
      const { SkipLink } = await import('@/components/ui/VisuallyHidden');
      const { getByText } = renderWithRouter(<SkipLink />);
      const skipLink = getByText('Skip to main content');
      expect(skipLink).toBeInTheDocument();
      expect(skipLink).toHaveAttribute('href', '#main-content');
    });

    it('ScrollToTop button should have proper aria-label', async () => {
      const { ScrollToTop } = await import('@/components/ui/ScrollToTop');
      const { getByRole } = renderWithRouter(<ScrollToTop />);
      const button = getByRole('button', { hidden: true });
      expect(button).toHaveAttribute('aria-label', 'Scroll to top of page');
    });
  });

  describe('Home Page Sections', () => {
    it('HeroSection should have proper heading hierarchy', async () => {
      const { HeroSection } = await import('@/components/home/HeroSection');
      const { container } = renderWithRouter(<HeroSection />);
      
      const section = container.querySelector('section[aria-labelledby]');
      expect(section).toBeInTheDocument();
      
      const h1 = container.querySelector('h1');
      expect(h1).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    it('should have proper navigation landmarks', async () => {
      const { Header } = await import('@/components/layout/Header');
      const { container } = renderWithRouter(<Header />);
      
      const menubar = container.querySelector('[role="menubar"]');
      expect(menubar).toBeInTheDocument();
    });

    it('SkipLink should have focus styles', async () => {
      const { SkipLink } = await import('@/components/ui/VisuallyHidden');
      const { getByText } = renderWithRouter(<SkipLink />);
      
      const skipLink = getByText('Skip to main content');
      expect(skipLink).toHaveClass('sr-only');
      expect(skipLink).toHaveClass('focus:not-sr-only');
    });
  });
});
