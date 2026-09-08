"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBookingForm from "@/components/booking/FloatingBookingForm";
import BookingModal from "@/components/booking/BookingModal";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import AmenitiesIntro from "@/components/amenities/AmenitiesIntro";
import AmenitiesGrid from "@/components/amenities/AmenitiesGrid";
import RoomCard from "@/components/rooms/RoomCard";
import FullScreenImageScroll from "@/components/experiences/FullScreenImageScroll";
import HotelStory from "@/components/experiences/HotelStory";
import Testimonials from "@/components/experiences/Testimonials";
import BanquetAndDining from "@/components/venues/BanquetAndDining";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FinalCTA from "@/components/ui/FinalCTA";
import { HOTEL_ROOMS } from "@/data/rooms";
import { HOTEL_ASSETS, HOTEL_GALLERY_ITEMS } from "@/lib/assets";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingParams, setBookingParams] = useState<{
    roomSlug: string;
    name?: string;
    phone?: string;
    email?: string;
    isConfirmed?: boolean;
  }>({
    roomSlug: HOTEL_ROOMS[0].slug,
  });

  const [heroFormSlug, setHeroFormSlug] = useState<string>(HOTEL_ROOMS[0].slug);
  const [isFormHighlighted, setIsFormHighlighted] = useState(false);

  const scrollToHeroForm = (slug?: string) => {
    if (slug) {
      setHeroFormSlug(slug);
    }
    const el = document.getElementById("hero-booking-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setIsFormHighlighted(true);
      setTimeout(() => {
        setIsFormHighlighted(false);
      }, 2000);
      setTimeout(() => {
        const input = el.querySelector<HTMLInputElement>("input[name='name'], input[type='text']");
        input?.focus({ preventScroll: true });
      }, 400);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#hero-booking-form") {
      setTimeout(() => {
        scrollToHeroForm();
      }, 300);
    }
  }, []);

  const [activeGalleryFilter, setActiveGalleryFilter] = useState<string>("all");

  const handleHeroInquiry = (params: {
    roomSlug: string;
    name: string;
    phone: string;
    email: string;
  }) => {
    setBookingParams({
      roomSlug: params.roomSlug,
      name: params.name,
      phone: params.phone,
      email: params.email,
      isConfirmed: true,
    });
    setBookingModalOpen(true);
  };

  const handleOpenBooking = (slug?: string) => {
    scrollToHeroForm(slug);
  };

  const galleryCategories = [
    { key: "all", label: "All Views" },
    { key: "rooms", label: "Rooms & Suites" },
    { key: "dining", label: "Dining" },
    { key: "banquet", label: "Banquets" },
    { key: "exterior", label: "Grounds & Facade" },
  ];

  const filteredGallery =
    activeGalleryFilter === "all"
      ? HOTEL_GALLERY_ITEMS
      : HOTEL_GALLERY_ITEMS.filter((item) => item.category === activeGalleryFilter);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1C1E1B]">
      {/* 1. Reusable Sticky Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden">
          {/* Large Cinematic Background Photograph using hero_polished.png */}
          <Image
            src={HOTEL_ASSETS.exterior.heroPolished}
            alt="Hotel Palmbeach illuminated courtyard and palm trees in evening light"
            fill
            className="object-cover brightness-95 scale-102"
            priority
          />

          {/* Gentle cinematic gradient overlays that preserve photo brilliance while ensuring crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />

          {/* Hero Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Editorial Headline & Storytelling */}
              <div className="lg:col-span-7 space-y-6 text-white max-w-2xl">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-editorial tracking-tight leading-[1.05] drop-shadow-2xl text-white">
                  Stay Where Palm Trees <br className="hidden sm:inline" />
                  <span className="italic font-bold text-[#E5D0B5]">Meet Serenity.</span>
                </h1>

                <p className="text-base sm:text-xl text-neutral-100 font-medium leading-relaxed max-w-xl drop-shadow-md">
                  Tranquil resort in Palakkad with verified tariffs and heartfelt Kerala hospitality.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#rooms"
                    className="px-8 py-3.5 bg-[#E05332] hover:bg-[#C94324] text-white text-xs uppercase tracking-widest font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Explore Rooms & Rates
                  </a>
                  <a
                    href="#experiences"
                    className="px-8 py-3.5 bg-white/20 hover:bg-white/30 border border-white/40 text-white text-xs uppercase tracking-widest font-bold rounded-full backdrop-blur-md transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Discover Palmbeach</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Direct Trust Badges */}
                <div className="pt-3 flex flex-wrap items-center gap-3 text-xs text-neutral-200 font-medium">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xs">Direct Desk Rates</span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xs">24/7 Reception</span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xs">Fresh Palmshore Dining</span>
                </div>
              </div>

              {/* Right Column: Floating Booking Form (Inspired by reference search card) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <FloatingBookingForm
                  onSubmitInquiry={handleHeroInquiry}
                  selectedSlug={heroFormSlug}
                  onSlugChange={setHeroFormSlug}
                  isHighlighted={isFormHighlighted}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. MARQUEE / BRAND STRIP */}
        <MarqueeStrip />

        {/* 4. AMENITIES INTRODUCTION */}
        <AmenitiesIntro />

        {/* 5. AMENITIES GRID */}
        <AmenitiesGrid />

        {/* 6. ROOMS SECTION */}
        <section id="rooms" className="py-24 lg:py-32 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-3 max-w-2xl">
                <span className="text-xs uppercase tracking-[0.25em] text-[#B89258] font-bold">
                  Accommodations & Suites
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-editorial text-neutral-900 leading-tight">
                  Find Your Perfect Stay.
                </h2>
                <p className="text-base text-neutral-700 font-medium leading-relaxed">
                  Five transparent room categories designed for restorative, unhurried rest.
                </p>
              </div>

              <div className="text-right shrink-0 bg-white p-3.5 rounded-2xl border border-[#E7E2DA] shadow-xs">
                <span className="text-xs font-mono text-neutral-500 block font-semibold">Official Tariff Schedule</span>
                <span className="text-xs text-[#1B4332] font-bold">Extra Person: ₹400 · Tax Applicable</span>
              </div>
            </div>

            {/* Immersive Room Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {HOTEL_ROOMS.map((room) => (
                <RoomCard key={room.slug} room={room} />
              ))}
            </div>
          </div>
        </section>

        {/* 8. FULL-SCREEN IMAGE SCROLL EXPERIENCE */}
        <FullScreenImageScroll />

        {/* 9. HOTEL EXPERIENCE / STORY SECTION */}
        <HotelStory />

        {/* 10. TESTIMONIALS */}
        <Testimonials />

        {/* 11. BANQUET HALL & DINING VENUES */}
        <BanquetAndDining onOpenBooking={(slug) => handleOpenBooking(slug || "grand-banquet-hall")} />

        {/* Filterable Photo Gallery Section */}
        <section id="gallery" className="py-20 lg:py-28 bg-white border-b border-[#EAE6DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89258] font-bold">
                Visual Journey
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-neutral-900">
                Moments at Hotel Palmbeach
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 font-medium">
                A visual tour of our suites, dining, and tranquil grounds.
              </p>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                {galleryCategories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveGalleryFilter(cat.key)}
                    className={`px-4 py-2 text-xs font-medium rounded-full transition cursor-pointer ${
                      activeGalleryFilter === cat.key
                        ? "bg-[#1B4332] text-white shadow-xs"
                        : "bg-[#FAF8F5] text-neutral-700 hover:bg-neutral-100 border border-[#E5DFD5]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className="group relative h-64 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-500"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-semibold block mb-0.5">
                      {item.category}
                    </span>
                    <h4 className="font-editorial text-base font-bold text-white">{item.title}</h4>
                    <p className="text-[11px] text-neutral-300 font-light truncate">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. FAQ ACCORDION */}
        <FAQAccordion />

        {/* 13. FINAL BOOKING CTA */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 14. REUSABLE FOOTER */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedRoomSlug={bookingParams.roomSlug}
        initialName={bookingParams.name}
        initialPhone={bookingParams.phone}
        initialEmail={bookingParams.email}
        initialSubmitted={bookingParams.isConfirmed}
      />
    </div>
  );
}
