import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const POSTS = [
{
  title: 'How to Prepare for JLPT N4 in 3 Months',
  category: 'Study Tips',
  date: 'Oct 12, 2023',
  image:
  'https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&w=600&q=80'
},
{
  title: 'Essential Business Japanese Phrases',
  category: 'Career',
  date: 'Oct 08, 2023',
  image:
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
},
{
  title: "Understanding Keigo: A Beginner's Guide",
  category: 'Grammar',
  date: 'Oct 01, 2023',
  image:
  'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80'
}];

export function BlogPreview() {
  const { t } = useTranslation();
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('blog.title')}
            </h2>
            <p className="text-lg text-white/70">
              Tips, guides, and news from our expert teachers.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all">
            
            {t('blog.readMore')} <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post, idx) =>
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group cursor-pointer">
            
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6 border border-white/10">
                <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
                <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 backdrop-blur-md rounded-full text-xs font-bold text-cyan-300 shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="text-sm text-white/50 font-medium mb-2">
                {post.date}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}