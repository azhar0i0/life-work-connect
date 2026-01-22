import { AnimatedSection, AnimatedTextBlock } from '@/components/ui/AnimatedSection';
import { Check, X } from 'lucide-react';

const goodFit = [
  'You value reliability and follow-through',
  'You communicate clearly and professionally',
  'You\'re self-motivated and can work independently',
  'You have a quiet workspace and reliable internet',
  'You want stable, long-term remote work',
];

const notFit = [
  'You\'re looking for a get-rich-quick scheme',
  'You want complete schedule freedom with no structure',
  'You\'re not comfortable with customer interactions',
  'You can\'t commit to the training process',
  'You expect to work without any oversight',
];

export function WhoThisIsForSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Is This Right For You?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Who This Is (And Isn't) For
            </h2>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in being upfront. Here's how to know if this is a good fit.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Good Fit */}
            <AnimatedTextBlock delay={100}>
              <div className="bg-card border border-border rounded-3xl p-8 h-full">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  Good fit if...
                </h3>
                <ul className="space-y-4">
                  {goodFit.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedTextBlock>

            {/* Not a Fit */}
            <AnimatedTextBlock delay={200}>
              <div className="bg-card border border-border rounded-3xl p-8 h-full">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </span>
                  Not a fit if...
                </h3>
                <ul className="space-y-4">
                  {notFit.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedTextBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
