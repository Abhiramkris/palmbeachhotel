"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bed, Users, Maximize2 } from "lucide-react";
import { RoomType } from "@/data/rooms";

interface RoomCardProps {
  room: RoomType;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Link
      href={`/rooms/${room.slug}`}
      className="group relative h-[480px] sm:h-[520px] rounded-3xl overflow-hidden block shadow-md hover:shadow-2xl transition-all duration-700 cursor-pointer"
    >
      {/* Background Image with subtle zoom on hover */}
      <Image
        src={room.primaryImage}
        alt={room.name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Dynamic Rising Dark/Green Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F241A]/95 via-[#1B4332]/60 to-transparent transition-all duration-700 ease-out opacity-85 group-hover:opacity-95 group-hover:from-[#0F241A] group-hover:via-[#1B4332]/85 group-hover:to-black/30" />

      {/* Top badges: Rate & Air-Conditioning */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
        <div className="bg-black/40 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white text-xs font-mono font-medium">
          ₹{room.rate.toLocaleString("en-IN")}{" "}
          <span className="text-[10px] text-white/75 font-sans">/ night</span>
        </div>
        {room.airConditioned ? (
          <span className="bg-[#1B4332]/80 backdrop-blur-md text-emerald-200 border border-emerald-500/30 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full">
            Climate Control AC
          </span>
        ) : (
          <span className="bg-amber-950/70 backdrop-blur-md text-amber-200 border border-amber-500/30 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full">
            Naturally Ventilated
          </span>
        )}
      </div>

      {/* Bottom Content Area: slides upward on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 text-white transform transition-transform duration-500 ease-out translate-y-6 group-hover:translate-y-0">
        <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-1">
          {room.view}
        </span>
        <h3 className="text-2xl sm:text-3xl font-light font-editorial tracking-tight text-white mb-2">
          {room.name}
        </h3>

        {/* Basic specifications */}
        <p className="text-xs text-neutral-300 font-light mb-4">
          {room.bedType} · Up to {room.capacity.maxGuests} Guests · {room.size}
        </p>

        {/* Revealed details on hover */}
        <div className="space-y-3 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
          <p className="text-xs text-neutral-200 font-light leading-relaxed line-clamp-2">
            {room.shortDescription}
          </p>

          <div className="flex items-center gap-4 text-[11px] text-neutral-300 pt-1 border-t border-white/10">
            <span className="flex items-center gap-1">
              <Bed className="w-3.5 h-3.5 text-[#C5A880]" />
              {room.bedType}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#C5A880]" />
              {room.capacity.baseGuests} Guests
            </span>
            <span className="flex items-center gap-1">
              <Maximize2 className="w-3.5 h-3.5 text-[#C5A880]" />
              {room.size}
            </span>
          </div>
        </div>

        {/* Arrow / View Room CTA */}
        <div className="mt-4 pt-3 flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-[#C5A880] border-t border-white/15">
          <span>View Room Details</span>
          <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#C5A880] group-hover:text-neutral-900 flex items-center justify-center transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
