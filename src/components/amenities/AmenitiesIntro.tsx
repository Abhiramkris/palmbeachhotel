"use client";

import { ArrowRight, Palmtree, Waves, Sparkles } from "lucide-react";

export default function AmenitiesIntro() {
  return (
    <section id="amenities" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large circular emblem */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-[#D5CEC2] flex items-center justify-center p-4 transition-transform duration-700 group-hover:scale-105">
                {/* Inner background circle */}
                <div className="w-full h-full rounded-full bg-[#EDE7DD] flex flex-col items-center justify-center p-6 text-center shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1B4332]/5 to-transparent pointer-events-none" />
                  
                  {/* Subtle rotating circular border dots */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1B4332] text-white flex items-center justify-center shadow-lg mb-3">
                    <Palmtree className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
                  </div>
                  
                  <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#1B4332]">
                    Est. Coastal Haven
                  </span>
                  <span className="text-xs sm:text-sm font-editorial text-neutral-700 italic mt-0.5">
                    Tranquil Sanctuary
                  </span>
                  
                  <div className="flex items-center gap-1 mt-2 text-[#C5A880]">
                    <Sparkles className="w-3 h-3" />
                    <span className="text-[10px] uppercase tracking-widest font-medium">Bespoke Stays</span>
                    <Sparkles className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Floating subtle accent badge */}
              <div className="absolute -bottom-3 -right-3 bg-white border border-[#E0D9CD] px-4 py-2 rounded-full shadow-md text-[11px] font-medium text-neutral-800 flex items-center gap-2">
                <Waves className="w-3.5 h-3.5 text-emerald-800" />
                <span>By the Coastline</span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89258] font-bold">
              <span>Boutique Amenities & Hospitality</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-editorial text-[#111E18] leading-[1.12]">
              Everything You Need. <br className="hidden sm:inline" />
              <span className="italic font-bold text-[#1B4332]">Nothing You Don&apos;t.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed max-w-xl">
              Restful rooms, fresh ocean air, authentic coastal dining, and attentive 24/7 personal care.
            </p>

            <div className="pt-2">
              <a
                href="#amenities-grid"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#1B4332] hover:text-emerald-700 transition group"
              >
                <span>Explore Amenities</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
