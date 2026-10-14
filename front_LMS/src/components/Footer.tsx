import { useTranslation } from 'react-i18next';
import { Mail, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 112;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.location.href = `/#${targetId}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="pt-16 pb-12 transition-colors relative z-20"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--divider)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Info with Natural Official Logo (no border/outline box) */}
          <div className="lg:col-span-2">
            <button
              onClick={scrollToTop}
              className="inline-block mb-6 text-left focus:outline-none cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="WORLD LANKA JAPANESE EDUCATION – THE CULTURAL CENTER"
                className="h-11 w-auto object-contain"
              />
            </button>

            <p className="leading-relaxed mb-6 max-w-sm text-sm font-normal" style={{ color: 'var(--text-secondary)' }}>
              {t('footer.desc')}
            </p>

            <div className="space-y-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#151b54] dark:text-sky-300" />
                <a href="mailto:hello@worldlanka.jp" className="hover:underline font-medium text-[#151b54] dark:text-sky-300">
                  hello@worldlanka.jp
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#151b54] dark:text-sky-300" />
                <span>Sri Lanka • Classroom & Online Japanese Education</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation — Smooth Homepage Section Scrolling */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-[#151b54] dark:text-white">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  {t('nav.aboutUs')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('impact')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  {t('nav.impact')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('what-we-offer')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  {t('nav.whatWeOffer')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('blog')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  {t('nav.blog')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Japanese Levels */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-[#151b54] dark:text-white">
              {t('footer.academicLevels')}
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li>
                <button onClick={() => scrollToSection('grades')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  JLPT N5 (Beginner)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('grades')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  JLPT N4 (Elementary)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('grades')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  JLPT N3 (Intermediate)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('grades')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  JLPT N2 (Pre-Advanced)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('grades')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  JLPT N1 (Advanced)
                </button>
              </li>
            </ul>
          </div>

          {/* Student Learning Resources */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-[#151b54] dark:text-white">
              {t('nav.resources')}
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li>
                <button onClick={() => scrollToSection('resources')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  Japanese Alphabet Guide
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('resources')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  JLPT Study Materials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('resources')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  Kanji & Grammar Notes
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('resources')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  Culture & Etiquette Guides
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('resources')} className="hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer text-left">
                  Student Notices
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{
            borderTop: '1px solid var(--divider)',
            color: 'var(--text-tertiary)',
          }}
        >
          <p>© {new Date().getFullYear()} {t('footer.rights')}</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#151b54] dark:bg-sky-400" />
            <span>The Cultural Center • Dedicated Japanese Language Education</span>
          </div>
        </div>
      </div>
    </footer>
  );
}