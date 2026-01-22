import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay for cinematic entrance
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Ambient background with subtle gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-surface via-background to-background"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* Subtle decorative element - single, intentional */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline - mask reveal effect via translateY */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
            }}
          >
            Work From Home—
            <span className="text-primary">On Your Terms</span>
          </h1>

          {/* Subheading - appears 120ms after headline */}
          <p
            className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.22s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.22s',
            }}
          >
            Flexible, legitimate remote call center opportunities that fit real life.
          </p>

          {/* CTA - appears last with scale effect */}
          <div
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'scale(1)' : 'scale(0.96)',
              transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.34s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.34s',
            }}
          >
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 mt-8 md:mt-10 px-8 py-4 bg-primary text-primary-foreground font-semibold text-base md:text-lg rounded-3xl transition-all duration-150 ease-human hover:bg-transparent hover:text-primary border-2 border-primary press-effect focus-ring group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 transition-transform duration-150 ease-human group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{
          opacity: isLoaded ? 0.5 : 0,
          transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.8s',
        }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
