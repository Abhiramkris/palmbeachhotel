"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Bed,
  Maximize2,
  Bath,
  Compass,
  Check,
  ShieldCheck,
  Calendar,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Wifi,
  Fan,
  Droplets,
  Bell,
  Phone,
  Snowflake,
  Tv,
  Coffee,
  Armchair,
  Laptop,
  Wine,
  Shirt,
  Utensils,
  Croissant,
} from "lucide-react";
import { RoomType, HOTEL_ROOMS, EXTRA_PERSON_RATE } from "@/data/rooms";
import RoomGallery from "./RoomGallery";
import BookingModal from "@/components/booking/BookingModal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface RoomDetailViewProps {
  room: RoomType;
}

const amenityIconMap: Record<string, React.ReactNode> = {
  fan: <Fan className="w-5 h-5" />,
  bath: <Bath className="w-5 h-5" />,
  droplets: <Droplets className="w-5 h-5" />,
  droplet: <Droplets className="w-5 h-5" />,
  wifi: <Wifi className="w-5 h-5" />,
  bell: <Bell className="w-5 h-5" />,
  phone: <Phone className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  snowflake: <Snowflake className="w-5 h-5" />,
  bed: <Bed className="w-5 h-5" />,
  tv: <Tv className="w-5 h-5" />,
  "shield-check": <ShieldCheck className="w-5 h-5" />,
  coffee: <Coffee className="w-5 h-5" />,
  armchair: <Armchair className="w-5 h-5" />,
  laptop: <Laptop className="w-5 h-5" />,
  wine: <Wine className="w-5 h-5" />,
  shirt: <Shirt className="w-5 h-5" />,
  utensils: <Utensils className="w-5 h-5" />,
  croissant: <Croissant className="w-5 h-5" />,
};

