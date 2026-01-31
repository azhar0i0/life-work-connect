import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const generalFaqs = [
  {
    question: 'Is this a legitimate work-from-home opportunity?',
    answer: 'Yes. Nexalight Virtual Solutions is a legitimate Independent Business Owner (IBO) operating through the Arise platform. We partner with established brands and all training is paid. You will never be asked to pay to work with us.',
  },
  {
    question: 'What is the Arise platform?',
    answer: 'Arise is a virtual services platform that connects customer service professionals with Fortune 500 companies. Nexalight partners with Arise (IBO ID: 1221827) to offer remote customer support opportunities.',
  },
  {
    question: 'Do I need prior call center experience?',
    answer: 'Experience is helpful but not always required. We provide comprehensive paid training to help you succeed. A positive attitude and willingness to learn are what matter most.',
  },
];

const processFaqs = [
  {
    question: 'How do I get started?',
    answer: 'Start by completing our pre-screening form. If you qualify, we\'ll send you instructions to register at register.arise.com using our IBO ID: 1221827. From there, you\'ll complete Arise\'s onboarding and certification process.',
  },
  {
    question: 'Is training paid?',
    answer: 'Yes! All required training and certification are compensated. There are no upfront costs, hidden fees, or equipment purchases required.',
  },
  {
    question: 'How long does the process take?',
    answer: 'The timeline varies depending on certification requirements and your availability. Most people complete the process within 2-4 weeks.',
  },
];

const schedulingFaqs = [
  {
    question: 'Is this a 9–5 job?',
    answer: 'No. One of the biggest benefits is scheduling flexibility. While there are minimum availability requirements, we work with you to find hours that fit your life.',
  },
  {
    question: 'How many hours per week can I work?',
    answer: 'Hours vary based on client needs and your availability. We offer both part-time and full-time opportunities.',
  },
  {
    question: 'What equipment do I need?',
    answer: 'You will need a desktop or laptop computer (no tablets), reliable high-speed internet, a USB headset with microphone, and a quiet dedicated workspace.',
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: customEase,
    },
  },
};

function FAQSection({ 
  id, 
  title, 
  faqs, 
  className = "bg-background" 
}: { 
  id: string; 
  title: string; 
  faqs: { question: string; answer: string }[]; 
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section 
      className={`py-20 md:py-24 ${className} overflow-hidden`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto">
          <motion.h2 
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            id={`${id}-heading`}
            className="text-2xl font-bold text-foreground mb-8"
          >
            {title}
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem
                    value={`${id}-${index}`}
                    className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/30 transition-all duration-300 hover:border-primary/20"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:no-underline py-6 [&[data-state=open]>svg]:text-primary">
                      <span className="font-medium pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function FAQ() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Layout>
      {/* Hero */}
      <section 
        className="py-20 md:py-32 bg-surface overflow-hidden"
        aria-labelledby="faq-heading"
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
              FAQ
            </motion.span>
            <motion.h1 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
              id="faq-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Direct answers to the questions that matter most.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Sections */}
      <FAQSection id="general" title="General Questions" faqs={generalFaqs} className="bg-background" />
      <FAQSection id="process" title="Process & Training" faqs={processFaqs} className="bg-surface" />
      <FAQSection id="scheduling" title="Schedule & Equipment" faqs={schedulingFaqs} className="bg-background" />

      {/* Contact CTA */}
      <section 
        className="py-20 bg-surface overflow-hidden"
        aria-label="Ready to get started"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Complete our pre-screening form to see if you qualify for remote opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 press-effect focus-ring group"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-foreground rounded-full border-2 border-border transition-all duration-200 hover:border-primary hover:text-primary focus-ring"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
