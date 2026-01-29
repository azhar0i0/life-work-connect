import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageTransition } from './PageTransition';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { SkipLink } from '@/components/ui/VisuallyHidden';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        {/* Skip link for keyboard users - first focusable element */}
        <SkipLink href="#main-content" />
        
        <Header />
        
        <main 
          id="main-content" 
          className="flex-1 pt-16 md:pt-20"
          role="main"
          tabIndex={-1}
        >
          {children}
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  );
}
