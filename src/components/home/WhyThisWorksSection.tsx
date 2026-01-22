import { AnimatedSection, AnimatedBenefit } from '@/components/ui/AnimatedSection';
import { Shield, Wallet, Building, ListChecks } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Remote-first by design',
    description: 'This isn\'t adapted office work—it\'s built for remote from day one.',
  },
  {
    icon: Wallet,
    title: 'Paid preparation',
    description: 'Training and certification are compensated, not expected for free.',
  },
  {
    icon: Building,
    title: 'Established partners',
    description: 'We work with reputable brands, not fly-by-night operations.',
  },
  {
    icon: ListChecks,
    title: 'Clear structure',
    description: 'Expectations are transparent. No guessing, no surprises.',
  },
];

export function WhyThisWorksSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Sustainable Remote Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Why This Model Works
            </h2>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              We've designed a remote work model that's sustainable for the long term.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <AnimatedBenefit key={index} index={index}>
                  <div className="flex gap-4 py-2">
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </AnimatedBenefit>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
