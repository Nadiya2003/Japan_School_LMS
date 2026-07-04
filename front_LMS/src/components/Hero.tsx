import { motion } from 'framer-motion';
import { Code, Lightbulb, Calculator, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const gridItems = [
    { type: 'image', src: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', color: 'bg-blue-100' },
    { type: 'icon', icon: Calculator, color: 'bg-brand-500' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1627556592933-ffe99c1c9cd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', color: 'bg-cyan-100' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', color: 'bg-indigo-100' },
    
    { type: 'image', src: 'https://images.unsplash.com/photo-1522661067900-ab8288d70784?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', color: 'bg-sky-100' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1610484798365-b22ed60742f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', color: 'bg-violet-100' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', color: 'bg-teal-100' },
    { type: 'icon', icon: Globe, color: 'bg-brand-600' },
    
    { type: 'image', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', color: 'bg-blue-50' },
    { type: 'icon', icon: Code, color: 'bg-brand-700' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', color: 'bg-blue-200' },
    { type: 'icon', icon: Lightbulb, color: 'bg-brand-400' },
  ];

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 bg-surface min-h-[calc(100vh-120px)] flex items-center overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-ink mb-6 leading-[1.15]">
              {t('hero.title1')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500 relative inline-block">
                {t('hero.title2')}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-cyan-400/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-ink/70 mb-10 leading-relaxed font-medium">
              {t('hero.subtitle')}
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37,99,235,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold text-lg shadow-glow transition-all duration-300 mb-12 flex items-center gap-2 group"
            >
              {t('hero.learnWithUs')}
              <motion.span className="inline-block group-hover:translate-x-1 transition-transform">
                →
              </motion.span>
            </motion.button>

            {/* Our Brands */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative border-2 border-brand-100 rounded-2xl p-6 bg-white/50 backdrop-blur shadow-sm mt-4 hover:border-brand-300 hover:bg-white transition-colors group"
            >
              <span className="absolute -top-4 left-6 bg-brand-50 text-brand-700 px-3 py-1 rounded-full font-bold text-sm shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors">
                {t('hero.ourBrands')}
              </span>
              <div className="h-16 w-full flex items-center justify-center opacity-50">
                <span className="text-ink/40 font-medium tracking-widest uppercase">Coming Soon</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Image Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-4 grid-rows-3 gap-2 w-full aspect-[4/3] rounded-3xl overflow-hidden p-2 bg-white/40 backdrop-blur-sm shadow-xl border border-white/50"
          >
            {gridItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.08, zIndex: 20, rotate: idx % 2 === 0 ? 1 : -1, borderRadius: '1rem' }}
                className={`relative w-full h-full flex items-center justify-center overflow-hidden cursor-pointer rounded-lg ${item.color} shadow-sm hover:shadow-2xl transition-all duration-300`}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={`Grid ${idx}`}
                    className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:mix-blend-normal hover:opacity-100 transition-all duration-500 hover:scale-110"
                  />
                ) : (
                  item.icon && (
                    <motion.div whileHover={{ rotate: 15, scale: 1.2 }}>
                      <item.icon className="w-12 h-12 text-white/90" strokeWidth={2} />
                    </motion.div>
                  )
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}