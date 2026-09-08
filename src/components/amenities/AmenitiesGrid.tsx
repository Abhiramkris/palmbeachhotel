"use client";

import {
  Waves,
  Wifi,
  UtensilsCrossed,
  ConciergeBell,
  Car,
  Clock,
  ArrowRight,
} from "lucide-react";
import { HOTEL_AMENITIES, Amenity } from "@/data/amenities";

const iconMap: Record<string, React.ReactNode> = {
  waves: <Waves className="w-6 h-6" />,
  wifi: <Wifi className="w-6 h-6" />,
  "utensils-crossed": <UtensilsCrossed className="w-6 h-6" />,
  "concierge-bell": <ConciergeBell className="w-6 h-6" />,
  car: <Car className="w-6 h-6" />,
  clock: <Clock className="w-6 h-6" />,
};

export default function AmenitiesGrid() {
  return (
    <section id="amenities-grid" className="py-20 lg:py-24 bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B89258] font-bold">
            Comfort & Convenience
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold font-editorial text-neutral-900 mt-2">
            Curated Services for Unhurried Living
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HOTEL_AMENITIES.map((amenity: Amenity) => (
            <div
              key={amenity.id}
              className="group relative bg-[#FAF8F5] rounded-3xl p-8 border border-[#E5DFD5] transition-all duration-500 hover:bg-[#EAE4D9] hover:border-[#D0C7B8] hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between cursor-default"
            >
              <div>
                {/* Icon with gentle hover animation */}
                <div className="w-14 h-14 rounded-2xl bg-[#EDE7DC] text-[#1B4332] flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#1B4332] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-xs">
                  {iconMap[amenity.icon] || <Waves className="w-6 h-6" />}
                </div>

                {/* Title & Description with slight typography shift */}
                <h4 className="text-xl font-bold font-editorial text-neutral-900 mb-2.5 transition-transform duration-300 group-hover:translate-x-1">
                  {amenity.name}
                </h4>
                <p className="text-sm text-neutral-700 font-normal leading-relaxed mb-4 transition-colors duration-300 group-hover:text-neutral-900">
                  {amenity.description}
                </p>
                <p className="text-xs text-neutral-600 font-semibold italic font-serif">
                  {amenity.detail}
                </p>
              </div>

              {/* Small arrow reveals on hover */}
              <div className="pt-6 border-t border-neutral-200/60 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-[#1B4332] opacity-60 transition-all duration-300 group-hover:opacity-100">
                <span className="text-[11px]">Resort Amenity</span>
                <ArrowRight className="w-4 h-4 transform translate-x-0 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
