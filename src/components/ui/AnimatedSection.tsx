import { ReactNode } from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

// Master animation variants with professional timing
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Animation type options
export type AnimationType = 'fadeUp' | 'fadeIn' | 'scaleUp' | 'slideLeft' | 'slideRight';

const variantsMap: Record<AnimationType, Variants> = {
  fadeUp: fadeUpVariants,
  fadeIn: fadeInVariants,
  scaleUp: scaleUpVariants,
  slideLeft: slideInLeftVariants,
  slideRight: slideInRightVariants,
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: AnimationType;
  once?: boolean;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  threshold = 0.2,
  animation = 'fadeUp',
  once = true,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = variantsMap[animation];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants}
      transition={{ delay: delay / 1000 }}
      className={cn(className)}
      style={prefersReducedMotion ? { opacity: 1, transform: 'none' } : undefined}
    >
      {children}
    </motion.div>
  );
}

// For text blocks that reveal with storytelling effect
interface AnimatedTextBlockProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedTextBlock({ children, className, delay = 0 }: AnimatedTextBlockProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUpVariants}
      transition={{ delay: delay / 1000 }}
      className={cn(className)}
      style={prefersReducedMotion ? { opacity: 1, transform: 'none' } : undefined}
    >
      {children}
    </motion.div>
  );
}

// For benefit items with border draw effect
interface AnimatedBenefitProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function AnimatedBenefit({ children, className, index = 0 }: AnimatedBenefitProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const prefersReducedMotion = useReducedMotion();
  const delay = index * 80;

  if (prefersReducedMotion) {
    return (
      <div className={cn('relative pl-4', className)}>
        <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary" />
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn('relative pl-4', className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay + 100}ms`,
      }}
    >
      {/* Border that draws in */}
      <span
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary origin-top"
        style={{
          transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
          transition: `transform 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        }}
      />
      {children}
    </div>
  );
}

// Stagger container for lists
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function StaggerContainer({ children, className, delay = 0 }: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainerVariants}
      transition={{ delay: delay / 1000 }}
      className={cn(className)}
      style={prefersReducedMotion ? { opacity: 1 } : undefined}
    >
      {children}
    </motion.div>
  );
}

// Stagger item for list children
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={staggerItemVariants}
      className={cn(className)}
      style={prefersReducedMotion ? { opacity: 1, transform: 'none' } : undefined}
    >
      {children}
    </motion.div>
  );
}

// Card with hover effect
interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  hoverY?: number;
}

export function AnimatedCard({ 
  children, 
  className, 
  hoverScale = 1.02,
  hoverY = -4,
}: AnimatedCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? {} : { 
        scale: hoverScale, 
        y: hoverY,
        transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
      }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// Floating animation for decorative elements
interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

export function FloatingElement({ 
  children, 
  className, 
  duration = 4,
  distance = 10,
}: FloatingElementProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={prefersReducedMotion ? {} : {
        y: [-distance / 2, distance / 2, -distance / 2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// Counter animation for statistics
interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '',
  className,
  duration = 2,
}: AnimatedCounterProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={cn(className)}
    >
      {prefix}
      <motion.span
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={prefersReducedMotion ? {} : {
          opacity: 1,
          transition: { duration: 0.3 }
        }}
        viewport={{ once: true }}
      >
        {value}
      </motion.span>
      {suffix}
    </motion.span>
  );
}

// Icon with pulse/glow effect
interface AnimatedIconProps {
  children: ReactNode;
  className?: string;
  pulse?: boolean;
}

export function AnimatedIcon({ children, className, pulse = false }: AnimatedIconProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
      animate={pulse && !prefersReducedMotion ? {
        boxShadow: [
          '0 0 0 0 hsl(var(--primary) / 0)',
          '0 0 0 8px hsl(var(--primary) / 0.1)',
          '0 0 0 0 hsl(var(--primary) / 0)',
        ],
      } : {}}
      transition={pulse ? { duration: 2, repeat: Infinity } : { duration: 0.2 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
