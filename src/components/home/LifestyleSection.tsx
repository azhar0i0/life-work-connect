import { AnimatedTextBlock } from '@/components/ui/AnimatedSection';

const paragraphs = [
  "Imagine starting your workday with your coffee already in hand—not gulped down in traffic, not spilled in a rush—just sipped slowly, on your time. No alarms blaring before sunrise. No standing in front of a closet wondering if your outfit is \"work-appropriate.\" Pajamas? Leggings? Comfy hoodie? If it works for you, it works.",
  "No scraping ice off your windshield. No white-knuckle winter drives. No sitting in bumper-to-bumper traffic questioning your life choices. When it's freezing outside, you're warm. When the sun is out, you can actually enjoy it—open a window, step outside on a break, feel fresh air instead of fluorescent lights.",
  "Working from our virtual call center means your office is wherever you are—your home, your kitchen table, your quiet space. You control your environment, your routine, your comfort. No micromanaging. No hovering. Just trust, flexibility, and the freedom to do meaningful work without unnecessary pressure.",
  "This is work that fits into real life. More time with family. More moments with your kids. More evenings that don't feel rushed or exhausted. No commute. No dress code stress. No wasted hours.",
  "If you've ever thought, \"There has to be a better way to work,\" this is it."
];

export function LifestyleSection() {
  return (
    <section className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {paragraphs.map((text, index) => (
            <AnimatedTextBlock
              key={index}
              delay={index * 50}
              className="mb-8 last:mb-0"
            >
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                {text}
              </p>
            </AnimatedTextBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
