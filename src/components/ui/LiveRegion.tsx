import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';

/**
 * LiveRegion - announces dynamic content changes to screen readers
 * 
 * Usage:
 * <LiveRegion message={statusMessage} />
 * 
 * Or with the hook:
 * const { announce, LiveRegionComponent } = useLiveAnnouncer();
 * announce('Form submitted successfully');
 */
interface LiveRegionProps {
  /** The message to announce */
  message?: string;
  /** 
   * 'polite' - waits for user to finish current task (default)
   * 'assertive' - interrupts immediately (use for errors/urgent)
   */
  politeness?: 'polite' | 'assertive';
  /** Clear message after announcing (default: true) */
  clearOnAnnounce?: boolean;
  /** Delay before clearing in ms (default: 100) */
  clearDelay?: number;
}

export function LiveRegion({
  message,
  politeness = 'polite',
  clearOnAnnounce = true,
  clearDelay = 100,
}: LiveRegionProps) {
  const [announcement, setAnnouncement] = useState<string>('');

  useEffect(() => {
    if (message) {
      // Clear first to ensure re-announcement of same message
      setAnnouncement('');
      
      const announceTimer = setTimeout(() => {
        setAnnouncement(message);
      }, 50);

      const clearTimer = clearOnAnnounce 
        ? setTimeout(() => setAnnouncement(''), clearDelay + 1000) 
        : undefined;

      return () => {
        window.clearTimeout(announceTimer);
        if (clearTimer) window.clearTimeout(clearTimer);
      };
    }
  }, [message, clearOnAnnounce, clearDelay]);

  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
}

/**
 * useLiveAnnouncer - hook for programmatic announcements
 */
export function useLiveAnnouncer() {
  const [message, setMessage] = useState<string>('');
  const [politeness, setPoliteness] = useState<'polite' | 'assertive'>('polite');

  const announce = useCallback((
    text: string, 
    priority: 'polite' | 'assertive' = 'polite'
  ) => {
    setPoliteness(priority);
    setMessage(''); // Clear first
    setTimeout(() => setMessage(text), 50);
  }, []);

  const LiveRegionComponent = useCallback(() => (
    <LiveRegion message={message} politeness={politeness} />
  ), [message, politeness]);

  return { announce, LiveRegionComponent };
}

/**
 * ErrorAnnouncer - specifically for form errors
 */
interface ErrorAnnouncerProps {
  errors: string[];
  id?: string;
}

export function ErrorAnnouncer({ errors, id }: ErrorAnnouncerProps) {
  if (errors.length === 0) return null;

  return (
    <div
      id={id}
      role="alert"
      aria-live="assertive"
      className="sr-only"
    >
      {errors.length === 1
        ? `Error: ${errors[0]}`
        : `${errors.length} errors: ${errors.join('. ')}`}
    </div>
  );
}
