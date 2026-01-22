import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustStatementSection } from '@/components/home/TrustStatementSection';
import { DayInLifeSection } from '@/components/home/DayInLifeSection';
import { WhyThisWorksSection } from '@/components/home/WhyThisWorksSection';
import { HowToGetStartedSection } from '@/components/home/HowToGetStartedSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustStatementSection />
      <DayInLifeSection />
      <WhyThisWorksSection />
      <HowToGetStartedSection />
    </Layout>
  );
};

export default Index;
