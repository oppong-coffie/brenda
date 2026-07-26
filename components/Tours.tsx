"use client";

import { useState } from "react";

interface ToursProps {
  onBookTour?: (tourName: string) => void;
}

export default function Tours({ onBookTour }: ToursProps) {
  const [selectedItinerary, setSelectedItinerary] = useState<number | null>(null);

  const tours = [
    {
      num: "01",
      title: "THE COLONIAL GRID & THE POSTCOLONIAL SKYLINE",
      tag: "CBD Core Route",
      body: "Trace how British colonial master plans shaped modern Nairobi's CBD. From the railway administration headquarters to the modernist monuments of independence like KICC and Kencom House.",
      details: "Duration: 2.5 Hours · Distance: 3.2 KM · Meeting Point: Kipande House",
      note: "Most Popular Walk!",
      bgImage: "/walk7.jpg",
      stops: [
        { name: "Kipande House", desc: "1913 stone landmark where native African passbooks were issued under colonial rule." },
        { name: "Macmillan Memorial Library", desc: "Neo-classical monument reflecting early 20th-century settler architecture." },
        { name: "Kencom House", desc: "Postcolonial banking hub & central transportation node." },
        { name: "KICC & Helipad Viewpoint", desc: "1973 Brutalist tower inspired by the African lotus flower and traditional huts." },
      ],
    },
    {
      num: "02",
      title: "MARKETS, MATATUS & INFORMAL INTELLIGENCE",
      tag: "Urban Economy Route",
      body: "Explore how informal networks, hawker economies, and matatu culture subvert and adapt formal urban planning across River Road, Nyamakima, and City Market.",
      details: "Duration: 3 Hours · Distance: 4.0 KM · Meeting Point: City Market",
      note: "Deep Dive into City Life",
      bgImage: "/walk6.jpg",
      stops: [
        { name: "City Market Vaults", desc: "1930s concrete parabolic arches designed by British engineers." },
        { name: "Nyamakima Hawker Grid", desc: "High-density informal trade hubs powering Kenya's micro-economy." },
        { name: "River Road Matatu Depots", desc: "Mobile street art, custom sound systems & transit design culture." },
      ],
    },
    {
      num: "03",
      title: "GREEN NAIROBI: PARKS, BUFFER ZONES & SPATIAL JUSTICE",
      tag: "Public Space Route",
      body: "Examine the history of Nairobi's green spaces — Uhuru Park, Jeevanjee Gardens, and Central Park — as arenas of political struggle, public gathering, and civic resistance.",
      details: "Duration: 2 Hours · Distance: 2.5 KM · Meeting Point: Jeevanjee Gardens",
      note: "Relaxed & Discussion Heavy",
      bgImage: "/walk2.jpg",
      stops: [
        { name: "Jeevanjee Gardens", desc: "Donated in 1906 by A.M. Jeevanjee as a public sanctuary for all races." },
        { name: "Central Park Boulevard", desc: "Postcolonial civic lawn & urban canopy buffer." },
        { name: "Uhuru Park Freedom Corner", desc: "Historical site of Wangari Maathai's environmental activism against high-rise encroachment." },
      ],
    },
  ];

  const activeTourData = selectedItinerary !== null ? tours[selectedItinerary] : null;

  return (
    <section
      id="tours"
      className="bg-[#F4EFE4] border-b-[1.5px] border-[#0D0D0D] py-[100px] md:py-[120px] px-6 md:px-13"
    >
      {/* Section Tag */}
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C9963A] mb-14 flex items-center gap-3.5">
        <span className="w-7 h-[1.5px] bg-[#C9963A]" />
        Tours & Experiences
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 md:gap-0">
        <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(56px,7vw,96px)] leading-[0.88] tracking-[0.02em] text-[#0D0D0D]">
          CURATED <span className="text-[#C9963A]">URBAN WALKS</span>
        </h2>
        <p className="font-['Fraunces',serif] italic text-[18px] text-[#555555] max-w-[280px] text-left md:text-right leading-[1.5]">
          Three distinct routes uncovering the layers of Nairobi&apos;s architectural and social history.
        </p>
      </div>

      {/* Tour Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
        {tours.map((t, idx) => (
          <div
            key={idx}
            className="tour-card border-[1.5px] border-[#0D0D0D] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group min-h-[500px] hover-lift transition-all duration-300"
          >
            {/* Live Indicator Badge for top tour */}
            {idx === 0 && (
              <div className="absolute top-4 right-4 z-20 font-mono text-[8px] tracking-widest uppercase bg-[#C9963A] text-[#0D0D0D] px-2.5 py-1 font-bold flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D0D0D] animate-pulse-dot" />
                Live Walk
              </div>
            )}
            {/* Card Background Image & Overlays */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <img
                src={t.bgImage}
                alt={t.title}
                className="w-full h-full object-cover group-hover:opacity-75 group-hover:scale-110 transition-all duration-700 ease-out group-hover:grayscale-0"
              />
              <div className="absolute inset-0 group-hover:bg-[#0D0D0D]/85 transition-colors duration-400" />
            </div>

            {/* Card Content Top */}
            <div className="relative z-10">
              <div className="font-['Bebas_Neue',sans-serif] text-[100px] leading-[0.85] tracking-[0.04em] text-transparent text-outline-ink-thin opacity-30 group-hover:opacity-60 group-hover:text-outline-paper mb-7 transition-all duration-300">
                {t.num}
              </div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-[34px] tracking-[0.03em] leading-[0.9] text-[#0D0D0D] group-hover:text-[#F4EFE4] transition-colors mb-3">
                {t.title}
              </h3>
              <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C9963A] mb-5">
                {t.tag}
              </div>
              <p className="font-mono text-[11.5px] leading-[1.85] text-[#333333] group-hover:text-[#F4EFE4]/80 transition-colors mb-7">
                {t.body}
              </p>
            </div>

            {/* Card Content Bottom */}
            <div className="relative z-10">
              <div className="font-mono text-[10px] tracking-[0.08em] text-[#555555] group-hover:text-[#F4EFE4]/70 leading-[2.2] border-t border-[#0D0D0D]/20 group-hover:border-[#F4EFE4]/20 pt-4 mb-6 transition-colors">
                {t.details}
              </div>

              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={() => {
                    if (onBookTour) onBookTour(t.title);
                    else {
                      const bookSec = document.getElementById("book");
                      bookSec?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="tc-cta font-['Bebas_Neue',sans-serif] text-[15px] tracking-[0.1em] border-[1.5px] border-[#0D0D0D] group-hover:border-[#C9963A] text-[#0D0D0D] group-hover:text-[#C9963A] px-5 py-2.5 inline-block hover:bg-[#C9963A] hover:text-[#0D0D0D] transition-colors cursor-pointer"
                >
                  Book Walk →
                </button>
                <button
                  onClick={() => setSelectedItinerary(idx)}
                  className="font-mono text-[10px] tracking-[0.12em] uppercase border border-[#0D0D0D]/40 group-hover:border-[#F4EFE4]/40 text-[#0D0D0D] group-hover:text-[#F4EFE4] px-4 py-2.5 hover:border-[#C9963A] transition-colors cursor-pointer"
                >
                  View Itinerary
                </button>
              </div>
            </div>

            {/* Hand Note */}
            <span className="absolute bottom-5 right-6 font-['Caveat',cursive] text-[14px] font-bold text-[#C9963A] group-hover:text-[#F4EFE4] rotate-2 transition-colors z-10">
              {t.note}
            </span>
          </div>
        ))}
      </div>

      {/* Route Itinerary Modal */}
      {activeTourData && selectedItinerary !== null && (
        <div className="fixed inset-0 z-[20000] bg-[#0D0D0D]/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-up">
          <div className="bg-[#F4EFE4] border-2 border-[#0D0D0D] p-8 md:p-10 max-w-xl w-full relative shadow-2xl overflow-y-auto max-h-[85vh]">
            <button
              onClick={() => setSelectedItinerary(null)}
              className="absolute top-5 right-5 font-mono text-xs tracking-widest text-[#0D0D0D] border border-[#0D0D0D] w-8 h-8 flex items-center justify-center hover:bg-[#0D0D0D] hover:text-[#F4EFE4] transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C9963A] mb-2">
              Route Itinerary · Walk {activeTourData.num}
            </div>
            <h3 className="font-['Bebas_Neue',sans-serif] text-3xl md:text-4xl text-[#0D0D0D] leading-none mb-4">
              {activeTourData.title}
            </h3>

            <p className="font-mono text-xs text-[#555555] mb-6 leading-relaxed border-b border-[#0D0D0D]/15 pb-4">
              {activeTourData.details}
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="font-mono text-[11px] tracking-wider uppercase text-[#0D0D0D] font-bold">
                Key Route Stops & Historical Themes:
              </h4>
              {activeTourData.stops.map((stop, sIdx) => (
                <div key={sIdx} className="bg-[#EDE6D6] border border-[#0D0D0D] p-4 font-mono text-xs">
                  <div className="text-[#C9963A] font-bold mb-1">
                    Stop {sIdx + 1}: {stop.name}
                  </div>
                  <div className="text-[#333333] leading-relaxed">{stop.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 items-center">
              <button
                onClick={() => {
                  const tourName = activeTourData.title;
                  setSelectedItinerary(null);
                  if (onBookTour) onBookTour(tourName);
                }}
                className="w-full font-['Bebas_Neue',sans-serif] text-[18px] tracking-[0.1em] bg-[#0D0D0D] text-[#F4EFE4] py-3 text-center hover:bg-[#C9963A] hover:text-[#0D0D0D] transition-colors cursor-pointer"
              >
                Proceed to Book This Walk →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
