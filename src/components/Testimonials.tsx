import { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    name: 'James Carter',
    country: 'United States',
    image: 'https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 5,
    text: 'Prime IT helped my YouTube channel explode with organic growth. My views went from 2K to 500K per month. Highly recommended!',
  },
  {
    name: 'Sophia Martinez',
    country: 'Spain',
    image: 'https://images.pexels.com/photos/25651531/pexels-photo-25651531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 5,
    text: 'The Instagram growth service is incredible. I gained 45K real followers in just 3 months. The team is professional and responsive.',
  },
  {
    name: 'Daniel Kim',
    country: 'South Korea',
    image: 'https://images.pexels.com/photos/38740728/pexels-photo-38740728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 5,
    text: 'Their video editing transformed my content. Watch time doubled and my subscriber count keeps climbing. Best investment I made.',
  },
  {
    name: 'Amelia Johnson',
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/14156484/pexels-photo-14156484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 5,
    text: 'The Facebook ad campaigns delivered 8x ROAS for my e-commerce store. Prime IT truly understands performance marketing.',
  },
  {
    name: 'Marcus Brown',
    country: 'Canada',
    image: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 5,
    text: 'YouTube SEO service is top-notch. My videos now rank on the first page for competitive keywords. Organic traffic is through the roof.',
  },
  {
    name: 'Olivia Chen',
    country: 'Australia',
    image: 'https://images.pexels.com/photos/16160809/pexels-photo-16160809.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 5,
    text: 'From thumbnail design to channel optimization, Prime IT handled everything. My channel grew from 1K to 95K subscribers. Amazing work!',
  },
];

export default function Testimonials() {
  useScrollReveal();
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, next]);

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="glow-orb w-[500px] h-[500px] bg-[#00d4ff]/8 top-[20%] left-[50%] -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal badge-neon inline-block px-4 py-1.5 rounded-full mb-4">TESTIMONIALS</div>
          <h2 className="reveal section-title text-white mb-4" style={{ transitionDelay: '0.1s' }}>
            What Our <span className="gradient-text-blue">Clients Say</span>
          </h2>
          <div className="reveal section-divider mb-6" style={{ transitionDelay: '0.15s' }} />
          <p className="reveal text-gray-400 max-w-2xl mx-auto" style={{ transitionDelay: '0.2s' }}>
            Don't just take our word for it. Here's what our clients have to say about working with Prime IT.
          </p>
        </div>

        {/* Slider */}
        <div
          className="reveal max-w-3xl mx-auto"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div className="relative">
            {/* Card */}
            <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-[rgba(0,212,255,0.08)]" />
              <div className="relative">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ffd700] text-[#ffd700]" />
                  ))}
                </div>
                {/* Text */}
                <p className="text-lg text-gray-300 leading-relaxed mb-8 min-h-[100px]">
                  "{testimonials[current].text}"
                </p>
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[rgba(0,212,255,0.3)]"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#00d4ff] border-2 border-[#050810] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-display font-bold text-white">{testimonials[current].name}</div>
                    <div className="text-sm text-gray-500">{testimonials[current].country}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#00d4ff] hover:border-[rgba(0,212,255,0.4)] transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? 'w-8 bg-[#00d4ff]' : 'w-2 bg-gray-700 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#00d4ff] hover:border-[rgba(0,212,255,0.4)] transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
