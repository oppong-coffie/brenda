export default function Founder() {
  const credentials = [
    {
      icon: "01",
      title: "M.Arch & Urban Design Research",
      desc: "Specializing in East African modernist heritage & informal urbanism",
    },
    {
      icon: "02",
      title: "Curator & Spatial Storyteller",
      desc: "Led over 50+ guided city walks & urban literacy workshops",
    },
    {
      icon: "03",
      title: "Advocate for Public Space",
      desc: "Consultant on pedestrianization & community heritage preservation",
    },
  ];

  return (
    <section
      id="founder"
      className="bg-[#0D0D0D] text-[#F4EFE4] border-b-[1.5px] border-[#222222] py-[100px] md:py-[120px] px-6 md:px-13 relative overflow-hidden"
    >
      {/* Section Tag */}
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C9963A] mb-14 flex items-center gap-3.5">
        <span className="w-7 h-[1.5px] bg-[#C9963A]" />
        Leadership
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        {/* Left Column */}
        <div>
          {/* Header with rounded live animated profile image in flex */}
          <div className="flex items-center gap-6 mb-8 flex-wrap">
            <div className="relative group shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#C9963A] bg-[#161616] p-0.5 shadow-2xl relative animate-beacon-pulse">
                <img
                  src="/profile.JPG"
                  alt="Brenda Agungo — Founder & Creative Director"
                  className="w-full h-full object-cover object-center rounded-full grayscale-[15%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-out"
                />
              </div>
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#C9963A] border-2 border-[#0D0D0D] animate-pulse-dot" />
            </div>

            <div>
              <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(44px,5.5vw,72px)] leading-[0.88] tracking-[0.03em] text-[#F4EFE4] mb-1">
                BRENDA AGUNGO
              </h2>
              <div className="font-['Fraunces',serif] italic text-[18px] sm:text-[20px] text-[#C9963A] leading-[1.3]">
                Founder & Creative Director
              </div>
            </div>
          </div>

          <div className="font-mono text-[13px] leading-[2] text-[#F4EFE4]/65 space-y-5 mb-10">
            <p>
              <strong className="text-[#F4EFE4]">Brenda Agungo</strong> is a Nairobi-born urban researcher, architectural designer, and storyteller passionate about spatial literacy and civic engagement in African cities.
            </p>
            <p>
              With a background spanning architectural history, urban research, and community-led placemaking, Brenda created <strong className="text-[#F4EFE4]">NBO by Design</strong> to bridge the gap between technical urban planning discourse and everyday city experience.
            </p>
          </div>

          {/* Credentials Stack */}
          <div className="flex flex-col gap-0.5">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="border border-[#2A2A2A] p-5 md:p-6 flex gap-4 items-center hover:border-[#C9963A] hover:bg-[#161616] transition-colors"
              >
                <span className="font-['Caveat',cursive] text-[22px] font-bold text-[#C9963A] shrink-0">
                  {cred.icon}
                </span>
                <div className="font-mono text-[11px] tracking-[0.06em] text-[#F4EFE4]/70 leading-[1.7]">
                  <strong className="text-[#F4EFE4] block">{cred.title}</strong>
                  {cred.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Editorial Manifesto & Research Focus */}
        <div className="space-y-6">
          {/* Main Manifesto Quote Block */}
          <div className="bg-[#161616] border border-[#2A2A2A] border-l-[4px] border-l-[#C9963A] p-8 md:p-12 hover-lift shadow-2xl relative overflow-hidden group">
            {/* Background Decorative Quote Mark */}
            <div className="absolute top-2 right-4 font-['Fraunces',serif] text-[140px] leading-none text-[#C9963A]/10 pointer-events-none select-none">
              “
            </div>

            <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#C9963A] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9963A] animate-pulse-dot" />
              CURATORIAL MANIFESTO
            </div>

            <blockquote className="font-['Fraunces',serif] italic text-[clamp(22px,2.6vw,32px)] leading-[1.35] text-[#F4EFE4] mb-6 relative z-10">
              &quot;To love Nairobi is to understand its contradictions. We don&apos;t just look at buildings; we read the <em className="not-italic text-[#C9963A] font-bold">invisible forces</em> that built them.&quot;
            </blockquote>

            <div className="flex justify-between items-center border-t border-[#2A2A2A] pt-4 font-mono text-[10px]">
              <cite className="tracking-[0.15em] uppercase text-[#F4EFE4]/80 not-italic font-bold">
                — BRENDA AGUNGO
              </cite>
              <span className="text-[#C9963A] font-['Caveat',cursive] text-base font-bold">
                Founder & Spatial Curator
              </span>
            </div>
          </div>

          {/* Research & Curatorial Focus Card */}
          <div className="bg-[#161616] border border-[#2A2A2A] p-7 md:p-8 space-y-5 hover-lift shadow-xl">
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#C9963A] font-bold">
              Research & Curatorial Pillars
            </div>

            <div className="grid grid-cols-1 gap-4 font-mono text-xs text-[#F4EFE4]/70">
              <div className="flex items-start gap-3 bg-[#0D0D0D] p-3.5 border border-[#262626]">
                <span className="text-[#C9963A] font-bold text-sm">01</span>
                <div>
                  <strong className="text-[#F4EFE4] block text-[11px] mb-0.5">Modernist Heritage Preservation</strong>
                  Documenting 1960s post-independence architecture & brutalist landmarks.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#0D0D0D] p-3.5 border border-[#262626]">
                <span className="text-[#C9963A] font-bold text-sm">02</span>
                <div>
                  <strong className="text-[#F4EFE4] block text-[11px] mb-0.5">Informal Urban Intelligence</strong>
                  Mapping Matatu transit corridors, River Road hawker grids & street life.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#0D0D0D] p-3.5 border border-[#262626]">
                <span className="text-[#C9963A] font-bold text-sm">03</span>
                <div>
                  <strong className="text-[#F4EFE4] block text-[11px] mb-0.5">Public Space Advocacy</strong>
                  Promoting green buffer preservation, park equity & pedestrian walkability.
                </div>
              </div>
            </div>
          </div>

          {/* Floating Brand Stamp */}
          <div className="flex justify-between items-center px-2">
            <span className="font-mono text-[9px] tracking-widest text-[#888888] uppercase">
              NAIROBI BY DESIGN · RESEARCH LAB
            </span>
            <span className="font-['Caveat',cursive] text-[18px] font-bold text-[#C9963A] opacity-90 block -rotate-1 animate-float-slow">
              ✦ spatial literacy est 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
