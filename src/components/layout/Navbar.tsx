"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleBookYourStay = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking();
      return;
    }

    if (pathname === "/") {
      const el = document.getElementById("hero-booking-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          const input = el.querySelector<HTMLInputElement | HTMLSelectElement>("input[name='name'], input, select");
          input?.focus({ preventScroll: true });
        }, 400);
      }
    } else {
      router.push("/#hero-booking-form");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/#rooms" },
    { name: "Banquets", href: "/#banquets" },
    { name: "Dining", href: "/#dining" },
    { name: "Amenities", href: "/#amenities" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md shadow-xs border-b border-[#E8E4DD] py-3.5"
          : "bg-gradient-to-b from-black/60 via-black/25 to-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`relative h-14 sm:h-16 md:h-18 w-44 sm:w-52 md:w-60 transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? "brightness-100 drop-shadow-xs" : "brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
            }`}
          >
            <Image
              src="/assets/brand/palmshore-logo.png"
              alt="Palmshore Hotel"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors duration-200 relative group py-1 ${
                isScrolled
                  ? "text-neutral-700 hover:text-emerald-800"
                  : "text-white/90 hover:text-white drop-shadow-xs"
              }`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-emerald-800 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Action */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={handleBookYourStay}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
              isScrolled
                ? "bg-[#1B4332] text-white hover:bg-emerald-950 hover:shadow-md"
                : "bg-white text-neutral-900 hover:bg-neutral-100 hover:shadow-lg"
            }`}
          >
            <span>Book Your Stay</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className={`lg:hidden p-2 rounded-lg transition ${
            isScrolled ? "text-neutral-800" : "text-white"
          }`}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] text-neutral-900 border-b border-[#E8E4DD] px-6 py-6 shadow-xl space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-800 hover:text-emerald-800 py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-[#E8E4DD]">
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleBookYourStay(e);
              }}
              className="w-full py-3 bg-[#1B4332] hover:bg-emerald-950 text-white text-xs uppercase tracking-widest font-semibold rounded-full text-center shadow-sm cursor-pointer"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
