import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export function CTA() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ borderTop: '1px solid var(--divider)' }}
    >
      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: isDark ? 'rgba(6,182,212,0.10)' : 'rgba(6,182,212,0.06)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          style={{
            background: isDark
              ? 'rgba(255,255,255,0.05)'
              : 'rgba(255,255,255,0.85)',
            border: '1px solid var(--border-color)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Decorative background elements */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px]"
            style={{ background: isDark ? 'rgba(6,182,212,0.18)' : 'rgba(6,182,212,0.10)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px]"
            style={{ background: isDark ? 'rgba(124,58,237,0.18)' : 'rgba(124,58,237,0.08)' }}
          />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Join thousands of students worldwide and master Japanese with our premium platform.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-lg hover:opacity-90 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                {t('cta.button')} <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm border ${
                  isDark
                    ? 'bg-white/10 text-white hover:bg-white/20 border-white/10'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
                }`}
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}