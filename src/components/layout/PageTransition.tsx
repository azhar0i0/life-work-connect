import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

// Page transition variants - subtle, intentional movement
// Old page fades to 0.95 opacity, new page slides up 6px
// Duration: 700ms with human-crafted easing
const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 6,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // human easing - natural acceleration
    },
  },
  exit: {
    opacity: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}
