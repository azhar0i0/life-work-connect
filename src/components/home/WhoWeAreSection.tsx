import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function WhoWeAreSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Real opportunities, real support
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100} className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              We are a fully remote virtual call center offering flexible work-from-home 
              opportunities for individuals seeking real, legitimate employment. Our team 
              supports established, reputable brands through professional customer service—all from home.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Required certification and training are <span className="text-foreground font-medium">paid</span>, 
              so you can get started with confidence while maintaining balance, comfort, 
              and control over your workday.
            </p>
          </AnimatedSection>

          {/* Trust indicators */}
          <AnimatedSection delay={200} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: '100%', label: 'Remote' },
                { value: 'Paid', label: 'Training' },
                { value: 'Flex', label: 'Schedule' },
                { value: 'Real', label: 'Brands' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
