"use client";

export default function MarqueeStrip() {
  const items = [
    "PALMSHORE HOTEL",
    "TRANQUIL GETAWAY",
    "YOUR SANCTUARY IN PALAKKAD",
    "RELAX",
    "UNWIND",
    "AUTHENTIC KERALA HOSPITALITY",
    "EXPERIENCE PALMSHORE",
    "GOURMET DINING",
    "SERENE PALM GROVES",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#1B4332] text-[#F3EFEA] py-4.5 border-y border-[#2D6A4F] select-none">
      {/* Left/Right gentle fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#1B4332] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1B4332] to-transparent z-10" />

      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Set 1 */}
        {items.map((text, idx) => (
          <div key={`m1-${idx}`} className="flex items-center mx-6">
            <span className="text-xs sm:text-sm font-editorial tracking-[0.25em] font-medium uppercase text-[#FAF8F5]/90">
              {text}
            </span>
            <span className="text-[#C5A880] mx-6 text-xs">✦</span>
          </div>
        ))}
        {/* Set 2 (for continuous seamless loop) */}
        {items.map((text, idx) => (
          <div key={`m2-${idx}`} className="flex items-center mx-6">
            <span className="text-xs sm:text-sm font-editorial tracking-[0.25em] font-medium uppercase text-[#FAF8F5]/90">
              {text}
            </span>
            <span className="text-[#C5A880] mx-6 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
