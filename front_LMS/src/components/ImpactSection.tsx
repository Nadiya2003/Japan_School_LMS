import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Award, Compass, Sparkles } from 'lucide-react';

export function ImpactSection() {
  const { t } = useTranslation();

  const IMPACT_CARDS = [
    {
      icon: MessageSquare,
      title: t('impact.cards.confidenceTitle'),
      desc: t('impact.cards.confidenceDesc'),
      step: '01',
      badge: 'Core Competency',
    },
    {
      icon: Award,
      title: t('impact.cards.examTitle'),
      desc: t('impact.cards.examDesc'),
      step: '02',
      badge: 'JLPT & NAT',
    },
    {
      icon: Compass,
      title: t('impact.cards.cultureTitle'),
      desc: t('impact.cards.cultureDesc'),
      step: '03',
      badge: 'Cultural Etiquette',
    },
    {
      icon: Sparkles,
      title: t('impact.cards.futureTitle'),
      desc: t('impact.cards.futureDesc'),
      step: '04',
      badge: 'Global Horizons',
    },
  ];

  return (
    <section id="impact" className="py-20 lg:py-28 relative overflow-hidden scroll-mt-28" style={{ background: 'var(--bg-surface)' }}>
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
            <span>Real Student Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('impact.title')}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
            {t('impact.subtitle')}
          </p>
        </div>

        {/* 4 Benefit-Focused Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#151b54]/5 dark:bg-white/10 text-[#151b54] dark:text-red-400 flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-[#cd2127] dark:text-red-400" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {card.desc}
                </p>
              </div>

              {/* Step indicator watermark */}
              <div className="mt-8 pt-4 border-t flex justify-between items-center text-xs font-semibold" style={{ borderColor: 'var(--divider)' }}>
                <span className="text-slate-400">Step {card.step}</span>
                <span className="text-[#cd2127]">World Lanka Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
