import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQS = [
  {
    q: 'Do I need prior knowledge of Japanese to start?',
    a: 'No prior knowledge is needed! Our JLPT N5 beginner classes start from the absolute fundamentals: learning to read and write Hiragana and Katakana step by step with clear explanations.',
  },
  {
    q: 'How does World Lanka support Sri Lankan students?',
    a: 'Our curriculum and teaching methodology are specially designed to address common learning hurdles faced by Sri Lankan students, with explanations provided in English and Sinhala to ensure full conceptual understanding.',
  },
  {
    q: 'How often are JLPT examinations held in Sri Lanka?',
    a: 'In Sri Lanka, the Japanese-Language Proficiency Test (JLPT) is typically held twice a year (July and December) under the auspices of the Japanese Language Teachers’ Association of Sri Lanka (JLATSL) and the Embassy of Japan.',
  },
  {
    q: 'Does World Lanka teach Japanese cultural etiquette as well?',
    a: 'Yes, as a dedicated Cultural Center, cultural education is integrated directly into our classes. Students learn proper bowing etiquette, polite honorific speech (Keigo), and everyday Japanese social manners.',
  },
  {
    q: 'Can working professionals or school students join?',
    a: 'Yes. We offer flexible class schedules including weekend and evening batches to accommodate schooling students, university students, and working professionals across Sri Lanka.',
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
            style={{
              borderColor: 'var(--border-color)',
              background: 'var(--card-bg)',
              color: '#cd2127',
            }}
          >
            <span>Common Inquiries</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('faq.title', 'Frequently Asked Questions')}
          </h2>
          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
            Helpful answers to common questions about learning Japanese at World Lanka.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden transition-all duration-300 border shadow-2xs"
              style={{
                background: 'var(--card-bg)',
                borderColor: openIdx === idx ? '#cd2127' : 'var(--card-border)',
              }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-semibold text-sm sm:text-base pr-4" style={{ color: 'var(--text-primary)' }}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#cd2127] transition-transform duration-300 flex-shrink-0 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div
                      className="px-6 pb-5 leading-relaxed pt-2 text-xs sm:text-sm"
                      style={{
                        color: 'var(--text-secondary)',
                        borderTop: '1px solid var(--divider)',
                      }}
                    >
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}