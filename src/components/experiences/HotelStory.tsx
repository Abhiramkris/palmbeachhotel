"use client";

import Image from "next/image";
import { HOTEL_ASSETS } from "@/lib/assets";

export default function HotelStory() {
  return (
    <section id="experiences" className="py-24 lg:py-32 bg-[#1B4332] text-white relative overflow-hidden">
      {/* Subtle background texture / ambient lighting */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src={HOTEL_ASSETS.exterior.glassStaircaseNight}
          alt="Atmospheric glass atrium staircase"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Kinetic Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              The Palmbeach Philosophy
            </span>

            {/* Kinetic / Editorial Heading */}
            <div className="space-y-1">
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-light font-editorial tracking-tight leading-[0.95]">
                <span className="block transition-transform duration-700 hover:translate-x-2">Arrive.</span>
                <span className="block italic text-[#C5A880] font-normal transition-transform duration-700 hover:translate-x-2">Breathe.</span>
                <span className="block text-white/90 transition-transform duration-700 hover:translate-x-2">Stay Awhile.</span>
              </h2>
            </div>

            <div className="space-y-4 max-w-xl text-neutral-200 font-light text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Nestled along a tranquil coastal corridor, Hotel Palmbeach was conceived as an antidote to hurried modern life. From the gentle rustle of towering coconut palms at daybreak to the warm reflection of evening lanterns upon the fountain courtyard, time slows to the rhythm of the tides.
              </p>
              <p className="text-sm text-neutral-300">
                Whether sharing conversations over authentic local coastal cuisine, resting in quiet air-conditioned suites, or stepping out to secluded shorelines, every moment is an invitation to unwind.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/15 max-w-lg">
              <div>
                <span className="block text-3xl sm:text-4xl font-editorial font-bold text-[#C5A880]">24+</span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-300 mt-1 block">
                  Boutique Suites
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-editorial font-bold text-[#C5A880]">5 min</span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-300 mt-1 block">
                  To Shoreline
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-editorial font-bold text-[#C5A880]">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-300 mt-1 block">
                  Heartfelt Care
                </span>
              </div>
            </div>
          </div>

          {/* Right: Architectural Feature Framing */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src={HOTEL_ASSETS.exterior.receptionFountain}
                alt="Hotel Palmbeach entrance and fountain"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block mb-1">
                  Arrival Court
                </span>
                <p className="font-light text-neutral-200">
                  Illuminated fountain reception & tropical arrival driveway
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
