import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedBenefit } from '@/components/ui/AnimatedSection';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, GraduationCap, Clock, Car, Heart, Building2 } from 'lucide-react';

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

      {/* Benefits Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedBenefit key={index} index={index}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg transition-all duration-150 ease-human hover:bg-primary/90 press-effect focus-ring group"
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
