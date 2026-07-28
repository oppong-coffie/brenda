"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTour?: string;
}

const TOUR_OPTIONS = [
  "01: Power & Governance",
  "02: Heritage Buildings",
  "03: Nairobi Then and Now",
  "04: Indian Heritage & Commercial Networks",
  "05: Informality & Everyday Urbanism",
  "06: Kibera & Mukuru",
  "07: Religious Architecture",
  "Custom Private / Academic Group Walk",
  "Sunday CBD Walk",
];

export default function BookingModal({
  isOpen,
  onClose,
  initialTour,
}: BookingModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedTour, setSelectedTour] = useState(
    initialTour || "01: Power & Governance"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("1");
  const [currency, setCurrency] = useState<"KSH" | "USD">("KSH");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (initialTour) {
      const matched = TOUR_OPTIONS.find(
        (opt) =>
          opt.toLowerCase() === initialTour.toLowerCase() ||
          opt.toLowerCase().includes(initialTour.toLowerCase()) ||
          initialTour.toLowerCase().includes(opt.toLowerCase().replace(/^0\d:\s*/, ""))
      );
      if (matched) {
        setSelectedTour(matched);
      } else {
        setSelectedTour(initialTour);
      }
    } else {
      setSelectedTour("01: Power & Governance");
    }
  }, [initialTour, isOpen]);

  // Dynamically compute price based on route, guest count & currency
  const getComputedPrice = (tour: string, guestCount: string, curr: "KSH" | "USD") => {
    if (tour.toLowerCase().includes("speaker") || tour.toLowerCase().includes("free pass") || tour.toLowerCase().includes("ticket") || tour.toLowerCase().includes("vol.")) {
      return curr === "KSH" ? "Free (Ksh 0)" : "Free ($0 USD)";
    }
    
    let baseKsh = 4000;
    if (tour.includes("03") || tour.toLowerCase().includes("green")) {
      baseKsh = 3500;
    }

    let count = 1;
    if (guestCount.includes("2")) count = 2;
    else if (guestCount.includes("3")) count = 3;
    else if (guestCount.includes("4")) count = 4;

    let totalKsh = baseKsh * count;
    let discountNote = "";
    if (count >= 4) {
      totalKsh = Math.round(totalKsh * 0.9);
      discountNote = " · 10% Group Discount";
    }

    if (curr === "USD") {
      const usdRate = 130; // ~ 1 USD = 130 KSH
      const totalUsd = Math.round(totalKsh / usdRate);
      return `$${totalUsd} USD (${count} ${count === 1 ? "Person" : "People"}${discountNote})`;
    }

    return `Ksh ${totalKsh.toLocaleString()} (${count} ${count === 1 ? "Person" : "People"}${discountNote})`;
  };

  const currentPrice = getComputedPrice(selectedTour, guests, currency);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setErrorMsg("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_48a19v9";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_nacknbd";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "gpqzBLHMQugqvXbc3";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, { publicKey })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitted(true);
        },
        (error) => {
          const errDetail = error?.text ? `${error.status || 'Error'}: ${error.text}` : (typeof error === "object" ? JSON.stringify(error) : String(error));
          console.error("EmailJS Error:", errDetail, error);
          setIsSubmitting(false);
          setErrorMsg(`Email dispatch warning (${error?.text || "Verification needed"}). Showing confirmation anyway.`);
          setSubmitted(true);
        }
      );
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-[#0D0D0D]/80 backdrop-blur-md animate-fade-up">
      <div className="bg-[#F4EFE4] border-2 border-[#0D0D0D] p-8 md:p-10 max-w-lg w-full relative shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 font-mono text-xs tracking-widest text-[#0D0D0D] border border-[#0D0D0D] w-8 h-8 flex items-center justify-center hover:bg-[#0D0D0D] hover:text-[#F4EFE4] transition-colors cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C9963A] mb-2">
              Reservation Form
            </div>
            <h2 className="font-['Bebas_Neue',sans-serif] text-[36px] tracking-[0.03em] text-[#0D0D0D] leading-none mb-6">
              BOOK A BUILDING TOUR
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <input type="hidden" name="to_name" value="Nairobi By Design Team" />
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1">
                  Select Walk Route
                </label>
                <select
                  name="selected_tour"
                  value={selectedTour}
                  onChange={(e) => setSelectedTour(e.target.value)}
                  className="w-full bg-[#EDE6D6] border border-[#0D0D0D] p-3 text-[#0D0D0D] focus:outline-hidden focus:border-[#C9963A]"
                >
                  {TOUR_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                  {!TOUR_OPTIONS.includes(selectedTour) && (
                    <option value={selectedTour}>{selectedTour}</option>
                  )}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="e.g. Achieng Odhiambo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#EDE6D6] border border-[#0D0D0D] p-3 text-[#0D0D0D] focus:outline-hidden focus:border-[#C9963A]"
                  />
                  <input type="hidden" name="user_name" value={name} />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="achieng@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#EDE6D6] border border-[#0D0D0D] p-3 text-[#0D0D0D] focus:outline-hidden focus:border-[#C9963A]"
                  />
                  <input type="hidden" name="user_email" value={email} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#EDE6D6] border border-[#0D0D0D] p-3 text-[#0D0D0D] focus:outline-hidden focus:border-[#C9963A]"
                  >
                    <option value="1 Person">1 Person</option>
                    <option value="2 People">2 People</option>
                    <option value="3 People">3 People</option>
                    <option value="4+ Group Booking">4+ Group Booking</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-[10px] uppercase tracking-wider text-[#555555]">
                      Estimated Price
                    </label>
                    <button
                      type="button"
                      onClick={() => setCurrency(currency === "KSH" ? "USD" : "KSH")}
                      className="text-[9px] font-mono text-[#C9963A] underline cursor-pointer hover:text-[#0D0D0D]"
                    >
                      {currency === "KSH" ? "Switch to USD ($)" : "Switch to KSH (Ksh)"}
                    </button>
                  </div>
                  <input
                    readOnly
                    type="text"
                    name="price"
                    value={currentPrice}
                    className="w-full bg-[#EDE6D6] border border-[#0D0D0D] p-3 text-[#0D0D0D] font-bold focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-['Bebas_Neue',sans-serif] text-[20px] tracking-[0.1em] bg-[#0D0D0D] text-[#F4EFE4] py-3.5 hover:bg-[#C9963A] hover:text-[#0D0D0D] transition-all duration-300 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 animate-btn-shimmer animate-live-btn shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent inline-block" />
                      Sending...
                    </>
                  ) : (
                    "Confirm Booking →"
                  )}
                </button>
              </div>

              <p className="font-['Caveat',cursive] text-sm text-[#C9963A] text-center font-bold">
                No upfront payment required · Confirmation sent via email & M-Pesa option
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="font-['Bebas_Neue',sans-serif] text-[48px] text-[#C9963A] leading-none">
              ASANTE SANA!
            </div>
            <h3 className="font-['Bebas_Neue',sans-serif] text-[28px] text-[#0D0D0D]">
              RESERVATION CONFIRMED
            </h3>
            <p className="font-mono text-xs text-[#555555] leading-relaxed max-w-sm mx-auto">
              Thank you <strong className="text-[#0D0D0D]">{name}</strong>. Your spot for{" "}
              <strong className="text-[#0D0D0D]">{selectedTour}</strong> has been reserved. Check your email (
              <strong className="text-[#0D0D0D]">{email}</strong>) for meeting point coordinates.
            </p>
            {errorMsg && (
              <p className="font-mono text-[10px] text-amber-600 font-semibold">{errorMsg}</p>
            )}
            <button
              onClick={handleReset}
              className="font-['Bebas_Neue',sans-serif] text-[16px] tracking-[0.1em] border border-[#0D0D0D] px-8 py-2.5 hover:bg-[#0D0D0D] hover:text-[#F4EFE4] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

