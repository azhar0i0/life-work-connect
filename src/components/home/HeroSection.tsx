import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const heroFeatures = [
  'Paid training & certification',
  'Work from home',
  'Flexible scheduling',
  'No commute',
];

// Custom easing as tuple type for framer-motion
const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
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

  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Animated gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-surface via-background to-background"
        aria-hidden="true"
      />
      
      {/* Decorative animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div 
            variants={prefersReducedMotion ? {} : containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Overline */}
            <motion.p
              variants={itemVariants}
              className="text-sm tracking-wide text-primary font-medium mb-6"
            >
              Remote Customer Service Opportunities
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Join Nexalight
              <br />
              <span className="text-primary">Work From Home.</span>
              <br />
              Get Paid.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Nexalight partners with the Arise platform to offer legitimate, paid remote call center opportunities. Start your journey toward flexible work today.
            </motion.p>

            {/* Feature list */}
            <motion.ul 
              variants={itemVariants}
              className="mt-8 grid grid-cols-2 gap-3"
              aria-label="Key benefits"
            >
              {heroFeatures.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Row */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4 items-center"
              role="group"
              aria-label="Call to action buttons"
            >
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-base rounded-full transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 press-effect focus-ring group"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-base text-foreground rounded-full border-2 border-border transition-all duration-200 hover:border-primary hover:text-primary focus-ring"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Trust indicator */}
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 text-sm text-muted-foreground"
            >
              Partnered with Arise • IBO ID: 1221827
            </motion.p>
          </motion.div>

          {/* Right: Abstract Editorial Shape */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
            aria-hidden="true"
            role="presentation"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Primary shape */}
              <motion.div 
                initial={prefersReducedMotion ? {} : { opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute inset-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 shadow-2xl shadow-primary/5"
              />
              
              {/* Secondary accent shape */}
              <motion.div 
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-0 right-0 w-36 h-36 rounded-3xl bg-card border border-border shadow-lg"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-xs text-muted-foreground mt-1">Remote</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Tertiary element */}
              <motion.div 
                initial={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-12 left-0 w-28 h-28 rounded-3xl bg-primary/10 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$</div>
                  <div className="text-xs text-muted-foreground mt-1">Paid Training</div>
                </div>
              </motion.div>

              {/* Floating dot accent */}
              <motion.div
                animate={prefersReducedMotion ? {} : {
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-20 left-16 w-4 h-4 rounded-full bg-primary/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
