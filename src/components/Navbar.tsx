import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onAuditClick: () => void;
}

export default function Navbar({ onAuditClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      let current = 'home';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050810]/95 backdrop-blur-xl border-b border-[rgba(0,212,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav('#home')}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-[rgba(212,160,23,0.3)] group-hover:border-[rgba(212,160,23,0.6)] transition-all duration-300 shadow-[0_0_15px_rgba(212,160,23,0.2)]">
                <img
                  src="/Logo.jpeg"
                  alt="Prime IT Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-bold text-xl text-white hidden sm:block">
                Prime <span className="text-[#ffd700]">IT</span>
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-[#00d4ff] bg-[rgba(0,212,255,0.08)]'
                      : 'text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={onAuditClick}
                className="btn-neon hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
              >
                Free Audit
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg glass text-gray-300 hover:text-white transition-colors"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`mobile-menu absolute left-0 top-0 bottom-0 w-72 bg-[#050810]/98 border-r border-[rgba(0,212,255,0.15)] p-6 pt-24 flex flex-col gap-2 ${
            mobileOpen ? 'open' : ''
          }`}
        >
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[rgba(0,212,255,0.1)]">
            <img src="/Logo.jpeg" alt="Prime IT" className="w-10 h-10 rounded-lg object-cover" />
            <span className="font-display font-bold text-lg text-white">
              Prime <span className="text-[#ffd700]">IT</span>
            </span>
          </div>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-[#00d4ff] bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)]'
                  : 'text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onAuditClick(); }}
            className="btn-neon mt-4 px-5 py-3 rounded-xl text-sm font-semibold text-white text-center"
          >
            Free Audit
          </button>
        </div>
      </div>
    </>
  );
}
