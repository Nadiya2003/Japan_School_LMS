import { Twitter, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Footer() {
  const { isDark } = useTheme();

  const linkHover = isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600';
  const iconHover = isDark
    ? 'hover:bg-cyan-500/20 hover:text-cyan-400'
    : 'hover:bg-cyan-100 hover:text-cyan-600';

  return (
    <footer
      className="pt-20 pb-10"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--divider)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-bold">
                W
              </div>
              <span className="font-bold text-xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
                WorldLanka
              </span>
            </div>
            <p className="leading-relaxed mb-8 max-w-sm" style={{ color: 'var(--text-secondary)' }}>
              A modern Japanese Language Learning Platform dedicated to helping students achieve JLPT certification and career success in Japan.
            </p>
            <div className="flex gap-4">
              {[Twitter, Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${iconHover}`}
                  style={{
                    background: 'var(--bg-muted)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: 'Courses',
              links: ['JLPT N5 - N1', 'Conversation', 'Business Japanese', 'Live Classes', 'Pricing'],
            },
            {
              title: 'Resources',
              links: ['Blog', 'Student Success', 'Help Center', 'Free Practice Test', 'Gallery'],
            },
            {
              title: 'Company',
              links: ['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service'],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold mb-6" style={{ color: 'var(--text-primary)' }}>{col.title}</h4>
              <ul className="space-y-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className={`transition-colors ${linkHover}`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid var(--divider)' }}
        >
          <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
            © {new Date().getFullYear()} WorldLanka Japanese Education. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}