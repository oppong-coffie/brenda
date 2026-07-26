"use client";

import { useState } from "react";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"all" | "architecture" | "tours" | "streets">("all");

  const galleryItems = [
    {
      id: 1,
      type: "wide",
      category: "architecture",
      title: "KICC & The Modernist Skyline",
      caption: "1973 Brutalist & African Lotus motif tower",
      handNote: "Iconic Nairobi landmark",
      imageUrl: "/building4.jpg",
    },
    {
      id: 2,
      type: "normal",
      category: "tours",
      title: "Sunday Walking Tour Group",
      caption: "Exploring Kipande House & Railway History",
      handNote: "CBD walk · Sept 2025",
      imageUrl: "/walk1.jpg",
    },
    {
      id: 3,
      type: "normal",
      category: "streets",
      title: "River Road Hawker Ecosystems",
      caption: "Informal street trade & adaptive space",
      handNote: "Nyamakima grid",
      imageUrl: "/images/sp1.jpg",
    },
    {
      id: 4,
      type: "tall",
      category: "architecture",
      title: "Colonial Railway Arcade Facade",
      caption: "1920s stone arches on Haile Selassie Ave",
      handNote: "Built 1928",
      imageUrl: "/images/bd3.JPG",
    },
    {
      id: 5,
      type: "normal",
      category: "streets",
      title: "Matatu Canvas & City Typologies",
      caption: "Mobile street art & urban identity",
      handNote: "KBS & Super Metro routes",
      imageUrl: "/images/sp2.jpg",
    },
    {
      id: 6,
      type: "normal",
      category: "tours",
      title: "Jeevanjee Gardens Discussion",
      caption: "Public parks & political memory",
      handNote: "Free speech corner",
      imageUrl: "/walk2.jpg",
    },
    {
      id: 7,
      type: "normal",
      category: "architecture",
      title: "KICC & The Modernist Skyline",
      caption: "1973 Brutalist & African Lotus motif tower",
      handNote: "Iconic Nairobi landmark",
      imageUrl: "/building5.jpg",
    },
    {
      id: 8,
      type: "normal",
      category: "architecture",
      title: "KICC & The Modernist Skyline",
      caption: "1973 Brutalist & African Lotus motif tower",
      handNote: "Iconic Nairobi landmark",
      imageUrl: "/images/bd7.jpg",
    },
    {
      id: 9,
      type: "normal",
      category: "architecture",
      title: "KICC & The Modernist Skyline",
      caption: "1973 Brutalist & African Lotus motif tower",
      handNote: "Iconic Nairobi landmark",
      imageUrl: "/images/bd8.jpg",
    },
    {
      id: 10,
      type: "normal",
      category: "streets",
      title: "KICC & The Modernist Skyline",
      caption: "1973 Brutalist & African Lotus motif tower",
      handNote: "Iconic Nairobi landmark",
      imageUrl: "/images/sp9.jpg",
    },
    {
      id: 11,
      type: "normal",
      category: "streets",
      title: "KICC & The Modernist Skyline",
      caption: "1973 Brutalist & African Lotus motif tower",
      handNote: "Iconic Nairobi landmark",
      imageUrl: "/sp6.JPG",
    },
    {
      id: 12,
      type: "normal",
      category: "streets",
      title: "KICC & The Modernist Skyline",
      caption: "1973 Brutalist & African Lotus motif tower",
      handNote: "Iconic Nairobi landmark",
      imageUrl: "/images/sp5.JPG",
    },
    // {
    //   id: 13,
    //   type: "normal",
    //   category: "tours",
    //   title: "KICC & The Modernist Skyline",
    //   caption: "1973 Brutalist & African Lotus motif tower",
    //   handNote: "Iconic Nairobi landmark",
    //   imageUrl: "/walk3.jpg",
    // },
    {
      id: 14,
      type: "normal",
      category: "tours",
      title: "KICC & The Modernist Skyline",
      caption: "1973 Brutalist & African Lotus motif tower",
      handNote: "Iconic Nairobi landmark",
      imageUrl: "/walk6.jpg",
    },
    {
      id: 15,
      type: "normal",
      category: "tours",
      title: "KICC & The Modernist Skyline",
      caption: "1973 Brutalist & African Lotus motif tower",
      handNote: "Iconic Nairobi landmark",
      imageUrl: "/walk7.jpg",
    },

  ];

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === null || prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === null || prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  const currentLightboxItem = selectedPhotoIndex !== null ? filteredItems[selectedPhotoIndex] : null;

  return (
    <section
      id="gallery"
      className="bg-[#0D0D0D] border-b-[1.5px] border-[#222222] py-[100px] md:py-[120px] px-6 md:px-13"
    >
      {/* Section Tag */}
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C9963A] mb-14 flex items-center gap-3.5">
        <span className="w-7 h-[1.5px] bg-[#C9963A]" />
        Visual Archive
      </div>

      {/* Gallery Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 md:gap-0">
        <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(52px,7vw,88px)] leading-[0.85] tracking-[0.02em] text-[#F4EFE4]">
          NAIROBI <span className="text-[#C9963A]">IN FOCUS</span>
        </h2>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-ig-link font-mono text-[11px] tracking-[0.12em] uppercase text-[#C9963A] border border-[#333333] px-5 py-3 flex items-center gap-2.5 hover:bg-[#1A1A1A] hover:border-[#C9963A] transition-colors"
        >
          <span>◎</span> Follow @nbo.by.design
        </a>
      </div>

      {/* Gallery Filters */}
      <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`font-mono text-[10px] tracking-[0.15em] uppercase px-4 py-2 border transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === "all"
              ? "bg-[#C9963A] text-[#0D0D0D] border-[#C9963A]"
              : "text-[#F4EFE4]/60 border-[#2A2A2A] hover:border-[#C9963A]"
          }`}
        >
          All Photos
        </button>
        <button
          onClick={() => setActiveTab("architecture")}
          className={`font-mono text-[10px] tracking-[0.15em] uppercase px-4 py-2 border transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === "architecture"
              ? "bg-[#C9963A] text-[#0D0D0D] border-[#C9963A]"
              : "text-[#F4EFE4]/60 border-[#2A2A2A] hover:border-[#C9963A]"
          }`}
        >
          Architecture
        </button>
        <button
          onClick={() => setActiveTab("tours")}
          className={`font-mono text-[10px] tracking-[0.15em] uppercase px-4 py-2 border transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === "tours"
              ? "bg-[#C9963A] text-[#0D0D0D] border-[#C9963A]"
              : "text-[#F4EFE4]/60 border-[#2A2A2A] hover:border-[#C9963A]"
          }`}
        >
          Walking Tours
        </button>
        <button
          onClick={() => setActiveTab("streets")}
          className={`font-mono text-[10px] tracking-[0.15em] uppercase px-4 py-2 border transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === "streets"
              ? "bg-[#C9963A] text-[#0D0D0D] border-[#C9963A]"
              : "text-[#F4EFE4]/60 border-[#2A2A2A] hover:border-[#C9963A]"
          }`}
        >
          Street Life
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhotoIndex(index)}
            className={`gallery-item relative overflow-hidden bg-[#1A1A1A] group cursor-pointer ${
              item.type === "wide" ? "md:col-span-2 aspect-[2/1]" : "aspect-square"
            }`}
          >
            {/* Image */}
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-104 grayscale-[20%] group-hover:grayscale-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#F4EFE4] leading-[1.6]">
                <span className="font-['Caveat',cursive] text-[15px] font-bold text-[#C9963A] block tracking-normal normal-case mb-1">
                  {item.handNote}
                </span>
                <strong className="block text-[#F4EFE4] text-xs font-bold mb-0.5">
                  {item.title}
                </strong>
                <span className="text-[#F4EFE4]/70">{item.caption}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-[20000] bg-[#0D0D0D]/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8 animate-fade-up">
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-6 right-6 font-mono text-sm tracking-widest text-[#F4EFE4] border border-[#333333] w-10 h-10 flex items-center justify-center hover:bg-[#C9963A] hover:text-[#0D0D0D] transition-colors cursor-pointer z-50"
          >
            ✕
          </button>

          {/* Previous Arrow */}
          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 md:left-8 font-mono text-lg text-[#F4EFE4] border border-[#333333] w-12 h-12 flex items-center justify-center hover:bg-[#C9963A] hover:text-[#0D0D0D] transition-colors cursor-pointer z-50"
          >
            ←
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNextPhoto}
            className="absolute right-4 md:right-8 font-mono text-lg text-[#F4EFE4] border border-[#333333] w-12 h-12 flex items-center justify-center hover:bg-[#C9963A] hover:text-[#0D0D0D] transition-colors cursor-pointer z-50"
          >
            →
          </button>

          {/* Lightbox Content Container */}
          <div className="max-w-4xl w-full flex flex-col items-center justify-center space-y-4">
            <div className="relative max-h-[70vh] overflow-hidden border border-[#222222]">
              <img
                src={currentLightboxItem.imageUrl}
                alt={currentLightboxItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="text-center font-mono text-xs max-w-lg space-y-2">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#C9963A]">
                {currentLightboxItem.category} · Photo {selectedPhotoIndex + 1} of {filteredItems.length}
              </div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-2xl tracking-wide text-[#F4EFE4]">
                {currentLightboxItem.title}
              </h3>
              <p className="text-[#F4EFE4]/70 leading-relaxed">
                {currentLightboxItem.caption}
              </p>
              <div className="font-['Caveat',cursive] text-lg text-[#C9963A] font-bold pt-1">
                Note: &quot;{currentLightboxItem.handNote}&quot;
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Footer Note */}
      <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
        <span className="font-['Caveat',cursive] text-[15px] font-bold text-[#F4EFE4]/40 italic">
          * Visual archive updated weekly following Sunday city walks · Click any photo for expanded archive view
        </span>
        <span className="font-mono text-[10px] tracking-widest text-[#C9963A] uppercase">
          Curated by NBO by Design
        </span>
      </div>
    </section>
  );
}
