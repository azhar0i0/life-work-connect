import { motion, useReducedMotion, Variants } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
    detail: "Close your laptop and you're already home.",
  },
];

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: customEase,
    },
  },
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
};

const dotVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: customEase,
    },
  },
};

function DayStep({ step, index }: { step: typeof daySteps[0]; index: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.li
      className="relative pl-8 pb-8 last:pb-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={stepVariants}
      custom={index}
      transition={{ delay: index * 0.1 }}
    >
      {/* Timeline line */}
      {index < daySteps.length - 1 && (
        <motion.div 
          className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-border origin-top"
          variants={!prefersReducedMotion ? lineVariants : undefined}
          transition={{ delay: index * 0.1 + 0.2 }}
          aria-hidden="true"
        />
      )}
      
      {/* Timeline dot */}
      <motion.div 
        className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-primary bg-background"
        variants={!prefersReducedMotion ? dotVariants : undefined}
        aria-hidden="true"
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
    </motion.li>
  );
}

export function DayInLifeSection() {
  return (
    <section 
      className="py-20 md:py-32 bg-surface overflow-hidden"
      aria-labelledby="day-in-life-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
              aria-hidden="true"
            >
              A Typical Day
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
              id="day-in-life-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            >
              What a Typical Workday Looks Like
            </motion.h2>
          </AnimatedSection>

          <ol 
            className="max-w-xl mx-auto"
            aria-label="Timeline of a typical workday"
          >
            {daySteps.map((step, index) => (
              <DayStep key={index} step={step} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
