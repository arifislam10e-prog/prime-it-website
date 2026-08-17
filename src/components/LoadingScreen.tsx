import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050810] transition-opacity duration-500">
      <div className="relative flex flex-col items-center">
        <img
          src="/Logo.jpeg"
          alt="Prime IT Logo"
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-2xl shadow-[0_0_30px_rgba(212,160,23,0.3)] animate-pulse"
        />
        <div className="mt-6 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffd700] animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] animate-bounce"></div>
        </div>
        <p className="mt-4 text-xs font-semibold tracking-widest text-[#00d4ff] uppercase">
          Loading Prime IT...
        </p>
      </div>
    </div>
  );
}