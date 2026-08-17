import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle, X, Send } from 'lucide-react';

export default function FloatingControls() {
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`back-to-top w-12 h-12 rounded-full glass border border-[rgba(0,212,255,0.3)] flex items-center justify-center text-[#00d4ff] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:border-[rgba(0,212,255,0.6)] transition-all ${showTop ? 'visible' : ''}`}
        title="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Live chat */}
      <div className="live-chat">
        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-72 glass rounded-2xl p-4 shadow-2xl border border-[rgba(0,212,255,0.2)] animate-slide-up">
            <div className="flex items-center gap-3 pb-3 mb-3 border-b border-[rgba(0,212,255,0.1)]">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[rgba(212,160,23,0.3)]">
                <img src="/Logo.jpeg" alt="Prime IT" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-sm">Prime IT Support</div>
                <div className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Online
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mb-4">
              Hi! How can we help you grow your brand today? Email us at{' '}
              <a href="mailto:admin@primeeit.com" className="text-[#00d4ff]">admin@primeeit.com</a>
            </p>
            <a
              href="mailto:admin@primeeit.com"
              className="btn-neon w-full py-2.5 rounded-lg text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Send size={14} /> Send a Message
            </a>
          </div>
        )}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0066aa] flex items-center justify-center text-white shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] hover:scale-110 transition-all"
          title="Chat with us"
        >
          {chatOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>
    </>
  );
}
