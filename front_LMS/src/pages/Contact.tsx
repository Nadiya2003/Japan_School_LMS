import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { SriLankaBanner } from '../components/SriLankaBanner';
import { FAQ } from '../components/FAQ';
import { SupportButton } from '../components/SupportButton';

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg-base)' }}>
      <Navigation />
      <main className="flex-1 pt-24">
        <ContactSection />
        <SriLankaBanner />
        <FAQ />
      </main>
      <Footer />
      <SupportButton />
    </div>
  );
}
