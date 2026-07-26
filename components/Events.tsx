"use client";

interface EventsProps {
  onReserveTicket?: (eventTitle: string) => void;
}

export default function Events({ onReserveTicket }: EventsProps) {
  const events = [
    {
      vol: "Vol. 03 · Archived Forum",
      title: "ARCHITECTURE OF INDEPENDENCE: MODERNISM IN 1960s NAIROBI",
      sub: "Exploring the bold modernist structures built during Kenya's independence era and their state today.",
      detail: "Panellists: Arch. Musau Kimeu, Prof. Mark Olweny · Venue: Alliance Française",
      tag: "Past Event · Archival Recording Available",
      btnText: "Watch Recording",
    },
    {
      vol: "Vol. 04 · Upcoming Edition",
      title: "MATATUS & MAPPING: INFORMAL TRANSPORT AS URBAN DESIGN",
      sub: "How informal transit systems form the circulatory system of East Africa's economic hub.",
      detail: "Panellists: Digital Matatus Team, Urban Planners Association · Venue: GoDown Arts Centre",
      tag: "Upcoming · Nov 2025",
      btnText: "Reserve Free Seat",
    },
    {
      vol: "Vol. 05 · Upcoming Edition",
      title: "THE KIPANDE SYSTEM TO DIGITAL PASS-PORTS: SPATIAL SURVEILLANCE",
      sub: "A historical lens on movement control in Nairobi from passbooks to modern smart city tech.",
      detail: "Panellists: Dr. Wangui Kimari, Spatial Historians · Venue: McMillan Memorial Library",
      tag: "Upcoming · Dec 2025",
      btnText: "Join Waitlist",
    },
  ];

  return (
    <section
      id="events"
      className="bg-[#C9963A] border-b-[1.5px] border-[#0D0D0D] py-[100px] md:py-[120px] px-6 md:px-13 relative overflow-hidden"
    >
      {/* Section Tag */}
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0D0D0D]/60 mb-14 flex items-center gap-3.5 relative z-10">
        <span className="w-7 h-[1.5px] bg-[#0D0D0D]/40" />
        Public Programming
      </div>

      {/* Events Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16 relative z-10">
        <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(60px,8vw,110px)] leading-[0.85] tracking-[0.02em] text-[#0D0D0D]">
          SPEAKER
          <br />
          SERIES
        </h2>
        <p className="font-['Fraunces',serif] italic text-[20px] leading-[1.6] text-[#0D0D0D]/80 pt-2">
          Engaging the public in critical conversations about Nairobi&apos;s urban trajectory.{" "}
          <strong className="not-italic opacity-100 font-bold">Free & Open to All.</strong>
        </p>
      </div>

      {/* Speaker Highlight Banner */}
      <div className="bg-[#161616] border border-[#2A2A2A] border-l-[3px] border-l-[#C9963A] p-5 md:p-7 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-5 relative z-10 hover-lift shadow-xl">
        <div className="font-mono text-[12px] tracking-[0.06em] text-[#F4EFE4]/65 leading-[1.7]">
          <span className="font-['Bebas_Neue',sans-serif] text-[11px] tracking-[0.15em] bg-[#C9963A] text-[#0D0D0D] px-2.5 py-0.5 mr-3 inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D0D0D] animate-pulse-dot" />
            FEATURED
          </span>
          <em className="text-[#C9963A] not-italic font-bold">
            Vol. 04 — &quot;Who Owns Nairobi&apos;s Streets? Matatu Culture & Spatial Sovereignty&quot;
          </em>
        </div>
        <button
          onClick={() => {
            if (onReserveTicket) onReserveTicket("Vol. 04 Featured Speaker");
            else {
              const bookSec = document.getElementById("book");
              bookSec?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="font-['Bebas_Neue',sans-serif] text-[15px] tracking-[0.1em] text-[#C9963A] border border-[#333333] px-5 py-2.5 whitespace-nowrap hover:bg-[#C9963A] hover:text-[#0D0D0D] hover:border-[#C9963A] transition-all duration-300 cursor-pointer hover-lift"
        >
          Reserve Free Ticket →
        </button>
      </div>

      {/* Events List */}
      <div className="flex flex-col gap-0.5 relative z-10">
        {events.map((ev, idx) => (
          <div
            key={idx}
            className="event-card border-[1.5px] border-[#0D0D0D] bg-[#F4EFE4] p-8 lg:p-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center relative z-10 transition-all duration-300 hover:bg-[#0D0D0D] group cursor-pointer hover-lift shadow-sm"
          >
            <div>
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#555555] group-hover:text-[#F4EFE4] transition-colors mb-2">
                {ev.vol}
              </div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-[36px] md:text-[40px] tracking-[0.03em] leading-[0.9] text-[#0D0D0D] group-hover:text-[#F4EFE4] transition-colors mb-2.5">
                {ev.title}
              </h3>
              <p className="font-['Fraunces',serif] italic text-[16px] text-[#555555] group-hover:text-[#F4EFE4]/60 transition-colors leading-[1.4] mb-3">
                {ev.sub}
              </p>
              <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-[#555555] group-hover:text-[#F4EFE4] transition-colors mb-2">
                {ev.detail}
              </div>
              <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#C9963A] group-hover:text-[#C9963A]">
                {ev.tag}
              </div>
            </div>

            <div className="self-start md:self-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (onReserveTicket) onReserveTicket(ev.title);
                  else {
                    const bookSec = document.getElementById("book");
                    bookSec?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="font-['Bebas_Neue',sans-serif] text-[15px] tracking-[0.1em] border-[1.5px] border-[#0D0D0D] group-hover:border-[#F4EFE4] group-hover:text-[#F4EFE4] text-[#0D0D0D] px-7 py-3 whitespace-nowrap transition-colors cursor-pointer"
              >
                {ev.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
