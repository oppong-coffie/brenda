"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface BookingPlatformsProps {
  onSelectPlatform?: (platformName: string) => void;
}

export default function BookingPlatforms({ onSelectPlatform }: BookingPlatformsProps) {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const platforms = [
    {
      icon: "📅",
      name: "LUMA",
      desc: "Direct booking. Fastest way to secure your Sunday spot. RSVP opens weekly.",
      badge: "• Live Now",
      isLive: false,
      url: "https://luma.com/xfmia6uc",
    },
    {
      icon: "💬",
      name: "WHATSAPP",
      desc: "Message directly for group bookings, bespoke enquiries, or any questions.",
      badge: "• Live Now",
      isLive: false,
      url: "https://wa.me/+254796941671",
    },
    {
      icon: "🌍",
      name: "VIATOR",
      desc: "For international travellers. Verified listing, secure payment, English support.",
      badge: "• Live Now",
      isLive: false,
      url: "https://www.viator.com/tours/Nairobi/Who-Designed-Nairobi-Expert-Led-Urban-Design-Walking-Tour-CBD/d5280-5643142P2",
    },
    {
      icon: "⭐",
      name: "TRIPADVISOR",
      desc: "Find us and leave a review after your walk. Reviews help more people discover NBO.",
      badge: "• Live Now",
      isLive: false,
      url: "https://www.tripadvisor.com/",
    },
  ];

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_48a19v9";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_nacknbd";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "gpqzBLHMQugqvXbc3";

    emailjs
      .sendForm(serviceId, templateId, form.current, { publicKey })
      .then(
        () => {
          setIsSubmitting(false);
          setStatus("success");
          setStatusMessage("Asante sana! Your reservation has been sent successfully.");
          if (form.current) form.current.reset();
        },
        (error) => {
          const errDetail = error?.text ? `${error.status || 'Error'}: ${error.text}` : (typeof error === "object" ? JSON.stringify(error) : String(error));
          console.error("EmailJS Error:", errDetail, error);
          setIsSubmitting(false);
          setStatus("error");
          setStatusMessage(`Failed to send reservation (${error?.text || "Please check network connection or try again"}).`);
        }
      );
  };

  return (
    <section id="direct-booking" className="bg-[#EDE6D6] border-b-[1.5px] border-[#0D0D0D] py-[80px] px-6 md:px-13">
      <div className="mx-auto space-y-12">
        {/* Header & Partners */}
        <div className="flex flex-col gap-8">
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C9963A] mb-3 flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-[#C9963A]" />
              BOOKING PARTNERS & DIRECT RESERVATION
            </div>
            <h2 className="font-['Bebas_Neue',sans-serif] text-[40px] tracking-[0.03em] text-[#0D0D0D] mb-2">
              WHERE TO FIND US & BOOK DIRECT
            </h2>
            <p className="font-mono text-[12px] text-[#555555] leading-[1.8] max-w-xl">
              Reserve directly using our instant form below or book through our official travel & experience partners.
            </p>
          </div>

          {/* 4 Cards Connected Grid Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-[#0D0D0D] divide-y sm:divide-y-0 lg:divide-x divide-[#0D0D0D] bg-[#EDE6D6] shadow-md">
            {platforms.map((p, idx) => (
              <a
                key={idx}
                href={p.url}
                onClick={(e) => {
                  if (p.isLive) {
                    e.preventDefault();
                    if (onSelectPlatform) onSelectPlatform(p.name);
                    else {
                      const bookSec = document.getElementById("direct-booking-form");
                      bookSec?.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                target={p.isLive ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="p-6 md:p-7 flex flex-col justify-between hover:bg-[#E3D9C4] transition-colors duration-200 text-decoration-none group relative bg-[#EDE6D6]"
              >
                <div>
                  <div className="text-2xl mb-4">{p.icon}</div>
                  <h3 className="font-['Bebas_Neue',sans-serif] text-[26px] md:text-[28px] tracking-[0.04em] text-[#0D0D0D] mb-2.5 leading-none">
                    {p.name}
                  </h3>
                  <p className="font-mono text-[11px] md:text-[11.5px] text-[#4A4740] leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-wider text-[#2D7A2D] border border-[#2D7A2D] bg-[#2D7A2D]/5 px-2.5 py-1 uppercase font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D7A2D] animate-pulse" />
                    Live Now
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Direct EmailJS Reservation Form Section */}
      <div className="flex justify-center">
          <div id="direct-booking-form" className="max-w-4xl  bg-[#F4EFE4] border-2 border-[#0D0D0D] p-6 md:p-10 relative shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 border-b border-[#0D0D0D]/20 gap-2">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C9963A]">
                Instant Email Confirmation
              </span>
              <h3 className="font-['Bebas_Neue',sans-serif] text-[28px] md:text-[32px] tracking-[0.03em] text-[#0D0D0D] leading-none mt-1">
                DIRECT RESERVATION FORM
              </h3>
            </div>
          </div>

          {/* Status Message Display */}
          {status === "success" && (
            <div className="mb-6 p-4 bg-[#2D7A2D]/10 border border-[#2D7A2D] text-[#2D7A2D] font-mono text-xs flex items-center justify-between">
              <span>✓ {statusMessage}</span>
              <button onClick={() => setStatus("idle")} className="text-xs underline cursor-pointer ml-4">
                Dismiss
              </button>
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-600 text-red-700 font-mono text-xs flex items-center justify-between">
              <span>⚠️ {statusMessage}</span>
              <button onClick={() => setStatus("idle")} className="text-xs underline cursor-pointer ml-4">
                Dismiss
              </button>
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-4 font-mono text-xs">
            {/* Alias fields for EmailJS template compatibility */}
            <input type="hidden" name="to_name" value="Nairobi By Design Team" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="e.g. Brenda Wairimu"
                  className="w-full bg-[#EDE6D6] border border-[#0D0D0D] p-3 text-[#0D0D0D] focus:outline-hidden focus:border-[#C9963A]"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="brenda@example.com"
                  className="w-full bg-[#EDE6D6] border border-[#0D0D0D] p-3 text-[#0D0D0D] focus:outline-hidden focus:border-[#C9963A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1">
                  Select Walk Route *
                </label>
                <select
                  name="tour"
                  defaultValue="01: Power & Governance"
                  className="w-full bg-[#EDE6D6] border border-[#0D0D0D] p-3 text-[#0D0D0D] focus:outline-hidden focus:border-[#C9963A]"
                >
                  <option value="01: Power & Governance">
                    01: Power & Governance
                  </option>
                  <option value="02: Heritage Buildings">
                    02: Heritage Buildings
                  </option>
                  <option value="03: Nairobi Then and Now">
                    03: Nairobi Then and Now
                  </option>
                  <option value="04: Indian Heritage & Commercial Networks">
                    04: Indian Heritage & Commercial Networks
                  </option>
                  <option value="05: Informality & Everyday Urbanism">
                    05: Informality & Everyday Urbanism
                  </option>
                  <option value="06: Kibera & Mukuru">
                    06: Kibera & Mukuru
                  </option>
                  <option value="07: Religious Architecture">
                    07: Religious Architecture
                  </option>
                  <option value="Custom Private / Academic Group Walk">
                    Custom Private / Academic Group Walk
                  </option>
                  <option value="Sunday CBD Walk">
                    Sunday CBD Walk
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1">
                  Number of Guests
                </label>
                <select
                  name="persons"
                  defaultValue="1 Person"
                  className="w-full bg-[#EDE6D6] border border-[#0D0D0D] p-3 text-[#0D0D0D] focus:outline-hidden focus:border-[#C9963A]"
                >
                  <option value="1 Person">1 Person</option>
                  <option value="2 People">2 People</option>
                  <option value="3 People">3 People</option>
                  <option value="4+ Group Booking">4+ Group Booking</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1">
                  Preferred Date / Session
                </label>
                <input
                  type="text"
                  name="date"
                  defaultValue="Next Sunday, 10:00 AM"
                  placeholder="e.g. Next Sunday, 10:00 AM"
                  className="w-full bg-[#EDE6D6] border border-[#0D0D0D] p-3 text-[#0D0D0D] focus:outline-hidden focus:border-[#C9963A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#555555] mb-1">
                Special Requests / Message
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Let us know if you have specific architectural interests or mobility preferences..."
                className="w-full bg-[#EDE6D6] border border-[#0D0D0D] p-3 text-[#0D0D0D] focus:outline-hidden focus:border-[#C9963A] resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-['Bebas_Neue',sans-serif] text-[22px] tracking-[0.1em] bg-[#0D0D0D] text-[#F4EFE4] py-4 hover:bg-[#C9963A] hover:text-[#0D0D0D] transition-colors duration-250 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent inline-block" />
                    SENDING RESERVATION...
                  </>
                ) : (
                  "CONFIRM & SEND RESERVATION →"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}

