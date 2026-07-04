import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useTranslation } from 'react-i18next';

export function WhatWeOffer() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('nav.whatWeOffer')}</h1>
        <p className="text-lg text-white/60">This section is under construction.</p>
      </main>
      <Footer />
    </div>
  );
}
