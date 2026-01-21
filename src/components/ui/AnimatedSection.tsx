import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  threshold = 0.4,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });

  return (
    <section
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, 
                     transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </section>
  );
}

// For text blocks that reveal with storytelling effect
interface AnimatedTextBlockProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedTextBlock({ children, className, delay = 0 }: AnimatedTextBlockProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.4 });

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, 
                     transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
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
  const delay = index * 80;

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
