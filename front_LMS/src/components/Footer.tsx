import { Twitter, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-white border-t border-line pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold shadow-glow">
                W
              </div>
              <span className="font-bold text-xl tracking-tight text-ink">
                WorldLanka
              </span>
            </div>
            <p className="text-ink/60 leading-relaxed mb-8 max-w-sm">
              A modern Japanese Language Learning Platform dedicated to helping
              students achieve JLPT certification and career success in Japan.
            </p>
            <div className="flex gap-4">
              {[Twitter, Facebook, Instagram, Youtube, Linkedin].map(
                (Icon, i) =>
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-ink/60 hover:bg-brand-50 hover:text-brand-600 transition-colors">
                  
                    <Icon className="w-5 h-5" />
                  </a>

              )}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-ink mb-6">Courses</h4>
            <ul className="space-y-4 text-sm text-ink/60">
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  JLPT N5 - N1
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  Conversation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  Business Japanese
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  Live Classes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-ink mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-ink/60">
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  Student Success
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  Free Practice Test
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-ink mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-ink/60">
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ink/50">
            © {new Date().getFullYear()} WorldLanka Japanese Education. All
            rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-ink/50">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>);

}