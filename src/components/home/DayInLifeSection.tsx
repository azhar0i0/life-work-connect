import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const daySteps = [
  {
    time: 'Morning',
    action: 'Log in from your home workspace',
    detail: 'Start your day without the commute stress.',
  },
  {
    time: 'During Work',
    action: 'Support customers for established brands',
    detail: 'Meaningful work with real companies.',
  },
  {
    time: 'Breaks',
    action: 'Take real, scheduled breaks',
    detail: 'Step away, stretch, or grab a coffee.',
  },
  {
    time: 'End of Day',
    action: 'End your workday without a commute',
    detail: 'Close your laptop and you\'re already home.',
  },
];

function DayStep({ step, index }: { step: typeof daySteps[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const delay = index * 100;

  return (
    <div
      ref={ref}
      className="relative pl-8 pb-8 last:pb-0"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, 
                     transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {/* Timeline line */}
      {index < daySteps.length - 1 && (
        <div 
          className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-border origin-top"
          style={{
            transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
            transition: `transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay + 200}ms`,
          }}
        />
      )}
      
      {/* Timeline dot */}
      <div 
        className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-primary bg-background"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.5)',
          transition: `opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, 
                       transform 0.3s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        }}
      />
      
      <div>
        <span className="text-sm font-medium text-primary uppercase tracking-wide">
          {step.time}
        </span>
        <h3 className="text-lg font-semibold text-foreground mt-1">
          {step.action}
        </h3>
        <p className="text-muted-foreground mt-1">
          {step.detail}
        </p>
      </div>
    </div>
  );
}

export function DayInLifeSection() {
  return (
    <section className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              A Typical Day
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              What a Typical Workday Looks Like
            </h2>
          </AnimatedSection>

          <div className="max-w-xl mx-auto">
            {daySteps.map((step, index) => (
              <DayStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
