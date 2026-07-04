
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { TrustLogos } from '../components/TrustLogos';
import { LearningCategories } from '../components/LearningCategories';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { DashboardPreview } from '../components/DashboardPreview';
import { InteractiveLearning } from '../components/InteractiveLearning';
import { LearningJourney } from '../components/LearningJourney';
import { Testimonials } from '../components/Testimonials';
import { Stats } from '../components/Stats';
import { BlogPreview } from '../components/BlogPreview';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { SupportButton } from '../components/SupportButton';
export function Home() {
  return (
    <div className="min-h-screen bg-surface selection:bg-brand-200 selection:text-brand-900">
      <Navigation />
      <main>
        <Hero />
        <TrustLogos />
        <LearningCategories />
        <WhyChooseUs />
        <DashboardPreview />
        <InteractiveLearning />
        <LearningJourney />
        <Testimonials />
        <Stats />
        <BlogPreview />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <SupportButton />
    </div>);

}