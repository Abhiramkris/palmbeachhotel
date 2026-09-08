"use client";

import { useState } from "react";
import Image from "next/image";
import { HOTEL_ASSETS, HOTEL_GALLERY_ITEMS } from "@/lib/assets";

type CategoryFilter = "all" | "rooms" | "dining" | "banquet" | "exterior" | "interior";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredItems =
    activeCategory === "all"
      ? HOTEL_GALLERY_ITEMS
      : HOTEL_GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: "all", label: "All Photos" },
    { key: "rooms", label: "Rooms & Suites" },
    { key: "dining", label: "Restaurant & Dining" },
    { key: "banquet", label: "Banquet & Events" },
    { key: "exterior", label: "Grounds & Exterior" },
    { key: "interior", label: "Lobby & Interiors" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Announcement Bar */}
      <div className="bg-emerald-900 text-emerald-100 text-xs sm:text-sm py-2 px-4 text-center font-medium">
        <span>✨ Welcome to KGP Palmshore Hotel — Best Rates Guaranteed for Direct Bookings</span>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-14 w-40">
              <Image
                src={HOTEL_ASSETS.brand.logo}
                alt="KGP Palmshore Hotel Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
            <a href="#about" className="hover:text-emerald-700 transition">About</a>
            <a href="#rooms" className="hover:text-emerald-700 transition">Rooms</a>
            <a href="#dining" className="hover:text-emerald-700 transition">Dining</a>
            <a href="#banquets" className="hover:text-emerald-700 transition">Banquets</a>
            <a href="#gallery" className="hover:text-emerald-700 transition">Gallery</a>
            <a href="#contact" className="hover:text-emerald-700 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold rounded-full shadow-sm transition"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[550px] w-full flex items-center justify-center text-white">
          <Image
            src={HOTEL_ASSETS.exterior.heroExteriorDay}
            alt="KGP Palmshore Hotel Courtyard"
            fill
            className="object-cover brightness-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-emerald-200 text-xs font-semibold tracking-wider uppercase">
              ★ Premium Hospitality & Serenity
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-md">
              A Luxurious Sanctuary by the Palms
            </h1>
            <p className="text-lg sm:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed">
              Unwind in comfortable contemporary suites, savor exceptional multi-cuisine dining, and host memorable celebrations in our grand banquet halls.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#gallery"
                className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg transition"
              >
                Explore Hotel Gallery
              </a>
              <a
                href="#rooms"
                className="px-7 py-3.5 bg-white/90 hover:bg-white text-neutral-900 font-semibold rounded-full backdrop-blur-sm shadow-lg transition"
              >
                View Rooms & Suites
              </a>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-12 bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                <div className="text-3xl mb-2">🛏️</div>
                <h3 className="font-bold text-neutral-900">Luxury Rooms</h3>
                <p className="text-xs text-neutral-600 mt-1">Deluxe, Executive & Suites with modern amenities</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                <div className="text-3xl mb-2">🍽️</div>
                <h3 className="font-bold text-neutral-900">Fine Dining</h3>
                <p className="text-xs text-neutral-600 mt-1">Multi-cuisine restaurant & dedicated private dining</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                <div className="text-3xl mb-2">🎉</div>
                <h3 className="font-bold text-neutral-900">Grand Banquet</h3>
                <p className="text-xs text-neutral-600 mt-1">Spacious hall & stage for weddings & corporate events</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                <div className="text-3xl mb-2">🌴</div>
                <h3 className="font-bold text-neutral-900">Lush Courtyard</h3>
                <p className="text-xs text-neutral-600 mt-1">Serene palm trees, fountains & peaceful ambient gardens</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Showcase */}
        <section id="rooms" className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-emerald-700 font-semibold tracking-wider text-xs uppercase">Accommodation</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mt-2">
                Designed for Comfort & Relaxation
              </h2>
              <p className="text-neutral-600 mt-4">
                Each room is thoughtfully outfitted with plush king-sized beds, modern en-suite bathrooms, ergonomic work consoles, and ambient lighting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Deluxe King */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-neutral-200 flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={HOTEL_ASSETS.rooms.deluxeBed}
                    alt="Deluxe Room Bed"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-emerald-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">Deluxe King Room</h3>
                    <p className="text-sm text-neutral-600 mt-2">
                      Contemporary room with king bed, reading illumination, bedside telephone, and modern decor.
                    </p>
                    <ul className="text-xs text-neutral-500 mt-4 space-y-1">
                      <li>✓ King Bed with Blue Linen Runners</li>
                      <li>✓ Modern En-Suite Glass Shower</li>
                      <li>✓ High-Speed Wi-Fi & LED TV</li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-emerald-800">Best Value</span>
                    <a href="#contact" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                      Reserve Room →
                    </a>
                  </div>
                </div>
              </div>

              {/* Executive Premium */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-neutral-200 flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={HOTEL_ASSETS.rooms.executiveBedFront}
                    alt="Executive Premium Room Bed"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Executive
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">Executive Premium Room</h3>
                    <p className="text-sm text-neutral-600 mt-2">
                      Warmly appointed room with tailored bedside paneling, standing brass lamp, and plush seating.
                    </p>
                    <ul className="text-xs text-neutral-500 mt-4 space-y-1">
                      <li>✓ Ornate Gold & Maroon Accents</li>
                      <li>✓ Dedicated Armchairs & Coffee Table</li>
                      <li>✓ Workstation & Vanity Console</li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-amber-800">Premium Comfort</span>
                    <a href="#contact" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                      Reserve Room →
                    </a>
                  </div>
                </div>
              </div>

              {/* Presidential / Suite Dining */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-neutral-200 flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={HOTEL_ASSETS.rooms.suiteDiningArea}
                    alt="Suite Room Dining Area"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-neutral-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Suite
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">Palmshore Hospitality Suite</h3>
                    <p className="text-sm text-neutral-600 mt-2">
                      Spacious multi-room suite with private glass dining table, wall entertainment, and dedicated service.
                    </p>
                    <ul className="text-xs text-neutral-500 mt-4 space-y-1">
                      <li>✓ 4-Seater Glass Dining Table</li>
                      <li>✓ Private Living & Entertaining Area</li>
                      <li>✓ In-Room Bar & Complimentary Breakfast</li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-neutral-800">Ultimate Luxury</span>
                    <a href="#contact" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                      Reserve Room →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dining & Banquet Split Section */}
        <section id="dining" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {/* Dining row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-emerald-700 font-semibold tracking-wider text-xs uppercase">Culinary Excellence</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
                  Savor Exquisite Dining in an Inviting Atmosphere
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  Our in-house multi-cuisine restaurant serves freshly prepared specialties ranging from coastal delicacies to North and South Indian favorites, complemented by warm hospitality.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                    <h4 className="font-bold text-neutral-900">Breakfast & Buffet</h4>
                    <p className="text-xs text-neutral-500 mt-1">Daily morning breakfast spreads & evening specials</p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                    <h4 className="font-bold text-neutral-900">Room Service</h4>
                    <p className="text-xs text-neutral-500 mt-1">Full dining menu delivered directly to your door</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={HOTEL_ASSETS.dining.diningHallWide}
                    alt="Restaurant Dining Hall"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={HOTEL_ASSETS.dining.diningTables}
                    alt="Restaurant Dining Tables"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Banquet row */}
            <div id="banquets" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={HOTEL_ASSETS.banquet.conferenceHallWide}
                    alt="Banquet Conference Hall Wide"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={HOTEL_ASSETS.banquet.stagePodium}
                    alt="Banquet Stage Podium"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <span className="text-emerald-700 font-semibold tracking-wider text-xs uppercase">Events & Celebrations</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
                  Spacious Banquet & Conference Facilities
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  From corporate conferences, seminars, and product launches to weddings and family galas, our banquet hall accommodates large gatherings with flexible theatre-style seating, audiovisual facilities, and tailored catering.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                    <h4 className="font-bold text-neutral-900">Custom Staging</h4>
                    <p className="text-xs text-neutral-500 mt-1">Equipped with speaker dais, podium & microphone systems</p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                    <h4 className="font-bold text-neutral-900">Event Coordination</h4>
                    <p className="text-xs text-neutral-500 mt-1">Dedicated on-site assistance for seamless execution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Night Illumination Banner */}
        <section className="relative py-20 bg-neutral-950 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={HOTEL_ASSETS.exterior.buildingNightWide}
              alt="Hotel night background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="relative h-20 w-64">
                  <Image
                    src={HOTEL_ASSETS.brand.neonSignage}
                    alt="KGP Palmshore Hotel Neon Sign"
                    fill
                    className="object-cover rounded-lg shadow-2xl"
                  />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Experience Palmshore Evenings Under the Stars
                </h2>
                <p className="text-neutral-300 leading-relaxed">
                  As twilight sets in, KGP Palmshore Hotel transforms with radiant facade lighting, illuminated palm trees, and an architectural glass staircase that casts a warm glow across the grounds.
                </p>
              </div>
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg border border-white/10">
                  <Image
                    src={HOTEL_ASSETS.exterior.glassStaircaseNight}
                    alt="Illuminated Glass Staircase"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg border border-white/10">
                  <Image
                    src={HOTEL_ASSETS.exterior.buildingFacadeNight}
                    alt="Illuminated Palm Facade"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Filterable Photo Gallery */}
        <section id="gallery" className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-emerald-700 font-semibold tracking-wider text-xs uppercase">Photo Gallery</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mt-2">
                Discover KGP Palmshore Hotel
              </h2>
              <p className="text-neutral-600 mt-3">
                Browse through our photography collection covering all guest rooms, dining areas, banquets, and grounds.
              </p>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition cursor-pointer ${
                      activeCategory === cat.key
                        ? "bg-emerald-700 text-white shadow-sm"
                        : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-xs hover:shadow-md transition flex flex-col"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-neutral-900 text-base">{item.title}</h3>
                      <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Booking CTA Section */}
        <section id="contact" className="py-20 bg-white border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-emerald-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-xl space-y-4 text-center lg:text-left">
                <span className="text-emerald-200 text-xs uppercase font-bold tracking-widest">Plan Your Visit</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Stay with Us?</h2>
                <p className="text-emerald-100 leading-relaxed text-sm sm:text-base">
                  Contact our reservations desk for room bookings, wedding banquet inquiries, corporate events, and custom dining packages.
                </p>
                <div className="pt-2 text-sm text-emerald-200 space-y-1">
                  <p>📍 KGP Palmshore Hotel, Prime Beachway Location</p>
                  <p>📞 Phone & WhatsApp Inquiries Available 24/7</p>
                </div>
              </div>

              <div className="bg-white text-neutral-900 rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-lg">
                <h3 className="font-bold text-lg text-neutral-900 mb-4">Quick Reservation Request</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you! We will get in touch with you shortly.");
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 focus:outline-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 focus:outline-emerald-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Service</label>
                      <select className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-emerald-600">
                        <option>Room Stay</option>
                        <option>Banquet Hall</option>
                        <option>Restaurant</option>
                        <option>Conference</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Guests</label>
                      <input
                        type="number"
                        min="1"
                        defaultValue="2"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-emerald-600"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg text-sm transition shadow-md cursor-pointer"
                  >
                    Submit Booking Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="relative h-12 w-36 brightness-150">
                <Image
                  src={HOTEL_ASSETS.brand.logo}
                  alt="KGP Palmshore Hotel Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Experience comfort and warm hospitality amidst palm groves and tranquil ambiance.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Accommodations</h4>
              <ul className="text-xs space-y-2">
                <li><a href="#rooms" className="hover:text-white transition">Deluxe King Room</a></li>
                <li><a href="#rooms" className="hover:text-white transition">Executive Premium Room</a></li>
                <li><a href="#rooms" className="hover:text-white transition">Hospitality Suites</a></li>
                <li><a href="#rooms" className="hover:text-white transition">In-Room Amenities</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Venues & Services</h4>
              <ul className="text-xs space-y-2">
                <li><a href="#dining" className="hover:text-white transition">Palmshore Restaurant</a></li>
                <li><a href="#banquets" className="hover:text-white transition">Banquet & Convention Hall</a></li>
                <li><a href="#banquets" className="hover:text-white transition">Conference Dais & Stage</a></li>
                <li><a href="#gallery" className="hover:text-white transition">Photo Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Contact & Location</h4>
              <p className="text-xs leading-relaxed">
                KGP Palmshore Hotel<br />
                24/7 Front Desk & Concierge<br />
                Direct Reservations & Inquiries
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-800 text-center text-xs text-neutral-500">
            © {new Date().getFullYear()} KGP Palmshore Hotel. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
