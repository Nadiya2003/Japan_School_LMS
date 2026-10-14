import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BookOpen, FileText, Headphones, Sparkles, Bell, ExternalLink, Bookmark } from 'lucide-react';

export function ResourcesSection() {
  const { t } = useTranslation();

  const RESOURCES = [
    {
      title: t('resources.items.alphabet'),
      desc: t('resources.items.alphabetDesc'),
      icon: BookOpen,
      category: 'Writing System',
      tag: 'PDF Guide',
    },
    {
      title: t('resources.items.jlpt'),
      desc: t('resources.items.jlptDesc'),
      icon: FileText,
      category: 'Examination',
      tag: 'Study Pack',
    },
    {
      title: t('resources.items.vocab'),
      desc: t('resources.items.vocabDesc'),
      icon: Bookmark,
      category: 'Vocabulary',
      tag: 'Word Bank',
    },
    {
      title: t('resources.items.kanji'),
      desc: t('resources.items.kanjiDesc'),
      icon: Sparkles,
      category: 'Characters',
      tag: 'Practice Sheets',
    },
    {
      title: t('resources.items.grammar'),
      desc: t('resources.items.grammarDesc'),
      icon: FileText,
      category: 'Syntax',
      tag: 'Grammar Notes',
    },
    {
      title: t('resources.items.listening'),
      desc: t('resources.items.listeningDesc'),
      icon: Headphones,
      category: 'Audio Drills',
      tag: 'Audio Lessons',
    },
    {
      title: t('resources.items.culture'),
      desc: t('resources.items.cultureDesc'),
      icon: Sparkles,
      category: 'Culture & Manners',
      tag: 'Culture Guide',
    },
    {
      title: t('resources.items.notices'),
      desc: t('resources.items.noticesDesc'),
      icon: Bell,
      category: 'Academic Bulletin',
      tag: 'Notices',
    },
  ];

  return (
    <section id="resources" className="py-20 lg:py-28 relative overflow-hidden scroll-mt-28" style={{ background: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
            style={{
              borderColor: 'var(--border-color)',
              background: 'var(--bg-muted)',
              color: '#cd2127',
            }}
          >
            <span>Learning Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('resources.title')}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
            {t('resources.subtitle')}
          </p>
        </div>

        {/* 8 Resource Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map((res, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#151b54] dark:text-red-400 flex items-center justify-center group-hover:bg-[#cd2127] group-hover:text-white transition-colors">
                    <res.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {res.tag}
                  </span>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#cd2127] mb-1">
                  {res.category}
                </div>

                <h3 className="text-base font-bold mb-2 group-hover:text-[#cd2127] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {res.title}
                </h3>

                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {res.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#cd2127] transition-colors" style={{ borderColor: 'var(--divider)' }}>
                <span>Access Resource</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
