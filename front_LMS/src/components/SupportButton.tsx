import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail, Phone, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const OPTIONS = [
{
  icon: MessageCircle,
  label: 'Chat with us',
  desc: 'Typically replies in a few minutes'
},
{
  icon: Mail,
  label: 'Email support',
  desc: 'hello@worldlanka.jp'
},
{
  icon: Phone,
  label: 'Call / WhatsApp',
  desc: '+81 90 1234 5678'
},
{
  icon: BookOpen,
  label: 'Help Center',
  desc: 'Guides & FAQs'
}];

export function SupportButton() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="mb-4 w-80 rounded-3xl bg-[#020817]/95 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
          
            <div className="bg-gradient-to-r from-cyan-500 to-violet-600 text-white p-5 border-b border-white/10">
              <div className="font-bold text-lg">{t('support.help')}</div>
              <p className="text-sm text-white/80 mt-1">
                Our team is here to support your Japanese journey.
              </p>
            </div>
            <div className="p-3">
              {OPTIONS.map((opt) =>
            <a
              key={opt.label}
              href="#"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
              
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <opt.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {opt.label}
                    </div>
                    <div className="text-xs text-white/50">{opt.desc}</div>
                  </div>
                </a>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? 'Close support' : 'Open support'}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-glow flex items-center justify-center hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
        
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}>
            
            {open ?
            <X className="w-6 h-6" /> :
            <MessageCircle className="w-6 h-6" />
            }
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}