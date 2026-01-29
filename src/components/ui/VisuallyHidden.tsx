import * as React from 'react';

/**
 * VisuallyHidden - renders content that is visually hidden but accessible to screen readers
 * Use for skip links, form labels, and other a11y-only content
 */
interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** If true, becomes visible when focused (for skip links) */
  focusable?: boolean;
}

export function VisuallyHidden({ 
  children, 
  focusable = false,
  className,
  ...props 
}: VisuallyHiddenProps) {
  return (
    <span
      className={focusable 
        ? 'sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:top-4 focus:left-4 focus:outline-none focus:ring-2 focus:ring-ring' 
        : 'sr-only'
      }
      {...props}
    >
      {children}
    </span>
  );
}

/**
 * SkipLink - allows keyboard users to skip to main content
 * Should be the first focusable element in the DOM
 */
interface SkipLinkProps {
  href?: string;
  children?: React.ReactNode;
}

export function SkipLink({ 
  href = '#main-content', 
  children = 'Skip to main content' 
}: SkipLinkProps) {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:px-4 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:font-medium focus:rounded-md focus:top-4 focus:left-4 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      {children}
    </a>
  );
}
