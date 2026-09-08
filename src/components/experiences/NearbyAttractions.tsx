"use client";

import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";
import { NEARBY_ATTRACTIONS, Attraction } from "@/data/attractions";

export default function NearbyAttractions() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
              Destination & Surroundings
            </span>
            <h2 className="text-3xl sm:text-5xl font-light font-editorial text-neutral-900 leading-tight">
              Curated Coastal Attractions
            </h2>
            <p className="text-sm text-neutral-600 font-light">
              Explore serene shorelines, historic landmarks, and vibrant spice bazaars within minutes of Hotel Palmbeach.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#1B4332]">
            <Navigation className="w-4 h-4 text-emerald-800" />
            <span>Concierge Tour Planning Available</span>
          </div>
        </div>

        {/* Asymmetric / Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {NEARBY_ATTRACTIONS.map((attraction: Attraction, index: number) => {
            // Give the 1st and 4th card wider column spans for an asymmetric editorial look
            const colSpan =
              index === 0
                ? "lg:col-span-7"
                : index === 1
                ? "lg:col-span-5"
                : index === 2
                ? "lg:col-span-4"
                : index === 3
                ? "lg:col-span-4"
                : "lg:col-span-4";

            return (
              <div
                key={attraction.id}
                className={`${colSpan} group relative h-[360px] sm:h-[400px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 cursor-default flex flex-col justify-end p-6 sm:p-8 text-white`}
              >
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-90"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

                {/* Top Distance Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{attraction.distance}</span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold block">
                    {attraction.category}
                  </span>
                  <h3 className="text-2xl font-editorial font-light text-white leading-snug">
                    {attraction.name}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-2">
                    {attraction.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
