import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedBenefit, AnimatedTextBlock } from '@/components/ui/AnimatedSection';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, GraduationCap, Clock, Car, Heart, Building2, Shield, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: Home,
    title: '100% Remote',
    description: 'Work from anywhere with a reliable internet connection. Your home is your office.',
  },
  {
    icon: GraduationCap,
    title: 'Paid Certification & Training',
    description: 'Get paid while you learn. No upfront costs, no hidden fees.',
  },
  {
    icon: Clock,
    title: 'Flexible Schedules',
    description: 'Work around your life, not the other way around. Choose hours that fit your reality.',
  },
  {
    icon: Car,
    title: 'No Commute, No Dress Code',
    description: 'Skip the traffic, skip the wardrobe stress. Work comfortably on your terms.',
  },
  {
    icon: Heart,
    title: 'Supportive Environment',
    description: 'Remote-first culture built on trust, not micromanagement. We support you to succeed.',
  },
  {
    icon: Building2,
    title: 'Real Work with Established Brands',
    description: 'Represent reputable companies. Legitimate work you can be proud of.',
  },
];

const stabilityPoints = [
  {
    icon: Shield,
    title: 'Established Partners',
    description: 'We work with reputable brands that have been in business for years—not fly-by-night operations.',
  },
  {
    icon: GraduationCap,
    title: 'Compensated Training',
    description: 'Your investment of time is valued from day one. Training isn\'t a gamble—it\'s paid.',
  },
  {
    icon: TrendingUp,
    title: 'Consistent Work',
    description: 'This isn\'t gig work with unpredictable hours. We offer structured, reliable opportunities.',
  },
];

const longTermFit = [
  'People who value stability over hustle',
  'Those who want to grow with a company, not just pass through',
  'Professionals who appreciate clear expectations',
  'Individuals who thrive with autonomy and trust',
];

export default function WhyWorkWithUs() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Why Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Why Nexalight Virtual Solutions?
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer more than a job—we offer a better way to work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Difference - Benefits Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              The Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why This Isn't Gig Work
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Real benefits, real structure, real support—not empty promises.
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedBenefit key={index} index={index}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </AnimatedBenefit>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stability & Legitimacy */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Stability
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Stability & Legitimacy
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                We understand the skepticism around remote work. Here's why we're different.
              </p>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-3">
              {stabilityPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <AnimatedTextBlock key={index} delay={index * 100}>
                    <div className="bg-card border border-border rounded-3xl p-6 h-full text-center">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </AnimatedTextBlock>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Fit */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Long-Term Success
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Who Succeeds Here Long-Term
              </h2>
              <p className="mt-4 text-muted-foreground">
                Nexalight works best for people who are looking for more than just a paycheck.
              </p>
            </AnimatedSection>

            <AnimatedTextBlock>
              <div className="bg-card border border-border rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    This role is ideal for:
                  </h3>
                </div>
                <ul className="space-y-3">
                  {longTermFit.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedTextBlock>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to make the change?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our remote team and start working on your terms.
            </p>
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-3xl transition-all duration-150 ease-human hover:bg-transparent hover:text-primary border-2 border-primary press-effect focus-ring group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 transition-transform duration-150 ease-human group-hover:translate-x-0.5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
