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
    "/images/building6.jpeg",
    "/images/building7.jpeg",
    "/images/building9.jpeg",
  ];

  const speakerSeriesImages = [
    "/images/building1.jpeg",
    "/images/walk1.jpeg",
  ];

  const urbanLiteracyImages = [
    "/images/speaker1.jpeg",
    "/images/speaker2.jpeg",
    "/images/speaker3.jpeg",
    "/images/speaker4.jpeg",
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
                CBD . NAIROBI
              </div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-[48px] tracking-[0.03em] leading-[0.9] text-[#0D0D0D] mb-4 group-hover:text-[#F4EFE4] transition-colors">
                BUILD
                <br />
                TOURS
              </h3>
              <p className="font-mono text-[12px] leading-[1.85] text-[#555555] mb-8 group-hover:text-[#F4EFE4]/65 transition-colors max-w-lg">
                Walk through 120 years of decisions. Every building in Nairobi&apos;s CBD was built by someone, for someone, at a specific moment in history. Build Tours teaches you to read what they were trying to say.
              </p>
            </div>
            <span className="font-['Bebas_Neue',sans-serif] text-[15px] tracking-[0.1em] border-[1.5px] border-[#0D0D0D] px-6 py-2.5 inline-block self-start group-hover:border-[#C9963A] group-hover:text-[#C9963A] transition-colors">
              Explore Routes →
            </span>
          </div>
          <div className="p-[36px] md:p-[52px] flex items-center justify-center bg-[#EDE6D6] group-hover:bg-[#2A2A2A] transition-colors relative overflow-hidden min-h-[280px]">
            <ChangingImage images={walkingTourImages} alt="Nairobi Walking Tour" />
            <span className="absolute bottom-6 right-7 font-['Caveat',cursive] text-[15px] font-bold text-[#C9963A] -rotate-2 group-hover:text-[#F4EFE4] z-10 transition-colors drop-shadow-md">
              5 hrs · Small Groups · CBD
            </span>
          </div>
        </a>

        {/* Offering 02 */}
        <a
          href="#story"
          onClick={(e) => {
            if (onSelectOffering) {
              e.preventDefault();
              onSelectOffering("story");
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
                SOCIAL MISSION
              </div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-[48px] tracking-[0.03em] leading-[0.9] text-[#0D0D0D] mb-4 group-hover:text-[#F4EFE4] transition-colors">
                URBAN
                <br />
                LITERACY
              </h3>
              <p className="font-mono text-[12px] leading-[1.85] text-[#555555] mb-8 group-hover:text-[#F4EFE4]/65 transition-colors max-w-lg">
                Understanding your city matters. It changes how you vote, how you advocate for your neighbourhood, and how you hold planners and politicians accountable. Every premium tour funds urban literacy for everyone — students, community groups, residents, and anyone who deserves access to this kind of knowledge about their own city.
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
                03
              </div>
              <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C9963A] mb-5 group-hover:text-[#C9963A] transition-colors">
                Quarterly Events
              </div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-[48px] tracking-[0.03em] leading-[0.9] text-[#0D0D0D] mb-4 group-hover:text-[#F4EFE4] transition-colors">
                SPEAKER
                <br />
                SERIES
              </h3>
              <p className="font-mono text-[12px] leading-[1.85] text-[#555555] mb-8 group-hover:text-[#F4EFE4]/65 transition-colors max-w-lg">
Salon-style conversations on architecture, planning, and who gets to shape Nairobi. Architects, planners, and the communities they design for on the same platform. Both sides of the story, every time.              </p>
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

