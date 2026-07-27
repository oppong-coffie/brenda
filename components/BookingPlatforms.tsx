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
      name: "NBO BY DESIGN",
      desc: "Official Website",
      badge: "LIVE",
      isLive: true,
      url: "#book",
    },
    {
      name: "AIRBNB",
      desc: "Top Rated Walk",
      badge: "VERIFIED",
      isLive: false,
      url: "https://airbnb.com",
    },
    {
      name: "VIATOR",
      desc: "5-Star Rated",
      badge: "AVAILABLE",
      isLive: false,
      url: "https://viator.com",
    },
    {
      name: "GETYOURGUIDE",
      desc: "Curated Choice",
      badge: "AVAILABLE",
      isLive: false,
      url: "https://getyourguide.com",
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
          setStatusMessage("Asante sana! Your reservation has been sent successfully via EmailJS.");
          if (form.current) form.current.reset();
        },
        (error) => {
          const errDetail = error?.text ? `${error.status || 'Error'}: ${error.text}` : (typeof error === "object" ? JSON.stringify(error) : String(error));
          console.error("EmailJS Error:", errDetail, error);
          setIsSubmitting(false);
          setStatus("error");
          setStatusMessage(`Failed to send email (${error?.text || "Please check network connection or EmailJS credentials"}).`);
        }
      );
  };

  return (
    <section id="direct-booking" className="bg-[#EDE6D6] border-b-[1.5px] border-[#0D0D0D] py-[80px] px-6 md:px-13">
      <div className="mx-auto space-y-12">
        {/* Header & Partners */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
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

          {/* Right Cards Stack */}
          <div className="flex flex-wrap gap-2 md:gap-3 w-full lg:w-auto">
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
                className="platform-card border-[1.5px] border-[#0D0D0D] p-6 text-decoration-none flex flex-col gap-1.5 min-w-[160px] flex-1 sm:flex-initial hover:bg-[#0D0D0D] group transition-colors duration-250 relative bg-[#F4EFE4]"
              >
                <div className="font-['Bebas_Neue',sans-serif] text-[26px] tracking-[0.05em] text-[#0D0D0D] group-hover:text-[#F4EFE4] transition-colors">
                  {p.name}
                </div>
                <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-[#555555] group-hover:text-[#F4EFE4]/60 transition-colors">
                  {p.desc}
                </div>
                <span
                  className={`font-mono text-[8px] tracking-[0.12em] uppercase border px-2 py-0.5 self-start mt-1 transition-colors ${
                    p.isLive
                      ? "border-[#2D7A2D] text-[#2D7A2D] group-hover:border-[#5AAD5A] group-hover:text-[#5AAD5A]"
                      : "border-[#555555] text-[#555555] group-hover:border-[#C9963A] group-hover:text-[#C9963A]"
                  }`}
                >
                  {p.badge}
                </span>
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
                  defaultValue="01: The Colonial Grid & Postcolonial Skyline"
                  className="w-full bg-[#EDE6D6] border border-[#0D0D0D] p-3 text-[#0D0D0D] focus:outline-hidden focus:border-[#C9963A]"
                >
                  <option value="01: The Colonial Grid & Postcolonial Skyline">
                    01: The Colonial Grid & Postcolonial Skyline
                  </option>
                  <option value="02: Markets, Matatus & Informal Intelligence">
                    02: Markets, Matatus & Informal Intelligence
                  </option>
                  <option value="03: Green Nairobi: Parks & Spatial Justice">
                    03: Green Nairobi: Parks & Spatial Justice
                  </option>
                  <option value="Custom Private / Academic Group Walk">
                    Custom Private / Academic Group Walk
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
                    SENDING RESERVATION VIA EMAILJS...
                  </>
                ) : (
                  "CONFIRM & SEND RESERVATION VIA EMAILJS →"
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

