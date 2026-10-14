import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export function CTA() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-10 sm:p-14 md:p-16 text-center relative overflow-hidden shadow-xl border"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(21,27,84,0.4), rgba(205,33,39,0.15))'
              : 'linear-gradient(135deg, #ffffff, #fff5f5)',
            borderColor: 'var(--border-strong)',
          }}
        >
          {/* Subtle Sakura Blossom Gradient */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[90px] pointer-events-none"
            style={{ background: 'rgba(205,33,39,0.08)' }}
          />

          <div className="relative z-10">
            {/* Center Logo */}
            <div className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="World Lanka Japanese Education"
                className="h-11 sm:h-13 w-auto object-contain"
              />
            </div>

            <div className="font-serif-jp text-base sm:text-lg text-[#cd2127] dark:text-red-400 font-bold mb-2">
              日本語を学び、未来への一歩を踏み出そう。
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('contact.title')}
            </h2>

            <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('contact.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-[#cd2127] hover:bg-red-700 text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <GraduationCap className="w-5 h-5" />
                <span>{t('hero.startLearning')}</span>
              </Link>
              <Link
                to="/grades"
                className="px-8 py-4 rounded-xl font-semibold text-base transition-all border flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'var(--card-bg)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <span>{t('hero.exploreCourses')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}