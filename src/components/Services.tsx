import {
  Search, Share2, Film, Instagram, Users, Facebook, Target, Image as ImageIcon,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  { icon: Search, title: 'YouTube Video SEO', desc: 'Rank your videos higher with keyword research, optimization, and proven SEO strategies.' },
  { icon: Share2, title: 'YouTube Video Promotion', desc: 'Get real organic views and subscribers through targeted promotion campaigns.' },
  { icon: Film, title: 'Video Editing', desc: 'Professional video editing that captivates audiences and keeps them watching.' },
  { icon: Instagram, title: 'Instagram Reels Promotion', desc: 'Boost your reels with organic views and viral growth strategies.' },
  { icon: Users, title: 'Instagram Followers Growth', desc: 'Build a real, engaged audience with organic follower growth strategies.' },
  { icon: Facebook, title: 'Facebook Ads', desc: 'Reach your ideal customers with high-converting Facebook ad campaigns.' },
  { icon: Target, title: 'Google Ads', desc: 'Drive targeted traffic and leads with expertly managed Google Ads campaigns.' },
  { icon: ImageIcon, title: 'Thumbnail Design', desc: 'Eye-catching thumbnails that drive clicks and boost your video CTR.' },
];

interface ServicesProps {
  onOrderClick: (service?: string, pkg?: string) => void;
}

export default function Services({ onOrderClick }: ServicesProps) {
  useScrollReveal();

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="glow-orb w-[400px] h-[400px] bg-[#00d4ff]/8 top-[10%] left-[-100px]" />
      <div className="glow-orb w-[300px] h-[300px] bg-[#ffd700]/5 bottom-[20%] right-[-50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal badge-neon inline-block px-4 py-1.5 rounded-full mb-4">SERVICES</div>
          <h2 className="reveal section-title text-white mb-4" style={{ transitionDelay: '0.1s' }}>
            Our Premium <span className="gradient-text-blue">Services</span>
          </h2>
          <div className="reveal section-divider mb-6" style={{ transitionDelay: '0.15s' }} />
          <p className="reveal text-gray-400 max-w-2xl mx-auto" style={{ transitionDelay: '0.2s' }}>
            Comprehensive digital marketing solutions designed to grow your brand across every major platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="reveal-scale card-hover glass rounded-2xl p-6 flex flex-col"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#00d4ff] icon-glow" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">{service.desc}</p>
                <button
                  onClick={() => onOrderClick(service.title)}
                  className="btn-outline w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
                >
                  Order Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
