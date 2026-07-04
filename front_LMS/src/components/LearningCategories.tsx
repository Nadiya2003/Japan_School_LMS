import { motion } from 'framer-motion';
import {
  BookOpen,
  MessageCircle,
  Briefcase,
  PenTool
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function LearningCategories() {
  const { t } = useTranslation();

  const CATEGORIES = [
  {
    level: 'N5',
    title: 'JLPT N5',
    desc: 'Master hiragana, katakana, and basic grammar.',
    icon: BookOpen,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    level: 'N4',
    title: 'JLPT N4',
    desc: 'Understand basic daily conversations.',
    icon: BookOpen,
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    level: 'N3',
    title: 'JLPT N3',
    desc: 'Bridge the gap to advanced Japanese.',
    icon: BookOpen,
    color: 'bg-violet-100 text-violet-600'
  },
  {
    level: 'N2',
    title: 'JLPT N2',
    desc: 'Business-level comprehension.',
    icon: BookOpen,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    level: 'N1',
    title: 'JLPT N1',
    desc: 'Native-like fluency and mastery.',
    icon: BookOpen,
    color: 'bg-brand-100 text-brand-600'
  },
  {
    level: 'Conv',
    title: 'Conversation',
    desc: 'Speak naturally with confidence.',
    icon: MessageCircle,
    color: 'bg-teal-100 text-teal-600'
  },
  {
    level: 'Biz',
    title: 'Business',
    desc: 'Keigo and corporate etiquette.',
    icon: Briefcase,
    color: 'bg-sky-100 text-sky-600'
  },
  {
    level: 'Kanji',
    title: 'Kanji Mastery',
    desc: 'Read and write with ease.',
    icon: PenTool,
    color: 'bg-cyan-100 text-cyan-600'
  }];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            {t('categories.title')}
          </h2>
          <p className="text-lg text-ink/70">
            {t('categories.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1
            }}
            whileHover={{
              y: -5
            }}
            className="group relative p-6 rounded-3xl border border-line bg-white hover:shadow-lift transition-all duration-300 cursor-pointer overflow-hidden">
            
              <div
              className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              
                <cat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">{cat.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed mb-4">
                {cat.desc}
              </p>

              <div className="flex items-center text-sm font-semibold text-brand-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Explore Course <span className="ml-1">→</span>
              </div>

              {/* Decorative background number */}
              <div className="absolute -bottom-4 -right-4 text-8xl font-black text-muted/50 select-none pointer-events-none group-hover:text-brand-50 transition-colors duration-300">
                {cat.level}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}