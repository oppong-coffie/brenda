export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-[#F4EFE4] px-6 md:px-13 pt-[64px] pb-[40px]">
      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-[56px]">
        {/* Brand Column */}
        <div>
          <div className="leading-none mb-5">
            <span className="font-['Bebas_Neue',sans-serif] text-[44px] tracking-[0.05em] block text-[#F4EFE4]">
              NBO
            </span>
            <span className="font-['Caveat',cursive] text-[19px] font-bold text-[#C9963A] block">
              by
            </span>
            <span className="font-['Bebas_Neue',sans-serif] text-[44px] tracking-[0.05em] block text-outline-paper">
              DESIGN
            </span>
          </div>
          <p className="font-['Fraunces',serif] italic text-[14px] text-[#F4EFE4]/50 leading-[1.6] max-w-[240px]">
            Uncovering Nairobi&apos;s architectural history, spatial politics, and urban soul.
          </p>
        </div>

        {/* Column 1: Navigation */}
        <div>
          <h4 className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#C9963A] mb-5 pb-2.5 border-b border-[#2A2A2A]">
            NAVIGATE
          </h4>
          <ul className="list-none space-y-0 font-mono text-[11px] tracking-[0.06em] text-[#F4EFE4]/55">
            <li className="py-1.5 border-b border-[#1A1A1A] hover:text-[#F4EFE4] transition-colors cursor-pointer">
              <a href="#tours" className="hover:text-white transition-colors">Tours</a>
            </li>
            <li className="py-1.5 border-b border-[#1A1A1A] hover:text-[#F4EFE4] transition-colors cursor-pointer">
              <a href="#events" className="hover:text-white transition-colors">Speaker Series</a>
            </li>
            <li className="py-1.5 border-b border-[#1A1A1A] hover:text-[#F4EFE4] transition-colors cursor-pointer">
              <a href="#story" className="hover:text-white transition-colors">About / Story</a>
            </li>
            <li className="py-1.5 border-b border-[#1A1A1A] hover:text-[#F4EFE4] transition-colors cursor-pointer">
              <a href="#mission" className="hover:text-white transition-colors">Social Mission</a>
            </li>
            <li className="py-1.5 border-b border-[#1A1A1A] hover:text-[#F4EFE4] transition-colors cursor-pointer">
              <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            </li>
            <li className="py-1.5 border-b border-[#1A1A1A] hover:text-[#F4EFE4] transition-colors cursor-pointer">
              <a href="#founder" className="hover:text-white transition-colors">Founder</a>
            </li>
          </ul>
        </div>

        {/* Column 2: Walk Routes */}
        <div>
          <h4 className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#C9963A] mb-5 pb-2.5 border-b border-[#2A2A2A]">
            WALK ROUTES
          </h4>
          <ul className="list-none space-y-0 font-mono text-[11px] tracking-[0.06em] text-[#F4EFE4]/55">
            <li className="py-1.5 border-b border-[#1A1A1A] hover:text-[#F4EFE4] transition-colors cursor-pointer">
              <a href="#tours">Colonial Grid Walk</a>
            </li>
            <li className="py-1.5 border-b border-[#1A1A1A] hover:text-[#F4EFE4] transition-colors cursor-pointer">
              <a href="#tours">Informal Markets Walk</a>
            </li>
            <li className="py-1.5 border-b border-[#1A1A1A] hover:text-[#F4EFE4] transition-colors cursor-pointer">
              <a href="#tours">Green Spaces Walk</a>
            </li>
            <li className="py-1.5 border-b border-[#1A1A1A] hover:text-[#F4EFE4] transition-colors cursor-pointer">
              <a href="#book">Custom Group Walks</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#C9963A] mb-5 pb-2.5 border-b border-[#2A2A2A]">
            CONTACT
          </h4>
          <ul className="list-none space-y-0 font-mono text-[11px] tracking-[0.06em] text-[#F4EFE4]/55">
            <li className="py-1.5 border-b border-[#1A1A1A]">Nairobi, Kenya</li>
            <li className="py-1.5 border-b border-[#1A1A1A] hover:text-[#F4EFE4] transition-colors">
              <a href="mailto:hello@nbobydesign.org">hello@nbobydesign.org</a>
            </li>
            <li className="py-1.5 border-b border-[#1A1A1A] hover:text-[#F4EFE4] transition-colors">
              <a href="tel:+254700000000">+254 700 000 000</a>
            </li>
            <li className="py-1.5 border-b border-[#1A1A1A] text-[#C9963A]">
              WhatsApp Booking Available
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#2A2A2A] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-mono text-[10px] tracking-[0.1em] text-[#F4EFE4]/30 text-center sm:text-left">
          © 2025 NBO BY DESIGN. ALL RIGHTS RESERVED. · NAIROBI, KENYA
        </div>
        <div className="flex gap-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Bebas_Neue',sans-serif] text-[14px] tracking-[0.1em] text-[#F4EFE4]/40 hover:text-[#C9963A] transition-colors"
          >
            INSTAGRAM
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Bebas_Neue',sans-serif] text-[14px] tracking-[0.1em] text-[#F4EFE4]/40 hover:text-[#C9963A] transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Bebas_Neue',sans-serif] text-[14px] tracking-[0.1em] text-[#F4EFE4]/40 hover:text-[#C9963A] transition-colors"
          >
            TWITTER/X
          </a>
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Bebas_Neue',sans-serif] text-[14px] tracking-[0.1em] text-[#F4EFE4]/40 hover:text-[#C9963A] transition-colors"
          >
            PODCAST
          </a>
        </div>
      </div>
    </footer>
  );
}
