import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, Briefcase, PenTool } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export function LearningCategories() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const CATEGORIES = [
    { level: 'N5', title: 'JLPT N5', desc: 'Master hiragana, katakana, and basic grammar.', icon: BookOpen, accent: isDark ? 'text-cyan-400' : 'text-cyan-600' },
    { level: 'N4', title: 'JLPT N4', desc: 'Understand basic daily conversations.', icon: BookOpen, accent: isDark ? 'text-indigo-400' : 'text-indigo-600' },
    { level: 'N3', title: 'JLPT N3', desc: 'Bridge the gap to advanced Japanese.', icon: BookOpen, accent: isDark ? 'text-violet-400' : 'text-violet-600' },
    { level: 'N2', title: 'JLPT N2', desc: 'Business-level comprehension.', icon: BookOpen, accent: isDark ? 'text-purple-400' : 'text-purple-600' },
    { level: 'N1', title: 'JLPT N1', desc: 'Native-like fluency and mastery.', icon: BookOpen, accent: isDark ? 'text-pink-400' : 'text-pink-600' },
    { level: 'Conv', title: 'Conversation', desc: 'Speak naturally with confidence.', icon: MessageCircle, accent: isDark ? 'text-emerald-400' : 'text-emerald-600' },
    { level: 'Biz', title: 'Business', desc: 'Keigo and corporate etiquette.', icon: Briefcase, accent: isDark ? 'text-amber-400' : 'text-amber-600' },
    { level: 'Kanji', title: 'Kanji Mastery', desc: 'Read and write with ease.', icon: PenTool, accent: isDark ? 'text-blue-400' : 'text-blue-600' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: isDark ? 'rgba(124,58,237,0.10)' : 'rgba(124,58,237,0.06)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('categories.title')}
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('categories.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, backgroundColor: 'var(--card-hover-bg)' }}
              className="group relative p-6 rounded-3xl transition-all duration-300 cursor-pointer overflow-hidden"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${cat.accent}`}
                style={{
                  background: 'var(--bg-muted)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <cat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{cat.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {cat.desc}
              </p>

              <div className={`flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ${cat.accent}`}>
                Explore Course <span className="ml-1">→</span>
              </div>

              {/* Decorative background number */}
              <div
                className="absolute -bottom-4 -right-4 text-8xl font-black select-none pointer-events-none transition-colors duration-300"
                style={{ color: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }}
              >
                {cat.level}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}