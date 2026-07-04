import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
type Stat = {
  label: string;
  target: number;
  suffix?: string;
  format?: 'plain' | 'compact';
};

function formatValue(value: number, stat: Stat): string {
  if (stat.format === 'compact') {
    if (value >= 1000000)
    return `${(value / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
    if (value >= 1000)
    return `${(value / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  }
  return Math.round(value).toString();
}
function Counter({ stat }: {stat: Stat;}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(eased * stat.target);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, stat.target]);
  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight tabular-nums">
        {formatValue(display, stat)}
        {stat.suffix}
      </div>
      <div className="text-brand-100 font-medium text-xs md:text-sm uppercase tracking-wider">
        {stat.label}
      </div>
    </div>);

}
export function Stats() {
  const { t } = useTranslation();
  const STATS: Stat[] = [
  {
    label: t('stats.students'),
    target: 15000,
    suffix: '+',
    format: 'compact'
  },
  {
    label: 'Lessons Completed',
    target: 2500000,
    suffix: '+',
    format: 'compact'
  },
  {
    label: 'Certified Teachers',
    target: 120,
    suffix: '+'
  },
  {
    label: t('stats.success'),
    target: 98,
    suffix: '%'
  },
  {
    label: t('stats.courses'),
    target: 9800,
    suffix: '+',
    format: 'compact'
  }];
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 md:divide-x divide-white/10 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
        >
          {STATS.map((stat) =>
            <Counter key={stat.label} stat={stat} />
          )}
        </motion.div>
      </div>
    </section>
  );

}