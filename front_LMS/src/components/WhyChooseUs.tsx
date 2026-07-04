import { motion } from 'framer-motion';
import {
  Users,
  Layout,
  Bot,
  CheckSquare,
  Video,
  LineChart,
  Award,
  Clock } from
'lucide-react';
import { useTranslation } from 'react-i18next';

export function WhyChooseUs() {
  const { t } = useTranslation();

  const FEATURES = [
  {
    title: t('whyChooseUs.reason1'),
    desc: 'Learn from certified native and bilingual instructors.',
    icon: Users
  },
  {
    title: t('whyChooseUs.reason2'),
    desc: 'Curriculum aligned with official JLPT standards.',
    icon: Layout
  },
  {
    title: 'AI Learning Assistant',
    desc: '24/7 grammar checks and vocabulary practice.',
    icon: Bot
  },
  {
    title: 'Interactive Quizzes',
    desc: 'Test your knowledge with real-time feedback.',
    icon: CheckSquare
  },
  {
    title: 'Live Online Classes',
    desc: 'Engage in real-time with teachers and peers.',
    icon: Video
  },
  {
    title: 'Progress Tracking',
    desc: 'Monitor your improvement with detailed analytics.',
    icon: LineChart
  },
  {
    title: 'Certificates',
    desc: 'Earn recognized certificates upon completion.',
    icon: Award
  },
  {
    title: t('whyChooseUs.reason4'),
    desc: 'Study at your own pace, anytime, anywhere.',
    icon: Clock
  }];

  return (
    <section className="py-24 bg-muted/30 border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
              {t('whyChooseUs.title')} <br />
              <span className="text-brand-600">WorldLanka?</span>
            </h2>
            <p className="text-lg text-ink/70 mb-8">
              {t('whyChooseUs.subtitle')}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all">
              
              Read our story <span className="text-xl">→</span>
            </a>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((feat, idx) =>
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.4,
                delay: idx * 0.05
              }}
              whileHover={{ scale: 1.02, backgroundColor: 'white', boxShadow: '0 8px 24px rgba(15,23,42,0.08)' }}
              className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all cursor-pointer">
              
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <feat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-ink mb-1">
                    {feat.title}
                  </h4>
                  <p className="text-sm text-ink/60 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}