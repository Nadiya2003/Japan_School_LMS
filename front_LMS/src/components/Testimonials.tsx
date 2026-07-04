import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const TESTIMONIALS = [
{
  name: 'Sarah Jenkins',
  country: 'United States',
  level: 'Passed JLPT N3',
  text: 'The structured curriculum and amazing teachers helped me pass N3 on my first try. The AI practice tools are a game changer!',
  avatar:
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
},
{
  name: 'David Chen',
  country: 'Singapore',
  level: 'Passed JLPT N2',
  text: 'WorldLanka made learning Kanji actually enjoyable. The dashboard kept me motivated every single day.',
  avatar:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
},
{
  name: 'Maria Garcia',
  country: 'Spain',
  level: 'Conversation Course',
  text: 'I can finally speak with my Japanese colleagues confidently. The live classes are interactive and incredibly fun.',
  avatar:
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
}];

export function Testimonials() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-muted/50 border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-ink/70">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1
            }}
            className="bg-white p-8 rounded-3xl border border-line shadow-sm hover:shadow-lift transition-all duration-300 relative">
            
              <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-100" />

              <div className="flex gap-1 mb-6 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) =>
              <Star key={i} className="w-5 h-5 fill-current" />
              )}
              </div>

              <p className="text-ink/80 leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover" />
              
                <div>
                  <div className="font-bold text-ink">{testimonial.name}</div>
                  <div className="text-xs font-medium text-brand-600">
                    {testimonial.level} • {testimonial.country}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}