export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F4EFE4] relative">

      <div className="px-6 md:px-14 lg:px-20 pt-16 pb-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="font-['Bebas_Neue',sans-serif] text-3xl md:text-4xl text-[#F4EFE4] tracking-wide uppercase flex items-baseline gap-1.5 mb-4">
              NBO{" "}
              <span className="font-['Fraunces',serif] italic lowercase text-2xl text-[#C2963B]">
                by
              </span>{" "}
              DESIGN
            </div>
            <p className="font-['Fraunces',serif] italic text-xs md:text-[13px] text-[#888888] leading-relaxed max-w-[240px]">
              Urban literacy through architecture and the streets we share. A social enterprise.<br />
              Nairobi, Kenya.
            </p>
          </div>

          {/* Column 1: BUILD TOURS */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C2963B] mb-5 font-semibold">
              BUILD TOURS
            </h4>
            <ul className="list-none space-y-2.5 font-mono text-xs text-[#888888]">
              <li>
                <a href="#tours" className="hover:text-[#F4EFE4] transition-colors">
                  Power & Governance
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-[#F4EFE4] transition-colors">
                  Heritage Buildings
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-[#F4EFE4] transition-colors">
                  Nairobi Then and Now
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-[#F4EFE4] transition-colors">
                  Indian Heritage
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-[#F4EFE4] transition-colors">
                  Informality & Streets
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-[#F4EFE4] transition-colors">
                  Kibera & Mukuru
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-[#F4EFE4] transition-colors">
                  Religious Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: ORGANISATION */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C2963B] mb-5 font-semibold">
              ORGANISATION
            </h4>
            <ul className="list-none space-y-2.5 font-mono text-xs text-[#888888]">
              <li>
                <a href="#story" className="hover:text-[#F4EFE4] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-[#F4EFE4] transition-colors">
                  The Founder
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-[#F4EFE4] transition-colors">
                  Urban Literacy
                </a>
              </li>
              <li>
                <a href="#social-mission" className="hover:text-[#F4EFE4] transition-colors">
                  Social Mission
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#F4EFE4] transition-colors">
                  Speaker Series
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-[#F4EFE4] transition-colors">
                  Book a Tour
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: CONNECT */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C2963B] mb-5 font-semibold">
              CONNECT
            </h4>
            <ul className="list-none space-y-2.5 font-mono text-xs text-[#888888]">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F4EFE4] transition-colors"
                >
                  @urban.designnbo
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F4EFE4] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+254796941671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F4EFE4] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-[#F4EFE4] transition-colors">
                  Book on Luma
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-[#F4EFE4] transition-colors">
                  Book on Viator
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-[#222222] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#555555]">
          <div>
            © 2026 NBO by Design · Nairobi, Kenya · Social Enterprise
          </div>
          <div className="flex items-center gap-5 text-[#888888]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C2963B] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C2963B] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C2963B] transition-colors"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

