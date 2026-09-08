"use client";

import { useState } from "react";
import { User, Phone, Mail, Hotel, ArrowRight, PhoneCall } from "lucide-react";
import { ALL_BOOKING_TYPES } from "@/data/rooms";

interface FloatingBookingFormProps {
  onSubmitInquiry: (params: {
    roomSlug: string;
    name: string;
    phone: string;
    email: string;
  }) => void;
}

export default function FloatingBookingForm({ onSubmitInquiry }: FloatingBookingFormProps) {
  const [selectedSlug, setSelectedSlug] = useState(ALL_BOOKING_TYPES[0].slug);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitInquiry({
      roomSlug: selectedSlug,
      name,
      phone,
      email,
    });
  };

  return (
    <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/60 text-[#1C1E1B] transition-all duration-300">
      <div className="space-y-1 mb-5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-[10px] font-semibold tracking-wider uppercase text-emerald-900">
          <PhoneCall className="w-3 h-3 text-[#1B4332]" />
          <span>Quick Reservation</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-editorial text-neutral-900">
          Book Your Stay Directly
        </h3>
        <p className="text-xs text-neutral-500 font-light">
          Front desk will call to confirm
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* 1. Type */}
        <div>
          <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Hotel className="w-3.5 h-3.5 text-[#1B4332]" />
            <span>Type (Room / Venue) *</span>
          </label>
          <div className="relative">
            <select
              value={selectedSlug}
              onChange={(e) => setSelectedSlug(e.target.value)}
              className="w-full appearance-none bg-neutral-50/90 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-neutral-800 focus:outline-[#1B4332] focus:bg-white transition cursor-pointer pr-8"
            >
              <optgroup label="Rooms & Suites">
                {ALL_BOOKING_TYPES.filter((t) => t.category === "room").map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name} — {item.rateLabel}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Venues & Dining">
                {ALL_BOOKING_TYPES.filter((t) => t.category !== "room").map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name} ({item.rateLabel})
                  </option>
                ))}
              </optgroup>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* 2. Name */}
        <div>
          <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#1B4332]" />
            <span>Full Name *</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Maya Varma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-neutral-50/90 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-neutral-800 focus:outline-[#1B4332] focus:bg-white transition"
          />
        </div>

        {/* 3. Number */}
        <div>
          <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#1B4332]" />
            <span>Phone / WhatsApp Number *</span>
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-neutral-50/90 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-neutral-800 focus:outline-[#1B4332] focus:bg-white transition"
          />
        </div>

        {/* 4. Email */}
        <div>
          <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#1B4332]" />
            <span>Email Address *</span>
          </label>
          <input
            type="email"
            required
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-neutral-50/90 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-neutral-800 focus:outline-[#1B4332] focus:bg-white transition"
          />
        </div>

        {/* Confirmation Call Notice */}
        <div className="bg-[#FAF6F0] p-2.5 rounded-xl border border-[#EAE2D5] flex items-center gap-2 text-[11px] text-neutral-700">
          <PhoneCall className="w-3.5 h-3.5 text-[#1B4332] shrink-0" />
          <span>Our desk will call to confirm your dates & booking.</span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-2xl bg-[#E05332] hover:bg-[#C94324] text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Request Booking Call</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
