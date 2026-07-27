"use client";

interface SundayBannerProps {
  onRegister?: () => void;
}

export default function SundayBanner({ onRegister }: SundayBannerProps) {
  return (
    <div className="bg-[#C9963A] px-6 md:px-13 py-4 border-b-[1.5px] border-[#0D0D0D] flex items-center justify-between gap-6 flex-wrap min-h-[80px]">
      <div className="font-['Bebas_Neue',sans-serif] text-[20px] md:text-[22px] tracking-[0.08em] text-[#0D0D0D] flex items-center gap-3.5">
        <span className="relative flex h-3 w-3 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D0D0D] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0D0D0D]"></span>
        </span>
        TOURS RUN EVERY SUNDAY · NAIROBI
      </div>
      <span className="font-['Caveat',cursive] text-[18px] font-bold text-[#0D0D0D] opacity-90 hidden sm:inline animate-float-slow">
        ★ small groups · expert-led · all welcome
      </span>
      <button
        onClick={() => {
          if (onRegister) onRegister();
          else {
            const bookSec = document.getElementById("book");
            bookSec?.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="font-['Bebas_Neue',sans-serif] text-[16px] tracking-[0.1em] text-[#0D0D0D] border-[1.5px] border-[#0D0D0D] px-7 py-2.5 whitespace-nowrap hover:bg-[#0D0D0D] hover:text-[#C9963A] transition-all duration-300 cursor-pointer hover-lift shadow-sm animate-btn-shimmer animate-live-btn"
      >
        Register for Next Sunday →
      </button>
    </div>
  );
}
