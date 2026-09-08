"use client";

import { useState } from "react";
import { Calendar, Users, Home, BedDouble, Search, Sparkles } from "lucide-react";
import { HOTEL_ROOMS } from "@/data/rooms";

interface FloatingBookingFormProps {
  onSearch: (params: {
    roomSlug: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    rooms: number;
  }) => void;
}

export default function FloatingBookingForm({ onSearch }: FloatingBookingFormProps) {
  const [selectedSlug, setSelectedSlug] = useState(HOTEL_ROOMS[0].slug);
  const [checkIn, setCheckIn] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [checkOut, setCheckOut] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);

  const selectedRoom =
    HOTEL_ROOMS.find((r) => r.slug === selectedSlug) || HOTEL_ROOMS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      roomSlug: selectedSlug,
      checkIn,
      checkOut,
      guests,
      rooms,
    });
  };

  return (
    <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/60 text-[#1C1E1B] transition-all duration-300">
      <div className="space-y-1 mb-5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-[10px] font-semibold tracking-wider uppercase text-emerald-900">
          <Sparkles className="w-3 h-3 text-[#C5A880]" />
          <span>Direct Booking Privilege</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-editorial text-neutral-900">
          Reserve Your Tropical Stay
        </h3>
        <p className="text-xs text-neutral-500 font-light">
          Best guaranteed rates directly from our resort desk
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Room Type Selector */}
        <div>
          <label className="block text-[11px] font-semibold text-neutral-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <BedDouble className="w-3.5 h-3.5 text-emerald-800" />
            <span>Room Category</span>
          </label>
          <div className="relative">
            <select
              value={selectedSlug}
              onChange={(e) => setSelectedSlug(e.target.value)}
              className="w-full appearance-none bg-neutral-50/80 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-neutral-800 focus:outline-emerald-800 focus:bg-white transition cursor-pointer pr-8"
            >
              {HOTEL_ROOMS.map((room) => (
                <option key={room.slug} value={room.slug}>
                  {room.name} — ₹{room.rate.toLocaleString("en-IN")}/night
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Dates row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-neutral-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-800" />
              <span>Check-in</span>
            </label>
            <input
              type="date"
              required
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-neutral-50/80 border border-neutral-200 rounded-xl px-3 py-2 text-xs font-medium text-neutral-800 focus:outline-emerald-800 focus:bg-white transition"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-neutral-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-800" />
              <span>Check-out</span>
            </label>
            <input
              type="date"
              required
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-neutral-50/80 border border-neutral-200 rounded-xl px-3 py-2 text-xs font-medium text-neutral-800 focus:outline-emerald-800 focus:bg-white transition"
            />
          </div>
        </div>

        {/* Capacity row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-neutral-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-800" />
              <span>Guests</span>
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full appearance-none bg-neutral-50/80 border border-neutral-200 rounded-xl px-3.5 py-2 text-xs font-medium text-neutral-800 focus:outline-emerald-800 focus:bg-white transition cursor-pointer"
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests (+₹400/n)</option>
              <option value={4}>4 Guests</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-neutral-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5 text-emerald-800" />
              <span>Rooms</span>
            </label>
            <select
              value={rooms}
              onChange={(e) => setRooms(parseInt(e.target.value))}
              className="w-full appearance-none bg-neutral-50/80 border border-neutral-200 rounded-xl px-3.5 py-2 text-xs font-medium text-neutral-800 focus:outline-emerald-800 focus:bg-white transition cursor-pointer"
            >
              <option value={1}>1 Room</option>
              <option value={2}>2 Rooms</option>
              <option value={3}>3 Rooms</option>
            </select>
          </div>
        </div>

        {/* Selected Rate Preview */}
        <div className="pt-2 pb-1 flex items-center justify-between border-t border-neutral-100 text-xs">
          <span className="text-neutral-500 font-light">
            Base Tariff ({selectedRoom.bedType})
          </span>
          <div className="text-right">
            <span className="font-mono font-bold text-sm text-[#1B4332]">
              ₹{selectedRoom.rate.toLocaleString("en-IN")}
            </span>
            <span className="text-[10px] text-neutral-400 block">+ tax as applicable</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-2xl bg-[#E05332] hover:bg-[#C94324] text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          <Search className="w-4 h-4" />
          <span>Check Availability</span>
        </button>
      </form>
    </div>
  );
}
