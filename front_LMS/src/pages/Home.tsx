import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { SriLankaBanner } from '../components/SriLankaBanner';
import { AboutSection } from '../components/AboutSection';
import { ImpactSection } from '../components/ImpactSection';
import { GradesSection } from '../components/GradesSection';
import { ResourcesSection } from '../components/ResourcesSection';
import { WhatWeOfferSection } from '../components/WhatWeOfferSection';
import { BlogSection } from '../components/BlogSection';
import { FAQ } from '../components/FAQ';
import { ContactSection } from '../components/ContactSection';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { SupportButton } from '../components/SupportButton';
import { WelcomeAnimation } from '../components/WelcomeAnimation';

export function Home() {
  const [welcomeDone, setWelcomeDone] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)' }}>
      {/* ── Multilingual Opening Welcome Animation ── */}
      {!welcomeDone && (
        <WelcomeAnimation onComplete={() => setWelcomeDone(true)} />
      )}

      <Navigation />
      <main>
        <Hero />
        <SriLankaBanner />
        <AboutSection />
        <ImpactSection />
        <GradesSection />
        <ResourcesSection />
        <WhatWeOfferSection />
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