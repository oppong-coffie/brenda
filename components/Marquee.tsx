export default function Marquee() {
  const items = [
    "Walking Tours",
    "Speaker Series",
    "Urban Literacy",
    "Critical Design",
    "Nairobi CBD",
    "Community Voice",
    "Social Enterprise",
    "KICC",
  ];

  // Repeat twice for seamless infinite looping animation
  const marqueeItems = [...items, ...items];

  return (
    <div className="bg-[#0D0D0D] overflow-hidden py-4 border-b border-[#222222] flex select-none z-20 relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {marqueeItems.map((item, idx) => (
          <div
            key={idx}
            className="font-['Bebas_Neue',sans-serif] text-[18px] tracking-[0.12em] text-[#F4EFE4] px-8 flex items-center gap-8"
          >
            <span>{item}</span>
            <span className="text-[#C9963A] text-[14px]">×</span>
          </div>
        ))}
      </div>
    </div>
  );
}
