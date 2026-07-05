import { motion } from 'framer-motion';
import {
  Users,
  Layout,
  Bot,
  CheckSquare,
  Video,
  LineChart,
  Award,
  Clock,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export function WhyChooseUs() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const FEATURES = [
    { title: t('whyChooseUs.reason1'), desc: 'Learn from certified native and bilingual instructors.', icon: Users },
    { title: t('whyChooseUs.reason2'), desc: 'Curriculum aligned with official JLPT standards.', icon: Layout },
    { title: 'AI Learning Assistant', desc: '24/7 grammar checks and vocabulary practice.', icon: Bot },
    { title: 'Interactive Quizzes', desc: 'Test your knowledge with real-time feedback.', icon: CheckSquare },
    { title: 'Live Online Classes', desc: 'Engage in real-time with teachers and peers.', icon: Video },
    { title: 'Progress Tracking', desc: 'Monitor your improvement with detailed analytics.', icon: LineChart },
    { title: 'Certificates', desc: 'Earn recognized certificates upon completion.', icon: Award },
    { title: t('whyChooseUs.reason4'), desc: 'Study at your own pace, anytime, anywhere.', icon: Clock },
  ];

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}
    >
      {/* Background ambient glow */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: isDark ? 'rgba(6,182,212,0.10)' : 'rgba(6,182,212,0.06)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
              {t('whyChooseUs.title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-500">WorldLanka?</span>
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              {t('whyChooseUs.subtitle')}
            </p>
            <a
              href="#"
              className={`inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'}`}
            >
              Read our story <span className="text-xl">→</span>
            </a>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.02, backgroundColor: 'var(--card-hover-bg)' }}
                className="flex gap-4 p-5 rounded-2xl transition-all cursor-pointer"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                }}
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}
                  style={{
                    background: 'var(--bg-muted)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <feat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {feat.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}