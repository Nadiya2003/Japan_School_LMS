import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQS = [
{
  q: 'Do I need prior knowledge of Japanese to start?',
  a: 'Not at all! Our JLPT N5 and Beginner courses are designed specifically for absolute beginners. We start from the very basics: Hiragana and Katakana.'
},
{
  q: 'Are the classes live or pre-recorded?',
  a: 'We offer both. You can join our interactive Live Classes for real-time practice, or choose our Self-Paced courses which feature high-quality recorded video lessons.'
},
{
  q: 'How does the AI Learning Assistant work?',
  a: 'Our AI tutor is available 24/7 in your dashboard. You can practice conversations, ask grammar questions, and get instant corrections on your writing.'
},
{
  q: 'Will I get a certificate after completing a course?',
  a: 'Yes, upon successfully completing a course and passing the final assessment, you will receive a verified WorldLanka certificate.'
}];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { t } = useTranslation();
  return (
    <section className="py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-white/70">{t('faq.subtitle')}</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) =>
          <div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30">
            
              <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none">
              
                <span className="font-semibold text-white">{faq.q}</span>
                <ChevronDown
                className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              
              </button>
              <AnimatePresence>
                {openIdx === idx &&
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}>
                
                    <div className="px-6 pb-5 text-white/70 leading-relaxed border-t border-white/5 pt-2">
                      {faq.a}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}