"use client";

interface BookCTAProps {
  onOpenBooking?: () => void;
  onOpenInquiry?: () => void;
}

export default function BookCTA({ onOpenBooking, onOpenInquiry }: BookCTAProps) {
  return (
    <section
      id="book"
      className="bg-[#C9963A] border-b-[1.5px] border-[#0D0D0D] relative overflow-hidden text-center py-[100px] md:py-[120px] px-6 md:px-13"
    >
      {/* Background ruling lines pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 34px, rgba(13,13,13,0.05) 34px, rgba(13,13,13,0.05) 35px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(64px,10vw,140px)] leading-[0.85] tracking-[0.02em] text-[#0D0D0D] mb-5">
          SEE NAIROBI
          <br />
          <span className="text-outline-ink">DIFFERENTLY.</span>
        </h2>

        <p className="font-['Fraunces',serif] italic text-[20px] md:text-[24px] text-[#0D0D0D] opacity-80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join our next walking tour or inquire about private group bookings & educational workshops.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-7">
          <button
            onClick={() => {
              if (onOpenBooking) onOpenBooking();
            }}
            className="font-['Bebas_Neue',sans-serif] text-[20px] tracking-[0.1em] bg-[#0D0D0D] text-[#F4EFE4] px-10 md:px-13 py-4 md:py-4.5 hover:bg-[#F4EFE4] hover:text-[#0D0D0D] transition-all duration-300 cursor-pointer w-full sm:w-auto hover-lift shadow-xl group flex items-center justify-center gap-2 animate-btn-shimmer animate-live-btn"
          >
            <span>Book a Walking Tour</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
          </button>
          <button
            onClick={() => {
              if (onOpenInquiry) onOpenInquiry();
            }}
            className="font-['Bebas_Neue',sans-serif] text-[20px] tracking-[0.1em] bg-transparent text-[#0D0D0D] px-10 md:px-13 py-4 md:py-4.5 border-2 border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-[#F4EFE4] transition-all duration-300 cursor-pointer w-full sm:w-auto hover-lift shadow-md group flex items-center justify-center gap-2 animate-btn-shimmer"
          >
            <span>Inquire for Groups & Schools</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
          </button>
        </div>

        <span className="font-['Caveat',cursive] text-[17px] font-bold text-[#0D0D0D] opacity-80 block animate-float-slow">
          ★ Private tours, corporate walks & academic groups available upon request
        </span>
      </div>
    </section>
  );
}
