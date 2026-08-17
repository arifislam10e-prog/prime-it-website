import { useState } from 'react';
import { Check, Crown, Star, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Pkg {
  name: string;
  features: string[];
  price: number;
  popular?: boolean;
}

interface Category {
  name: string;
  packages: Pkg[];
}

const categories: Category[] = [
  {
    name: 'YouTube Video SEO',
    packages: [
      { name: 'Test Project', features: ['1 Video SEO'], price: 50 },
      { name: 'Basic Package', features: ['1 Channel Optimize', '15 Videos per month', 'Proper Keyword Research'], price: 150 },
      { name: 'Standard Package', features: ['2 Channel Optimize', '25 Videos per month', 'Proper Keyword Research', 'Thumbnail design Free'], price: 280, popular: true },
      { name: 'Premium Package', features: ['1 Channel Optimize', '15 Videos per month', 'Proper Keyword Research', 'Thumbnail design Free', 'Video Editing'], price: 500 },
    ],
  },
  {
    name: 'YouTube Promotion — Worldwide',
    packages: [
      { name: 'Basic', features: ['2K+ Organic Worldwide Views'], price: 20 },
      { name: 'Standard', features: ['5K+ Views'], price: 40 },
      { name: 'Premium', features: ['10K+ Views'], price: 70, popular: true },
    ],
  },
  {
    name: 'YouTube Promotion — Targeted',
    packages: [
      { name: 'Basic', features: ['2K+ Targeted Views'], price: 100 },
      { name: 'Standard', features: ['5K+ Targeted Views'], price: 200, popular: true },
      { name: 'Premium', features: ['10K+ Targeted Views'], price: 400 },
    ],
  },
  {
    name: 'Video Editing',
    packages: [
      { name: 'Basic', features: ['2 Minute Video'], price: 20 },
      { name: 'Standard', features: ['10 Minute Video'], price: 80, popular: true },
      { name: 'Premium', features: ['30+ Minute Video'], price: 300 },
    ],
  },
  {
    name: 'Instagram Reels Promotion',
    packages: [
      { name: 'Basic', features: ['50K+ Organic Views'], price: 10 },
      { name: 'Standard', features: ['500K+ Organic Views'], price: 80, popular: true },
      { name: 'Premium', features: ['1M+ Organic Views'], price: 150 },
    ],
  },
  {
    name: 'Instagram Followers Growth',
    packages: [
      { name: 'Basic', features: ['1K+ Followers'], price: 25 },
      { name: 'Standard', features: ['5K+ Followers'], price: 100, popular: true },
      { name: 'Premium', features: ['10K+ Followers'], price: 180 },
    ],
  },
];

interface PricingProps {
  onOrderClick: (service?: string, pkg?: string) => void;
}

export default function Pricing({ onOrderClick }: PricingProps) {
  const [activeTab, setActiveTab] = useState(0);
  useScrollReveal([activeTab]);

  const current = categories[activeTab];

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="glow-orb w-[500px] h-[500px] bg-[#00d4ff]/8 top-[20%] right-[-150px]" />
      <div className="glow-orb w-[300px] h-[300px] bg-[#ffd700]/5 bottom-[10%] left-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="reveal badge-neon inline-block px-4 py-1.5 rounded-full mb-4">PRICING</div>
          <h2 className="reveal section-title text-white mb-4" style={{ transitionDelay: '0.1s' }}>
            Premium <span className="gradient-text-blue">Pricing Plans</span>
          </h2>
          <div className="reveal section-divider mb-6" style={{ transitionDelay: '0.15s' }} />
          <p className="reveal text-gray-400 max-w-2xl mx-auto" style={{ transitionDelay: '0.2s' }}>
            Transparent pricing for every budget. Choose the package that fits your growth goals.
          </p>
        </div>

        {/* Category tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-12" style={{ transitionDelay: '0.25s' }}>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`filter-btn px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === i ? 'active text-[#00d4ff] bg-[rgba(0,212,255,0.15)] border-[rgba(0,212,255,0.5)]' : 'text-gray-400'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {current.packages.map((pkg, i) => (
            <div
              key={`${activeTab}-${i}`}
              className={`reveal-scale card-hover rounded-2xl p-6 flex flex-col relative ${
                pkg.popular ? 'pricing-popular glass-gold' : 'glass'
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ffd700] to-[#d4a017] text-[#050810] text-[10px] font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <Crown size={10} /> POPULAR
                </div>
              )}
              <div className="flex items-center gap-2 mb-4">
                {pkg.popular ? (
                  <Sparkles className="w-5 h-5 text-[#ffd700]" />
                ) : (
                  <Star className="w-5 h-5 text-[#00d4ff]" />
                )}
                <h3 className="font-display text-lg font-bold text-white">{pkg.name}</h3>
              </div>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold text-white">${pkg.price}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-[#ffd700]' : 'text-[#00d4ff]'}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onOrderClick(current.name, `${pkg.name} — $${pkg.price}`)}
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                  pkg.popular
                    ? 'btn-gold'
                    : 'btn-outline'
                }`}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
