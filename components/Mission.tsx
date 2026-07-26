import AnimatedCounter from "./AnimatedCounter";

export default function Mission() {
  const principles = [
    {
      num: "01",
      title: "COMMUNITY ACCESSIBILITY",
      body: "We offer sliding-scale pricing and free walking tours for local student groups and community organizations to ensure spatial education is universally accessible.",
    },
    {
      num: "02",
      title: "PRESERVING HERITAGE",
      body: "A portion of proceeds funds digital documentation and oral histories of vulnerable architectural landmarks facing demolition across Nairobi.",
    },
    {
      num: "03",
      title: "ADVOCACY FOR WALKABILITY",
      body: "We publish spatial research and policy briefs advocating for safer pedestrian infrastructure, public green spaces, and inclusive urban planning.",
    },
  ];

  return (
    <section
      id="mission"
      className="bg-[#EDE6D6] border-b-[1.5px] border-[#0D0D0D] py-[100px] md:py-[120px] px-6 md:px-13"
    >
      {/* Section Tag */}
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C9963A] mb-14 flex items-center gap-3.5">
        <span className="w-7 h-[1.5px] bg-[#C9963A]" />
        Social Enterprise Impact
      </div>

      {/* Live Animated Scroll Counter Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 border-[1.5px] border-[#0D0D0D] bg-[#F4EFE4] p-6 md:p-8">
        <div className="text-center border-r border-[#0D0D0D]/15 last:border-0 p-2">
          <div className="font-['Bebas_Neue',sans-serif] text-4xl md:text-5xl text-[#0D0D0D] tracking-wide">
            <AnimatedCounter end={50} suffix="+" duration={2200} />
          </div>
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#C9963A] mt-1">
            Walks Conducted
          </div>
        </div>
        <div className="text-center md:border-r border-[#0D0D0D]/15 p-2">
          <div className="font-['Bebas_Neue',sans-serif] text-4xl md:text-5xl text-[#0D0D0D] tracking-wide">
            <AnimatedCounter end={3} duration={1800} />
          </div>
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#C9963A] mt-1">
            Curated Routes
          </div>
        </div>
        <div className="text-center border-r border-[#0D0D0D]/15 p-2">
          <div className="font-['Bebas_Neue',sans-serif] text-4xl md:text-5xl text-[#0D0D0D] tracking-wide">
            <AnimatedCounter end={100} suffix="%" duration={2000} />
          </div>
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#C9963A] mt-1">
            Public Discourse
          </div>
        </div>
        <div className="text-center p-2">
          <div className="font-['Bebas_Neue',sans-serif] text-4xl md:text-5xl text-[#0D0D0D] tracking-wide">
            <AnimatedCounter end={1973} duration={2500} />
          </div>
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#C9963A] mt-1">
            Heritage Archive Year
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        {/* Left: Mission Text */}
        <div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(52px,7vw,88px)] leading-[0.85] tracking-[0.02em] text-[#0D0D0D] mb-7">
            DESIGN FOR
            <span className="text-outline-ink block">PUBLIC GOOD</span>
          </h2>
          <div className="font-mono text-[13px] leading-[2] text-[#555555] space-y-5">
            <p>
              <strong className="text-[#0D0D0D]">NBO by Design</strong> operates as a social enterprise. We believe urban literacy is a democratic right — every resident should have the vocabulary to critique and shape their environment.
            </p>
            <p>
              By combining commercial architectural tours with open-access research, community workshops, and advocacy, we create a sustainable model for spatial education in Nairobi.
            </p>
          </div>
        </div>

        {/* Right: Principles Stack */}
        <div className="flex flex-col gap-0.5">
          {principles.map((pr, idx) => (
            <div
              key={idx}
              className="principle border-[1.5px] border-[#0D0D0D] p-7 md:p-8 flex gap-5 items-start bg-[#F4EFE4] hover:bg-[#0D0D0D] transition-colors duration-300 group"
            >
              <div className="font-['Bebas_Neue',sans-serif] text-[36px] text-[#C9963A] leading-none shrink-0 group-hover:text-[#C9963A] transition-colors">
                {pr.num}
              </div>
              <div>
                <h3 className="font-['Bebas_Neue',sans-serif] text-[22px] tracking-[0.04em] text-[#0D0D0D] group-hover:text-[#F4EFE4] transition-colors mb-1.5">
                  {pr.title}
                </h3>
                <p className="font-mono text-[11px] leading-[1.8] text-[#555555] group-hover:text-[#F4EFE4]/65 transition-colors">
                  {pr.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
