"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#141815] text-[#D8D5CE] pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative h-14 w-44 brightness-0 invert opacity-90">
                <Image
                  src="/assets/brand/palmshore-logo.png"
                  alt="Hotel Palmbeach Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              A tranquil sanctuary in Palakkad offering boutique rooms, conference banquets, and authentic dining.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                ★ Boutique Hospitality in Palakkad
              </span>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">Explore</h4>
            <ul className="space-y-2.5 text-sm text-neutral-400 font-light">
              <li>
                <Link href="/" className="hover:text-[#C5A880] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#rooms" className="hover:text-[#C5A880] transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/#amenities" className="hover:text-[#C5A880] transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/#experiences" className="hover:text-[#C5A880] transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-[#C5A880] transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#C5A880] transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-1" />
                <span>Hotel Palmbeach, Palakkad, Kerala, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210 / +91 497 2700000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href="mailto:stay@hotelpalmbeach.com" className="hover:text-white transition-colors">
                  stay@hotelpalmbeach.com
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <h5 className="text-xs uppercase tracking-widest text-white font-semibold mb-3">Follow</h5>
              <div className="flex items-center gap-3 text-neutral-400">
                {/* Instagram SVG */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 hover:text-white flex items-center justify-center transition"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* Facebook SVG */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 hover:text-white flex items-center justify-center transition"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">Newsletter</h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Stay in the know. Receive seasonal invitations, curated cultural itineraries, and member privileges.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800/60 rounded-xl text-emerald-200 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you. You are now subscribed to Palmbeach dispatches.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-full py-2.5 pl-4 pr-11 text-xs text-white placeholder:text-neutral-500 focus:outline-hidden focus:border-[#C5A880] transition"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1 top-1 bottom-1 w-8 h-8 rounded-full bg-[#1B4332] hover:bg-emerald-800 text-white flex items-center justify-center transition cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[11px] text-neutral-500 block">We value privacy. Unsubscribe anytime.</span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <p>© 2026 Hotel Palmbeach. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neutral-300 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-neutral-300 transition">
              Hotel Tariff Schedule
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
