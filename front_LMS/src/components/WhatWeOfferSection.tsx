import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BookOpen, Award, MessageCircle, PenTool, Sparkles, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WhatWeOfferSection() {
  const { t } = useTranslation();

  const SERVICES = [
    {
      icon: BookOpen,
      title: t('whatWeOffer.items.classesTitle'),
      desc: t('whatWeOffer.items.classesDesc'),
      points: ['Comprehensive curriculum', 'Beginner to advanced levels', 'Interactive classes'],
    },
    {
      icon: Award,
      title: t('whatWeOffer.items.jlptTitle'),
      desc: t('whatWeOffer.items.jlptDesc'),
      points: ['Official question patterns', 'Revision sessions', 'Mock examination drills'],
    },
    {
      icon: MessageCircle,
      title: t('whatWeOffer.items.speakingTitle'),
      desc: t('whatWeOffer.items.speakingDesc'),
      points: ['Pronunciation drills', 'Everyday dialogue roleplay', 'Listening comprehension'],
    },
    {
      icon: PenTool,
      title: t('whatWeOffer.items.kanjiTitle'),
      desc: t('whatWeOffer.items.kanjiDesc'),
      points: ['Radicals & stroke orders', 'Pattern recognition', 'Sentence construction'],
    },
    {
      icon: Sparkles,
      title: t('whatWeOffer.items.cultureTitle'),
      desc: t('whatWeOffer.items.cultureDesc'),
      points: ['Bowing etiquette & manners', 'Business Japanese customs', 'Cultural appreciation'],
    },
    {
      icon: Compass,
      title: t('whatWeOffer.items.guidanceTitle'),
      desc: t('whatWeOffer.items.guidanceDesc'),
      points: ['Study planning', 'Language milestone advice', 'Dedicated student support'],
    },
  ];

  return (
    <section id="what-we-offer" className="py-20 lg:py-28 relative overflow-hidden scroll-mt-28" style={{ background: 'var(--bg-base)' }}>
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
            <span>Educational Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('whatWeOffer.title')}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
            {t('whatWeOffer.subtitle')}
          </p>
        </div>

        {/* 6 Education Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#151b54] dark:text-red-400 flex items-center justify-center mb-5">
                  <srv.icon className="w-6 h-6 text-[#cd2127] dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {srv.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                  {srv.desc}
                </p>

                <div className="space-y-2 mb-6">
                  {srv.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cd2127]" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t" style={{ borderColor: 'var(--divider)' }}>
                <Link
                  to="/contact"
                  className="text-xs font-semibold text-[#151b54] dark:text-red-400 hover:text-[#cd2127] flex items-center gap-1.5"
                >
                  <span>Inquire about this program</span>
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
