"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What should I wear and bring for the CBD walking tour?",
      answer: "We recommend comfortable walking shoes, a sun hat, sunglasses, reusable water bottle, and a light jacket (Nairobi weather can shift quickly). A smartphone or camera is great for taking archival reference photos!",
      category: "Preparation",
    },
    {
      question: "Where is the exact starting meeting point?",
      answer: "Meeting point coordinates depend on the specific walk route. For Route 01 (Colonial Grid), we meet outside Kipande House on Haile Selassie Ave. For Route 02, we meet at City Market entrance. You will receive an exact GPS location via email upon reservation.",
      category: "Logistics",
    },
    {
      question: "How does payment work?",
      answer: "No upfront payment is required to reserve your spot! Payment can be made conveniently on the day of the walk via M-Pesa Buy Goods / Till Number or cash (Ksh 2,500 for standard walks, Ksh 2,000 for park walks).",
      category: "Pricing & M-Pesa",
    },
    {
      question: "What happens if it rains on Sunday morning?",
      answer: "Our walks run rain or shine! In the case of severe tropical downpours, we pause under Nairobi's colonial arcades or vintage building porticos for impromptu indoor architectural discussions until the rain eases.",
      category: "Weather Policy",
    },
    {
      question: "Can I request a custom private or academic group walk?",
      answer: "Yes! We regularly host university architecture departments, urban planning researchers, corporate teams, and private groups. Custom walks can be tailored to specific spatial themes, dates, and group sizes.",
      category: "Private Groups",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F4EFE4] border-b-[1.5px] border-[#0D0D0D] py-[100px] md:py-[120px] px-6 md:px-13">
      <div className="max-w-5xl mx-auto">
        {/* Section Tag */}
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C9963A] mb-12 flex items-center gap-3.5">
          <span className="w-7 h-[1.5px] bg-[#C9963A]" />
          Visitor Guide & FAQs
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(48px,6vw,80px)] leading-[0.88] tracking-[0.02em] text-[#0D0D0D]">
            FREQUENTLY ASKED <span className="text-[#C9963A]">QUESTIONS</span>
          </h2>
          <p className="font-['Fraunces',serif] italic text-[16px] text-[#555555] max-w-[280px]">
            Everything you need to know before stepping onto the pavement with us.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-[1.5px] border-[#0D0D0D] bg-[#EDE6D6] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 md:p-7 flex justify-between items-center gap-4 hover:bg-[#E3D9C4] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[11px] tracking-widest text-[#C9963A] font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="font-['Bebas_Neue',sans-serif] text-2xl md:text-3xl tracking-wide text-[#0D0D0D]">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="font-mono text-xl font-bold text-[#0D0D0D] w-8 h-8 border border-[#0D0D0D] flex items-center justify-center shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="p-6 md:p-7 pt-0 font-mono text-xs text-[#333333] leading-relaxed border-t border-[#0D0D0D]/10 bg-[#F4EFE4] animate-fade-up">
                    <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C9963A] mb-2 font-bold">
                      Category: {faq.category}
                    </div>
                    <p className="text-[13px] text-[#222222] leading-loose">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
