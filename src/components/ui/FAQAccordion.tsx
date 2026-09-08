"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS, FAQItem } from "@/data/faq";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#EAE6DF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-editorial text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-600 font-light max-w-lg mx-auto">
            Everything you need to know about your arrival, dining, room tariffs, and hospitality services.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item: FAQItem) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-[#E5DFD5] rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-xs"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors hover:bg-neutral-50/80 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-editorial font-bold text-neutral-900">
                    {item.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E5DFD5] text-neutral-600 flex items-center justify-center shrink-0 transition-transform duration-300">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-100 animate-in fade-in duration-200">
                    {item.answer}
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
