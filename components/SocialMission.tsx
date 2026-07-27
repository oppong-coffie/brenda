export default function SocialMission() {
  const cards = [
    {
      tag: "01 · CROSS-SUBSIDY",
      title: "PREMIUM TOURS FUND FREE ACCESS",
      body: "International and corporate guests fund free community access. 30% of net revenue ring-fenced for the Community Urban Literacy Programme.",
    },
    {
      tag: "02 · CO-GUIDE PROGRAMME",
      title: "COMMUNITY AS GUIDE",
      body: "Residents trained and paid as co-guides in their own neighbourhoods. The expert on Mathare is someone from Mathare. Their voice leads the walk.",
    },
    {
      tag: "03 · CIVIC PARTICIPATION & COMMUNITY ADVOCACY",
      title: "URBAN LITERACY AS ENVIRONMENTAL RIGHTS",
      body: "NBO by Design trains community guides from Nairobi's informal settlements — people already doing the work of addressing climate vulnerability, flooding, and poor infrastructure in Mathare, Kibera, and Mukuru — to advocate for their environmental rights with the language and framework to be taken seriously. Working alongside existing community-based organisations, we embed urban literacy into the advocacy already happening on the ground. The people who know best what bad planning costs should be the ones leading the conversation about what better planning looks like. This is not a programme we run for communities. It is one we build with them.",
    },
  ];

  return (
    <section
      id="social-mission"
      className="bg-[#EBE5D8] text-[#141414] py-16 md:py-24 px-6 md:px-14 lg:px-20 border-b border-[#D8D1C3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Tag, Headline & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Section Tag */}
              <div className="font-mono text-xs tracking-[0.25em] uppercase text-[#C2963B] mb-8 flex items-center gap-3">
                <span className="w-6 h-[1.5px] bg-[#C2963B]" />
                SOCIAL MISSION
              </div>

              {/* Bold Uppercase Headline */}
              <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(52px,6.5vw,90px)] leading-[0.88] tracking-[0.01em] text-[#141414] uppercase mb-8">
                THE CITY<br />
                BELONGS<br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px #141414" }}
                >
                  TO ALL
                </span>
              </h2>

              {/* Paragraphs */}
              <div className="font-mono text-[13px] md:text-[14px] leading-[1.85] text-[#3B3832] space-y-6">
                <p>
                  NBO by Design is a social enterprise. The commercial and social sides of this business are the same engine, not two separate things running in parallel.
                </p>

                <p>
                  <strong className="font-bold text-[#141414]">
                    Every premium tour ticket sold funds urban literacy for everyone.
                  </strong>{" "}
                  Students, community groups, residents of informal settlements, young professionals — anyone who deserves to understand the built environment around them.
                </p>

                <p>
                  The community co-guide programme trains residents from Mathare, Kibera, and Mukuru to lead tours of their own neighbourhoods. Because the people who built the informal city are urban designers. They just were never given that name.
                </p>
              </div>

              {/* Gold Accent Dot */}
              <div className="mt-12 flex items-center justify-end">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C2963B] inline-block shadow-xs" />
              </div>
            </div>
          </div>

          {/* Right Column: Cards Matrix Stack */}
          <div className="lg:col-span-6 border border-[#1A1A1A] divide-y divide-[#1A1A1A] bg-transparent">
            {cards.map((c, idx) => (
              <div key={idx} className="p-6 md:p-8 bg-transparent">
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C2963B] mb-2 font-semibold">
                  {c.tag}
                </div>

                <h3 className="font-['Bebas_Neue',sans-serif] text-2xl md:text-3xl text-[#141414] tracking-wide uppercase mb-3 leading-tight">
                  {c.title}
                </h3>

                <p className="font-mono text-[11.5px] md:text-[12.5px] leading-relaxed text-[#4A4740]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
