import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BookOpen, HeartHandshake, Users, Compass, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutSection({ showCta = true }: { showCta?: boolean }) {
  const { t } = useTranslation();

  const PILLARS = [
    {
      icon: BookOpen,
      title: t('about.pillars.langTitle'),
      desc: t('about.pillars.langDesc'),
      highlight: 'Hiragana, Katakana, Kanji, Grammar',
    },
    {
      icon: HeartHandshake,
      title: t('about.pillars.cultureTitle'),
      desc: t('about.pillars.cultureDesc'),
      highlight: 'Traditions, Etiquette, Lifestyle',
    },
    {
      icon: Users,
      title: t('about.pillars.studentTitle'),
      desc: t('about.pillars.studentDesc'),
      highlight: 'Interactive, Student-friendly',
    },
    {
      icon: Compass,
      title: t('about.pillars.guidanceTitle'),
      desc: t('about.pillars.guidanceDesc'),
      highlight: 'Examination Prep & Goals',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden scroll-mt-28" style={{ background: 'var(--bg-base)' }}>
      {/* Subtle Japanese Background Pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
            style={{
              borderColor: 'var(--border-color)',
              background: 'var(--card-bg)',
              color: '#cd2127',
            }}
          >
            <span>The Cultural Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6" style={{ color: 'var(--text-primary)' }}>
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
            {t('about.intro')}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#151b54] dark:text-sky-300 flex items-center justify-center mb-5">
                  <pillar.icon className="w-6 h-6 text-[#151b54] dark:text-sky-300" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-3 border-t text-xs font-semibold text-[#151b54] dark:text-sky-300 flex items-center gap-1.5" style={{ borderColor: 'var(--divider)' }}>
                <CheckCircle className="w-3.5 h-3.5 text-[#cd2127]" />
                <span>{pillar.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Institute Values Banner */}
        <div
          className="rounded-2xl p-6 sm:p-8 border flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: 'var(--bg-surface)',
            borderColor: 'var(--border-strong)',
          }}
        >
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="World Lanka Logo" className="h-11 w-auto object-contain flex-shrink-0" />
            <div>
              <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                {t('brand.sriLankaFocus')}
              </div>
              <div className="text-xs sm:text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                {t('brand.motto')}
              </div>
            </div>
          </div>

          {showCta && (
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-xl bg-[#151b54] dark:bg-[#cd2127] text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm"
            >
              {t('hero.startLearning')}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
