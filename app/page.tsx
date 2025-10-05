import FAQsTwo from '@/components/faqs-2';
import Features from '@/components/features-12';
import FooterSection from '@/components/footer';
import HeroSection from '@/components/hero-section';
import TeamSection from '@/components/team';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Features />
      <TeamSection />
      <FAQsTwo />
      <FooterSection />
    </main>
  );
};

export default HomePage;
