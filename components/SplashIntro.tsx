"use client";

import { useEffect, useState } from "react";

interface SplashIntroProps {
  onComplete?: () => void;
}

export default function SplashIntro({ onComplete }: SplashIntroProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if splash was already shown in this session
    const hasSeenSplash = sessionStorage.getItem("nbo_splash_seen");
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    // Automatically trigger exit after 3.6s
    const autoExitTimer = setTimeout(() => {
      handleFinish();
    }, 3600);

    return () => clearTimeout(autoExitTimer);
  }, []);

  const handleFinish = () => {
    setIsExiting(true);
    sessionStorage.setItem("nbo_splash_seen", "true");
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 700);
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleFinish}
      className={`fixed inset-0 z-[99999] bg-[#0A0A0A] text-[#F4EFE4] flex flex-col items-center justify-center p-6 overflow-hidden cursor-pointer select-none ${
        isExiting ? "animate-curtain-exit" : ""
      }`}
    >
      {/* Subtle glowing ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,150,58,0.14)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-lg mx-auto space-y-8">
        {/* Animated Spinning & Zooming Image Circle */}
        <div className="animate-spin-zoom relative">
          <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full p-2 bg-gradient-to-tr from-[#C9963A] via-[#E8B85A] to-[#0A0A0A] shadow-[0_0_60px_rgba(201,150,58,0.4)] relative overflow-hidden">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#0A0A0A] relative">
              <img
                src="/splashimage.avif"
                alt="NBO by Design Splash"
                className="w-full h-full object-cover filter contrast-110 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/30 to-transparent" />
            </div>
          </div>

          {/* Floating Gold Beacon Ring */}
          <div className="absolute -inset-3 rounded-full border border-[#C9963A]/40 animate-pulse pointer-events-none" />
        </div>

        {/* Name Reveals Underneath */}
        <div className="animate-name-appear space-y-3">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C9963A] font-semibold flex items-center justify-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#C9963A]" />
            NAIROBI · URBAN DESIGN
            <span className="w-6 h-[1.5px] bg-[#C9963A]" />
          </div>

          <h1 className="font-['Bebas_Neue',sans-serif] text-[clamp(44px,7vw,76px)] leading-none tracking-[0.04em] text-[#F4EFE4] uppercase drop-shadow-md">
            NBO <span className="text-[#C9963A]">BY</span> DESIGN
          </h1>

        </div>
      </div>
    </div>
  );
}
