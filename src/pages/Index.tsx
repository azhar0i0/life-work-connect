import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { MarqueeSection } from '@/components/home/MarqueeSection';
import { TrustStatementSection } from '@/components/home/TrustStatementSection';
import { DayInLifeSection } from '@/components/home/DayInLifeSection';
import { WhyThisWorksSection } from '@/components/home/WhyThisWorksSection';
import { HowToGetStartedSection } from '@/components/home/HowToGetStartedSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MarqueeSection />
      <TrustStatementSection />
      <DayInLifeSection />
      <WhyThisWorksSection />
      <HowToGetStartedSection />
    </Layout>
  );
};

export default Index;
