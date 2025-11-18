'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '/resume.pdf' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black border-t-2 border-slate-800/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-blue-500/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                KS
              </motion.div>
              <span className="font-bold text-xl text-slate-100">Kritika Singh</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full-Stack Developer | Shopify Specialist | ML Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-6 flex items-center gap-2">
              <span>🔗</span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    suppressHydrationWarning
                  >
                    <span className="text-xs">→</span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-6 flex items-center gap-2">
              <span>🌐</span>
              Connect
            </h3>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/Kritikas1212', label: 'GitHub', color: 'hover:border-slate-400 hover:bg-slate-800/50' },
                { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:border-blue-500 hover:bg-blue-500/10' },
                { icon: Mail, href: 'mailto:kritikaasinghhh@gmail.com', label: 'Email', color: 'hover:border-emerald-500 hover:bg-emerald-500/10' },
              ].map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`w-12 h-12 bg-slate-800/50 border-2 border-slate-700 rounded-xl flex items-center justify-center ${color} transition-all group shadow-lg`}
                  title={label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  suppressHydrationWarning
                >
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-slate-400 text-sm text-center">
            © 2025 Kritika Singh. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm text-center">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to Top Button - Enhanced */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-full shadow-2xl shadow-cyan-500/50 flex items-center justify-center z-40 border-2 border-cyan-400/30"
        whileHover={{ scale: 1.15, y: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <ArrowUp size={22} />
      </motion.button>
    </footer>
  );
}

