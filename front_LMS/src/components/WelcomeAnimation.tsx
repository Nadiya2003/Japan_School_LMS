import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeAnimationProps {
  onComplete?: () => void;
}

export function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [stage, setStage] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Decorative educational Japanese kanji characters
  const backgroundKanji = [
    { char: '日本', top: '14%', left: '10%', size: 'text-4xl sm:text-6xl', delay: 0.1 },
    { char: '学', top: '22%', right: '12%', size: 'text-5xl sm:text-7xl', delay: 0.2 },
    { char: '文化', bottom: '20%', left: '12%', size: 'text-4xl sm:text-6xl', delay: 0.3 },
    { char: '未来', bottom: '16%', right: '14%', size: 'text-4xl sm:text-6xl', delay: 0.25 },
    { char: '言葉', top: '48%', left: '6%', size: 'text-3xl sm:text-5xl', delay: 0.35 },
  ];

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Lock body scroll while animation is showing
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Sequence timing
    // Step 1: Stage 1 (Sinhala "ආයුබෝවන්") at 0.4s
    const t1 = setTimeout(() => setStage(1), 400);

    // Step 2: Stage 2 (English "Welcome") at 1000ms
    const t2 = setTimeout(() => setStage(2), 1000);

    // Step 3: Stage 3 (Main Japanese "いらっしゃいませ") at 1600ms
    const t3 = setTimeout(() => setStage(3), 1600);

    // Step 4: Fade out and finish at 3200ms
    const t4 = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    // Cleanup and unlock scroll
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    document.body.style.overflow = '';
    onComplete?.();
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="welcome-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: 'blur(6px)',
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center select-none overflow-hidden bg-white dark:bg-[#070b1a]"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(21, 27, 84, 0.04) 0%, transparent 70%)`,
          }}
        >
          {/* ── Background Shippo Pattern Texture ── */}
          <div className="absolute inset-0 bg-shippo opacity-60 pointer-events-none" />

          {/* ── Decorative Floating Kanji (Calm, Educational, Low Opacity) ── */}
          {backgroundKanji.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.07, y: 0 }}
              transition={{ duration: 1.2, delay: item.delay, ease: 'easeOut' }}
              className={`absolute font-serif-jp font-black text-[#151b54] dark:text-white pointer-events-none ${item.size}`}
              style={{
                top: item.top,
                bottom: item.bottom,
                left: item.left,
                right: item.right,
              }}
            >
              {item.char}
            </motion.div>
          ))}

          {/* ── Subtle Center Radial Glow ── */}
          <div
            className="absolute w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(21, 27, 84, 0.08) 0%, rgba(205, 33, 39, 0.03) 60%, transparent 80%)',
            }}
          />

          {/* ── Skip Button (Subtle, Top Right) ── */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-[#151b54] dark:hover:text-white transition-colors cursor-pointer border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm z-20"
          >
            Skip →
          </button>

          {/* ── Main Animation Content Card ── */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
            
            {/* Header Brand Pill: World Lanka Japanese Education */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 shadow-2xs mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#151b54] dark:bg-sky-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#151b54] dark:text-slate-200">
                World Lanka Japanese Education
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#cd2127]" />
            </motion.div>

            {/* Step 3: Sinhala Welcome — ආයුබෝවන් */}
            <div className="h-9 sm:h-11 flex items-center justify-center mb-2">
              <AnimatePresence>
                {stage >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="font-sinhala text-lg sm:text-2xl font-bold tracking-wide text-slate-500 dark:text-slate-300"
                  >
                    ආයුබෝවන්
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Step 4: English Welcome — Welcome */}
            <div className="h-8 sm:h-9 flex items-center justify-center mb-4">
              <AnimatePresence>
                {stage >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, letterSpacing: '0.4em' }}
                    animate={{ opacity: 1, y: 0, letterSpacing: '0.2em' }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#151b54]/80 dark:text-sky-300"
                  >
                    Welcome
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Step 5: Grand Main Japanese Welcome — いらっしゃいませ */}
            <div className="min-h-[90px] sm:min-h-[120px] flex items-center justify-center">
              <AnimatePresence>
                {stage >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94, y: 14, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex flex-col items-center"
                  >
                    <h1 className="font-serif-jp text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#151b54] dark:text-white tracking-tight leading-none">
                      いらっしゃいませ
                      <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#cd2127] ml-2 sm:ml-3 align-baseline" />
                    </h1>

                    {/* Small Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.5 }}
                      className="text-xs sm:text-sm font-medium tracking-wider text-slate-500 dark:text-slate-400 mt-4 sm:mt-5"
                    >
                      The Cultural Center • Japanese Language Institute in Sri Lanka
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Japanese Culture Accent Line */}
          <div className="absolute bottom-6 flex items-center gap-3 text-[11px] font-medium text-slate-400 dark:text-slate-500">
            <span>日本語教育</span>
            <span>•</span>
            <span>文化理解</span>
            <span>•</span>
            <span>未来への扉</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
