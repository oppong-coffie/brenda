"use client";

interface EventsProps {
  onReserveTicket?: (eventTitle: string) => void;
}

export default function Events({ onReserveTicket }: EventsProps) {


  return (
    <section
      id="events"
      className="bg-[#0A0A0A] text-[#F4EFE4] border-b-[1.5px] border-[#222222] py-[100px] md:py-[120px] px-6 md:px-13 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header Tag */}
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C9963A] mb-14 flex items-center gap-3.5 relative z-10 font-semibold">
          <span className="w-7 h-[1.5px] bg-[#C9963A]" />
          SPEAKER SERIES
        </div>

        {/* The Nairobi Talks Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-16 relative z-10">
          {/* Left Column: Big Headline */}
          <div className="lg:col-span-5">
            <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(60px,8.5vw,120px)] leading-[0.85] tracking-[0.02em] text-[#F4EFE4] uppercase">
              THE
              <br />
              NAIROBI
              <br />
              TALKS
            </h2>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 font-mono text-[13px] md:text-[14.5px] leading-[1.85] text-[#A09C92] space-y-6 pt-2">
            <p>
              Quarterly conversations on architecture, urban design, and who gets to shape Nairobi.{" "}
              <strong className="font-bold text-[#F4EFE4]">
                Both the architect and the community. On the same platform. Every time.
              </strong>
            </p>

            <p>
              Topics have included colonial urban planning, informal settlement design intelligence, climate adaptation, and the politics of the Nairobi skyline.
            </p>

            <p>
              Upcoming dates announced via Instagram and the mailing list. Free and paid tickets available.
            </p>

            <div className="pt-2">
              <a
                href="https://www.instagram.com/nbo.by.design"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-[0.12em] uppercase text-[#3B82F6] hover:text-[#60A5FA] hover:underline inline-flex items-center gap-2 font-bold transition-colors cursor-pointer"
              >
                <span>Follow for Updates</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
