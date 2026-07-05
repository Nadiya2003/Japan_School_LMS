import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export function TrustLogos() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <section
      className="py-10 overflow-hidden"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--divider)',
        borderBottom: '1px solid var(--divider)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-sm font-semibold uppercase tracking-wider mb-8"
          style={{ color: 'var(--text-tertiary)' }}
        >
          {t('trustLogos.title')}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
          {['東京大学', 'JAPAN FOUNDATION', 'JASSO', 'MEXT', 'JLPT'].map((logo) => (
            <div
              key={logo}
              className={`text-xl font-bold font-jp transition-colors ${isDark ? 'text-white' : 'text-slate-800'}`}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}