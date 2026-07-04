import { motion } from 'framer-motion';
import { Play, Calendar, Video } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export function DashboardPreview() {
  const { t } = useTranslation();
  return (
    <section className="py-32 bg-[#020817] text-white overflow-hidden relative">
      {/* Dark mode background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('dashboard.title')}
          </h2>
          <p className="text-lg text-white/60">
            {t('dashboard.subtitle')}
          </p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="relative mx-auto max-w-5xl rounded-2xl bg-[#1E293B] border border-white/10 shadow-2xl overflow-hidden">
          
          {/* Mac window header */}
          <div className="h-12 bg-[#0F172A] border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>

          <div className="flex h-[600px]">
            {/* Sidebar */}
            <div className="w-64 border-r border-white/10 p-6 hidden md:block">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center font-bold">
                  JD
                </div>
                <div>
                  <div className="font-semibold text-sm">John Doe</div>
                  <div className="text-xs text-white/50">JLPT N4 Student</div>
                </div>
              </div>
              <div className="space-y-2">
                {[
                'Overview',
                'My Courses',
                'Live Classes',
                'Assignments',
                'Certificates'].
                map((item, i) =>
                <div
                  key={i}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium ${i === 0 ? 'bg-brand-600 text-white' : 'text-white/60 hover:bg-white/5'}`}>
                  
                    {item}
                  </div>
                )}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 bg-[#0F172A]/50 overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold">Welcome back, John! 👋</h3>
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                  🔥 12 Day Streak
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                {
                  label: 'Overall Progress',
                  val: '68%',
                  color: 'text-brand-400'
                },
                {
                  label: 'Vocabulary Learned',
                  val: '450',
                  color: 'text-green-400'
                },
                {
                  label: 'Hours Studied',
                  val: '42h',
                  color: 'text-purple-400'
                }].
                map((stat, i) =>
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white/5 border border-white/10">
                  
                    <div className="text-white/50 text-sm mb-2">
                      {stat.label}
                    </div>
                    <div className={`text-3xl font-bold ${stat.color}`}>
                      {stat.val}
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Play className="w-4 h-4 text-brand-400" /> Continue
                    Learning
                  </h4>
                  <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                    <div className="text-xs text-brand-400 font-medium mb-1">
                      JLPT N4 Grammar
                    </div>
                    <div className="font-semibold mb-3">
                      Lesson 12: Conditional Form (〜たら)
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[60%] h-full bg-brand-500 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" /> Upcoming
                    Classes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                          <Video className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">
                            Conversation Practice
                          </div>
                          <div className="text-xs text-white/50">
                            Today, 6:00 PM
                          </div>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 rounded-md bg-white/10 text-xs font-medium hover:bg-white/20">
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
    </section>);

}