import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { WhatWeOfferSection } from '../components/WhatWeOfferSection';
import { SriLankaBanner } from '../components/SriLankaBanner';
import { CTA } from '../components/CTA';
import { SupportButton } from '../components/SupportButton';

export function WhatWeOffer() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg-base)' }}>
      <Navigation />
      <main className="flex-1 pt-24">
        <div className="pt-16 pb-8 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
            style={{
              borderColor: 'var(--border-color)',
              background: 'var(--card-bg)',
              color: '#cd2127',
            }}
          >
            <span>Educational Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            What We Offer
          </h1>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Structured educational programs built specifically around the learning needs of Sri Lankan students.
          </p>
        </div>

        <WhatWeOfferSection />
        <SriLankaBanner />
        <CTA />
      </main>
      <Footer />
      <SupportButton />
    </div>
  );
}
