import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BlogSection({ limit }: { limit?: number }) {
  const { t } = useTranslation();

  const POSTS = [
    {
      id: 1,
      title: t('blog.posts.p1Title'),
      category: t('blog.posts.p1Cat'),
      date: 'April 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80',
      excerpt: 'A clear roadmap for Sri Lankan beginners starting their Japanese journey from scripts to basic grammar.',
    },
    {
      id: 2,
      title: t('blog.posts.p2Title'),
      category: t('blog.posts.p2Cat'),
      date: 'April 2026',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=700&q=80',
      excerpt: 'Understand why Hiragana comes first, how Katakana represents loanwords, and how to master both efficiently.',
    },
    {
      id: 3,
      title: t('blog.posts.p3Title'),
      category: t('blog.posts.p3Cat'),
      date: 'March 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=700&q=80',
      excerpt: 'Proven study strategies and practice habits to achieve top scores in JLPT N5, N4, and N3 examinations.',
    },
    {
      id: 4,
      title: t('blog.posts.p4Title'),
      category: t('blog.posts.p4Cat'),
      date: 'March 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80',
      excerpt: 'Essential insights into bowing customs, polite speech (Keigo), and Japanese workplace etiquette.',
    },
    {
      id: 5,
      title: t('blog.posts.p5Title'),
      category: t('blog.posts.p5Cat'),
      date: 'February 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
      excerpt: 'Everyday greetings, polite requests, and practical expressions you can start using from day one.',
    },
    {
      id: 6,
      title: t('blog.posts.p6Title'),
      category: t('blog.posts.p6Cat'),
      date: 'February 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=700&q=80',
      excerpt: 'Why Kanji is the bridge to genuine Japanese literacy and practical tips to memorize characters easily.',
    },
  ];

  const displayPosts = limit ? POSTS.slice(0, limit) : POSTS;

  return (
    <section id="blog" className="py-20 lg:py-28 relative overflow-hidden scroll-mt-28" style={{ background: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
              style={{
                borderColor: 'var(--border-color)',
                background: 'var(--bg-muted)',
                color: '#cd2127',
              }}
            >
              <span>Educational Blog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('blog.title')}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed font-normal max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
              {t('blog.subtitle')}
            </p>
          </div>

          {limit && (
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#cd2127] hover:underline"
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* 6 Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              }}
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 dark:bg-slate-900/90 text-[#cd2127] shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs mb-3" style={{ color: 'var(--text-tertiary)' }}>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3
                    className="text-lg font-bold mb-3 leading-snug group-hover:text-[#cd2127] transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t" style={{ borderColor: 'var(--divider)' }}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#151b54] dark:text-red-400 group-hover:text-[#cd2127] transition-colors">
                  <span>{t('blog.readMore')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
