import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedTextBlock } from '@/components/ui/AnimatedSection';
import { HowWeWorkSection } from '@/components/about/HowWeWorkSection';
import { WhoThisIsForSection } from '@/components/about/WhoThisIsForSection';

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const textVariants: Variants = {
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

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Layout>
      {/* Hero */}
      <section 
        className="py-20 md:py-32 bg-surface overflow-hidden"
        aria-labelledby="about-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <motion.span 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
              aria-hidden="true"
            >
              About Us
            </motion.span>
            <motion.h1 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
              id="about-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance"
            >
              About Nexalight Virtual Solutions
            </motion.h1>
            <motion.p 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              We believe work should support your life—not compete with it.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section 
        className="py-20 md:py-32 bg-background overflow-hidden"
        aria-labelledby="our-story-heading"
      >
        <div className="container mx-auto px-6">
          <h2 id="our-story-heading" className="sr-only">Our Story</h2>
          <motion.article 
            className="max-w-3xl mx-auto space-y-8"
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
            <motion.div variants={textVariants}>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Nexalight Virtual Solutions is an Independent Business Owner (IBO) partnered with the Arise platform, 
                connecting professional customer service representatives with established brands that need 
                reliable, remote support.
              </p>
            </motion.div>

            <motion.div variants={textVariants}>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                We are remote-first by design. That means no office politics, no rigid 
                schedules, and no unnecessary pressure. We focus on trust, performance, 
                and balance—because when people are supported, they do their best work.
              </p>
            </motion.div>

            <motion.div variants={textVariants}>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Whether you're a parent, caregiver, student, or someone simply ready 
                for a better work-life balance, we connect you with legitimate opportunities 
                that work with your reality.
              </p>
            </motion.div>

            <motion.div 
              variants={textVariants}
              className="pt-8 border-t border-border"
            >
              <div className="bg-surface rounded-2xl p-6">
                <p className="text-sm text-muted-foreground text-center">
                  <strong className="text-foreground">Important:</strong> All work opportunities are facilitated through the Arise platform. 
                  Registration with Arise is required to pursue opportunities.
                </p>
              </div>
            </motion.div>
          </motion.article>
        </div>
      </section>

      {/* How We Work */}
      <HowWeWorkSection />

      {/* Who This Is For */}
      <WhoThisIsForSection />
    </Layout>
  );
}
