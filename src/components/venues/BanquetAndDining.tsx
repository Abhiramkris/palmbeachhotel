"use client";

import Image from "next/image";
import { Users, Mic, Sparkles, Utensils, CheckCircle2, Calendar } from "lucide-react";
import { HOTEL_ASSETS } from "@/lib/assets";

interface BanquetAndDiningProps {
  onOpenBooking: (slug?: string) => void;
}

export default function BanquetAndDining({ onOpenBooking }: BanquetAndDiningProps) {
  return (
    <div className="space-y-0">
      {/* 1. GRAND BANQUET & CONVENTION HALL */}
      <section id="banquets" className="py-24 lg:py-32 bg-white border-b border-[#EAE6DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Photos Grid */}
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              <div className="relative h-72 sm:h-80 w-full rounded-3xl overflow-hidden shadow-lg border border-[#E5DFD5] group">
                <Image
                  src={HOTEL_ASSETS.banquet.conferenceHallWide}
                  alt="Grand Banquet and Conference Hall"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                  Theatre-Style Hall (Up to 250+ Guests)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border border-[#E5DFD5] group">
                  <Image
                    src={HOTEL_ASSETS.banquet.stagePodium}
                    alt="Speaker Dais and Stage Podium"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    Speaker Dais & Podium
                  </span>
                </div>
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border border-[#E5DFD5] group">
                  <Image
                    src={HOTEL_ASSETS.banquet.conferenceHallRows}
                    alt="Draped Banquet Seating"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    Seating Arrangements
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89258] font-bold block">
                Events & Celebrations
              </span>

              <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-[#111E18] leading-[1.15]">
                Grand Banquet & <br />
                <span className="italic font-bold text-[#1B4332]">Conference Facilities</span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
                Pillar-free, climate-controlled venue for weddings, corporate seminars, and grand family celebrations.
              </p>

              {/* Feature points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EDE7DC] text-[#1B4332] flex items-center justify-center shrink-0">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900">Staging & Podium</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Raised dais, podium & sound system.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EDE7DC] text-[#1B4332] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900">250+ Capacity</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Flexible theatre or banquet seating.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EDE7DC] text-[#1B4332] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900">Event Coordination</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Full logistics and decor assistance.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EDE7DC] text-[#1B4332] flex items-center justify-center shrink-0">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900">Banquet Catering</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Multi-course celebration menus.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenBooking("grand-banquet-hall")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B4332] hover:bg-[#123124] text-white text-xs font-bold uppercase tracking-widest rounded-2xl transition shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#E5D0B5]" />
                  <span>Inquire for Hall Booking</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PALMSHORE RESTAURANT */}
      <section id="dining" className="py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#EAE6DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89258] font-bold block">
                Culinary Excellence
              </span>

              <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-[#111E18] leading-[1.15]">
                The Palmshore <br />
                <span className="italic font-bold text-[#1B4332]">Restaurant & Dining</span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
                Authentic Kerala specialties, traditional feasts, and multi-cuisine dining prepared with fresh local ingredients.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-3 text-sm text-neutral-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0" />
                  <span>Traditional Kerala culinary specials & multi-cuisine delicacies</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0" />
                  <span>Breakfast buffet with filter coffee & fresh juices</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0" />
                  <span>Indoor family dining hall & private booths</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0" />
                  <span>24-hour in-room dining delivered to your suite</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-neutral-600 border-t border-[#E5DFD5]">
                <div>
                  <span className="font-bold text-neutral-900 block text-sm">Breakfast</span>
                  <span>7:30 AM – 10:30 AM</span>
                </div>
                <div className="h-8 w-[1px] bg-[#D5CEC2]" />
                <div>
                  <span className="font-bold text-neutral-900 block text-sm">Lunch & Dinner</span>
                  <span>12:30 PM – 11:00 PM</span>
                </div>
                <div className="h-8 w-[1px] bg-[#D5CEC2]" />
                <div>
                  <span className="font-bold text-neutral-900 block text-sm">Room Service</span>
                  <span>24 Hours Available</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenBooking("palmshore-restaurant")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B4332] hover:bg-[#123124] text-white text-xs font-bold uppercase tracking-widest rounded-2xl transition shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Utensils className="w-4 h-4 text-[#E5D0B5]" />
                  <span>Reserve Table / Dining</span>
                </button>
              </div>
            </div>

            {/* Right: Photos */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-[#E5DFD5] group">
                <Image
                  src={HOTEL_ASSETS.dining.diningHallWide}
                  alt="The Palmshore Restaurant Dining Hall"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                  Main Dining Hall
                </span>
              </div>

              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-[#E5DFD5] group">
                <Image
                  src={HOTEL_ASSETS.dining.diningTables}
                  alt="Dressed Restaurant Tables"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                  Fine Table Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
