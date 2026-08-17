import { useState } from 'react';
import { Play, TrendingUp, Eye, Users, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = ['All', 'YouTube SEO', 'Video Editing', 'Instagram Growth', 'Ads Campaigns'];

interface Project {
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  before: string;
  after: string;
  icon: typeof TrendingUp;
}

const projects: Project[] = [
  { title: 'Gaming Channel Growth', category: 'YouTube SEO', metric: '5.2M', metricLabel: 'Views Generated', before: '2K subs', after: '180K subs', icon: Users },
  { title: 'Beauty Brand Reels', category: 'Instagram Growth', metric: '1.8M', metricLabel: 'Reels Views', before: '500 followers', after: '45K followers', icon: TrendingUp },
  { title: 'Tech Review Edits', category: 'Video Editing', metric: '320K', metricLabel: 'Watch Time', before: '5 min avg', after: '12 min avg', icon: Play },
  { title: 'E-commerce FB Ads', category: 'Ads Campaigns', metric: '8.5x', metricLabel: 'ROAS', before: '$2K/mo revenue', after: '$17K/mo revenue', icon: TrendingUp },
  { title: 'Fitness Channel SEO', category: 'YouTube SEO', metric: '2.1M', metricLabel: 'Views Generated', before: '1K subs', after: '95K subs', icon: Users },
  { title: 'Food Blogger Reels', category: 'Instagram Growth', metric: '900K', metricLabel: 'Reels Views', before: '2K followers', after: '78K followers', icon: TrendingUp },
  { title: 'Corporate Promo Edit', category: 'Video Editing', metric: '450K', metricLabel: 'Watch Time', before: '3 min avg', after: '9 min avg', icon: Play },
  { title: 'SaaS Google Ads', category: 'Ads Campaigns', metric: '12x', metricLabel: 'ROAS', before: '$5K/mo revenue', after: '$60K/mo revenue', icon: TrendingUp },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  useScrollReveal([filter]);

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="glow-orb w-[400px] h-[400px] bg-[#00d4ff]/8 top-[15%] left-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="reveal badge-neon inline-block px-4 py-1.5 rounded-full mb-4">PORTFOLIO</div>
          <h2 className="reveal section-title text-white mb-4" style={{ transitionDelay: '0.1s' }}>
            Our Success <span className="gradient-text-blue">Stories</span>
          </h2>
          <div className="reveal section-divider mb-6" style={{ transitionDelay: '0.15s' }} />
          <p className="reveal text-gray-400 max-w-2xl mx-auto" style={{ transitionDelay: '0.2s' }}>
            Real results for real clients. See how we've helped brands grow across platforms.
          </p>
        </div>

        {/* Filter */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-12" style={{ transitionDelay: '0.25s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat ? 'active text-[#00d4ff] bg-[rgba(0,212,255,0.15)] border-[rgba(0,212,255,0.5)]' : 'text-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={`${filter}-${i}`}
                className="reveal-scale card-hover glass rounded-2xl overflow-hidden group"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                {/* Visual area */}
                <div className="relative h-48 bg-gradient-to-br from-[#0a0f1e] to-[#050810] overflow-hidden">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="glow-orb w-32 h-32 bg-[#00d4ff]/15 top-[20%] left-[30%]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[#00d4ff] icon-glow" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 badge-neon px-3 py-1 rounded-full text-[10px]">
                    {project.category}
                  </div>
                  {/* Metric overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#050810] to-transparent">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="font-display text-2xl font-bold text-[#00d4ff]">{project.metric}</div>
                        <div className="text-[10px] text-gray-400">{project.metricLabel}</div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#ffd700] mb-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white mb-3">{project.title}</h3>
                  {/* Before / After */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] p-3">
                      <div className="text-[10px] text-gray-500 mb-1">BEFORE</div>
                      <div className="text-sm text-gray-300">{project.before}</div>
                    </div>
                    <div className="rounded-xl bg-[rgba(0,212,255,0.05)] border border-[rgba(0,212,255,0.2)] p-3">
                      <div className="text-[10px] text-[#00d4ff] mb-1">AFTER</div>
                      <div className="text-sm text-white font-medium">{project.after}</div>
                    </div>
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
