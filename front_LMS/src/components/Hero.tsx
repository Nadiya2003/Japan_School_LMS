import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles, ArrowRight, PlayCircle, Star, Users, BookOpen, TrendingUp } from 'lucide-react';

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

const pulseVariants = {
  initial: { scale: 1, opacity: 0.7 },
  animate: {
    scale: [1, 1.12, 1],
    opacity: [0.7, 1, 0.7],
    transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
  },
};

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020817]">

      {/* ── Deep dark gradient base ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#0a0f2e] to-[#050c1a]" />

      {/* ── Radial aurora glow blobs ── */}
      <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-brand-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-violet-600/10 blur-[80px] pointer-events-none" />

      {/* ── Japanese kanji watermark ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[28vw] font-black text-white/[0.02] leading-none tracking-tighter" style={{ fontFamily: 'serif' }}>
          日本語
        </span>
      </div>

      {/* ── Dot grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Animated floating sakura petals ── */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${8 + i * 4}px`,
            height: `${8 + i * 4}px`,
            left: `${10 + i * 14}%`,
            top: `${15 + (i % 3) * 25}%`,
            background: `radial-gradient(circle, rgba(${i % 2 === 0 ? '244,114,182' : '139,92,246'},0.5) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -20 - i * 5, 0],
            x: [0, 10 - i * 3, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        />
      ))}

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ────── LEFT: Copy ────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/40 bg-brand-500/10 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span className="text-sm font-semibold text-brand-300 tracking-wide">
                #1 Japanese LMS Platform in Sri Lanka
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="block text-white">
                {t('hero.title1')}
              </span>
              <span className="relative block">
                <span className="bg-gradient-to-r from-cyan-400 via-brand-400 to-violet-400 bg-clip-text text-transparent">
                  {t('hero.title2')}
                </span>
                {/* Underline shimmer */}
                <motion.span
                  className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-cyan-400 via-brand-400 to-violet-400 opacity-60"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-white/60 leading-relaxed mb-10 max-w-lg">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-14">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99,102,241,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-base overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED, #0EA5E9)' }}
              >
                <span className="relative z-10">{t('hero.learnWithUs')}</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                {/* Shimmer sweep */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white/80 border border-white/20 bg-white/5 backdrop-blur-sm text-base transition-colors"
              >
                <PlayCircle className="w-5 h-5 text-cyan-400" />
                Watch Demo
              </motion.button>
            </div>

            {/* Social proof row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-6"
            >
              {/* Avatars */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['#4F46E5', '#7C3AED', '#0EA5E9', '#06B6D4'].map((color, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-[#020817] flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: color }}
                    >
                      {['YK', 'AM', 'RS', 'LN'][i]}
                    </div>
                  ))}
                </div>
                <div className="ml-1">
                  <div className="text-white font-bold text-sm">15,000+</div>
                  <div className="text-white/40 text-xs">Active Students</div>
                </div>
              </div>

              <div className="w-px h-8 bg-white/15" />

              {/* Stars */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-white/70 text-sm font-medium">4.9/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ────── RIGHT: Visual cards ────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="relative"
          >
            {/* Central glassmorphism hero card */}
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Kanji hero image area */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#0a0f2e] to-[#1a0533]">
                {/* Animated kanji grid */}
                <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 gap-1 p-3 opacity-20">
                  {['日', '本', '語', '学', '習', '文', '字', '勉', '強', '先', '生', '練', '習', '会', '話'].map((k, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-center text-2xl text-cyan-300 font-bold"
                      style={{ fontFamily: 'serif' }}
                      animate={{ opacity: [0.2, 0.8, 0.2] }}
                      transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
                    >
                      {k}
                    </motion.div>
                  ))}
                </div>

                {/* Center glowing orb */}
                <motion.div
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.6), rgba(14,165,233,0.2), transparent)' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-black text-white/90 tracking-tight drop-shadow-2xl" style={{ fontFamily: 'serif', textShadow: '0 0 40px rgba(99,102,241,0.8)' }}>
                    日本語
                  </span>
                </div>
              </div>

              {/* Card bottom stats */}
              <div className="p-6 grid grid-cols-3 gap-4">
                {[
                  { icon: BookOpen, label: 'Courses', value: '200+', color: 'text-cyan-400' },
                  { icon: Users, label: 'Students', value: '15K+', color: 'text-violet-400' },
                  { icon: TrendingUp, label: 'Pass Rate', value: '98%', color: 'text-emerald-400' },
                ].map(({ icon: Icon, label, value, color }, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer"
                  >
                    <Icon className={`w-5 h-5 mx-auto mb-1 ${color}`} />
                    <div className={`text-xl font-black ${color}`}>{value}</div>
                    <div className="text-white/40 text-xs">{label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Floating badge: Live class ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
              className="absolute -top-5 -right-5 flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/15 shadow-xl"
              style={{ background: 'rgba(10,15,46,0.9)', backdropFilter: 'blur(16px)' }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
              </span>
              <div>
                <div className="text-white text-xs font-bold">Live Class Now</div>
                <div className="text-white/40 text-[10px]">JLPT N3 Grammar</div>
              </div>
            </motion.div>

            {/* ── Floating badge: Streak ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-5 -left-5 flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/15 shadow-xl"
              style={{ background: 'rgba(10,15,46,0.9)', backdropFilter: 'blur(16px)' }}
            >
              <span className="text-2xl">🔥</span>
              <div>
                <div className="text-white text-xs font-bold">12 Day Streak!</div>
                <div className="text-white/40 text-[10px]">Keep it up 頑張って</div>
              </div>
            </motion.div>

            {/* ── Floating JLPT level pill ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, type: 'spring', stiffness: 180 }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 flex flex-col gap-2"
            >
              {['N5', 'N4', 'N3', 'N2', 'N1'].map((level, i) => (
                <motion.div
                  key={level}
                  whileHover={{ x: -6, scale: 1.1 }}
                  className="px-3 py-1.5 rounded-lg text-xs font-black text-white shadow-lg cursor-pointer transition-all"
                  style={{
                    background: [
                      'linear-gradient(135deg,#3B82F6,#6366F1)',
                      'linear-gradient(135deg,#6366F1,#8B5CF6)',
                      'linear-gradient(135deg,#8B5CF6,#A855F7)',
                      'linear-gradient(135deg,#A855F7,#D946EF)',
                      'linear-gradient(135deg,#D946EF,#EC4899)',
                    ][i],
                    opacity: 0.85,
                  }}
                >
                  {level}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Bottom scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}