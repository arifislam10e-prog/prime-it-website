import { Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('admin@primeeit.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="glow-orb w-[400px] h-[400px] bg-[#00d4ff]/8 top-[20%] left-[50%] -translate-x-1/2" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="reveal badge-neon inline-block px-4 py-1.5 rounded-full mb-4">CONTACT</div>
          <h2 className="reveal section-title text-white mb-4" style={{ transitionDelay: '0.1s' }}>
            Get In <span className="gradient-text-blue">Touch</span>
          </h2>
          <div className="reveal section-divider mb-6" style={{ transitionDelay: '0.15s' }} />
          <p className="reveal text-gray-400" style={{ transitionDelay: '0.2s' }}>
            Ready to start your growth journey? Reach out to us.
          </p>
        </div>

        {/* Contact card */}
        <div className="reveal-scale glass rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border-glow-anim" style={{ transitionDelay: '0.25s' }}>
          <div className="glow-orb w-48 h-48 bg-[#00d4ff]/10 top-[-50px] left-[50%] -translate-x-1/2" />

          <div className="relative">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] flex items-center justify-center mb-6">
              <Mail className="w-10 h-10 text-[#00d4ff] icon-glow" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-gray-500 text-sm mb-6">We respond within 24 hours</p>

            {/* Email display */}
            <div className="flex items-center justify-center gap-3 glass rounded-xl p-4 max-w-md mx-auto">
              <a
                href="mailto:admin@primeeit.com"
                className="text-lg font-display font-semibold text-[#00d4ff] hover:text-white transition-colors"
              >
                admin@primeeit.com
              </a>
              <button
                onClick={copyEmail}
                className="p-2 rounded-lg hover:bg-[rgba(0,212,255,0.1)] text-gray-400 hover:text-[#00d4ff] transition-all"
                title="Copy email"
              >
                {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              </button>
            </div>

            {copied && (
              <p className="text-xs text-green-400 mt-3 animate-fade-in">Copied to clipboard!</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
