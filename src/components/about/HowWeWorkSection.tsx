import { AnimatedSection, AnimatedBenefit } from '@/components/ui/AnimatedSection';
import { Shield, MessageSquare, Clock, Wallet, Heart } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: 'Trust over micromanagement',
    description: 'We hire adults and treat them like adults. No surveillance software, no time-tracking paranoia.',
  },
  {
    icon: MessageSquare,
    title: 'Clear expectations',
    description: "You'll always know what's expected. No guessing games, no moving goalposts.",
  },
  {
    icon: Wallet,
    title: 'Paid training',
    description: 'Your time is valuable from day one. Training and certification are compensated.',
  },
  {
    icon: Clock,
    title: 'Professional standards',
    description: "We maintain high standards because that's what our partners expect—and what you deserve.",
  },
  {
    icon: Heart,
    title: 'Respect for personal time',
    description: "When work ends, it ends. We don't blur the lines between work and life.",
  },
];

export function HowWeWorkSection() {
  return (
    <section 
      className="py-20 md:py-32 bg-surface"
      aria-labelledby="how-we-work-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span 
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
              aria-hidden="true"
            >
              Our Approach
            </span>
            <h2 
              id="how-we-work-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            >
              How We Actually Work
            </h2>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              No "we're a family" platitudes. Just clear principles that guide how we operate.
            </p>
          </AnimatedSection>

          <ul 
            className="space-y-4"
            aria-label="Five principles that guide our work"
          >
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <li key={index}>
                  <AnimatedBenefit index={index}>
                    <article className="flex gap-4 py-3">
                      <div 
                        className="flex-shrink-0 w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {principle.title}
                        </h3>
                        <p className="text-muted-foreground mt-1">
                          {principle.description}
                        </p>
                      </div>
                    </article>
                  </AnimatedBenefit>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
