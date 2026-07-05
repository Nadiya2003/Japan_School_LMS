import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useTranslation } from 'react-i18next';

export function Grades() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg-base)' }}>
      <Navigation />
      <main className="flex-1 pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>{t('nav.grades')}</h1>
        <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>This section is under construction.</p>
      </main>
      <Footer />
    </div>
  );
}
