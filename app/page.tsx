"use client";

import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SundayBanner from "@/components/SundayBanner";
import WhatWeDo from "@/components/WhatWeDo";
import Story from "@/components/Story";
import SocialMission from "@/components/SocialMission";
import Tours from "@/components/Tours";
import Events from "@/components/Events";
import Mission from "@/components/Mission";
import Gallery from "@/components/Gallery";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";
import BookingPlatforms from "@/components/BookingPlatforms";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTourForModal, setSelectedTourForModal] = useState<string | undefined>(undefined);

  const handleOpenBooking = (tourName?: string) => {
    if (tourName) {
      setSelectedTourForModal(tourName);
    } else {
      setSelectedTourForModal("01: The Colonial Grid & Postcolonial Skyline");
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#F4EFE4] text-[#0D0D0D] relative">
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section */}
      <Hero />

      {/* Marquee Strip */}
      <Marquee />

      {/* Sunday Tours Banner */}
      <SundayBanner onRegister={() => handleOpenBooking("Sunday CBD Walk")} />

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Curated Walk Routes Section */}
      <Tours onBookTour={(tourName) => handleOpenBooking(tourName)} />

      {/* Public Speaker Series Section */}
      <Events onReserveTicket={(eventTitle) => handleOpenBooking(eventTitle)} />

      {/* The Story / Manifesto Section */}
      <Story />

      {/* Social Enterprise Mission Section */}
      <Mission />

      {/* Social Mission Section */}
      <SocialMission />

      {/* Visual Archive Gallery */}
      <Gallery />

      {/* Founder Section */}
      <Founder />

      {/* Visitor FAQ Section */}
      <FAQ />

      {/* Booking Platforms */}
      <BookingPlatforms onSelectPlatform={() => handleOpenBooking()} />

      {/* Book CTA Section */}
      <BookCTA
        onOpenBooking={() => handleOpenBooking()}
        onOpenInquiry={() => handleOpenBooking("Custom Private / Academic Group Walk")}
      />

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialTour={selectedTourForModal}
      />
    </main>
  );
}
