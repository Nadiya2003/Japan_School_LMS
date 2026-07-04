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
  Send } from
'lucide-react';
type TabKey = 'quiz' | 'flashcard' | 'kanji' | 'listening' | 'ai';
const TABS: {
  key: TabKey;
  label: string;
  icon: ComponentType<{
    className?: string;
  }>;
}[] = [
{
  key: 'quiz',
  label: 'Quizzes',
  icon: CheckSquare
},
{
  key: 'flashcard',
  label: 'Flashcards',
  icon: Layers
},
{
  key: 'kanji',
  label: 'Kanji Writing',
  icon: PenTool
},
{
  key: 'listening',
  label: 'Listening',
  icon: Headphones
},
{
  key: 'ai',
  label: 'AI Tutor',
  icon: Bot
}];

function QuizDemo() {
  const options = [
  {
    label: 'ありがとう',
    correct: true
  },
  {
    label: 'こんにちは',
    correct: false
  },
  {
    label: 'さようなら',
    correct: false
  },
  {
    label: 'すみません',
    correct: false
  }];

  const [picked, setPicked] = useState<number | null>(null);
  return (
    <div>
      <div className="text-sm font-medium text-brand-600 mb-2">
        Vocabulary • N5
      </div>
      <h4 className="text-lg font-bold text-ink mb-5">
        How do you say “thank you” in Japanese?
      </h4>
      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((opt, i) => {
          const isPicked = picked === i;
          const showState = picked !== null && (isPicked || opt.correct);
          return (
            <button
              key={i}
              onClick={() => setPicked(i)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl border text-left font-jp text-ink transition-all ${showState && opt.correct ? 'border-green-500 bg-green-50' : showState && isPicked ? 'border-red-400 bg-red-50' : 'border-line bg-white hover:border-brand-300 hover:bg-brand-50/50'}`}>
              
              {opt.label}
              {showState && opt.correct &&
              <Check className="w-4 h-4 text-green-600" />
              }
              {showState && isPicked && !opt.correct &&
              <X className="w-4 h-4 text-red-500" />
              }
            </button>);

        })}
      </div>
    </div>);

}
function FlashcardDemo() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setFlipped((f) => !f)}
        className="relative w-64 h-40 [perspective:1000px] focus:outline-none"
        aria-label="Flip flashcard">
        
        <motion.div
          animate={{
            rotateY: flipped ? 180 : 0
          }}
          transition={{
            duration: 0.5
          }}
          className="absolute inset-0 [transform-style:preserve-3d]">
          
          <div className="absolute inset-0 rounded-2xl border border-line bg-white shadow-soft flex items-center justify-center [backface-visibility:hidden]">
            <span className="text-6xl font-jp font-bold text-ink">水</span>
          </div>
          <div className="absolute inset-0 rounded-2xl border border-brand-200 bg-brand-50 shadow-soft flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <span className="text-2xl font-jp font-bold text-brand-700">
              みず
            </span>
            <span className="text-sm text-ink/60 mt-1">water</span>
          </div>
        </motion.div>
      </button>
      <button
        onClick={() => setFlipped((f) => !f)}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
        
        <RotateCw className="w-4 h-4" /> Tap to flip
      </button>
    </div>);

}
function KanjiDemo() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40 rounded-2xl border-2 border-dashed border-brand-200 bg-white flex items-center justify-center">
        <span className="absolute text-8xl font-jp text-brand-100 select-none">
          学
        </span>
        <motion.svg viewBox="0 0 100 100" className="w-32 h-32 relative">
          <motion.path
            d="M50 15 L50 85 M25 40 L75 40 M35 60 L65 60"
            fill="none"
            stroke="#2563EB"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{
              pathLength: 0
            }}
            whileInView={{
              pathLength: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut'
            }} />
          
        </motion.svg>
      </div>
      <p className="text-sm text-ink/60 mt-5">
        Follow the guided stroke order for{' '}
        <span className="font-jp font-bold text-ink">学</span> (study)
      </p>
    </div>);

}
function ListeningDemo() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setPlaying((p) => !p)}
        className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-glow"
        aria-label={playing ? 'Pause audio' : 'Play audio'}>
        
        <Headphones className="w-7 h-7" />
      </button>
      <div className="flex items-end gap-1 h-12 mt-6">
        {Array.from({
          length: 20
        }).map((_, i) =>
        <motion.span
          key={i}
          className="w-1.5 rounded-full bg-brand-400"
          animate={
          playing ?
          {
            height: [8, 40, 8]
          } :
          {
            height: 8
          }
          }
          transition={{
            duration: 0.8,
            repeat: playing ? Infinity : 0,
            delay: i * 0.05,
            ease: 'easeInOut'
          }} />

        )}
      </div>
      <p className="text-sm text-ink/60 mt-5">
        Listen and transcribe the sentence you hear.
      </p>
    </div>);

}
function AiDemo() {
  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <div className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-tr-sm bg-brand-600 text-white text-sm">
          How do I use the て-form politely?
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4" />
        </div>
        <div className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-tl-sm bg-muted text-ink text-sm border border-line">
          Add <span className="font-jp font-semibold">ください</span> after the
          て-form for polite requests — e.g.{' '}
          <span className="font-jp font-semibold">待ってください</span> (“please
          wait”). Want to try one?
        </div>
      </div>
      <div className="flex items-center gap-2 pt-2">
        <div className="flex-1 px-4 py-2.5 rounded-full border border-line bg-white text-sm text-ink/40">
          Ask your AI tutor anything…
        </div>
        <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center">
          <Send className="w-4 h-4" />
        </div>
      </div>
    </div>);

}
type PanelMap = Record<TabKey, React.ReactNode>;
const PANELS: PanelMap = {
  quiz: <QuizDemo />,
  flashcard: <FlashcardDemo />,
  kanji: <KanjiDemo />,
  listening: <ListeningDemo />,
  ai: <AiDemo />
};
export function InteractiveLearning() {
  const [active, setActive] = useState<TabKey>('quiz');
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-muted/30 border-y border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            {t('interactive.title')}
          </h2>
          <p className="text-lg text-ink/70">
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
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${isActive ? 'bg-brand-600 text-white shadow-glow' : 'bg-white border border-line text-ink/70 hover:text-brand-600 hover:border-brand-200'}`}
                aria-pressed={isActive}>
                
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>);

          })}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-line shadow-lift p-8 min-h-[320px] flex items-center">
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                  y: 12
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: -12
                }}
                transition={{
                  duration: 0.25
                }}>
                
                {PANELS[active]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}