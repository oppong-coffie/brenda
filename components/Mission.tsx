export default function Mission() {
  const cards = [
    {
      num: "01",
      subtitle: "THE HISTORY",
      body: "Nairobi was designed as a racially segregated city. Its colonial grid still shapes who lives where, who floods first, and who gets evicted last. Understanding that history is not nostalgia. It is accountability.",
    },
    {
      num: "02",
      subtitle: "THE PRESENT",
      body: "Every road widening, every demolition, every new flyover is a design decision made by someone with power. Urban literacy means being able to read those decisions. Who benefits. Who pays. Who was not consulted.",
    },
    {
      num: "03",
      subtitle: "THE CLIMATE",
      body: "Nairobi's flooding is not bad luck. It is the result of planning failures compounded by climate change. As rainfall intensity increases, communities on floodplains and riverbanks face escalating risk. Reading the city means reading that risk.",
    },
    {
      num: "04",
      subtitle: "THE PROGRAMME",
      body: "Premium tours fund free urban literacy walks for secondary school students and community groups. Every corporate booking unlocks a free school session for 25 students. A city that understands itself is harder to exploit.",
    },
  ];

  return (
    <section
      id="mission"
      className="bg-[#0A0A0A] text-[#F4EFE4] py-16 md:py-24 px-6 md:px-14 lg:px-20 border-b border-[#222222] relative overflow-hidden"
    >

      <div className="mx-auto">
        {/* Top Grid: Headline & Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 md:mb-20">
          {/* Left Column: Tag & Headline */}
          <div className="lg:col-span-5">
            {/* Section Tag */}
            <div className="font-mono text-xs tracking-[0.25em] uppercase text-[#C2963B] mb-8 flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-[#C2963B]" />
              URBAN LITERACY
            </div>

            {/* Headline */}
            <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(52px,6.5vw,90px)] leading-[0.88] tracking-[0.01em] text-[#F4EFE4] uppercase mb-8">
              KNOWING<br />
              YOUR CITY<br />
              IS A<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #C2963B" }}>
                RIGHT
              </span>
            </h2>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 font-mono text-[12.5px] md:text-[13.5px] leading-[1.8] text-[#A0A0A0] space-y-6 pt-2 lg:pt-14">
            <p>
              Nairobi floods every time it rains heavily. In March 2024, flash floods killed at least 71 people across Kenya, 30 of them in Nairobi alone. Informal settlements in Mukuru, Mathare, Kibera, and Huruma were hardest hit. Vehicles were swept away. Homes were submerged. Families lost everything in a single night.
            </p>

            <div className="border-l-2 border-[#C2963B] pl-4 py-3 my-4 bg-[#141414] text-[#C8C8C8] text-[11.5px] md:text-[12.5px] leading-relaxed italic">
              In Nairobi, approximately 5,500 households were displaced in the March 2024 floods alone. An estimated 10,000 households were affected across the city. The victims died mainly from drowning or electrocution as rivers overflowed their banks. (Kenya Police, March 2024)
            </div>

            <p>
              These floods are not accidents.{" "}
              <strong className="font-bold text-[#F4EFE4]">
                Nairobi was founded on a wet plain and has been building over its own drainage systems ever since.
              </strong>{" "}
              Rapid urbanisation, development on floodplains, drainage infrastructure that has not kept pace with the city&apos;s growth, and weak enforcement of land-use planning regulations have created a city that floods its most vulnerable residents every single rainy season.
            </p>

            <p>
              As climate change intensifies, this will get worse. Researchers project that extreme rainfall events will become more frequent and more severe across East Africa. The people least responsible for climate change, living in informal settlements on Nairobi&apos;s riverbanks, will pay the highest price.
            </p>

            <p>
              <strong className="font-bold text-[#F4EFE4]">
                Knowing how to read your city is how you protect yourself in it.
              </strong>{" "}
              When residents cannot read planning decisions, identify flood-prone land, or challenge infrastructure projects that make flooding worse, they cannot protect themselves or hold anyone accountable. NBO by Design exists to change that.
            </p>
          </div>
        </div>

        {/* 4 Cards Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-[#222222] divide-y sm:divide-y-0 md:divide-x divide-[#222222] bg-[#111111] mb-20">
          {cards.map((c, idx) => (
            <div key={idx} className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="font-['Bebas_Neue',sans-serif] text-5xl md:text-6xl text-[#C2963B] leading-none mb-3">
                  {c.num}
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#F4EFE4] mb-3 font-semibold">
                  {c.subtitle}
                </div>
                <p className="font-mono text-[11px] md:text-[12px] text-[#888888] leading-relaxed">
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote Banner */}
        <div className="text-center pt-8 border-t border-[#222222]/50">
          <blockquote className="font-['Fraunces',serif] italic text-2xl md:text-4xl text-[#F4EFE4] max-w-3xl mx-auto mb-4 leading-snug">
            &ldquo;A city whose residents understand it is harder to exploit.&rdquo;
          </blockquote>
          <div className="font-mono text-xs tracking-[0.2em] text-[#C2963B] uppercase">
            NBO by Design · Urban Literacy Programme
          </div>
        </div>
      </div>
    </section>
  );
}

