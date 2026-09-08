"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryImage {
  src: string;
  caption: string;
}

interface RoomGalleryProps {
  images: GalleryImage[];
  roomName: string;
}

export default function RoomGallery({ images, roomName }: RoomGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, images.length]);

  const primaryImage = images[0];
  const supportingImages = images.slice(1);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl sm:text-2xl font-editorial font-light text-neutral-900">
          Room Photography
        </h3>
        <span className="text-xs uppercase tracking-widest text-neutral-500">
          {images.length} High-Resolution Views
        </span>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Large Primary Image */}
        <div
          onClick={() => setLightboxIndex(0)}
          className="lg:col-span-8 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-md cursor-pointer group"
        >
          <Image
            src={primaryImage.src}
            alt={primaryImage.caption}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-103"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition" />
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
            <span className="text-xs font-light tracking-wide">{primaryImage.caption}</span>
            <span className="p-2 rounded-full bg-black/40 backdrop-blur-xs text-white group-hover:bg-[#C5A880] group-hover:text-black transition">
              <Maximize2 className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Supporting Images Column */}
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
          {supportingImages.slice(0, 2).map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx + 1)}
              className="relative h-[180px] sm:h-[220px] rounded-2xl overflow-hidden shadow-xs cursor-pointer group"
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-[11px] font-light truncate opacity-90">
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Supporting Row if more than 3 images */}
      {supportingImages.length > 2 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-1">
          {supportingImages.slice(2).map((img, idx) => (
            <div
              key={idx + 2}
              onClick={() => setLightboxIndex(idx + 3)}
              className="relative h-44 rounded-2xl overflow-hidden shadow-xs cursor-pointer group"
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              <div className="absolute bottom-2 left-3 right-3 text-white text-[11px] font-light truncate opacity-90">
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Interactive Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div
            className="w-full max-w-5xl flex items-center justify-between text-white/80 py-4 px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-[#C5A880]">
                {roomName}
              </h4>
              <p className="text-xs text-neutral-400">
                {lightboxIndex + 1} of {images.length} — {images[lightboxIndex].caption}
              </p>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image View */}
          <div
            className="relative w-full max-w-5xl h-[70vh] max-h-[750px] my-auto flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].caption}
              fill
              className="object-contain"
              priority
            />

            {/* Prev Arrow */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null
                )
              }
              aria-label="Previous image"
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition cursor-pointer border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null
                )
              }
              aria-label="Next image"
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition cursor-pointer border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption */}
          <div className="text-center text-xs text-neutral-300 font-light mt-2 max-w-xl">
            {images[lightboxIndex].caption}
          </div>
        </div>
      )}
    </div>
  );
}
