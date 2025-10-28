import FAQsTwo from '@/components/faqs-2';
import Features from '@/components/tracks';
import FooterSection from '@/components/footer';
import HeroSection from '@/components/hero';
import TeamSection from '@/components/team';
import { MorphingText } from '@/components/ui/morphing-text';
const HomePage = () => {
  return (
    <main>
      <section id="hero">
        <HeroSection />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="team">
        <TeamSection />
      </section>

      <section id="faq">
        <FAQsTwo />
      </section>

      <FooterSection />
    </main>
  );
};

export default HomePage;
