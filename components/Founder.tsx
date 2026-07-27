export default function Founder() {
  const milestones = [
    {
      title: "MSc Sustainable Lands and Cities",
      details: "University of Edinburgh · Mastercard Foundation Scholar · Climate Leadership Fellow",
    },
    {
      title: "4 Years Field Experience",
      details: "Participatory design with underserved communities across Nairobi",
    },
    {
      title: "Curator & Spatial Storyteller",
      details: "Led over 50+ guided city walks & urban literacy workshops",
    },
    {
      title: "Young Achiever in Social Impact",
      details: "WIRE Legends and Leaders Awards, March 2026",
    },
  ];

  return (
    <section
      id="founder"
      className="bg-[#EBE5D8] text-[#141414] py-16 md:py-24 px-6 md:px-14 lg:px-20 border-b border-[#D8D1C3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header Tag */}
        <div className="font-mono text-xs tracking-[0.25em] uppercase text-[#C2963B] mb-10 flex items-center gap-3">
          <span className="w-6 h-[1.5px] bg-[#C2963B]" />
          THE FOUNDER
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Founder Photo */}
          <div className="lg:col-span-5">
            <div className="border border-[#1A1A1A] p-3 bg-transparent shadow-sm overflow-hidden group">
              <div className="overflow-hidden aspect-[4/5] relative">
                <img
                  src="/profile.jpg"
                  alt="Brenda Ngoya — Founder & Spatial Storyteller"
                  className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Name, Bio, Milestones & Quote */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              {/* Name Headline */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(52px,6.5vw,90px)] leading-[0.88] tracking-[0.01em] text-[#141414] uppercase">
                  BRENDA<br />
                  <span className="text-[#C2963B]">NGOYA.</span>
                </h2>
                <span className="w-2.5 h-2.5 rounded-full bg-[#C2963B] inline-block shadow-xs self-center" />
              </div>

              {/* Bio Narrative */}
              <p className="font-mono text-[13px] md:text-[14px] leading-[1.85] text-[#3B3832] mb-8">
                Urban designer, social entrepreneur, Curator &amp; Spatial Storyteller, and founder of NBO by Design. Brenda holds an MSc in Sustainable Lands and Cities from the University of Edinburgh and has spent four years doing participatory design work with communities across Nairobi. Led over 50+ guided city walks &amp; urban literacy workshops. She built NBO by Design on the belief that understanding your city is not a privilege – it is how you participate in it.
              </p>

              {/* Milestones Stack */}
              <div className="border-t border-b border-[#1A1A1A] divide-y divide-[#1A1A1A]/20 mb-8">
                {milestones.map((m, idx) => (
                  <div key={idx} className="py-3.5 flex items-start gap-3 font-mono text-[11.5px] md:text-[12.5px]">
                    <span className="text-[#C2963B] shrink-0 mt-0.5">✦</span>
                    <div>
                      <strong className="text-[#141414] font-bold">{m.title}</strong>{" "}
                      <span className="text-[#5A564E]">— {m.details}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote Block */}
              <div className="border-l-2 border-[#C2963B] pl-4 py-2 bg-[#E4DDD0]/40 p-4">
                <blockquote className="font-['Fraunces',serif] italic text-base md:text-lg text-[#C2963B] leading-snug">
                  &ldquo;The question is not just what was built. It is who had the power to build it, and who was designing all along without ever being called a designer.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

