import { motion } from 'framer-motion';
import {
  UserPlus,
  Map,
  Video,
  CheckCircle,
  TrendingUp,
  Award } from
'lucide-react';
import { useTranslation } from 'react-i18next';
const STEPS = [
{
  title: 'Create an Account',
  desc: 'Sign up in seconds and set your goals.',
  icon: UserPlus
},
{
  title: 'Choose Your Path',
  desc: 'Select your target JLPT level or course.',
  icon: Map
},
{
  title: 'Attend Lessons',
  desc: 'Join live classes or watch recorded videos.',
  icon: Video
},
{
  title: 'Practice Daily',
  desc: 'Use our AI tools and quizzes to reinforce learning.',
  icon: CheckCircle
},
{
  title: 'Track Progress',
  desc: 'Monitor your stats on the dashboard.',
  icon: TrendingUp
},
{
  title: 'Earn Certificates',
  desc: 'Get certified and achieve your dreams.',
  icon: Award
}];

export function LearningJourney() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            {t('journey.title')}
          </h2>
          <p className="text-lg text-ink/70">
            A clear, structured path from your first konnichiwa to complete
            mastery.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-line -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {STEPS.map((step, idx) =>
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
              className="flex flex-col items-center text-center">
              
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-brand-100 shadow-sm flex items-center justify-center text-brand-600 mb-4 relative group">
                  <step.icon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-sm font-bold text-ink mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-ink/60 leading-relaxed max-w-[140px]">
                  {step.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}