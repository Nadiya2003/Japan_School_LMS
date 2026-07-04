import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function CTA() {
  const { t } = useTranslation();
  return (
    <section className="py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/20 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Join thousands of students worldwide and master Japanese with our premium platform.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 rounded-full bg-cyan-500 text-[#020817] font-bold text-lg hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 flex items-center justify-center gap-2">
                
                {t('cta.button')} <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-lg hover:bg-white/20 border border-white/10 transition-all duration-300 backdrop-blur-sm">
                
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}