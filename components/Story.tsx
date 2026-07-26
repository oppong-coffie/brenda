export default function Story() {
  return (
    <section
      id="story"
      className="bg-[#0D0D0D] text-[#F4EFE4] border-b-[1.5px] border-[#222222] py-[100px] md:py-[120px] px-6 md:px-13 relative overflow-hidden"
    >
      {/* Background Ghost Text */}
      <div className="absolute top-1/2 -right-10 -translate-y-1/2 font-['Bebas_Neue',sans-serif] text-[clamp(180px,22vw,320px)] leading-none text-transparent text-outline-ghost-white pointer-events-none select-none z-0">
        STORY
      </div>

      {/* Section Tag */}
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C9963A] mb-14 flex items-center gap-3.5 relative z-10">
        <span className="w-7 h-[1.5px] bg-[#C9963A]" />
        The Story
      </div>

      {/* Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[80px] items-center relative z-10">
        {/* Left: Manifesto Text */}
        <div>
          <h2 className="font-['Fraunces',serif] italic text-[clamp(28px,3.5vw,48px)] leading-[1.25] text-[#F4EFE4] mb-[40px]">
            Nairobi was never designed for its people. It was designed to{" "}
            <em className="not-italic text-[#C9963A]">extract, segregate, and control.</em>{" "}
            We are rewriting that relationship.
          </h2>
          <div className="font-mono text-[13px] leading-[2] text-[#F4EFE4]/65 space-y-5">
            <p>
              Founded in 1899 as a railway depot, Nairobi&apos;s spatial layout reflects colonial segregation — racialized zoning, buffer strips, and infrastructure built for administrative dominance rather than human flourishing.
            </p>
            <p>
              Today, <strong className="text-[#F4EFE4]">NBO by Design</strong> uses spatial storytelling, architectural tours, and public forums to equip citizens and visitors with the critical tools to read the city — understanding how power, economics, and culture manifest in brick, mortar, and tarmac.
            </p>
          </div>
        </div>

        {/* Right: Key Stats */}
        <div className="flex flex-col gap-0.5">
          {/* Stat 01 */}
          <div className="bg-[#161616] border border-[#2A2A2A] p-8 md:p-10 relative overflow-hidden border-l-[3px] border-l-[#C9963A]">
            <div className="font-['Bebas_Neue',sans-serif] text-[80px] leading-[0.9] text-[#F4EFE4] tracking-[0.02em]">
              1899
            </div>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#C9963A] mt-2">
              Year Nairobi was founded as a railway camp
            </div>
            <div className="font-['Caveat',cursive] text-[13px] font-bold text-[#F4EFE4]/40 mt-1.5">
              handed down from colonial grid
            </div>
          </div>

          {/* Stat 02 */}
          <div className="bg-[#161616] border border-[#2A2A2A] p-8 md:p-10 relative overflow-hidden border-l-[3px] border-l-[#C9963A]">
            <div className="font-['Bebas_Neue',sans-serif] text-[80px] leading-[0.9] text-[#F4EFE4] tracking-[0.02em]">
              3.5M+
            </div>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#C9963A] mt-2">
              CBD daily foot traffic
            </div>
            <div className="font-['Caveat',cursive] text-[13px] font-bold text-[#F4EFE4]/40 mt-1.5">
              a walking city needing walkability
            </div>
          </div>

          {/* Stat 03 */}
          <div className="bg-[#161616] border border-[#2A2A2A] p-8 md:p-10 relative overflow-hidden border-l-[3px] border-l-[#C9963A]">
            <div className="font-['Bebas_Neue',sans-serif] text-[80px] leading-[0.9] text-[#F4EFE4] tracking-[0.02em]">
              100%
            </div>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#C9963A] mt-2">
              Local & Community-Driven
            </div>
            <div className="font-['Caveat',cursive] text-[13px] font-bold text-[#F4EFE4]/40 mt-1.5">
              reinvested into spatial advocacy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
