import { motion } from 'framer-motion';
import { Play, Calendar, Video } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export function DashboardPreview() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const sidebarBg = isDark ? '#0F172A' : '#f8faff';
  const mainBg = isDark ? 'rgba(15,23,42,0.5)' : 'rgba(241,245,255,0.7)';
  const windowHeader = isDark ? '#0F172A' : '#e8eef8';
  const cardBg = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.85)';
  const cardBorder = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
  const innerCardBg = isDark ? 'rgba(0,0,0,0.20)' : 'rgba(0,0,0,0.03)';
  const innerCardBorder = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)';
  const mockupBg = isDark ? '#1E293B' : '#f0f4ff';
  const mockupBorder = isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.08)';

  return (
    <section className="py-32 overflow-hidden relative" style={{ background: 'var(--bg-base)' }}>
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: isDark ? 'rgba(79,70,229,0.18)' : 'rgba(99,102,241,0.06)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            {t('dashboard.title')}
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('dashboard.subtitle')}
          </p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl rounded-2xl shadow-2xl overflow-hidden"
          style={{ background: mockupBg, border: `1px solid ${mockupBorder}` }}
        >
          {/* Mac window header */}
          <div
            className="h-12 border-b flex items-center px-4 gap-2"
            style={{ background: windowHeader, borderColor: isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.06)' }}
          >
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>

          <div className="flex h-[600px]">
            {/* Sidebar */}
            <div
              className="w-64 border-r p-6 hidden md:block"
              style={{
                background: sidebarBg,
                borderColor: isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.06)',
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white">
                  JD
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>John Doe</div>
                  <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>JLPT N4 Student</div>
                </div>
              </div>
              <div className="space-y-2">
                {['Overview', 'My Courses', 'Live Classes', 'Assignments', 'Certificates'].map((item, i) => (
                  <div
                    key={i}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors`}
                    style={
                      i === 0
                        ? { background: '#4F46E5', color: 'white' }
                        : { color: 'var(--text-secondary)', background: 'transparent' }
                    }
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 overflow-hidden" style={{ background: mainBg }}>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Welcome back, John! 👋</h3>
                <div
                  className="px-4 py-2 rounded-full text-sm"
                  style={{ background: cardBg, border: `1px solid ${cardBorder}`, color: 'var(--text-primary)' }}
                >
                  🔥 12 Day Streak
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { label: 'Overall Progress', val: '68%', color: isDark ? 'text-indigo-400' : 'text-indigo-600' },
                  { label: 'Vocabulary Learned', val: '450', color: isDark ? 'text-green-400' : 'text-green-600' },
                  { label: 'Hours Studied', val: '42h', color: isDark ? 'text-purple-400' : 'text-purple-600' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl"
                    style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
                  >
                    <div className="text-sm mb-2" style={{ color: 'var(--text-tertiary)' }}>{stat.label}</div>
                    <div className={`text-3xl font-bold ${stat.color}`}>{stat.val}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-xl" style={{ background: cardBg, border: `1px solid ${cardBorder}` }}>
                  <h4 className="font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <Play className={`w-4 h-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} /> Continue Learning
                  </h4>
                  <div className="p-4 rounded-lg" style={{ background: innerCardBg, border: `1px solid ${innerCardBorder}` }}>
                    <div className={`text-xs font-medium mb-1 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>JLPT N4 Grammar</div>
                    <div className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Lesson 12: Conditional Form (〜たら)</div>
                    <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.08)' }}>
                      <div className="w-[60%] h-full bg-indigo-500 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl" style={{ background: cardBg, border: `1px solid ${cardBorder}` }}>
                  <h4 className="font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <Calendar className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} /> Upcoming Classes
                  </h4>
                  <div className="space-y-3">
                    <div
                      className="flex items-center justify-between p-3 rounded-lg"
                      style={{ background: innerCardBg, border: `1px solid ${innerCardBorder}` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                          <Video className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Conversation Practice</div>
                          <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Today, 6:00 PM</div>
                        </div>
                      </div>
                      <button
                        className="px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
                        style={{
                          background: isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.06)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}