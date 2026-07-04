import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export function CTA() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="bg-ink rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Join thousands of students worldwide and master Japanese with our
              premium platform.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 rounded-full bg-brand-600 text-white font-semibold text-lg hover:bg-brand-500 hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2">
                
                {t('cta.button')} <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}