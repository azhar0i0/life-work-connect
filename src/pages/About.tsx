import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedTextBlock } from '@/components/ui/AnimatedSection';
import { HowWeWorkSection } from '@/components/about/HowWeWorkSection';
import { WhoThisIsForSection } from '@/components/about/WhoThisIsForSection';

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              About Nexalight Virtual Solutions
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe work should support your life—not compete with it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <AnimatedTextBlock>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                At Nexalight Virtual Solutions, we partner with established companies that need 
                reliable, professional customer service support. Our remote agents help customers 
                with care, patience, and professionalism while enjoying the flexibility of working from home.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={100}>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                We are remote-first by design. That means no office politics, no rigid 
                schedules, and no unnecessary pressure. We focus on trust, performance, 
                and balance—because when people are supported, they do their best work.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={200}>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Whether you're a parent, caregiver, student, or someone simply ready 
                for a better work-life balance, Nexalight Virtual Solutions creates 
                opportunities that work with your reality.
              </p>
            </AnimatedTextBlock>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <HowWeWorkSection />

      {/* Who This Is For */}
      <WhoThisIsForSection />
    </Layout>
  );
}
