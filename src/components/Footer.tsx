import { Instagram, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'YouTube Video SEO',
  'YouTube Promotion',
  'Video Editing',
  'Instagram Reels',
  'Instagram Followers',
  'Facebook Ads',
  'Google Ads',
  'Thumbnail Design',
];

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/primeeit1/', label: 'Instagram' },
  { icon: Twitter, href: 'https://x.com/prieemit', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/primee-it-606406427/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:admin@primeeit.com', label: 'Email' },
];

export default function Footer() {
  useScrollReveal();

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden border-t border-[rgba(0,212,255,0.1)]">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="glow-orb w-[400px] h-[400px] bg-[#00d4ff]/5 top-[-100px] left-[20%]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-[rgba(212,160,23,0.3)] shadow-[0_0_15px_rgba(212,160,23,0.2)]">
                <img src="/Logo.jpeg" alt="Prime IT" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Prime <span className="text-[#ffd700]">IT</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Premium digital marketing agency helping brands grow across YouTube, Instagram, Facebook, and Google.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-[#00d4ff] hover:border-[rgba(0,212,255,0.4)] hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-gray-500 hover:text-[#00d4ff] text-sm transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-sm">Services</h4>
            <ul className="space-y-2">
              {services.map((service, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNav('#services')}
                    className="text-gray-500 hover:text-[#00d4ff] text-sm transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-sm">Contact</h4>
            <a
              href="mailto:admin@primeeit.com"
              className="text-gray-500 hover:text-[#00d4ff] text-sm transition-colors break-all"
            >
              admin@primeeit.com
            </a>
            <div className="mt-4">
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#00d4ff] text-sm transition-colors block"
              >
                Dribbble
              </a>
              <a
                href="https://www.pinterest.com/primeeit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#00d4ff] text-sm transition-colors block mt-2"
              >
                Pinterest
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.2)] to-transparent mb-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © 2026 Prime IT. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
