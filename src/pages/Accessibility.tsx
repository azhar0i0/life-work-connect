import { Layout } from '@/components/layout/Layout';
import { AnimatedSection, AnimatedTextBlock } from '@/components/ui/AnimatedSection';

export default function Accessibility() {
  return (
    <Layout>
      <section 
        className="py-20 md:py-32 bg-surface"
        aria-labelledby="accessibility-heading"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 
              id="accessibility-heading"
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Accessibility Statement
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Last Updated: January 2025
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <AnimatedTextBlock delay={100}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nexalight Virtual Solutions is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={200}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Conformance Status</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Nexalight Virtual Solutions website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={300}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility Features</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website includes the following accessibility features:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Semantic HTML structure for proper screen reader navigation</li>
                <li>Keyboard navigation support for all interactive elements</li>
                <li>Skip navigation links to bypass repetitive content</li>
                <li>Sufficient color contrast ratios for text readability</li>
                <li>Descriptive alt text for all meaningful images</li>
                <li>Form labels and error messages for accessibility</li>
                <li>ARIA attributes for dynamic content</li>
                <li>Focus indicators for keyboard users</li>
                <li>Reduced motion support for users who prefer less animation</li>
              </ul>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={400}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Feedback</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We welcome your feedback on the accessibility of Nexalight Virtual Solutions. Please let us know if you encounter accessibility barriers on our website:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mb-6">
                <li><strong>Email:</strong> azharisworking@gmail.com</li>
                <li><strong>Phone:</strong> 317-572-5034</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We try to respond to feedback within 2 business days.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={500}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Technical Specifications</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Accessibility of Nexalight Virtual Solutions relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>HTML</li>
                <li>WAI-ARIA</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                These technologies are relied upon for conformance with the accessibility standards used.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={600}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitations and Alternatives</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Despite our best efforts to ensure accessibility of Nexalight Virtual Solutions, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Known limitations: Some older PDF documents may not be fully accessible. We are working to remediate these documents and will update them as we are able.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={700}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Assessment Approach</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nexalight Virtual Solutions assessed the accessibility of this website by self-evaluation and automated testing tools.
              </p>
            </AnimatedTextBlock>
          </div>
        </div>
      </section>
    </Layout>
  );
}
