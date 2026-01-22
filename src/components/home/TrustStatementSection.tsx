import { AnimatedSection, AnimatedTextBlock } from '@/components/ui/AnimatedSection';

export function TrustStatementSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Our Promise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Built for Real People, Not Hustle Culture
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedTextBlock delay={100}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                We don't believe in burnout, vague promises, or "work from anywhere" claims 
                that fall apart later.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                Nexalight Virtual Solutions offers structured, professional remote work with 
                paid training, clear expectations, and real support.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={300}>
              <div className="pt-8 border-t border-border mt-8">
                <p className="text-lg md:text-xl text-foreground font-medium text-center">
                  This isn't gig work.<br />
                  This isn't a side hustle.<br />
                  <span className="text-primary">This is legitimate remote employment.</span>
                </p>
              </div>
            </AnimatedTextBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
