import { motion, Variants, useReducedMotion } from 'framer-motion';
import { AnimatedSection, AnimatedTextBlock } from '@/components/ui/AnimatedSection';

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const textBlockVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
};

export function TrustStatementSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section 
      className="py-20 md:py-32 bg-background overflow-hidden"
      aria-labelledby="trust-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <motion.span 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
              aria-hidden="true"
            >
              Our Promise
            </motion.span>
            <motion.h2 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
              id="trust-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            >
              Built for Real People, Not Hustle Culture
            </motion.h2>
          </AnimatedSection>

          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.div variants={textBlockVariants}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                We don't believe in burnout, vague promises, or "work from anywhere" claims 
                that fall apart later.
              </p>
            </motion.div>

            <motion.div variants={textBlockVariants}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                Nexalight partners with Arise to provide structured, professional remote work with 
                paid training, clear expectations, and real support.
              </p>
            </motion.div>

            <motion.div variants={textBlockVariants}>
              <div className="pt-8 border-t border-border mt-8">
                <p className="text-lg md:text-xl text-foreground font-medium text-center">
                  This isn't gig work.<br aria-hidden="true" />
                  This isn't a side hustle.<br aria-hidden="true" />
                  <span className="text-primary">This is legitimate remote opportunity.</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
