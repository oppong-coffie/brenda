"use client";

import { useEffect, useState } from "react";

interface WhatWeDoProps {
  onSelectOffering?: (offeringId: string) => void;
}

function ChangingImage({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {images.map((src, idx) => {
        const isActive = idx === currentIndex;
        return (
          <img
            key={src}
            src={src}
            alt={`${alt} ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              isActive
                ? "opacity-90 scale-115 transition-transform duration-[4500ms] ease-linear"
                : "opacity-0 scale-100 transition-none"
            }`}
          />
        );
      })}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-[#0D0D0D]/30 to-transparent group-hover:from-[#0D0D0D]/90 transition-colors" />
    </div>
  );
}

export default function WhatWeDo({ onSelectOffering }: WhatWeDoProps) {
  const walkingTourImages = [
    "/walk1.jpg",
    "/walk2.jpg",
    "/walk6.jpg",
    "/walk7.jpg",
    
  ];

  const speakerSeriesImages = [
    "/walk7.jpg",

  ];

  const urbanLiteracyImages = [
    "/building4.jpg",
    "/building5.jpg",
  ];

  return (
    <section id="about" className="bg-[#F4EFE4] border-b-[1.5px] border-[#0D0D0D] py-[100px] md:py-[120px] px-6 md:px-13">
      {/* Section Tag */}
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C9963A] mb-14 flex items-center gap-3.5">
        <span className="w-7 h-[1.5px] bg-[#C9963A]" />
        What We Do
      </div>

      {/* Intro */}
      <div className="max-w-[680px] font-['Fraunces',serif] italic text-[clamp(24px,3vw,40px)] leading-[1.3] text-[#0D0D0D] mb-[80px]">
        Nairobi is sold to the world as a safari gateway.
        <br />
        We tell the <em className="not-italic text-[#C9963A]">other story.</em>
      </div>

      {/* Offerings Stack */}
      <div className="flex flex-col gap-0.5">
        <a
          href="#tours"
          onClick={(e) => {
            if (onSelectOffering) {
              e.preventDefault();
              onSelectOffering("tours");
            }
          }}
          className="offering grid grid-cols-1 lg:grid-cols-2 border-[1.5px] border-[#0D0D0D] overflow-hidden cursor-pointer group transition-all duration-300 hover:bg-[#0D0D0D] text-inherit text-decoration-none hover-lift shadow-sm"
        >
          <div className="p-[36px] md:p-[52px] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#0D0D0D] group-hover:border-[#333333] transition-colors">
            <div>
              <div className="font-['Bebas_Neue',sans-serif] text-[72px] tracking-[0.04em] leading-none text-[#0D0D0D] group-hover:text-[#F4EFE4] transition-colors">
                01
              </div>
              <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C9963A] mb-5 group-hover:text-[#C9963A] transition-colors">
                Flagship Experience
              </div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-[48px] tracking-[0.03em] leading-[0.9] text-[#0D0D0D] mb-4 group-hover:text-[#F4EFE4] transition-colors">
                WALKING
                <br />
                TOURS
              </h3>
              <p className="font-mono text-[12px] leading-[1.85] text-[#555555] mb-8 group-hover:text-[#F4EFE4]/65 transition-colors max-w-lg">
                Expert-led walks through Nairobi&apos;s built environment — tracing the colonial grid, postcolonial ambition, informal urban intelligence, and the question of who the city is really designed for.
              </p>
            </div>
            <span className="font-['Bebas_Neue',sans-serif] text-[15px] tracking-[0.1em] border-[1.5px] border-[#0D0D0D] px-6 py-2.5 inline-block self-start group-hover:border-[#C9963A] group-hover:text-[#C9963A] transition-colors">
              Explore Routes →
            </span>
          </div>
          <div className="p-[36px] md:p-[52px] flex items-center justify-center bg-[#EDE6D6] group-hover:bg-[#2A2A2A] transition-colors relative overflow-hidden min-h-[280px]">
            <ChangingImage images={walkingTourImages} alt="Nairobi Walking Tour" />
            <span className="absolute bottom-6 right-7 font-['Caveat',cursive] text-[15px] font-bold text-[#C9963A] -rotate-2 group-hover:text-[#F4EFE4] z-10 transition-colors drop-shadow-md">
              2–3 hrs · Small Groups · CBD
            </span>
          </div>
        </a>

        {/* Offering 02 */}
        <a
          href="#events"
          onClick={(e) => {
            if (onSelectOffering) {
              e.preventDefault();
              onSelectOffering("events");
            }
          }}
          className="offering grid grid-cols-1 lg:grid-cols-2 border-[1.5px] border-[#0D0D0D] overflow-hidden cursor-pointer group transition-colors duration-300 hover:bg-[#0D0D0D] text-inherit text-decoration-none"
        >
          <div className="p-[36px] md:p-[52px] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#0D0D0D] group-hover:border-[#333333] transition-colors">
            <div>
              <div className="font-['Bebas_Neue',sans-serif] text-[72px] tracking-[0.04em] leading-none text-[#0D0D0D] group-hover:text-[#F4EFE4] transition-colors">
                02
              </div>
              <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C9963A] mb-5 group-hover:text-[#C9963A] transition-colors">
                Public Discourse
              </div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-[48px] tracking-[0.03em] leading-[0.9] text-[#0D0D0D] mb-4 group-hover:text-[#F4EFE4] transition-colors">
                SPEAKER
                <br />
                SERIES
              </h3>
              <p className="font-mono text-[12px] leading-[1.85] text-[#555555] mb-8 group-hover:text-[#F4EFE4]/65 transition-colors max-w-lg">
                Gatherings bringing together architects, urban planners, historians, community leaders, and residents to interrogate Nairobi&apos;s spatial past and design future.
              </p>
            </div>
            <span className="font-['Bebas_Neue',sans-serif] text-[15px] tracking-[0.1em] border-[1.5px] border-[#0D0D0D] px-6 py-2.5 inline-block self-start group-hover:border-[#C9963A] group-hover:text-[#C9963A] transition-colors">
              View Upcoming Vol. →
            </span>
          </div>
          <div className="p-[36px] md:p-[52px] flex items-center justify-center bg-[#EDE6D6] group-hover:bg-[#2A2A2A] transition-colors relative overflow-hidden min-h-[280px]">
            <ChangingImage images={speakerSeriesImages} alt="Nairobi Speaker Series" />
            <span className="absolute bottom-6 right-7 font-['Caveat',cursive] text-[15px] font-bold text-[#C9963A] rotate-1 group-hover:text-[#F4EFE4] z-10 transition-colors drop-shadow-md">
              Monthly · Open Access
            </span>
          </div>
        </a>

        {/* Offering 03 */}
        <a
          href="#mission"
          onClick={(e) => {
            if (onSelectOffering) {
              e.preventDefault();
              onSelectOffering("mission");
            }
          }}
          className="offering grid grid-cols-1 lg:grid-cols-2 border-[1.5px] border-[#0D0D0D] overflow-hidden cursor-pointer group transition-colors duration-300 hover:bg-[#0D0D0D] text-inherit text-decoration-none"
        >
          <div className="p-[36px] md:p-[52px] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#0D0D0D] group-hover:border-[#333333] transition-colors">
            <div>
              <div className="font-['Bebas_Neue',sans-serif] text-[72px] tracking-[0.04em] leading-none text-[#0D0D0D] group-hover:text-[#F4EFE4] transition-colors">
                03
              </div>
              <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C9963A] mb-5 group-hover:text-[#C9963A] transition-colors">
                Education & Research
              </div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-[48px] tracking-[0.03em] leading-[0.9] text-[#0D0D0D] mb-4 group-hover:text-[#F4EFE4] transition-colors">
                URBAN LITERACY
                <br />
                & RESEARCH
              </h3>
              <p className="font-mono text-[12px] leading-[1.85] text-[#555555] mb-8 group-hover:text-[#F4EFE4]/65 transition-colors max-w-lg">
                Fostering urban literacy through published guides, mapping workshops, photographic archives, and youth engagements that make spatial thinking accessible to everyone.
              </p>
            </div>
            <span className="font-['Bebas_Neue',sans-serif] text-[15px] tracking-[0.1em] border-[1.5px] border-[#0D0D0D] px-6 py-2.5 inline-block self-start group-hover:border-[#C9963A] group-hover:text-[#C9963A] transition-colors">
              Read Our Mission →
            </span>
          </div>
          <div className="p-[36px] md:p-[52px] flex items-center justify-center bg-[#EDE6D6] group-hover:bg-[#2A2A2A] transition-colors relative overflow-hidden min-h-[280px]">
            <ChangingImage images={urbanLiteracyImages} alt="Urban Literacy & Research" />
            <span className="absolute bottom-6 right-7 font-['Caveat',cursive] text-[15px] font-bold text-[#C9963A] -rotate-1 group-hover:text-[#F4EFE4] z-10 transition-colors drop-shadow-md">
              Publications · Maps · Archive
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}

