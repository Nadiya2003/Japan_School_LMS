import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GradesSection() {
  const { t } = useTranslation();

  const LEVELS = [
    {
      code: 'N5',
      title: 'JLPT N5',
      level: 'Beginner Japanese',
      status: 'Active Intake',
      popular: true,
      points: [
        'Hiragana & Katakana',
        'Basic Kanji (~100 characters)',
        'Basic grammar structures',
        'Everyday vocabulary (~800 words)',
        'Simple everyday conversations',
      ],
      description: 'The foundational level for beginners with no prior knowledge of Japanese.',
    },
    {
      code: 'N4',
      title: 'JLPT N4',
      level: 'Elementary Japanese',
      status: 'Active Intake',
      popular: false,
      points: [
        'Expanded vocabulary (~1,500 words)',
        'Intermediate beginner grammar',
        'Reading short passages & notices',
        'Listening practice for daily situations',
        'Practical communication skills',
      ],
      description: 'Builds upon N5 basics to understand daily conversation spoken at moderate speed.',
    },
    {
      code: 'N3',
      title: 'JLPT N3',
      level: 'Intermediate Japanese',
      status: 'Active Intake',
      popular: false,
      points: [
        'Intermediate grammar structures',
        'Kanji development (~650 characters)',
        'Reading comprehension of articles',
        'Listening comprehension at natural pace',
        'Communication & opinion expression',
      ],
      description: 'Bridges beginner Japanese to practical workplace and everyday social fluency.',
    },
    {
      code: 'N2',
      title: 'JLPT N2',
      level: 'Pre-Advanced Japanese',
      status: 'Level Preview',
      isPlaceholder: true,
      points: [
        'Advanced sentence patterns',
        'Kanji mastery (~1,000 characters)',
        'Newspaper & editorial comprehension',
        'Business Japanese & Keigo etiquette',
        'Oral fluency in diverse situations',
      ],
      description: 'High-level business and academic Japanese required for university and career roles.',
    },
    {
      code: 'N1',
      title: 'JLPT N1',
      level: 'Advanced Japanese',
      status: 'Level Preview',
      isPlaceholder: true,
      points: [
        'Complex linguistic expressions',
        'Comprehensive Kanji (~2,000 characters)',
        'Nuanced philosophical/abstract texts',
        'Natural-speed conversational nuance',
        'Native-level comprehension standard',
      ],
      description: 'The pinnacle of Japanese language certification demonstrating native-level depth.',
    },
  ];

  return (
    <section id="grades" className="py-20 lg:py-28 relative overflow-hidden scroll-mt-28" style={{ background: 'var(--bg-base)' }}>
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
            <span>Graded Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('grades.title')}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
            {t('grades.subtitle')}
          </p>
        </div>

        {/* Level Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {LEVELS.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                item.popular ? 'ring-2 ring-[#cd2127]/30 shadow-lg' : 'shadow-xs'
              }`}
              style={{
                background: 'var(--card-bg)',
                borderColor: item.popular ? '#cd2127' : 'var(--card-border)',
              }}
            >
              {item.popular && (
                <div className="absolute top-0 right-7 -translate-y-1/2 bg-[#cd2127] text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                  Most Popular for Beginners
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-10 h-10 rounded-xl bg-[#151b54] text-white font-bold flex items-center justify-center text-sm font-serif-jp">
                      {item.code}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                        {item.title}
                      </h3>
                      <span className="text-xs font-medium text-[#cd2127]">
                        {item.level}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50">
                    {item.status}
                  </span>
                </div>

                <p className="text-xs leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <Check className="w-3.5 h-3.5 text-[#cd2127] mt-0.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t" style={{ borderColor: 'var(--divider)' }}>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold border transition-all hover:bg-[#151b54] hover:text-white dark:hover:bg-[#cd2127]"
                  style={{
                    borderColor: 'var(--border-strong)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <span>Inquire for {item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholders for N2 and N1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {LEVELS.slice(3).map((item, idx) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              className="p-6 rounded-2xl border transition-all"
              style={{
                background: 'var(--bg-muted)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-700 font-bold flex items-center justify-center text-xs font-serif-jp text-slate-700 dark:text-slate-200">
                    {item.code}
                  </span>
                  <div>
                    <h4 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                      {item.title} — {item.level}
                    </h4>
                    <span className="text-xs text-slate-500">Course Level Curriculum Example</span>
                  </div>
                </div>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {item.status}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-3" style={{ color: 'var(--text-secondary)' }}>
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Curriculum disclaimer / notice as requested */}
        <div className="text-center text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>
          {t('grades.previewNotice')}
        </div>
      </div>
    </section>
  );
}
