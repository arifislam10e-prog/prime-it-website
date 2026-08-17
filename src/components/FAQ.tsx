import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  { q: 'How long does delivery take?', a: 'Delivery times vary by service. Most orders are completed within 3-7 days. Larger packages may take up to 2 weeks. You will receive a timeline estimate with your order confirmation.' },
  { q: 'Are views organic?', a: 'Yes, all our views are 100% organic. We use proven promotion strategies to reach real audiences. We never use bots, fake accounts, or artificial engagement.' },
  { q: 'How do I place an order?', a: 'Simply click the "Order Now" button on any service or pricing card, fill out the order form with your details, and click "Place Order." You will receive a confirmation email with payment instructions.' },
  { q: 'Do you provide targeted promotion?', a: 'Yes, we offer targeted promotion packages for YouTube, allowing you to reach specific countries, demographics, and interest groups relevant to your content.' },
  { q: 'Which payment methods do you accept?', a: 'We accept PayPal, bank transfer, and major credit cards. Payment instructions are sent to your email after you place your order.' },
  { q: 'Will I receive support after ordering?', a: 'Absolutely. We provide 24/7 client support. You can reach us anytime via email at admin@primeeit.com, and our team will assist you throughout your campaign.' },
];

export default function FAQ() {
  useScrollReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="glow-orb w-[400px] h-[400px] bg-[#00d4ff]/8 top-[20%] right-[-100px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal badge-neon inline-block px-4 py-1.5 rounded-full mb-4">FAQ</div>
          <h2 className="reveal section-title text-white mb-4" style={{ transitionDelay: '0.1s' }}>
            Frequently Asked <span className="gradient-text-blue">Questions</span>
          </h2>
          <div className="reveal section-divider mb-6" style={{ transitionDelay: '0.15s' }} />
          <p className="reveal text-gray-400" style={{ transitionDelay: '0.2s' }}>
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal glass rounded-2xl overflow-hidden"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left group"
              >
                <span className={`font-display font-semibold transition-colors ${
                  open === i ? 'text-[#00d4ff]' : 'text-white group-hover:text-[#00d4ff]'
                }`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                  open === i ? 'bg-[rgba(0,212,255,0.15)] text-[#00d4ff] rotate-180' : 'bg-[rgba(255,255,255,0.05)] text-gray-400'
                }`}>
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <div className={`faq-content ${open === i ? 'open' : ''}`}>
                <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
