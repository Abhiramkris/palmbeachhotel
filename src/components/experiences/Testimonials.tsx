"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { GUEST_TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) =>
      curr === 0 ? GUEST_TESTIMONIALS.length - 1 : curr - 1
    );
  };

  const next = () => {
    setCurrentIndex((curr) =>
      curr === GUEST_TESTIMONIALS.length - 1 ? 0 : curr + 1
    );
  };

  const active = GUEST_TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#EAE6DF] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89258] font-bold">
            Guest Reflections
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-neutral-900">
            What Our Guests Say
          </h2>
        </div>

        {/* Big Editorial Quote Container */}
        <div className="relative min-h-[220px] sm:min-h-[260px] flex flex-col justify-center items-center px-4 sm:px-8">
          {/* Star rating */}
          <div className="flex items-center justify-center gap-1.5 mb-6 text-[#C5A880]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          {/* Large Quote */}
          <blockquote className="text-xl sm:text-3xl lg:text-4xl font-editorial font-medium text-neutral-900 leading-snug tracking-tight max-w-4xl mx-auto italic transition-all duration-500">
            &ldquo;{active.quote}&rdquo;
          </blockquote>

          {/* Guest Attribution */}
          <div className="mt-8 space-y-1">
            <cite className="not-italic text-sm sm:text-base font-semibold text-neutral-900 block">
              {active.author}
            </cite>
            <span className="text-xs text-neutral-500 font-light block">
              {active.location} · <span className="text-emerald-800 font-medium">{active.stayType}</span>
            </span>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6 pt-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full border border-[#D5CEC2] hover:bg-[#EDE7DD] hover:border-neutral-400 text-neutral-700 flex items-center justify-center transition cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {GUEST_TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? "w-8 bg-[#1B4332]" : "w-2 bg-[#D5CEC2]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full border border-[#D5CEC2] hover:bg-[#EDE7DD] hover:border-neutral-400 text-neutral-700 flex items-center justify-center transition cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
