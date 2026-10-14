import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export function SupportButton() {
  const [open, setOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 rounded-2xl shadow-2xl overflow-hidden border"
            style={{
              background: isDark ? 'rgba(8,12,29,0.95)' : 'rgba(255,255,255,0.98)',
              borderColor: 'var(--border-color)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="bg-[#151b54] text-white p-5 border-b border-white/10">
              <div className="font-bold text-base">World Lanka Student Desk</div>
              <p className="text-xs text-white/80 mt-1">
                Have questions about our Japanese language courses?
              </p>
            </div>
            <div className="p-3 space-y-1">
              <a
                href="mailto:hello@worldlanka.jp"
                className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                  isDark ? 'hover:bg-white/5' : 'hover:bg-slate-50'
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/40 text-[#cd2127] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                    Email Student Support
                  </div>
                  <div className="text-xs text-[#cd2127]">hello@worldlanka.jp</div>
                </div>
              </a>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                  isDark ? 'hover:bg-white/5' : 'hover:bg-slate-50'
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#151b54] dark:text-sky-300 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                    Send an Inquiry
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                    Course guidance & registration
                  </div>
                </div>
              </Link>

              <Link
                to="/resources"
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                  isDark ? 'hover:bg-white/5' : 'hover:bg-slate-50'
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#151b54] dark:text-sky-300 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                    Learning Resources
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                    Hiragana, Katakana, JLPT guides
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? 'Close student help' : 'Open student help'}
        className="w-13 h-13 rounded-full bg-[#cd2127] hover:bg-red-700 text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}