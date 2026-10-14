import { useTranslation } from 'react-i18next';
import { Award, BookOpen, Compass, HeartHandshake } from 'lucide-react';

export function SriLankaBanner() {
  const { t } = useTranslation();

  const PILLARS = [
    {
      icon: BookOpen,
      title: 'JLPT Curriculum',
      subtitle: 'N5 to N1 Structured Pathways',
    },
    {
      icon: HeartHandshake,
      title: 'Cultural Etiquette',
      subtitle: 'Traditions, Manners & Respect',
    },
    {
      icon: Compass,
      title: 'Practical Guidance',
      subtitle: 'Designed for Sri Lankan Learners',
    },
    {
      icon: Award,
      title: 'Exam Preparation',
      subtitle: 'Focused revision & practice',
    },
  ];

  return (
    <section
      className="py-10 border-y transition-colors relative z-20"
      style={{
        background: 'var(--bg-surface)',
        borderColor: 'var(--divider)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2"
            style={{ color: 'var(--text-tertiary)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#cd2127]" />
            <span>{t('brand.sriLankaFocus')}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#cd2127]" />
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {PILLARS.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 p-3 rounded-2xl transition-colors hover:bg-slate-50 dark:hover:bg-white/5"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#151b54] dark:text-red-400 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-[#cd2127] dark:text-red-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
