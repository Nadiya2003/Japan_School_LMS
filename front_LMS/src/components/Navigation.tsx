import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
    { key: 'aboutUs', label: t('nav.aboutUs'), path: '/about' },
    { key: 'impact', label: t('nav.impact'), path: '/impact' },
    { key: 'grades', label: t('nav.grades'), path: '/grades' },
    { key: 'resources', label: t('nav.resources'), path: '/resources' },
    { key: 'whatWeOffer', label: t('nav.whatWeOffer'), path: '/what-we-offer' },
    { key: 'blog', label: t('nav.blog'), path: '/blog' },
    { key: 'contact', label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header className="w-full fixed top-0 inset-x-0 z-50 flex flex-col">
      {/* Top Bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-[#020817]/80 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent border-b border-white/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-xl flex flex-col items-center justify-center text-white font-bold leading-tight shadow-glow transition-transform group-hover:scale-105 cursor-pointer">
              <span className="text-xl font-serif">日</span>
              <span className="text-[0.45rem] tracking-widest font-semibold mt-0.5">JAPAN</span>
            </div>
          </Link>

          {/* Language Switchers */}
          <div className="flex items-center gap-2">
            {['si', 'ta', 'en'].map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
                  i18n.language === lng
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-glow'
                    : 'text-white/70 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {lng === 'si' ? 'සිංහල' : lng === 'ta' ? 'தமிழ்' : 'English'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className={`w-full transition-all duration-300 ${isScrolled ? 'bg-[#020817]/95 backdrop-blur-md shadow-xl border-b border-white/10' : 'bg-[#020817]/40 backdrop-blur-sm border-b border-white/10'} relative z-40`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className="text-white/80 text-sm font-semibold hover:text-cyan-400 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t"></span>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Search */}
            <div className="relative group">
              <input
                type="text"
                placeholder={t('nav.search')}
                className="pl-4 pr-10 py-1.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:bg-white/10 focus:border-cyan-500/50 w-48 transition-all focus:w-64"
              />
              <Search className="w-4 h-4 text-white/40 absolute right-3 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-cyan-400" />
            </div>

            {/* Login */}
            <button className="flex items-center gap-2 text-white/90 font-semibold hover:text-cyan-400 transition-colors group">
              {t('nav.login')}
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all">
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
            className="lg:hidden bg-[#020817] border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-white/80 hover:bg-white/5 hover:text-cyan-400 rounded-xl transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-white/10">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder={t('nav.search')}
                    className="w-full pl-4 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-base focus:outline-none focus:bg-white/10 focus:border-cyan-500/50 transition-all"
                  />
                  <Search className="w-5 h-5 text-white/40 absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
                <button className="flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold hover:opacity-90 transition-opacity">
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