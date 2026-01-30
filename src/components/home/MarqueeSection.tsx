import { cn } from '@/lib/utils';

const marqueeItems = [
  "Balance Life & Work",
  "Focus Without Burnout",
  "Work With Intention",
  "Clarity Over Chaos",
  "Healthy Productivity",
  "Meaningful Workflows",
  "Connected, Not Overwhelmed",
  "Designed for Real Life",
  "Sustainable Growth",
  "Work Smarter, Live Better",
];

function MarqueeContent({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-8", className)}>
      {marqueeItems.map((item, index) => (
        <div key={index} className="flex items-center gap-8 shrink-0">
          <span className="text-lg md:text-xl font-semibold text-foreground whitespace-nowrap">
            {item}
          </span>
          <span className="text-primary text-xl" aria-hidden="true">✦</span>
        </div>
      ))}
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section 
      className="py-6 md:py-8 bg-surface border-y border-border overflow-hidden"
      aria-label="Brand values"
    >
      <div className="relative flex">
        {/* Gradient overlays for seamless fade */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" 
          aria-hidden="true" 
        />
        
        {/* Marquee track */}
        <div 
          className="flex animate-marquee hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          <MarqueeContent />
          <MarqueeContent className="ml-8" />
        </div>
      </div>
      
      {/* Screen reader accessible list */}
      <div className="sr-only">
        <ul>
          {marqueeItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
