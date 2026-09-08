"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HOTEL_ASSETS } from "@/lib/assets";

export default function FullScreenImageScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.92);
  const [radius, setRadius] = useState(32);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When the top of the element hits the viewport, calculate scroll progress
      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (windowHeight * 1.2))
      );

      // Smoothly interpolate scale between 0.92 and 1.0
      const newScale = 0.92 + progress * 0.08;
      // Smoothly reduce border radius from 32px to 0px
      const newRadius = Math.max(0, 32 - progress * 32);

      setScale(newScale);
      setRadius(newRadius);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="py-12 sm:py-20 overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
          Atmospheric Sanctuary
        </span>
        <h3 className="text-2xl sm:text-4xl font-light font-editorial text-neutral-900 mt-1">
          Where Evenings Linger in Warm Twilight
        </h3>
      </div>

      <div className="w-full flex justify-center">
        <div
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${radius}px`,
            transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
          className="relative w-full max-w-[1400px] h-[60vh] sm:h-[75vh] min-h-[460px] overflow-hidden shadow-2xl"
        >
          <Image
            src={HOTEL_ASSETS.exterior.buildingNightWide}
            alt="Hotel Palmbeach evening illuminated grounds"
            fill
            className="object-cover brightness-85"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

          {/* Editorial Caption Overlay */}
          <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white z-10">
            <div className="max-w-xl space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                Twilight Over the Palms
              </span>
              <h4 className="text-2xl sm:text-3xl font-light font-editorial leading-snug">
                Quiet paths and illuminated palm groves at dusk.
              </h4>
            </div>
            <div className="text-xs font-mono text-white/70">
              08°30&apos;N · Coastal Latitude
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
