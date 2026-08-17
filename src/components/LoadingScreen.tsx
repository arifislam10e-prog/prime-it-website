import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return p + 4;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div className={`fixed inset-0 z-[200] bg-[#050810] flex flex-col items-center justify-center transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      {/* Glow */}
      <div className="glow-orb w-64 h-64 bg-[#00d4ff]/15" />

      {/* Logo */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[rgba(212,160,23,0.4)] shadow-[0_0_40px_rgba(212,160,23,0.3)] animate-glow-pulse">
          <img src="/Logo.jpeg" alt="Prime IT" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Name */}
      <div className="font-display text-2xl font-bold text-white mb-2">
        Prime <span className="text-[#ffd700]">IT</span>
      </div>
      <div className="text-xs text-gray-500 tracking-[0.3em] mb-8">DIGITAL MARKETING</div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-[rgba(0,212,255,0.1)] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#00d4ff] to-[#ffd700] transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-xs text-gray-600 mt-3 font-mono">{progress}%</div>
    </div>
  );
}
