import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ResourcesSection } from '../components/ResourcesSection';
import { CTA } from '../components/CTA';
import { SupportButton } from '../components/SupportButton';

export function Resources() {
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
            <span>Study Guides & Tools</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            Student Learning Resources
          </h1>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Essential study materials, guides, alphabet charts, and cultural references for World Lanka students.
          </p>
        </div>

        <ResourcesSection />
        <CTA />
      </main>
      <Footer />
      <SupportButton />
    </div>
  );
}
