"use client";

interface ToursProps {
  onBookTour?: (tourName: string) => void;
}

export default function Tours({ onBookTour }: ToursProps) {
  const tours = [
    {
      num: "01",
      category: "POWER & GOVERNANCE",
      title: "POWER & GOVERNANCE",
      body: "Follow the seat of state power from KICC to Parliament. Every step was built to project authority, control resources, or organize power over people. Includes sites where movement held critical detention chambers.",
      route: "KICC to Parliament",
      duration: "5 hours",
      tag: "Political City",
      bgImage: "/images/building6.jpeg",
      featured: true,
    },
    {
      num: "02",
      category: "HERITAGE",
      title: "HERITAGE BUILDINGS",
      body: "Learn how the Railway Bank Association, Colonial Archives, and Old City Hall were designed to impress and project authority. Every stone is archival material showing how early colonial administration shaped local African, South-Asian, or European trade.",
      route: "Railway Avenue to Jeevanjee Gardens",
      duration: "5 hours",
      tag: "Architectural Heritage",
      bgImage: "/images/building1.jpeg",
      featured: false,
    },
    {
      num: "03",
      category: "ARCHITECTURE",
      title: "NAIROBI THEN AND NOW",
      body: "The glass skyscrapers side by side with colonial stone public towers, the government building back to the private corporate. Every era building on top of older layers which changes how your eyes view how a city moves these streets and for whom.",
      route: "CBD Business Core",
      duration: "5 hours",
      tag: "Modernism",
      bgImage: "/images/building7.jpeg",
      featured: false,
    },
    {
      num: "04",
      category: "HISTORY",
      title: "INDIAN HERITAGE & COMMERCIAL NETWORKS",
      body: "The most under-told story in Nairobi's urban history: the South Asian community physically built much of the CBD, financed the first commercial streets, dominated public spaces, and created networks that still run on.",
      route: "Bazaar Street to Biashara Street",
      duration: "5 hours",
      tag: "Cultural History",
      bgImage: "/images/building9.jpeg",
      featured: false,
    },
    {
      num: "05",
      category: "ACTIVISM",
      title: "INFORMALITY & EVERYDAY URBANISM",
      body: "Nairobi's buildings. The subject is the street itself. Hawkers, matatu routes, informal commerce, street drainage, improvised storefronts, the edge economy: the city planners designed, and the city residents actually built are two different cities in the same space.",
      route: "CBD East to Tom Mboya Street",
      duration: "5 hours",
      tag: "Urban Economy",
      bgImage: "/images/walk1.jpeg",
      featured: false,
    },
    {
      num: "06",
      category: "COMMUNITY",
      title: "KIBERA & MUKURU",
      body: "Walk through two of Africa's largest informal settlements with a community guide who knows them from the inside. These communities built their own infrastructure, drainage networks, and commercial hubs. The spatial intelligence here is extraordinary. This tour is continuous.",
      route: "Kibera Drive and Mukuru informal settlements",
      duration: "3 hours",
      tag: "Community Hub",
      bgImage: "/images/walk2.jpeg",
      featured: false,
    },
    {
      num: "07",
      category: "ARCHITECTURE",
      title: "RELIGIOUS ARCHITECTURE",
      body: "Nairobi's CBD contains some of the most architecturally significant religious buildings in East Africa. The Holy Family Basilica, Jamia Mosque, the Sikh Gurdwara, the Jamatkhana, and others represent different streams of belief, identity, and community in the city's history. This tour reads what religious architecture tells us about who has always shaped this city, and how.",
      route: "CBD religious buildings circuit",
      duration: "5 hours",
      tag: "Faith & Community",
      bgImage: "/images/building8.jpeg",
      featured: false,
      spanFull: true,
    },
  ];

  return (
    <section
      id="tours"
      className="bg-[#EBE5D8] text-[#141414] py-16 md:py-24 px-6 md:px-14 lg:px-20 border-b border-[#D8D1C3]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header Tag */}
        <div className="font-mono text-xs tracking-[0.25em] uppercase text-[#C2963B] mb-6 flex items-center gap-3">
          <span className="w-6 h-[1.5px] bg-[#C2963B]" />
          THE TOURS
        </div>

        {/* Section Title */}
        <div className="mb-12">
          <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(44px,5.5vw,80px)] leading-[0.9] tracking-[0.01em] text-[#141414] uppercase mb-4">
            BUILD TOURS<br />
            NAIROBI CBD
          </h2>
          <p className="font-mono text-[11px] md:text-xs text-[#C2963B] tracking-wide">
            Filter tour routes on the right side. Select one or more than one...
          </p>
        </div>

        {/* Tours Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((t, idx) => (
            <div
              key={idx}
              className={`p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group min-h-[500px] border border-[#1A1A1A] bg-[#0A0A0A] hover:border-[#C2963B] transition-all duration-300 shadow-lg ${
                t.spanFull ? "md:col-span-3 min-h-[420px]" : ""
              } ${t.featured ? "border-t-4 border-t-[#C2963B]" : ""}`}
            >
              {/* Clear Vivid Background Image */}
              {t.bgImage && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                  <img
                    src={t.bgImage}
                    alt={t.title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]/90" />
                </div>
              )}

              {/* Featured Badge */}
              {t.featured && (
                <div className="absolute top-0 left-0 bg-[#C2963B] text-[#141414] font-mono text-[9px] font-bold tracking-widest uppercase px-3 py-1 z-20 shadow-md">
                  FEATURED TOUR
                </div>
              )}

              {/* Top Number Badge */}
              <div className="relative z-10 flex justify-end mb-4 pt-2">
                <div className="font-['Bebas_Neue',sans-serif] text-5xl md:text-6xl text-[#F4EFE4] bg-[#0A0A0A]/80 backdrop-blur-md px-3 py-1 border border-[#F4EFE4]/20 leading-none shadow-md">
                  {t.num}
                </div>
              </div>

              {/* Glassmorphic Panel around Text for 100% Clarity */}
              <div className="relative z-10 bg-[#0A0A0A]/85 backdrop-blur-md p-6 border border-[#F4EFE4]/15 shadow-2xl space-y-4">
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C2963B] font-semibold">
                  {t.category}
                </div>

                <h3 className="font-['Bebas_Neue',sans-serif] text-2xl md:text-3xl text-[#F4EFE4] tracking-wide leading-tight uppercase">
                  {t.title}
                </h3>

                <p className="font-mono text-[11.5px] md:text-[12.5px] leading-relaxed text-[#E0DDD5]">
                  {t.body}
                </p>

                <div className="font-mono text-[10.5px] text-[#A09C92] space-y-1 border-t border-[#F4EFE4]/15 pt-3">
                  <div>
                    <span className="text-[#F4EFE4] font-semibold">Route:</span> {t.route}
                  </div>
                  <div>
                    <span className="text-[#F4EFE4] font-semibold">Duration:</span> {t.duration}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#F4EFE4]/15">
                  <button
                    onClick={() => onBookTour && onBookTour(t.title)}
                    className="font-mono text-[10px] tracking-wider uppercase font-bold text-[#F4EFE4] bg-[#141414] border border-[#F4EFE4]/40 px-3.5 py-1.5 hover:bg-[#C2963B] hover:border-[#C2963B] hover:text-[#141414] transition-colors cursor-pointer"
                  >
                    REGISTER INTEREST
                  </button>

                  <span className="font-mono text-[10px] text-[#C2963B] italic">
                    [{t.tag}]
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




