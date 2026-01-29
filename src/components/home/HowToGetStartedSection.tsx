import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck, GraduationCap, Home } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    number: '1',
    title: 'Apply',
    description: "Complete our application to see if you're a good fit.",
  },
  {
    icon: GraduationCap,
    number: '2',
    title: 'Paid Certification & Training',
    description: 'Learn what you need—and get compensated for it.',
  },
  {
    icon: Home,
    number: '3',
    title: 'Begin Remote Work',
    description: 'Start supporting established brands from home.',
  },
];

function StepItem({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLLIElement>({ threshold: 0.3 });
  const Icon = step.icon;
  const delay = index * 120;

  return (
    <li
      ref={ref}
      className="text-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, 
                     transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {/* Step number */}
      <div 
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
          transition: `opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, 
                       transform 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        }}
        aria-hidden="true"
      >
        {step.number}
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-2">
        <span className="sr-only">Step {step.number}: </span>
        {step.title}
      </h3>
      <p className="text-muted-foreground text-sm max-w-xs mx-auto">
        {step.description}
      </p>
    </li>
  );
}

export function HowToGetStartedSection() {
  return (
    <section 
      className="py-20 md:py-32 bg-surface"
      aria-labelledby="get-started-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span 
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
              aria-hidden="true"
            >
              Getting Started
            </span>
            <h2 
              id="get-started-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            >
              How to Get Started
            </h2>
          </AnimatedSection>

          {/* Steps */}
          <ol 
            className="grid gap-8 md:gap-12 md:grid-cols-3 mb-12"
            aria-label="Three steps to get started"
          >
            {steps.map((step, index) => (
              <StepItem key={index} step={step} index={index} />
            ))}
          </ol>

          {/* CTA */}
          <AnimatedSection delay={400} className="text-center">
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-3xl transition-all duration-150 ease-human hover:bg-transparent hover:text-primary border-2 border-primary press-effect focus-ring group"
            >
              Start Your Application
              <ArrowRight className="w-5 h-5 transition-transform duration-150 ease-human group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
