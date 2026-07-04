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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              {t('blog.title')}
            </h2>
            <p className="text-lg text-ink/70">
              Tips, guides, and news from our expert teachers.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all">
            
            {t('blog.readMore')} <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post, idx) =>
          <motion.div
            key={idx}
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
            transition={{
              duration: 0.5,
              delay: idx * 0.1
            }}
            className="group cursor-pointer">
            
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-ink">
                  {post.category}
                </div>
              </div>
              <div className="text-sm text-ink/50 font-medium mb-2">
                {post.date}
              </div>
              <h3 className="text-xl font-bold text-ink group-hover:text-brand-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}