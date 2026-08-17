import {
  TrendingUp, Users, Zap, DollarSign, Search, Headphones, Target, Film,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  { icon: TrendingUp, title: 'Real Organic Growth', desc: 'No bots, no fake engagement. Just real, sustainable growth.' },
  { icon: Users, title: 'Professional Marketing Team', desc: 'Experienced marketers dedicated to your success.' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround times without compromising quality.' },
  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Premium services at prices that make sense for your budget.' },
  { icon: Search, title: 'Advanced SEO Strategy', desc: 'Cutting-edge SEO techniques that keep you ahead of competitors.' },
  { icon: Headphones, title: '24/7 Client Support', desc: 'Round-the-clock support whenever you need assistance.' },
  { icon: Target, title: 'Targeted Audience Reach', desc: 'Reach the exact audience that matters to your brand.' },
  { icon: Film, title: 'Premium Video Editing', desc: 'Cinema-quality edits that make your content stand out.' },
];

export default function WhyUs() {
  useScrollReveal();

  return (
    <section id="why-us" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="glow-orb w-[500px] h-[500px] bg-[#00d4ff]/10 top-[30%] left-[50%] -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal badge-neon inline-block px-4 py-1.5 rounded-full mb-4">WHY CHOOSE US</div>
          <h2 className="reveal section-title text-white mb-4" style={{ transitionDelay: '0.1s' }}>
            Why Brands Choose <span className="gradient-text-blue">Prime IT</span>
          </h2>
          <div className="reveal section-divider mb-6" style={{ transitionDelay: '0.15s' }} />
          <p className="reveal text-gray-400 max-w-2xl mx-auto" style={{ transitionDelay: '0.2s' }}>
            We deliver results that matter. Here's what sets us apart from the rest.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="reveal card-hover glass rounded-2xl p-6 group"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#00d4ff] icon-glow" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
