import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';

export function Hero() {
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
    }
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-32 lg:pt-38 pb-16 bg-shippo"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      {/* ── Soft Japanese Navy Ambient Glow (Dominant Navy Theme) ── */}
      <div
        className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: 'rgba(21, 27, 84, 0.05)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: 'rgba(21, 27, 84, 0.04)',
        }}
      />

      {/* ── Very Subtle Japanese Kanji Watermark in Background ── */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden opacity-[0.025] dark:opacity-[0.03]">
        <span className="text-[24vw] font-serif-jp font-bold leading-none text-[#151b54] dark:text-white">
          日本語
        </span>
      </div>

      {/* ── Main Container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ────── LEFT COLUMN: Institute Purpose & Sri Lankan Student Messaging ────── */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Institute & Sri Lanka Focus Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border mb-6 shadow-2xs backdrop-blur-md bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#151b54] dark:bg-sky-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#151b54] dark:text-slate-200">
                {t('hero.badge')}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#cd2127]" />
            </div>

            {/* Redesigned Main Headline: Clear visual separation between lines, Navy Blue dominant */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.16] mb-4">
              <span className="block text-[#151b54] dark:text-white tracking-tight">
                Your Journey to Japan
              </span>
              <span className="block mt-2 sm:mt-3 text-[#151b54] dark:text-slate-100 font-bold tracking-tight">
                Starts Here
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#cd2127] ml-2.5 align-baseline" title="Cultural Center Accent" />
              </span>
            </h1>

            {/* Elegant Japanese Subheading (Secondary, Navy/Slate, Muted) */}
            <p className="font-serif-jp text-sm sm:text-base tracking-widest text-[#151b54]/75 dark:text-slate-300 font-medium mb-5">
              {t('hero.jpLine')}
            </p>

            {/* Clean 2-3 Line Educational Description */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-8 max-w-xl font-normal">
              {t('hero.subtitle')}
            </p>

            {/* ── 3 Professional CTA Buttons with Clean Hierarchy ── */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10">
              {/* Primary CTA: World Lanka Navy Blue */}
              <button
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-bold text-white text-sm sm:text-base shadow-md transition-all duration-200 bg-[#151b54] hover:bg-[#1f2878] hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <span>{t('hero.startLearning')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA: Clean White Background, Navy Border & Text */}
              <button
                onClick={() => scrollToSection('grades')}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all bg-white dark:bg-slate-900 border-2 border-[#151b54] text-[#151b54] dark:text-white dark:border-white/30 hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-[#151b54] dark:text-sky-300" />
                <span>{t('hero.exploreCourses')}</span>
              </button>

              {/* Tertiary CTA: Subtle and Secondary */}
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-1.5 px-3 py-3.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer"
              >
                <span>{t('hero.contactUs')}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* ── Educational Hallmarks: Navy Icons, Navy Headings, Muted Gray Descriptions ── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 dark:border-white/10">
              {[
                { title: 'JLPT N5 – N1', desc: 'Structured learning levels' },
                { title: 'Cultural Etiquette', desc: 'Authentic traditions & manners' },
                { title: 'Exam Focus', desc: 'Practical language training' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#151b54] dark:text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-[#151b54] dark:text-white">
                      {item.title}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ────── RIGHT COLUMN: Refined Classroom Visual with Clean Integrated Card ────── */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Container with Professional Radius & Subtle Shadow */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 transition-all">
                
                {/* Image Container with Natural Logo & Minimal "Classroom & Online" Badge */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src="/hero-japan.jpg"
                    alt="Japanese Language Classroom with Study Notebooks and View of Japan"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  {/* Clean Top Badges without Clutter */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center">
                    {/* Natural Logo without Outline/Border Box */}
                    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-xs">
                      <img
                        src="/logo.png"
                        alt="World Lanka Japanese Education"
                        className="h-6 sm:h-7 w-auto object-contain"
                      />
                    </div>

                    {/* Minimal Integrated Status Badge */}
                    <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-white font-medium flex items-center gap-1.5 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Classroom & Online</span>
                    </div>
                  </div>

                  {/* Clean Bottom Overlay Line */}
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <div className="text-xs font-semibold tracking-wide text-white/95">
                      World Lanka Japanese Language Education
                    </div>
                  </div>
                </div>

                {/* ── Fixed "Cultural Understanding" Card: Neatly Integrated Underneath Image (Option A) ── */}
                <div className="p-4 sm:p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#151b54]/5 dark:bg-white/10 text-[#151b54] dark:text-sky-300 font-serif-jp font-bold flex items-center justify-center text-base border border-[#151b54]/10 dark:border-white/10 flex-shrink-0">
                      和
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#151b54] dark:text-white leading-tight">
                        Cultural Understanding
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Etiquette, Traditions & Manners
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#151b54] dark:text-sky-400 bg-slate-50 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-white/5 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cd2127]" />
                    <span>The Cultural Center</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}