"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bed, Users, Maximize2, Check } from "lucide-react";
import { RoomType } from "@/data/rooms";

interface RoomCardProps {
  room: RoomType;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Link
      href={`/rooms/${room.slug}`}
      className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#E7E2DA] shadow-sm hover:shadow-2xl hover:border-[#C5A880]/60 transition-all duration-500 cursor-pointer"
    >
      {/* Top Image Banner - Pure & Clean without floating badge clutter */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-100 shrink-0">
        <Image
          src={room.primaryImage}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

        {/* Clean Rate Tag */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-[#0D1E16]/90 backdrop-blur-md border border-white/25 px-3.5 py-1.5 rounded-full text-white text-xs font-mono font-bold shadow-md">
            ₹{room.rate.toLocaleString("en-IN")}{" "}
            <span className="text-[10px] text-neutral-300 font-sans font-normal">/ night</span>
          </div>
        </div>
      </div>

      {/* Solid High-Contrast Card Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Room Name */}
          <h3 className="text-2xl sm:text-[26px] font-bold font-editorial tracking-tight text-[#111E18] group-hover:text-[#1B4332] transition-colors leading-tight mb-3">
            {room.name}
          </h3>

          {/* Key Specifications Row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-neutral-800 font-bold mb-4 py-2.5 px-3 bg-[#FBF9F5] rounded-xl border border-[#EFEBE4]">
            <span className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-[#1B4332]" />
              <span>{room.bedType}</span>
            </span>
            <span className="text-neutral-300">•</span>
            <span className={room.airConditioned ? "text-emerald-800" : "text-amber-800"}>
              {room.airConditioned ? "Climate A/C" : "Non-A/C"}
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#1B4332]" />
              <span>Up to {room.capacity.maxGuests} Guests</span>
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#1B4332]" />
              <span>{room.size}</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed line-clamp-2 mb-4">
            {room.shortDescription}
          </p>

          {/* Room Highlights Chips */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {room.highlights.slice(0, 2).map((highlight, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#F5F2EC] text-neutral-800 px-2.5 py-1 rounded-md border border-[#E8E2D8]"
              >
                <Check className="w-3 h-3 text-[#1B4332] stroke-[2.5]" />
                <span className="truncate max-w-[220px]">{highlight}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer: Tariff & Action CTA */}
        <div className="pt-5 mt-4 border-t border-neutral-150 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block">
              Official Tariff
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black font-editorial tracking-tight text-[#1B4332]">
                ₹{room.rate.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-neutral-500 font-medium">/ night</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1B4332] group-hover:bg-[#112F23] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm group-hover:shadow-md">
            <span>View Details</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
