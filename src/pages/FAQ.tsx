import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const generalFaqs = [
  {
    question: 'Is this a legitimate work-from-home opportunity?',
    answer: 'Yes. Nexalight Virtual Solutions is a real company offering legitimate remote work opportunities. We partner with established brands and provide paid training and certification. You will never be asked to pay anything to work with us.',
  },
  {
    question: 'Do I have to pay for training or certification?',
    answer: 'No. All required training and certification are fully paid. There are no upfront costs, hidden fees, or equipment purchases required to get started.',
  },
  {
    question: 'Do I need prior call center experience?',
    answer: 'Experience is helpful but not always required. We provide comprehensive paid training to help you succeed, regardless of your background. A positive attitude and willingness to learn are what matter most.',
  },
];

const schedulingFaqs = [
  {
    question: 'Is this a 9–5 job?',
    answer: 'No. One of the biggest benefits of working with Nexalight is scheduling flexibility. While there are availability requirements, we work with you to find hours that fit your life.',
  },
  {
    question: 'How many hours per week can I work?',
    answer: "Hours vary based on client needs and your availability. We offer both part-time and full-time opportunities. During the application process, you'll discuss your preferred schedule.",
  },
  {
    question: 'Can I change my schedule after I start?',
    answer: "We understand life changes. While we can't guarantee specific schedule changes, we work with our team members to accommodate reasonable requests when possible.",
  },
];

const equipmentFaqs = [
  {
    question: 'What equipment do I need?',
    answer: 'You will need a computer (desktop or laptop), a reliable high-speed internet connection, and a quiet workspace. Specific technical requirements will be provided during the application process.',
  },
  {
    question: 'Do I need to buy special equipment?',
    answer: "Most people already have what they need. A computer, headset, and stable internet are the basics. We don't require expensive equipment or ask you to purchase anything from us.",
  },
  {
    question: 'Can I work from anywhere?',
    answer: 'Eligibility is limited to select locations due to regulatory and operational requirements. Location eligibility will be verified during the application process.',
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section 
        className="py-20 md:py-32 bg-surface"
        aria-labelledby="faq-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span 
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
              aria-hidden="true"
            >
              FAQ
            </span>
            <h1 
              id="faq-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance"
            >
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Direct answers to the questions that matter most.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* General Questions */}
      <section 
        className="py-20 md:py-32 bg-background"
        aria-labelledby="general-questions-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 
              id="general-questions-heading"
              className="text-2xl font-bold text-foreground mb-8"
            >
              General Questions
            </h2>
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-4"
            >
              {generalFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`general-${index}`}
                  className="bg-card border border-border rounded-3xl px-6 data-[state=open]:border-primary/30 transition-colors duration-200"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-6 [&[data-state=open]>svg]:text-primary">
                    <span className="font-medium pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Work & Scheduling */}
      <section 
        className="py-20 md:py-32 bg-surface"
        aria-labelledby="scheduling-questions-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 
              id="scheduling-questions-heading"
              className="text-2xl font-bold text-foreground mb-8"
            >
              Work & Scheduling
            </h2>
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-4"
            >
              {schedulingFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`scheduling-${index}`}
                  className="bg-card border border-border rounded-3xl px-6 data-[state=open]:border-primary/30 transition-colors duration-200"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-6 [&[data-state=open]>svg]:text-primary">
                    <span className="font-medium pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Equipment & Setup */}
      <section 
        className="py-20 md:py-32 bg-background"
        aria-labelledby="equipment-questions-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 
              id="equipment-questions-heading"
              className="text-2xl font-bold text-foreground mb-8"
            >
              Equipment & Setup
            </h2>
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-4"
            >
              {equipmentFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`equipment-${index}`}
                  className="bg-card border border-border rounded-3xl px-6 data-[state=open]:border-primary/30 transition-colors duration-200"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-6 [&[data-state=open]>svg]:text-primary">
                    <span className="font-medium pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section 
        className="py-16 bg-surface"
        aria-label="Need more help"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <p className="text-muted-foreground">
              Still have questions?{' '}
              <Link
                to="/contact"
                className="text-primary font-medium hover:underline underline-offset-4 focus-ring rounded-sm"
              >
                Contact us
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
