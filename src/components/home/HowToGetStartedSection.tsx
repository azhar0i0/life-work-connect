import { motion, useReducedMotion, Variants } from 'framer-motion';
import { AnimatedSection, AnimatedCard } from '@/components/ui/AnimatedSection';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck, GraduationCap, Home } from 'lucide-react';

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    icon: ClipboardCheck,
    number: '1',
    title: 'Apply',
    description: "Complete our pre-screening form to see if you're a good fit.",
  },
  {
    icon: GraduationCap,
    number: '2',
    title: 'Register & Train',
    description: 'Sign up with Arise and complete certification—training is paid.',
  },
  {
    icon: Home,
    number: '3',
    title: 'Begin Remote Work',
    description: 'Start supporting established brands from home.',
  },
];

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
};

const numberVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: customEase,
    },
  },
};

function StepItem({ step, index }: { step: typeof steps[0]; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = step.icon;

  return (
    <motion.li
      className="text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={!prefersReducedMotion ? stepVariants : undefined}
      custom={index}
      transition={{ delay: index * 0.15 }}
    >
      {/* Step number */}
      <motion.div 
        className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg shadow-primary/20"
        variants={!prefersReducedMotion ? numberVariants : undefined}
        whileHover={{ scale: 1.1 }}
        transition={{ delay: index * 0.15 }}
        aria-hidden="true"
      >
        {step.number}
      </motion.div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2">
        <span className="sr-only">Step {step.number}: </span>
        {step.title}
      </h3>
      <p className="text-muted-foreground text-base max-w-xs mx-auto">
        {step.description}
      </p>
    </motion.li>
  );
}

export function HowToGetStartedSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section 
      className="py-20 md:py-32 bg-surface overflow-hidden"
      aria-labelledby="get-started-heading"
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
              Getting Started
            </motion.span>
            <motion.h2 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
              id="get-started-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            >
              How to Get Started
            </motion.h2>
          </AnimatedSection>

          {/* Steps */}
          <ol 
            className="grid gap-12 md:gap-8 md:grid-cols-3 mb-16"
            aria-label="Three steps to get started"
          >
            {steps.map((step, index) => (
              <StepItem key={index} step={step} index={index} />
            ))}
          </ol>

          {/* Connector lines for desktop */}
          <div className="hidden md:block relative -mt-[180px] mb-16 mx-auto max-w-md" aria-hidden="true">
            <motion.div 
              className="h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>

          {/* CTA */}
          <motion.div 
            className="text-center"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg rounded-full transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 press-effect focus-ring group"
            >
              Start Your Application
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              Nexalight IBO ID: 1221827 • Register at Arise.com
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
