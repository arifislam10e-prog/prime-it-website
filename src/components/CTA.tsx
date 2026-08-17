import { Rocket } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface CTAProps {
  onOrderClick: () => void;
}

export default function CTA({ onOrderClick }: CTAProps) {
  useScrollReveal();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="glow-orb w-[600px] h-[600px] bg-[#00d4ff]/12 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" />

      {/* Particles */}
      {[...Array(8)].map((_, i) => (
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Rocket className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">LET'S GET STARTED</span>
          </div>
          <h2 className="section-title text-white mb-6">
            Ready To Grow <br />
            <span className="gradient-text-blue">Your Brand?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Join 500+ happy clients who trust Prime IT to grow their digital presence. Your success story starts here.
          </p>
          <button
            onClick={onOrderClick}
            className="btn-neon group inline-flex items-center gap-2 px-10 py-5 rounded-xl text-white font-semibold text-lg"
          >
            Start Your Growth Journey
            <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
