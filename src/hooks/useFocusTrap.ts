import { useEffect, useRef, useCallback } from 'react';

/**
 * useFocusTrap - traps focus within a container (for modals, dialogs, dropdowns)
 * 
 * Usage:
 * const { containerRef, firstFocusableRef } = useFocusTrap(isOpen);
 * 
 * Apply containerRef to the modal/dialog container
 * Apply firstFocusableRef to the first focusable element (optional, for initial focus)
 */
export function useFocusTrap<T extends HTMLElement = HTMLElement>(
  isActive: boolean = true,
  options: {
    onEscape?: () => void;
    initialFocus?: boolean;
  } = {}
) {
  const containerRef = useRef<T>(null);
  const firstFocusableRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const { onEscape, initialFocus = true } = options;

  // Get all focusable elements within container
  const getFocusableElements = useCallback((): HTMLElement[] => {
    if (!containerRef.current) return [];
    
    const focusableSelectors = [
      'button:not([disabled])',
      'a[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    return Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(focusableSelectors)
    ).filter(el => el.offsetParent !== null); // Filter out hidden elements
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isActive || !containerRef.current) return;

    if (event.key === 'Escape' && onEscape) {
      event.preventDefault();
      onEscape();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Shift + Tab: if on first element, move to last
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    // Tab: if on last element, move to first
    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
      return;
    }
  }, [isActive, getFocusableElements, onEscape]);

  // Set up focus trap
  useEffect(() => {
    if (!isActive) return;

    // Store currently focused element
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus first element or container
    if (initialFocus) {
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      } else if (containerRef.current) {
        containerRef.current.focus();
      }
    }

    // Add event listener
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      
      // Restore focus to previous element
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [isActive, getFocusableElements, handleKeyDown, initialFocus]);

  return {
    containerRef,
    firstFocusableRef,
  };
}

/**
 * useEscapeKey - calls handler when Escape key is pressed
 */
export function useEscapeKey(handler: () => void, isActive: boolean = true) {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        handler();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handler, isActive]);
}

/**
 * useArrowNavigation - enables arrow key navigation within a list
 */
export function useArrowNavigation<T extends HTMLElement = HTMLElement>(
  itemSelector: string,
  options: {
    orientation?: 'horizontal' | 'vertical' | 'both';
    loop?: boolean;
  } = {}
) {
  const containerRef = useRef<T>(null);
  const { orientation = 'vertical', loop = true } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const items = Array.from(
        container.querySelectorAll<HTMLElement>(itemSelector)
      ).filter(el => !el.hasAttribute('disabled'));

      if (items.length === 0) return;

      const currentIndex = items.findIndex(
        item => item === document.activeElement
      );

      if (currentIndex === -1) return;

      let nextIndex = currentIndex;
      const isVertical = orientation === 'vertical' || orientation === 'both';
      const isHorizontal = orientation === 'horizontal' || orientation === 'both';

      switch (event.key) {
        case 'ArrowDown':
          if (isVertical) {
            event.preventDefault();
            nextIndex = currentIndex + 1;
          }
          break;
        case 'ArrowUp':
          if (isVertical) {
            event.preventDefault();
            nextIndex = currentIndex - 1;
          }
          break;
        case 'ArrowRight':
          if (isHorizontal) {
            event.preventDefault();
            nextIndex = currentIndex + 1;
          }
          break;
        case 'ArrowLeft':
          if (isHorizontal) {
            event.preventDefault();
            nextIndex = currentIndex - 1;
          }
          break;
        case 'Home':
          event.preventDefault();
          nextIndex = 0;
          break;
        case 'End':
          event.preventDefault();
          nextIndex = items.length - 1;
          break;
        default:
          return;
      }

      // Handle looping
      if (loop) {
        if (nextIndex < 0) nextIndex = items.length - 1;
        if (nextIndex >= items.length) nextIndex = 0;
      } else {
        nextIndex = Math.max(0, Math.min(nextIndex, items.length - 1));
      }

      items[nextIndex]?.focus();
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [itemSelector, orientation, loop]);

  return { containerRef };
}
