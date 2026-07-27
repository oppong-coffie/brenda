"use client";

import { useEffect, useState } from "react";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-13 py-3 transition-all duration-400 border-b ${
        isScrolled
          ? "bg-black backdrop-blur-md border-[#0D0D0D]/10 shadow-xs"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Brand Logo */}
      <a href="#" className="leading-none group text-decoration-none">
        <span className="font-['Bebas_Neue',sans-serif] text-[22px] tracking-[0.06em] text-white">
          NBO
        </span>
        <span className="font-['Caveat',cursive] text-[11px] font-bold text-[#C9963A] leading-tight">
          by
        </span>
        <span className="font-['Bebas_Neue',sans-serif] text-[22px] tracking-[0.06em] text-white">
          DESIGN
        </span>
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-9 list-none font-mono text-[10px] tracking-[0.15em] uppercase">
        <li>
          <a
            href="#tours"
            className="text-white hover:text-[#0D0D0D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C9963A] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
          >
            Tours
          </a>
        </li>
        <li>
          <a
            href="#events"
            className="text-white hover:text-[#0D0D0D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C9963A] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
          >
            Events
          </a>
        </li>
        <li>
          <a
            href="#story"
            className="text-white hover:text-[#0D0D0D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C9963A] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#mission"
            className="text-white hover:text-[#0D0D0D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C9963A] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
          >
            Mission
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            className="text-white hover:text-[#0D0D0D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C9963A] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="#founder"
            className="text-white hover:text-[#0D0D0D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C9963A] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
          >
            Founder
          </a>
        </li>
      </ul>

      {/* Desktop CTA & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            if (onOpenBooking) onOpenBooking();
            else {
              const bookSec = document.getElementById("book");
              bookSec?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="font-['Bebas_Neue',sans-serif] text-[16px] tracking-[0.1em] text-white border-[1.5px] border-white px-5 py-1 hover:bg-[#0D0D0D] hover:text-[#F4EFE4] transition-all duration-300 cursor-pointer group flex items-center gap-1.5 hover-lift animate-btn-shimmer animate-live-btn"
        >
          <span>Book a Tour</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-hidden"
          aria-label="Toggle Navigation Menu"
        >
          <span
            className={`w-6 h-0.5 bg-[#0D0D0D] transition-transform ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#0D0D0D] transition-opacity ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#0D0D0D] transition-transform ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F4EFE4] border-b border-[#0D0D0D]/20 p-6 flex flex-col gap-4 md:hidden shadow-xl">
          <a
            href="#tours"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-mono text-xs tracking-widest uppercase text-[#0D0D0D] py-1 border-b border-black/5"
          >
            Tours
          </a>
          <a
            href="#events"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-mono text-xs tracking-widest uppercase text-[#0D0D0D] py-1 border-b border-black/5"
          >
            Events
          </a>
          <a
            href="#story"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-mono text-xs tracking-widest uppercase text-[#0D0D0D] py-1 border-b border-black/5"
          >
            About
          </a>
          <a
            href="#mission"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-mono text-xs tracking-widest uppercase text-[#0D0D0D] py-1 border-b border-black/5"
          >
            Mission
          </a>
          <a
            href="#gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-mono text-xs tracking-widest uppercase text-[#0D0D0D] py-1 border-b border-black/5"
          >
            Gallery
          </a>
          <a
            href="#founder"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-mono text-xs tracking-widest uppercase text-[#0D0D0D] py-1 border-b border-black/5"
          >
            Founder
          </a>
        </div>
      )}
    </nav>
  );
}
