"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Palmtree,
  Sparkles,
  Bed,
  UtensilsCrossed,
  ShieldCheck,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { HOTEL_ASSETS } from "@/lib/assets";

interface ExperienceItem {
  id: string;
  tabTitle: string;
  headline: string;
  description: string;
  image: string;
  badge: string;
  perk: string;
  icon: React.ComponentType<{ className?: string }>;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "grounds",
    tabTitle: "Tranquil Grounds",
    headline: "Landscaped Courtyard & Palms",
    description:
      "Step into a calm green sanctuary framed by towering palm trees and tranquil paved grounds in Palakkad.",
    image: HOTEL_ASSETS.exterior.heroExteriorDay,
    badge: "Verdant Grounds",
    perk: "Towering Palms & Fresh Air",
    icon: Palmtree,
  },
  {
    id: "suites",
    tabTitle: "Restful Suites",
    headline: "Five Transparent Room Tiers",
    description:
      "Crisp linens, silent climate control, and orthopedic beds designed for deep, restorative sleep.",
    image: HOTEL_ASSETS.rooms.deluxeBed,
    badge: "Tariffs from ₹1,870",
    perk: "Orthopedic Sleep Comfort",
    icon: Bed,
  },
  {
    id: "dining",
    tabTitle: "Palmshore Dining",
    headline: "The Palmshore Restaurant",
    description:
      "Honest Kerala culinary recipes, aromatic spices, and comforting multi-cuisine delights.",
    image: HOTEL_ASSETS.dining.diningTables,
    badge: "Authentic Flavors",
    perk: "Pure Veg & Non-Veg Specials",
    icon: UtensilsCrossed,
  },
  {
    id: "hospitality",
    tabTitle: "24/7 Care",
    headline: "Round-the-Clock Front Desk",
    description:
      "Zero hidden fees, transparent desk tariffs, and heartfelt personal assistance whenever needed.",
    image: HOTEL_ASSETS.interior.lobbyLounge,
    badge: "Direct Desk Rates",
    perk: "Attentive Personal Care",
    icon: ShieldCheck,
  },
];

export default function AmenitiesIntro() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-cycle through experiences every 6 seconds if not paused
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % EXPERIENCES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeExp = EXPERIENCES[activeIndex];

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % EXPERIENCES.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + EXPERIENCES.length) % EXPERIENCES.length);
  };

  const handleSelect = (idx: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(idx);
  };

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("hero-booking-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        const input = el.querySelector<HTMLInputElement>("input[name='name'], input[type='text']");
        input?.focus({ preventScroll: true });
      }, 400);
    }
  };

  return (
    <section id="amenities" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pre-header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89258] font-bold">
              Boutique Amenities & Atmosphere
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-[#111E18] tracking-tight">
              Everything You Need.{" "}
              <span className="italic font-bold text-[#1B4332]">Nothing You Don&apos;t.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 font-medium max-w-md">
            Uncomplicated Palakkad living with pristine rooms, honest dining, and attentive 24/7 care.
          </p>
        </div>

        {/* Interactive Experience Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Dynamic Visual Showcase Stage */}
          <div
            className="lg:col-span-7 relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main Stage Frame */}
            <div className="relative h-[380px] sm:h-[460px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E5DFD5] bg-neutral-900 group">
              {/* Image with smooth fade on change */}
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={exp.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === activeIndex ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105 pointer-events-none"
                  }`}
                >
                  <Image
                    src={exp.image}
                    alt={exp.headline}
                    fill
                    className="object-cover brightness-95 transition-transform duration-1000 ease-out group-hover:scale-105"
                    priority={idx === 0}
                  />
                  {/* Subtle darkening gradient for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
                </div>
              ))}

              {/* Floating Top-Left Category Pill */}
              <div className="absolute top-5 left-5 z-20">
                <div className="bg-[#0D1E16]/85 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-xs font-semibold tracking-wider uppercase shadow-lg flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5D0B5]" />
                  <span>{activeExp.badge}</span>
                </div>
              </div>

              {/* Floating Top-Right Pagination Controls */}
              <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous experience"
                  className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next experience"
                  className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Overlay Info inside the Frame */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <div className="max-w-lg space-y-1.5 drop-shadow-md">
                  <span className="text-[11px] uppercase tracking-widest text-[#E5D0B5] font-bold">
                    Experience {activeIndex + 1} of {EXPERIENCES.length}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-editorial text-white leading-snug">
                    {activeExp.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-200 font-medium line-clamp-2">
                    {activeExp.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Selectors & Story */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Tap to explore resort features:
            </p>

            {/* 4 Interactive Selector Cards */}
            <div className="space-y-3">
              {EXPERIENCES.map((exp, idx) => {
                const IconComponent = exp.icon;
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={exp.id}
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer relative overflow-hidden group ${
                      isActive
                        ? "bg-white border-[#1B4332] shadow-md ring-1 ring-[#1B4332]/20"
                        : "bg-white/60 hover:bg-white border-[#E7E2DA] hover:border-[#D0C7B8] shadow-xs"
                    }`}
                  >
                    {/* Active timer/progress indicator line */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1B4332] rounded-l" />
                    )}

                    {/* Icon Pill */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#1B4332] text-white shadow-sm"
                          : "bg-[#F3EFE8] text-neutral-700 group-hover:bg-[#EDE6DA]"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4
                          className={`text-sm font-bold transition-colors ${
                            isActive ? "text-[#1B4332]" : "text-neutral-900 group-hover:text-black"
                          }`}
                        >
                          {exp.tabTitle}
                        </h4>
                        <span className="text-[10px] uppercase font-mono text-neutral-400 font-medium">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 font-normal leading-relaxed line-clamp-1 mt-0.5">
                        {exp.headline}
                      </p>
                    </div>

                    {/* Indicator Arrow */}
                    <ArrowRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive
                          ? "text-[#1B4332] translate-x-0.5"
                          : "text-neutral-300 group-hover:text-neutral-500 group-hover:translate-x-0.5"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Direct CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={scrollToBooking}
                className="w-full sm:w-auto px-6 py-3 bg-[#E05332] hover:bg-[#C94324] text-white text-xs uppercase tracking-widest font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Stay</span>
              </button>

              <a
                href="#rooms"
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-neutral-50 border border-[#D5CEC2] text-neutral-800 text-xs uppercase tracking-widest font-bold rounded-xl transition flex items-center justify-center gap-2"
              >
                <span>View All 5 Rooms</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1B4332]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
