import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail, Play, TrendingUp, Eye, Users, CheckCircle } from 'lucide-react';
import { useScrollReveal, Counter } from '@/hooks/useScrollReveal';

const stats = [
  { label: 'Happy Clients', value: 500, suffix: '+', icon: Users },
  { label: 'Views Generated', value: 100, suffix: 'M+', icon: Eye },
  { label: 'Client Satisfaction', value: 95, suffix: '%', icon: CheckCircle },
  { label: 'Projects Completed', value: 1000, suffix: '+', icon: TrendingUp },
];

interface HeroProps {
  onOrderClick: (service?: string, pkg?: string) => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  useScrollReveal();
  const [animateStats, setAnimateStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimateStats(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-scan hero-background"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="glow-orb w-[500px] h-[500px] bg-[#00d4ff]/20 top-[-100px] left-[-100px]" />
      <div className="glow-orb w-[400px] h-[400px] bg-[#0066aa]/20 bottom-[-100px] right-[-100px]" style={{ animationDelay: '2s' }} />
      <div className="glow-orb w-[300px] h-[300px] bg-[#ffd700]/5 top-[40%] left-[60%]" style={{ animationDelay: '1s' }} />

      {/* Floating shapes */}
      <div className="absolute top-[20%] right-[10%] w-20 h-20 border border-[rgba(0,212,255,0.2)] rounded-2xl animate-float" />
      <div className="absolute bottom-[20%] left-[8%] w-16 h-16 border border-[rgba(212,160,23,0.2)] rounded-full animate-float-delay" />
      <div className="absolute top-[60%] right-[20%] w-12 h-12 border border-[rgba(0,212,255,0.15)] rotate-45 animate-float-slow" />

      {/* Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="particle bg-[#00d4ff]/30"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            bottom: '0',
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="hero-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">
              PREMIUM DIGITAL MARKETING AGENCY
            </span>
          </div>

          {/* Headline */}
          <h1 className="reveal section-title text-white mb-6" style={{ transitionDelay: '0.1s' }}>
            Grow Your Brand With{' '}
            <span className="hero-brand-highlight">Prime IT</span>
          </h1>

          {/* Subheadline */}
          <p className="reveal hero-subheadline text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ transitionDelay: '0.2s' }}>
            We help creators, influencers, brands, and businesses dominate YouTube, Instagram, Facebook, and Google with powerful digital growth strategies.
          </p>

          {/* CTAs */}
          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mb-16" style={{ transitionDelay: '0.3s' }}>
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-neon group flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold"
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold"
            >
              <Mail size={18} />
              Contact Us
            </button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto" style={{ transitionDelay: '0.4s' }}>
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="stat-card hero-stat-card rounded-2xl p-5 text-center">
                  <Icon className="w-6 h-6 text-[#00d4ff] mx-auto mb-3 icon-glow" />
                  <div className="font-display text-3xl font-bold text-white">
                    <Counter end={stat.value} start={animateStats} />
                    <span className="text-[#00d4ff]">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 tracking-wide">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-[rgba(0,212,255,0.3)] rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#00d4ff] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
