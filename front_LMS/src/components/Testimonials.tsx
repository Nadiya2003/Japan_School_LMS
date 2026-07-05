import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    country: 'United States',
    level: 'Passed JLPT N3',
    text: 'The structured curriculum and amazing teachers helped me pass N3 on my first try. The AI practice tools are a game changer!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'David Chen',
    country: 'Singapore',
    level: 'Passed JLPT N2',
    text: 'WorldLanka made learning Kanji actually enjoyable. The dashboard kept me motivated every single day.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Maria Garcia',
    country: 'Spain',
    level: 'Conversation Course',
    text: 'I can finally speak with my Japanese colleagues confidently. The live classes are interactive and incredibly fun.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
  },
];

export function Testimonials() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"
        style={{ background: isDark ? 'rgba(124,58,237,0.10)' : 'rgba(124,58,237,0.06)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('testimonials.title')}
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <Quote
                className="absolute top-8 right-8 w-10 h-10 transition-colors"
                style={{ color: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)' }}
              />

              <div className="flex gap-1 mb-6 text-yellow-400 drop-shadow-sm">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="leading-relaxed mb-8 relative z-10 font-medium" style={{ color: 'var(--text-secondary)' }}>
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{ border: '2px solid var(--border-color)' }}
                />
                <div>
                  <div className="font-bold" style={{ color: 'var(--text-primary)' }}>{testimonial.name}</div>
                  <div
                    className={`text-xs font-semibold mt-0.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}
                  >
                    {testimonial.level} • {testimonial.country}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}