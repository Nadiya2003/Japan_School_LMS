import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { SriLankaBanner } from '../components/SriLankaBanner';
import { AboutSection } from '../components/AboutSection';
import { ImpactSection } from '../components/ImpactSection';
import { GradesSection } from '../components/GradesSection';
import { WhatWeOfferSection } from '../components/WhatWeOfferSection';
import { ResourcesSection } from '../components/ResourcesSection';
import { BlogSection } from '../components/BlogSection';
import { FAQ } from '../components/FAQ';
import { ContactSection } from '../components/ContactSection';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { SupportButton } from '../components/SupportButton';

export function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)' }}>
      <Navigation />
      <main>
        <Hero />
        <SriLankaBanner />
        <AboutSection />
        <ImpactSection />
        <GradesSection />
        <WhatWeOfferSection />
        <ResourcesSection />
        <BlogSection limit={3} />
        <FAQ />
        <ContactSection />
        <CTA />
      </main>
      <Footer />
      <SupportButton />
    </div>
  );
}