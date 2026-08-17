import { Target, Eye, TrendingUp, Award, Users, Zap } from 'lucide-react';
import { useScrollReveal, Counter } from '@/hooks/useScrollReveal';
import { useState, useEffect, useRef } from 'react';

const cards = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To deliver real growth, organic engagement, and premium branding for every client through data-driven strategies.',
    glow: 'rgba(0,212,255,0.15)',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To become the most trusted digital marketing partner for creators and brands worldwide.',
    glow: 'rgba(212,160,23,0.15)',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    text: 'Combining SEO, content, paid ads, and creative to build sustainable, long-term online growth.',
    glow: 'rgba(0,212,255,0.15)',
  },
];

const expStats = [
  { label: 'Years Experience', value: 8, suffix: '+', icon: Award },
  { label: 'Team Members', value: 25, suffix: '+', icon: Users },
  { label: 'Campaigns Run', value: 500, suffix: '+', icon: Zap },
];

export default function About() {
  useScrollReveal();
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimate(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="glow-orb w-[400px] h-[400px] bg-[#00d4ff]/8 top-[20%] right-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal badge-neon inline-block px-4 py-1.5 rounded-full mb-4">ABOUT US</div>
          <h2 className="reveal section-title text-white mb-4" style={{ transitionDelay: '0.1s' }}>
            About <span className="gradient-text-blue">Prime IT</span>
          </h2>
          <div className="reveal section-divider mb-8" style={{ transitionDelay: '0.15s' }} />
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image area */}
          <div className="reveal-left relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute inset-0 border border-[rgba(0,212,255,0.2)] rounded-3xl rotate-6" />
              <div className="absolute inset-0 border border-[rgba(212,160,23,0.2)] rounded-3xl -rotate-3" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass p-1">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#0a0f1e] to-[#050810] flex items-center justify-center relative overflow-hidden">
                  {/* Abstract image placeholder */}
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="glow-orb w-48 h-48 bg-[#00d4ff]/20" />
                  <div className="relative text-center p-8">
                    <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border-2 border-[rgba(212,160,23,0.4)] shadow-[0_0_30px_rgba(212,160,23,0.3)] mb-6">
                      <img src="/Logo.jpeg" alt="Prime IT" className="w-full h-full object-cover" />
                    </div>
                    <div className="font-display text-2xl font-bold text-white mb-2">
                      Prime <span className="text-[#ffd700]">IT</span>
                    </div>
                    <div className="text-sm text-gray-400">Digital Marketing Expert</div>
                    <div className="mt-4 flex justify-center gap-2">
                      <span className="badge-neon px-3 py-1 rounded-full text-[10px]">YouTube SEO</span>
                      <span className="badge-neon px-3 py-1 rounded-full text-[10px]">Instagram Growth</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-gold rounded-2xl px-5 py-3 shadow-xl">
                <div className="text-2xl font-bold gold-text">8+</div>
                <div className="text-xs text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right">
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Prime IT is a modern digital marketer focused on helping creators, businesses, influencers, and brands achieve powerful online growth. We specialize in YouTube SEO, YouTube Promotion, Video Editing, Instagram Growth, Facebook Ads, Google Ads, and Thumbnail design.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our mission is to deliver real growth, organic engagement, premium branding, and long-term success for every client.
            </p>

            {/* Experience counters */}
            <div ref={ref} className="grid grid-cols-3 gap-4">
              {expStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="stat-card rounded-xl p-4 text-center">
                    <Icon className="w-5 h-5 text-[#00d4ff] mx-auto mb-2" />
                    <div className="font-display text-2xl font-bold text-white">
                      <Counter end={stat.value} start={animate} />
                      <span className="text-[#00d4ff]">{stat.suffix}</span>
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="reveal card-hover glass rounded-2xl p-8"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: card.glow, border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <Icon className="w-7 h-7 text-[#00d4ff] icon-glow" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
