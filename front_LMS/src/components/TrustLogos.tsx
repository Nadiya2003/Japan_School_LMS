import { useTranslation } from 'react-i18next';


export function TrustLogos() {
  const { t } = useTranslation();
  return (
    <section className="py-10 border-y border-line bg-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-ink/50 uppercase tracking-wider mb-8">
          {t('trustLogos.title')}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Using text placeholders for logos since external image URLs might be unreliable/CORS blocked */}
          <div className="text-xl font-bold font-jp text-ink">東京大学</div>
          <div className="text-xl font-bold text-ink">JAPAN FOUNDATION</div>
          <div className="text-xl font-bold text-ink">JASSO</div>
          <div className="text-xl font-bold text-ink">MEXT</div>
          <div className="text-xl font-bold text-ink">JLPT</div>
        </div>
      </div>
    </section>);

}