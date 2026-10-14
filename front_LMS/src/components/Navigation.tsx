import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export function Navigation() {
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  const navLinks = [
    { key: 'aboutUs', label: t('nav.aboutUs'), targetId: 'about' },
    { key: 'impact', label: t('nav.impact'), targetId: 'impact' },
    { key: 'grades', label: t('nav.grades'), targetId: 'grades' },
    { key: 'resources', label: t('nav.resources'), targetId: 'resources' },
    { key: 'whatWeOffer', label: t('nav.whatWeOffer'), targetId: 'what-we-offer' },
    { key: 'blog', label: t('nav.blog'), targetId: 'blog' },
    { key: 'contact', label: t('nav.contact'), targetId: 'contact' },
  ];

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['contact', 'blog', 'resources', 'what-we-offer', 'grades', 'impact', 'about'];
      const scrollPosition = window.scrollY + 140;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (targetId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 112; // Height of the sticky navigation
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
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ── Derived theme-aware styling ── */
  const topBarBg = isScrolled
    ? isDark
      ? 'bg-[#080c1d]/95 backdrop-blur-md shadow-sm border-b border-white/10'
      : 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80'
    : isDark
      ? 'bg-[#080c1d] border-b border-white/5'
      : 'bg-white border-b border-slate-100';

  const toggleBg = isDark
    ? 'bg-white/10 border-white/15 hover:bg-white/15 text-amber-300'
    : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700';

  return (
    <header className="w-full fixed top-0 inset-x-0 z-50 flex flex-col">
      {/* ── Top Bar: Natural Official Logo, Language Selector & Theme Toggle ── */}
      <div className={`transition-all duration-300 ${topBarBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex justify-between items-center">
          
          {/* Authentic World Lanka Logo — Natural rendering without outline/border rectangle */}
          <button
            onClick={scrollToTop}
            className="flex items-center group cursor-pointer focus:outline-none"
            title="World Lanka Japanese Education – The Cultural Center"
          >
            <img
              src="/logo.png"
              alt="WORLD LANKA JAPANESE EDUCATION – THE CULTURAL CENTER"
              className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-[1.01]"
            />
          </button>

          {/* Right Action Cluster: Sri Lanka Focus Message + Language Selector + Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Subtle Sri Lanka Focus Badge (Desktop) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#151b54] dark:bg-sky-400" />
              <span>Japanese Language Education for Sri Lankan Students</span>
            </div>

            {/* Language Selector: English | සිංහල | 日本語 */}
            <div className="inline-flex items-center text-xs sm:text-sm font-medium px-2 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-2xs backdrop-blur-sm">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ${
                  i18n.language === 'en'
                    ? 'bg-[#151b54] text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#151b54]'
                }`}
              >
                English
              </button>
              <span className="text-slate-300 dark:text-slate-600 px-1 select-none">|</span>
              <button
                onClick={() => changeLanguage('si')}
                className={`px-2.5 py-0.5 rounded-full font-sinhala transition-colors cursor-pointer ${
                  i18n.language === 'si'
                    ? 'bg-[#151b54] text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#151b54]'
                }`}
              >
                සිංහල
              </button>
              <span className="text-slate-300 dark:text-slate-600 px-1 select-none">|</span>
              <button
                onClick={() => changeLanguage('ja')}
                className={`px-2.5 py-0.5 rounded-full font-jp transition-colors cursor-pointer ${
                  i18n.language === 'ja'
                    ? 'bg-[#151b54] text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#151b54]'
                }`}
              >
                日本語
              </button>
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${toggleBg}`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar: World Lanka Navy Blue (`#151b54`) ── */}
      <div className="w-full bg-[#151b54] dark:bg-[#0d1238] border-b border-[#202b78]/40 shadow-sm relative z-40 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          
          {/* Navigation Links — Smooth Scrolling */}
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.targetId;
              return (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.targetId)}
                  className={`text-sm tracking-wide transition-colors relative py-1 cursor-pointer font-medium ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-white shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Contact CTA — Premium Navy/White Contrast with Subtle Accent */}
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all bg-white text-[#151b54] hover:bg-slate-100 shadow-xs cursor-pointer active:scale-95"
          >
            <span>{t('hero.contactUs')}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#cd2127]" />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Dropdown: Smooth Scrolling & Auto-Close ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#080c1d] border-b border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-5 py-5 space-y-2">
              <div className="pb-3 mb-2 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#151b54] dark:text-slate-300">
                  {t('brand.name')}
                </span>
                <span className="text-xs font-semibold text-[#151b54] dark:text-sky-400">
                  The Cultural Center
                </span>
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.targetId;
                return (
                  <button
                    key={link.key}
                    onClick={() => scrollToSection(link.targetId)}
                    className={`w-full text-left px-3 py-2.5 text-base rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-[#151b54]/10 dark:bg-white/10 text-[#151b54] dark:text-white font-bold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 font-medium'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#151b54] dark:bg-white" />}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#151b54] text-white font-semibold text-sm shadow-md cursor-pointer hover:bg-[#1f2878]"
                >
                  <span>{t('hero.startLearning')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}