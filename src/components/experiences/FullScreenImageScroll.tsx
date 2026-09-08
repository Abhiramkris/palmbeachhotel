"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HOTEL_ASSETS } from "@/lib/assets";

export default function FullScreenImageScroll() {
  const containerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalDistance = rect.height - windowHeight;

        if (totalDistance <= 0) return;

        // Progress goes from 0 when section pins to 1 when fully expanded
        const scrollOffset = -rect.top;
        const rawProgress = scrollOffset / totalDistance;
        const clampedProgress = Math.min(1, Math.max(0, rawProgress));

        setProgress(clampedProgress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Calculate animated values from progress (0 = small card, 1 = 100% full screen)
  // Width: from 88vw (capped at 1120px) to 100vw
  // Height: from 60vh (capped at 580px) to 100vh
  // Radius: from 32px to 0px
  // Header opacity: fades out as card expands to full screen
  const headerOpacity = Math.max(0, 1 - progress * 2.5);
  const headerTranslateY = -progress * 40;
  const radius = Math.max(0, Math.round(32 * (1 - progress)));
  const scale = 0.9 + progress * 0.1;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[170vh] sm:min-h-[190vh] bg-[#FAF8F5]"
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Section Heading - gracefully fades and slides up as the image expands */}
        <div
          style={{
            opacity: headerOpacity,
            transform: `translateY(${headerTranslateY}px)`,
            pointerEvents: headerOpacity < 0.1 ? "none" : "auto",
          }}
          className="absolute top-8 sm:top-12 z-20 text-center px-4 transition-transform duration-75"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89258] font-bold">
            Atmospheric Sanctuary
          </span>
          <h3 className="text-2xl sm:text-4xl font-bold font-editorial text-neutral-900 mt-1">
            Where Evenings Linger in Warm Twilight
          </h3>
        </div>

        {/* Dynamic Expanding Card (Smoothly expands from small card to 100% edge-to-edge full screen) */}
        <div
          style={{
            width: progress >= 0.98 ? "100vw" : `${84 + progress * 16}vw`,
            height: progress >= 0.98 ? "100vh" : `${60 + progress * 40}vh`,
            borderRadius: `${radius}px`,
            transform: `scale(${scale})`,
            boxShadow:
              progress >= 0.95
                ? "none"
                : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: "box-shadow 0.2s ease-out",
          }}
          className="relative overflow-hidden will-change-[width,height,transform,border-radius]"
        >
          {/* Photograph */}
          <Image
            src={HOTEL_ASSETS.exterior.buildingNightWide}
            alt="Hotel Palmbeach evening illuminated grounds"
            fill
            className="object-cover brightness-105"
            sizes="100vw"
            priority
          />

          {/* Soft twilight gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          {/* Editorial Caption Overlay (anchored at bottom-left, with 08°30'N removed) */}
          <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 z-20">
            <div className="max-w-xl space-y-2 text-white drop-shadow-md">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#E5D0B5] font-bold">
                Twilight Over the Palms
              </span>
              <h4 className="text-2xl sm:text-4xl font-bold font-editorial leading-snug">
                Quiet paths and illuminated palm groves at dusk.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
