import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Navigation() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { key: 'aboutUs', label: t('nav.aboutUs') },
    { key: 'impact', label: t('nav.impact') },
    { key: 'grades', label: t('nav.grades') },
    { key: 'resources', label: t('nav.resources') },
    { key: 'whatWeOffer', label: t('nav.whatWeOffer') },
    { key: 'blog', label: t('nav.blog') },
    { key: 'contact', label: t('nav.contact') },
  ];

  return (
    <header className="w-full fixed top-0 inset-x-0 z-50 flex flex-col">
      {/* Top White Bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-600 to-brand-800 rounded-xl flex flex-col items-center justify-center text-white font-bold leading-tight shadow-glow transition-transform hover:scale-105 cursor-pointer">
              <span className="text-xl">W</span>
              <span className="text-[0.45rem] tracking-widest font-semibold mt-0.5">JAPAN</span>
            </div>
          </div>

          {/* Language Switchers */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => changeLanguage('si')}
              className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
                i18n.language === 'si'
                  ? 'bg-brand-600 text-white border-brand-600 shadow-glow'
                  : 'text-ink border-line hover:bg-brand-50 hover:border-brand-200'
              }`}
            >
              සිංහල
            </button>
            <button
              onClick={() => changeLanguage('ta')}
              className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
                i18n.language === 'ta'
                  ? 'bg-brand-600 text-white border-brand-600 shadow-glow'
                  : 'text-ink border-line hover:bg-brand-50 hover:border-brand-200'
              }`}
            >
              தமிழ்
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
                i18n.language === 'en'
                  ? 'bg-brand-600 text-white border-brand-600 shadow-glow'
                  : 'text-ink border-line hover:bg-brand-50 hover:border-brand-200'
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>

      {/* Blue Nav Bar */}
      <div className="bg-brand-600 w-full shadow-lg relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white hover:text-brand-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href="#"
                className="text-white text-sm font-semibold hover:text-brand-100 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t"></span>
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Search */}
            <div className="relative group">
              <input
                type="text"
                placeholder={t('nav.search')}
                className="pl-4 pr-10 py-1.5 rounded-full bg-brand-700/50 text-white placeholder-brand-200 text-sm focus:outline-none focus:bg-white focus:text-ink focus:placeholder-muted w-48 transition-all group-hover:bg-brand-700 focus:w-64"
              />
              <Search className="w-4 h-4 text-brand-200 absolute right-3 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-brand-600" />
            </div>

            {/* Login */}
            <button className="flex items-center gap-2 text-white font-semibold hover:text-brand-100 transition-colors">
              {t('nav.login')}
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <User className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-700 border-t border-brand-500 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href="#"
                  className="block px-4 py-3 text-base font-semibold text-white hover:bg-brand-600 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-brand-500">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder={t('nav.search')}
                    className="w-full pl-4 pr-10 py-3 rounded-xl bg-brand-800 text-white placeholder-brand-300 text-base focus:outline-none focus:bg-white focus:text-ink transition-colors"
                  />
                  <Search className="w-5 h-5 text-brand-300 absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
                <button className="flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-brand-600 font-bold hover:bg-brand-50 transition-colors">
                  <User className="w-5 h-5" />
                  {t('nav.login')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}