export default function RoomDetailView({ room }: RoomDetailViewProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // Other rooms recommendation
  const otherRooms = HOTEL_ROOMS.filter((r) => r.slug !== room.slug);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1E1B]">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <main className="flex-1">
        {/* Full-width Room Hero Section */}
        <section className="relative h-[65vh] min-h-[480px] w-full flex items-end">
          <Image
            src={room.primaryImage}
            alt={room.name}
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full text-white">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880] mb-4">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/#rooms" className="hover:text-white transition">
                Accommodations
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white/80">{room.name}</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs uppercase tracking-[0.25em] text-emerald-300 font-semibold">
                  {room.view}
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light font-editorial tracking-tight text-white leading-tight">
                  {room.name}
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {room.tagline}
                </p>
              </div>

              {/* Tariff Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 flex items-center justify-between lg:flex-col lg:items-start gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-300 block">
                    Direct Booking Rate
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[#C5A880]">
                      ₹{room.rate.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-neutral-300">/ night</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 block">+ 12% GST as applicable</span>
                </div>

                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="px-6 py-3 bg-[#E05332] hover:bg-[#C94324] text-white text-xs uppercase tracking-widest font-semibold rounded-full shadow-lg transition cursor-pointer"
                >
                  Book This Room
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Room Specs Bar */}
        <section className="bg-white border-b border-[#EAE6DF] py-6 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 text-center sm:text-left">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 flex items-center justify-center sm:justify-start gap-1">
                  <Bed className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Bed Type</span>
                </span>
                <p className="text-sm font-semibold text-neutral-900">{room.bedType}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 flex items-center justify-center sm:justify-start gap-1">
                  <Users className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Occupancy</span>
                </span>
                <p className="text-sm font-semibold text-neutral-900">
                  {room.capacity.baseGuests} Guests (Max {room.capacity.maxGuests})
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 flex items-center justify-center sm:justify-start gap-1">
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Room Area</span>
                </span>
                <p className="text-sm font-semibold text-neutral-900">{room.size}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 flex items-center justify-center sm:justify-start gap-1">
                  <Compass className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Window Outlook</span>
                </span>
                <p className="text-sm font-semibold text-neutral-900">{room.view}</p>
              </div>

              <div className="col-span-2 sm:col-span-4 lg:col-span-1 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 flex items-center justify-center sm:justify-start gap-1">
                  <Bath className="w-3.5 h-3.5 text-emerald-800" />
                  <span>En-Suite Bath</span>
                </span>
                <p className="text-sm font-semibold text-neutral-900 truncate">{room.bathroom}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content & Gallery */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Gallery with Lightbox */}
            <RoomGallery images={room.gallery} roomName={room.name} />

            {/* Editorial Description & Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 border-t border-[#EAE6DF]">
              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                    Editorial Overview
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-light font-editorial text-neutral-900 leading-snug">
                    Thoughtfully crafted for calm, unhurried stays by the palm groves.
                  </h2>
                  <p className="text-base sm:text-lg text-neutral-700 font-light leading-relaxed">
                    {room.fullDescription}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5DFD5]">
                  <h3 className="text-lg font-bold font-editorial text-neutral-900">
                    Room Highlights & Character
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700 font-light">
                    {room.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Amenities Grid */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-editorial text-neutral-900">
                    In-Room Amenities
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {room.amenities.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white border border-[#E5DFD5] flex items-center gap-3 shadow-xs"
                      >
                        <div className="text-emerald-800">
                          {amenityIconMap[item.icon] || <Sparkles className="w-5 h-5" />}
                        </div>
                        <span className="text-xs font-medium text-neutral-800">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Booking Card */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5DFD5] shadow-xl space-y-6">
                  <div className="border-b border-neutral-100 pb-4">
                    <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                      Tariff Summary
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl font-bold font-mono text-[#1B4332]">
                        ₹{room.rate.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-neutral-500">/ night</span>
                    </div>
                    <span className="text-[11px] text-neutral-400 block mt-0.5">
                      + 12% GST as applicable
                    </span>
                  </div>

                  <div className="space-y-3 text-xs text-neutral-600">
                    <div className="flex justify-between py-1 border-b border-neutral-100">
                      <span>Base Occupancy</span>
                      <span className="font-semibold text-neutral-900">
                        {room.capacity.baseGuests} Guests
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-neutral-100">
                      <span>Extra Person Fee</span>
                      <span className="font-semibold text-neutral-900">
                        ₹{EXTRA_PERSON_RATE} / night
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-neutral-100">
                      <span>Check-In / Check-Out</span>
                      <span className="font-semibold text-neutral-900">2:00 PM / 11:00 AM</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-neutral-100">
                      <span>Cancellation Policy</span>
                      <span className="font-semibold text-emerald-800">Free before 48h</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setBookingModalOpen(true)}
                    className="w-full py-3.5 bg-[#E05332] hover:bg-[#C94324] text-white text-xs uppercase tracking-widest font-semibold rounded-full shadow-md transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Reserve This Room</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-800" />
                    <span>Instant confirmation · Pay at hotel desk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Other Rooms Section */}
        <section className="py-20 bg-[#F5F2EB] border-t border-[#EAE6DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                  Compare Accommodations
                </span>
                <h3 className="text-3xl font-light font-editorial text-neutral-900 mt-1">
                  Explore Other Rooms & Suites
                </h3>
              </div>
              <Link
                href="/#rooms"
                className="text-xs uppercase tracking-widest font-semibold text-[#1B4332] hover:text-emerald-700 flex items-center gap-1.5"
              >
                <span>View Full Tariff Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherRooms.slice(0, 4).map((other) => (
                <Link
                  key={other.slug}
                  href={`/rooms/${other.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E5DFD5] shadow-xs hover:shadow-lg transition flex flex-col justify-between cursor-pointer"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={other.primaryImage}
                      alt={other.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-full">
                      ₹{other.rate.toLocaleString("en-IN")}/n
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-emerald-800 font-semibold block mb-1">
                        {other.view}
                      </span>
                      <h4 className="font-editorial text-lg font-bold text-neutral-900 mb-1 group-hover:text-emerald-800 transition">
                        {other.name}
                      </h4>
                      <p className="text-xs text-neutral-500 line-clamp-2">{other.shortDescription}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating Mobile Bottom Booking Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 p-4 flex items-center justify-between shadow-2xl">
        <div>
          <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Tariff</span>
          <span className="text-xl font-bold font-mono text-[#1B4332]">
            ₹{room.rate.toLocaleString("en-IN")}
          </span>
          <span className="text-[10px] text-neutral-400 ml-1">/ night</span>
        </div>
        <button
          onClick={() => setBookingModalOpen(true)}
          className="px-6 py-2.5 bg-[#E05332] text-white text-xs uppercase tracking-widest font-semibold rounded-full shadow-md cursor-pointer"
        >
          Book This Room
        </button>
      </div>

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedRoomSlug={room.slug}
      />
    </div>
  );
}
