import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, User, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export function Navigation() {
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
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

  /* ── Derived theme-aware class fragments ── */
  const topBarBg = isScrolled
    ? isDark
      ? 'bg-[#020817]/80 backdrop-blur-md shadow-lg border-b border-white/10'
      : 'bg-white/80 backdrop-blur-md shadow-lg border-b border-black/10'
    : isDark
      ? 'bg-transparent border-b border-white/5'
      : 'bg-transparent border-b border-black/5';

  const mainNavBg = isScrolled
    ? isDark
      ? 'bg-[#020817]/95 backdrop-blur-md shadow-xl border-b border-white/10'
      : 'bg-white/95 backdrop-blur-md shadow-xl border-b border-black/10'
    : isDark
      ? 'bg-[#020817]/40 backdrop-blur-sm border-b border-white/10'
      : 'bg-white/40 backdrop-blur-sm border-b border-black/8';

  const textColor   = isDark ? 'text-white/80' : 'text-slate-700';
  const hoverText   = isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600';
  const langActive  = isDark
    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-glow'
    : 'bg-cyan-100 text-cyan-700 border-cyan-400/60 shadow-sm';
  const langDefault = isDark
    ? 'text-white/70 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white'
    : 'text-slate-600 border-black/10 hover:bg-slate-100 hover:border-slate-300 hover:text-slate-900';

  const searchInput = isDark
    ? 'bg-white/5 border-white/10 text-white placeholder-white/40 focus:bg-white/10 focus:border-cyan-500/50'
    : 'bg-slate-100 border-black/10 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-cyan-400/60';

  const mobileMenuBg  = isDark ? 'bg-[#020817]' : 'bg-white';
  const mobileDivider = isDark ? 'border-white/10' : 'border-black/8';
  const mobileLinkHover = isDark
    ? 'text-white/80 hover:bg-white/5 hover:text-cyan-400'
    : 'text-slate-700 hover:bg-slate-100 hover:text-cyan-600';
  const mobileSearchInput = isDark
    ? 'bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-cyan-500/50'
    : 'bg-slate-100 border-black/10 text-slate-900 placeholder-slate-400 focus:border-cyan-400/60';

  const toggleBg = isDark
    ? 'bg-white/10 border-white/15 hover:bg-cyan-500/20 hover:border-cyan-500/50 text-amber-300 hover:text-amber-200'
    : 'bg-slate-100 border-slate-200 hover:bg-amber-50 hover:border-amber-300 text-slate-600 hover:text-amber-600';

  return (
    <header className="w-full fixed top-0 inset-x-0 z-50 flex flex-col">
      {/* Top Bar */}
      <div className={`transition-all duration-300 ${topBarBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-xl flex flex-col items-center justify-center text-white font-bold leading-tight shadow-glow transition-transform group-hover:scale-105 cursor-pointer">
              <span className="text-xl font-serif">日</span>
              <span className="text-[0.45rem] tracking-widest font-semibold mt-0.5">JAPAN</span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            {/* Language Switchers */}
            <div className="flex items-center gap-2">
              {['si', 'ta', 'en'].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
                    i18n.language === lng ? langActive : langDefault
                  }`}
                >
                  {lng === 'si' ? 'සිංහල' : lng === 'ta' ? 'தமிழ்' : 'English'}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93, rotate: 15 }}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${toggleBg}`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Sun className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Moon className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className={`w-full transition-all duration-300 ${mainNavBg} relative z-40`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden transition-colors ${textColor} ${hoverText}`}
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
                className={`${textColor} text-sm font-semibold ${hoverText} transition-colors relative group`}
              >
                {link.label}
                <span className={`absolute -bottom-4 left-0 w-full h-1 ${isDark ? 'bg-cyan-400' : 'bg-cyan-500'} scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t`} />
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
                className={`pl-4 pr-10 py-1.5 rounded-full border text-sm focus:outline-none w-48 transition-all focus:w-64 ${searchInput}`}
              />
              <Search className={`w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 transition-colors ${isDark ? 'text-white/40 group-focus-within:text-cyan-400' : 'text-slate-400 group-focus-within:text-cyan-500'}`} />
            </div>

            {/* Login */}
            <button className={`flex items-center gap-2 font-semibold transition-colors group ${textColor} ${hoverText}`}>
              {t('nav.login')}
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isDark ? 'bg-white/10 border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50' : 'bg-slate-100 border-slate-200 group-hover:bg-cyan-100 group-hover:border-cyan-300'}`}>
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
            className={`lg:hidden ${mobileMenuBg} border-t ${mobileDivider} overflow-hidden shadow-2xl`}
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all ${mobileLinkHover}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className={`pt-4 mt-4 border-t ${mobileDivider}`}>
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder={t('nav.search')}
                    className={`w-full pl-4 pr-10 py-3 rounded-xl border text-base focus:outline-none transition-all ${mobileSearchInput}`}
                  />
                  <Search className={`w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-white/40' : 'text-slate-400'}`} />
                </div>

                <div className="flex gap-3">
                  <button className="flex flex-1 items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold hover:opacity-90 transition-opacity">
                    <User className="w-5 h-5" />
                    {t('nav.login')}
                  </button>
                  {/* Mobile theme toggle */}
                  <button
                    onClick={toggleTheme}
                    className={`flex items-center justify-center w-12 h-12 rounded-xl border transition-all ${toggleBg}`}
                  >
                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}