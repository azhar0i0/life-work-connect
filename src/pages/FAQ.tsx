import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
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
  {
    question: 'What equipment do I need?',
    answer: 'You will need a computer (desktop or laptop), a reliable high-speed internet connection, and a quiet workspace. Specific technical requirements will be provided during the application process.',
  },
  {
    question: 'Is this a 9–5 job?',
    answer: 'No. One of the biggest benefits of working with Nexalight is scheduling flexibility. While there are availability requirements, we work with you to find hours that fit your life.',
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
      <section className="py-20 md:py-32 bg-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about working with Nexalight.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors duration-200"
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
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <p className="text-muted-foreground">
              Still have questions?{' '}
              <a
                href="/contact"
                className="text-primary font-medium hover:underline underline-offset-4"
              >
                Contact us
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
