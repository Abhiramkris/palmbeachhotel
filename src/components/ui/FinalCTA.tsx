"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { HOTEL_ASSETS } from "@/lib/assets";

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export default function FinalCTA({ onOpenBooking }: FinalCTAProps) {
  return (
    <section className="relative py-28 lg:py-36 bg-[#0F241A] text-white overflow-hidden flex items-center justify-center">
      {/* Background evening/illuminated photograph */}
      <Image
        src={HOTEL_ASSETS.exterior.buildingFacadeNight}
        alt="Palmshore Hotel evening facade"
        fill
        className="object-cover brightness-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F241A] via-black/50 to-[#0F241A]/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#E5D0B5] font-bold">
          Reserve Your Escape
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-editorial tracking-tight text-white leading-tight">
          Your Palmshore Stay <br />
          <span className="italic font-bold text-[#E5D0B5]">Starts Here.</span>
        </h2>

        <p className="text-base sm:text-xl text-neutral-100 font-medium max-w-xl mx-auto leading-relaxed">
          Tranquil suites, authentic dining, and unhurried hospitality await in Palakkad.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-[#E05332] hover:bg-[#C94324] text-white text-xs uppercase tracking-widest font-semibold rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Stay</span>
          </button>

          <Link
            href="/#rooms"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs uppercase tracking-widest font-semibold rounded-full backdrop-blur-md transition flex items-center justify-center gap-2"
          >
            <span>Explore Rooms</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
