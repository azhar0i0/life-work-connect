import { motion, useReducedMotion, Variants } from 'framer-motion';
import { AnimatedSection, StaggerContainer, StaggerItem, AnimatedCard } from '@/components/ui/AnimatedSection';
import { Shield, Wallet, Building, ListChecks } from 'lucide-react';

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reasons = [
  {
    icon: Shield,
    title: 'Remote-first by design',
    description: "This isn't adapted office work—it's built for remote from day one.",
  },
  {
    icon: Wallet,
    title: 'Paid preparation',
    description: 'Training and certification are compensated, not expected for free.',
  },
  {
    icon: Building,
    title: 'Established partners',
    description: 'We work with reputable brands through the Arise platform.',
  },
  {
    icon: ListChecks,
    title: 'Clear structure',
    description: 'Expectations are transparent. No guessing, no surprises.',
  },
];

const cardVariants: Variants = {
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

export function WhyThisWorksSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section 
      className="py-20 md:py-32 bg-background overflow-hidden"
      aria-labelledby="why-works-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
              aria-hidden="true"
            >
              Sustainable Remote Work
            </motion.span>
            <motion.h2 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
              id="why-works-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            >
              Why This Model Works
            </motion.h2>
            <motion.p 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              We've designed a remote work model that's sustainable for the long term.
            </motion.p>
          </AnimatedSection>

          <motion.ul 
            className="grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            aria-label="Four reasons why our model works"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.li key={index} variants={cardVariants}>
                  <AnimatedCard 
                    className="flex gap-4 p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors duration-300"
                    hoverScale={1.02}
                    hoverY={-4}
                  >
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {reason.description}
                      </p>
                    </div>
                  </AnimatedCard>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
