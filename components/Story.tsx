export default function Story() {
  return (
    <section
      id="mission"
      className="bg-[#EBE5D8] text-[#141414] py-16 md:py-14 border-b border-[#D8D1C3] relative overflow-hidden"
    >


      <div className="px-6 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Tag, Headline & Stats Box */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Section Tag */}
              <div className="font-mono text-xs tracking-[0.25em] uppercase text-[#C2963B] mb-8 flex items-center gap-3">
                <span className="w-6 h-[1.5px] bg-[#C2963B]" />
                ABOUT NAIROBI
              </div>

              {/* Bold Uppercase Headline */}
              <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(40px,6vw,80px)] leading-[0.88] tracking-[0.01em] text-[#141414] uppercase mb-12">
                EVERY CITY<br />
                IS A TEXT.<br />
                THIS ONE<br />
                IS OURS.
              </h2>
            </div>

            {/* Stats Box */}
            <div className="border border-[#1A1A1A] p-3 md:p-3 bg-transparent">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#1A1A1A]/20 sm:divide-[#1A1A1A]">
                {/* Stat 1 */}
                <div className="sm:pr-4">
                  <div className="font-['Bebas_Neue',sans-serif] text-5xl md:text-6xl text-[#C2963B] leading-none mb-2.5">
                    6
                  </div>
                  <p className="font-mono text-[11px] md:text-[12px] text-[#4A4740] leading-snug">
                    Urban layers readable in one morning&apos;s walk
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="pt-4 sm:pt-0 sm:px-4">
                  <div className="font-['Bebas_Neue',sans-serif] text-5xl md:text-6xl text-[#C2963B] leading-none mb-2.5">
                    120
                  </div>
                  <p className="font-mono text-[11px] md:text-[12px] text-[#4A4740] leading-snug">
                    Years of decisions visible from KICC rooftop
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="pt-4 sm:pt-0 sm:pl-4">
                  <div className="font-['Bebas_Neue',sans-serif] text-5xl md:text-6xl text-[#C2963B] leading-none mb-2.5">
                    5M+
                  </div>
                  <p className="font-mono text-[11px] md:text-[12px] text-[#4A4740] leading-snug">
                    People whose city this actually is
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Paragraphs */}
          <div className="lg:col-span-6 font-mono text-[13px] md:text-[14.5px] leading-[1.85] text-[#2C2A26] space-y-7 pt-2 lg:pt-14">
            <p>
              Nairobi is one of the few cities on earth where you can read{" "}
              <strong className="font-bold text-[#141414]">
                six distinct layers of urban history
              </strong>{" "}
              in a single morning&apos;s walk. The colonial grid, postcolonial modernist ambition, South Asian commercial heritage, informal settlement intelligence, new luxury towers, and the emerging climate adaptation story. All of it compressed into one extraordinary geography.
            </p>

            <p>
              NBO by Design makes that story legible.{" "}
              <strong className="font-bold text-[#141414]">Urban literacy</strong> — the kind of understanding that changes how you see your city, your vote, your neighbourhood, and every city you visit again.
            </p>

            <p>
              We ask the question that most tour operators skip:{" "}
              <strong className="font-bold text-[#141414]">
                who has the power to shape this city?
              </strong>{" "}
              The colonial planner, the postcolonial government, the South Asian merchant who built the streets, the informal builder who had no institutional support. And now, who decides what comes next?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

