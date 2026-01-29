import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative min-h-[88vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-surface via-background to-background"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            {/* Overline */}
            <p
              className="text-sm tracking-wide text-muted-foreground mb-6"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
              }}
              aria-hidden="true"
            >
              Remote Work • Customer Support • Flexibility
            </p>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-foreground leading-[1.1]"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
              }}
            >
              Work That Fits Your Life —
              <br />
              <span className="text-primary">Not the Other Way Around</span>
            </h1>

            {/* Subheadline */}
            <p
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.25s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.25s',
              }}
            >
              Legitimate, paid remote call center opportunities designed for real people who want structure, flexibility, and balance.
            </p>

            {/* Supporting Micro Copy */}
            <p
              className="mt-4 text-base text-foreground/80 leading-relaxed"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.32s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.32s',
              }}
            >
              No commute. No dress code pressure. Paid training. Real support from a remote-first team.
            </p>

            {/* CTA Row */}
            <div
              className="mt-8 flex flex-wrap gap-4 items-center"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.4s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.4s',
              }}
              role="group"
              aria-label="Call to action buttons"
            >
              <Link
                to="/get-started"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold text-base rounded-3xl transition-all duration-150 ease-human hover:bg-transparent hover:text-primary border-2 border-primary press-effect focus-ring group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-150 ease-human group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-base text-foreground rounded-3xl transition-all duration-150 ease-human hover:text-primary focus-ring"
              >
                How It Works
              </Link>
            </div>
          </div>

          {/* Right: Abstract Editorial Shape - decorative */}
          <div
            className="hidden lg:flex justify-center items-center"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s',
            }}
            aria-hidden="true"
            role="presentation"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Primary shape - restrained geometric */}
              <div className="absolute inset-8 rounded-3xl bg-primary/8 border border-primary/10" />
              
              {/* Secondary accent shape */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-3xl bg-surface border border-border" />
              
              {/* Tertiary subtle element */}
              <div className="absolute bottom-12 left-0 w-24 h-24 rounded-3xl bg-primary/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
