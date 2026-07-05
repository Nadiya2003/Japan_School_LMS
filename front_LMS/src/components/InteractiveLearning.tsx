import { useState, ComponentType } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckSquare,
  Layers,
  PenTool,
  Headphones,
  Bot,
  Check,
  X,
  RotateCw,
  Send,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type TabKey = 'quiz' | 'flashcard' | 'kanji' | 'listening' | 'ai';

const TABS: { key: TabKey; label: string; icon: ComponentType<{ className?: string }> }[] = [
  { key: 'quiz', label: 'Quizzes', icon: CheckSquare },
  { key: 'flashcard', label: 'Flashcards', icon: Layers },
  { key: 'kanji', label: 'Kanji Writing', icon: PenTool },
  { key: 'listening', label: 'Listening', icon: Headphones },
  { key: 'ai', label: 'AI Tutor', icon: Bot },
];

function QuizDemo() {
  const { isDark } = useTheme();
  const options = [
    { label: 'ありがとう', correct: true },
    { label: 'こんにちは', correct: false },
    { label: 'さようなら', correct: false },
    { label: 'すみません', correct: false },
  ];
  const [picked, setPicked] = useState<number | null>(null);

  return (
    <div>
      <div className={`text-sm font-medium mb-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Vocabulary • N5</div>
      <h4 className="text-lg font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
        How do you say "thank you" in Japanese?
      </h4>
      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((opt, i) => {
          const isPicked = picked === i;
          const showState = picked !== null && (isPicked || opt.correct);
          return (
            <button
              key={i}
              onClick={() => setPicked(i)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl border text-left font-jp transition-all ${
                showState && opt.correct
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-600'
                  : showState && isPicked
                  ? 'border-rose-500 bg-rose-500/20 text-rose-600'
                  : isDark
                  ? 'border-white/10 bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-white'
                  : 'border-black/10 bg-slate-50 hover:border-cyan-400/50 hover:bg-cyan-50 text-slate-800'
              }`}
            >
              {opt.label}
              {showState && opt.correct && <Check className="w-4 h-4 text-emerald-500" />}
              {showState && isPicked && !opt.correct && <X className="w-4 h-4 text-rose-500" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FlashcardDemo() {
  const { isDark } = useTheme();
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setFlipped((f) => !f)}
        className="relative w-64 h-40 [perspective:1000px] focus:outline-none"
        aria-label="Flip flashcard"
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 [transform-style:preserve-3d]"
        >
          <div
            className="absolute inset-0 rounded-2xl flex items-center justify-center [backface-visibility:hidden]"
            style={{
              background: isDark ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.85)',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.20)' : 'rgba(0,0,0,0.08)'}`,
            }}
          >
            <span className="text-6xl font-jp font-bold" style={{ color: 'var(--text-primary)' }}>水</span>
          </div>
          <div
            className={`absolute inset-0 rounded-2xl flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] ${
              isDark ? 'bg-cyan-500/20 border border-cyan-500/50' : 'bg-cyan-50 border border-cyan-300'
            }`}
          >
            <span className={`text-2xl font-jp font-bold ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>みず</span>
            <span className={`text-sm mt-1 ${isDark ? 'text-cyan-300/80' : 'text-cyan-600/80'}`}>water</span>
          </div>
        </motion.div>
      </button>
      <button
        onClick={() => setFlipped((f) => !f)}
        className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
          isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'
        }`}
      >
        <RotateCw className="w-4 h-4" /> Tap to flip
      </button>
    </div>
  );
}

function KanjiDemo() {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-40 h-40 rounded-2xl flex items-center justify-center"
        style={{
          background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.7)',
          border: `2px dashed ${isDark ? 'rgba(6,182,212,0.30)' : 'rgba(6,182,212,0.40)'}`,
        }}
      >
        <span
          className="absolute text-8xl font-jp select-none"
          style={{ color: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}
        >
          学
        </span>
        <motion.svg viewBox="0 0 100 100" className="w-32 h-32 relative">
          <motion.path
            d="M50 15 L50 85 M25 40 L75 40 M35 60 L65 60"
            fill="none"
            stroke={isDark ? '#22d3ee' : '#0891b2'}
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.svg>
      </div>
      <p className="text-sm mt-5" style={{ color: 'var(--text-secondary)' }}>
        Follow the guided stroke order for{' '}
        <span className="font-jp font-bold" style={{ color: 'var(--text-primary)' }}>学</span> (study)
      </p>
    </div>
  );
}

function ListeningDemo() {
  const { isDark } = useTheme();
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setPlaying((p) => !p)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 transition-transform"
        aria-label={playing ? 'Pause audio' : 'Play audio'}
      >
        <Headphones className="w-7 h-7" />
      </button>
      <div className="flex items-end gap-1 h-12 mt-6">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.span
            key={i}
            className={`w-1.5 rounded-full ${isDark ? 'bg-cyan-400' : 'bg-cyan-500'}`}
            animate={playing ? { height: [8, 40, 8] } : { height: 8 }}
            transition={{ duration: 0.8, repeat: playing ? Infinity : 0, delay: i * 0.05, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <p className="text-sm mt-5" style={{ color: 'var(--text-secondary)' }}>
        Listen and transcribe the sentence you hear.
      </p>
    </div>
  );
}

function AiDemo() {
  const { isDark } = useTheme();

  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <div className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-tr-sm bg-violet-600 text-white text-sm">
          How do I use the て-form politely?
        </div>
      </div>
      <div className="flex gap-2">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: isDark ? 'rgba(139,92,246,0.20)' : 'rgba(139,92,246,0.12)', color: isDark ? '#a78bfa' : '#7c3aed' }}
        >
          <Bot className="w-4 h-4" />
        </div>
        <div
          className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm"
          style={{
            background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.06)'}`,
            color: 'var(--text-primary)',
          }}
        >
          Add <span className={`font-jp font-semibold ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}>ください</span> after the て-form for polite requests — e.g.{' '}
          <span className={`font-jp font-semibold ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}>待ってください</span> ("please wait"). Want to try one?
        </div>
      </div>
      <div className="flex items-center gap-2 pt-2">
        <div
          className="flex-1 px-4 py-2.5 rounded-full text-sm focus-within:border-violet-500/50 transition-colors"
          style={{
            border: `1px solid var(--border-color)`,
            background: 'var(--bg-muted)',
            color: 'var(--text-tertiary)',
          }}
        >
          Ask your AI tutor anything…
        </div>
        <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-500 cursor-pointer transition-colors">
          <Send className="w-4 h-4 -ml-0.5" />
        </div>
      </div>
    </div>
  );
}

type PanelMap = Record<TabKey, React.ReactNode>;
const PANELS: PanelMap = {
  quiz: <QuizDemo />,
  flashcard: <FlashcardDemo />,
  kanji: <KanjiDemo />,
  listening: <ListeningDemo />,
  ai: <AiDemo />,
};

export function InteractiveLearning() {
  const [active, setActive] = useState<TabKey>('quiz');
  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}
    >
      {/* Background ambient glow */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/4"
        style={{ background: isDark ? 'rgba(6,182,212,0.10)' : 'rgba(6,182,212,0.06)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('interactive.title')}
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('interactive.subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((tab) => {
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg border border-transparent'
                    : isDark
                    ? 'bg-white/5 border border-white/10 text-white/70 hover:text-cyan-400 hover:border-cyan-500/50'
                    : 'bg-white border border-black/10 text-slate-600 hover:text-cyan-600 hover:border-cyan-400/50 hover:bg-cyan-50'
                }`}
                aria-pressed={isActive}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          className="max-w-2xl mx-auto rounded-3xl shadow-2xl p-8 min-h-[320px] flex items-center"
          style={{
            background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.80)',
            border: '1px solid var(--border-color)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                {PANELS[active]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}