"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  ArrowRight,
  ShieldCheck,
  Hotel,
  Loader2,
  Sparkles,
  PhoneCall,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/booking/BookingModal";
import { HOTEL_ASSETS } from "@/lib/assets";
import { sendContactInquiry } from "@/lib/contact";

const INQUIRY_CATEGORIES = [
  "Room Reservation & Direct Rates",
  "Grand Banquet Hall (150+ Guests)",
  "Palmshore Restaurant & Group Dining",
  "Corporate / Extended Stay",
  "General Inquiry & Travel Support",
];

export default function ContactView() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // Form state (Email removed from user input as requested)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState(INQUIRY_CATEGORIES[0]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const ref = `PS-MSG-${Math.floor(100000 + Math.random() * 900000)}`;

    const result = await sendContactInquiry({
      sender_name: name.trim(),
      sender_email: "hotelpalmshore@gmail.com",
      phone: phone.trim(),
      subject: `[Contact Page] ${category} - ${name.trim()} [${ref}]`,
      message:
        `New Inquiry from Palmshore Hotel Contact Page:\n` +
        `Reference: ${ref}\n` +
        `Category: ${category}\n` +
        `Guest Name: ${name.trim()}\n` +
        `Phone / WhatsApp: ${phone.trim()}\n\n` +
        `Message Content:\n${message.trim()}`,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
    } else {
      setErrorMessage(
        result.message || "Failed to send message. Please call our front desk directly at +91 95390 73788."
      );
    }
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setMessage("");
    setCategory(INQUIRY_CATEGORIES[0]);
    setIsSuccess(false);
    setErrorMessage(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1E1B]">
      {/* Navbar */}
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      <main className="flex-1">
        {/* 1. Hero Header Banner */}
        <section className="relative h-[44vh] min-h-[360px] w-full flex items-end">
          <Image
            src={HOTEL_ASSETS.exterior.heroExteriorDay}
            alt="Palmshore Hotel Grounds and Facade in Kozhinjampara, Palakkad"
            fill
            className="object-cover brightness-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141815] via-black/50 to-black/30" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full text-white">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5D0B5] mb-3">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <span className="text-white/80">Contact & Location</span>
            </div>

            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-[11px] font-semibold uppercase tracking-wider text-emerald-200 backdrop-blur-xs">
                <Sparkles className="w-3 h-3 text-[#C5A880]" />
                <span>24/7 Front Desk & Direct Reservations</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-editorial tracking-tight text-white leading-tight">
                Connect with Palmshore
              </h1>
              <p className="text-sm sm:text-base text-neutral-200 font-light max-w-2xl leading-relaxed">
                We are always at your service. Reach out to our front desk for direct room rates, dining, or travel assistance in Kozhinjampara, Palakkad.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Main Content Grid (Structured so Form is above Official Email in phone view) */}
        <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* ITEM 1: Phone / WhatsApp Card (order-1 on mobile, col-span-4 on desktop) */}
            <div className="order-1 lg:order-1 lg:col-span-4 bg-white rounded-3xl p-6 shadow-xl border border-[#E7E2DA] flex flex-col justify-between hover:shadow-2xl transition duration-300">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#1B4332] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-500 block">
                  Front Desk Direct
                </span>
                <h3 className="text-xl font-bold font-editorial text-neutral-900">
                  +91 95390 73788
                </h3>
                <p className="text-xs text-neutral-500 font-light">
                  Available 24/7 for phone reservations, room inquiries, and front desk care.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-neutral-100 mt-4">
                <a
                  href="tel:+919539073788"
                  className="flex-1 py-2.5 px-3 bg-[#1B4332] hover:bg-emerald-900 text-white rounded-xl text-xs font-semibold text-center transition flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919539073788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold text-center transition flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* ITEM 2: Contact Form Card (order-2 on mobile -> MOVED ABOVE OFFICIAL EMAIL; lg:order-4 lg:col-span-7 on desktop) */}
            <div className="order-2 lg:order-4 lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 shadow-lg border border-[#E7E2DA]">
              <div className="space-y-1.5 mb-7">
                <span className="text-xs uppercase tracking-widest text-[#B89258] font-bold">
                  Direct Messaging
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-neutral-900">
                  Send a Message to Front Desk
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 font-light">
                  Please share your query or booking preferences. Our desk will contact your phone or WhatsApp shortly.
                </p>
              </div>

              {isSuccess ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-[#1B4332] rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-editorial text-neutral-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-neutral-900">{name}</span>. Your inquiry has been forwarded directly to the Palmshore Hotel reception desk.
                    </p>
                  </div>

                  <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#EAE2D5] text-xs text-neutral-700 max-w-md mx-auto">
                    <p className="font-medium">
                      Our team will reach out to you via phone or WhatsApp at <span className="font-bold text-[#1B4332]">{phone}</span> shortly.
                    </p>
                    <p className="text-[11px] text-neutral-500 mt-1">
                      Need an immediate answer? Call our 24/7 reception desk at{" "}
                      <a href="tel:+919539073788" className="font-bold text-[#1B4332] underline">
                        +91 95390 73788
                      </a>.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="px-8 py-3 bg-[#1B4332] hover:bg-emerald-900 text-white rounded-full text-xs uppercase tracking-widest font-bold transition shadow-md cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
                      <PhoneCall className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Notice</p>
                        <p className="mt-0.5">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* 1. Category Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
                      <Hotel className="w-3.5 h-3.5 text-[#1B4332]" />
                      <span>Inquiry Subject / Area *</span>
                    </label>
                    <div className="relative">
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full appearance-none bg-[#FAF8F5] border border-[#DCD5C9] rounded-xl px-4 py-3 text-xs font-medium text-neutral-900 focus:outline-2 focus:outline-[#1B4332] shadow-xs cursor-pointer pr-10 disabled:opacity-60"
                      >
                        {INQUIRY_CATEGORIES.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* 2. Full Name (Email field removed per request) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="e.g. Maya Varma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#DCD5C9] rounded-xl px-4 py-3 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-2 focus:outline-[#1B4332] shadow-xs disabled:opacity-60"
                    />
                  </div>

                  {/* 3. Phone / WhatsApp Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      disabled={isSubmitting}
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#DCD5C9] rounded-xl px-4 py-3 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-2 focus:outline-[#1B4332] shadow-xs disabled:opacity-60"
                    />
                  </div>

                  {/* 4. Message Textarea */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Your Message or Request Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      disabled={isSubmitting}
                      placeholder="Please let us know your planned travel dates, number of guests, or special requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#DCD5C9] rounded-xl px-4 py-3 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-2 focus:outline-[#1B4332] shadow-xs resize-y disabled:opacity-60"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-[#E05332] hover:bg-[#C94324] disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message via Direct Desk</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 text-center pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Direct response from hotel desk · No third-party markups</span>
                  </div>
                </form>
              )}
            </div>

            {/* ITEM 3: Official Email Card (order-3 on mobile -> BELOW FORM ON MOBILE; lg:order-2 lg:col-span-4 on desktop) */}
            <div className="order-3 lg:order-2 lg:col-span-4 bg-white rounded-3xl p-6 shadow-xl border border-[#E7E2DA] flex flex-col justify-between hover:shadow-2xl transition duration-300">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#B89258] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-500 block">
                  Official Email
                </span>
                <h3 className="text-lg font-bold font-editorial text-neutral-900 break-all">
                  hotelpalmshore@gmail.com
                </h3>
                <p className="text-xs text-neutral-500 font-light">
                  Direct confirmations, corporate partnerships, and event quotation requests.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 mt-4">
                <a
                  href="mailto:hotelpalmshore@gmail.com"
                  className="w-full py-2.5 px-3 bg-neutral-900 hover:bg-black text-white rounded-xl text-xs font-semibold text-center transition flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* ITEM 4: Address & Location Card (order-4 on mobile; lg:order-3 lg:col-span-4 on desktop) */}
            <div className="order-4 lg:order-3 lg:col-span-4 bg-white rounded-3xl p-6 shadow-xl border border-[#E7E2DA] flex flex-col justify-between hover:shadow-2xl transition duration-300">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 text-neutral-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#1B4332]" />
                </div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-500 block">
                  Address & Location
                </span>
                <h3 className="text-base font-bold font-editorial text-neutral-900 leading-snug">
                  Near govt hospital, Pollachi-Palakkad road
                </h3>
                <p className="text-xs text-neutral-600 font-light">
                  Kozhinjampara - 678555
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 mt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Palmshore+Hotel+Near+govt+hospital+Pollachi-Palakkad+road+Kozhinjampara+678555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-[#E05332] hover:bg-[#C94324] text-white rounded-xl text-xs font-semibold text-center transition flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Directions</span>
                </a>
              </div>
            </div>

            {/* ITEM 5: Hotel Timings & Transit Details (order-5 on mobile; lg:order-5 lg:col-span-5 on desktop) */}
            <div className="order-5 lg:order-5 lg:col-span-5 space-y-6">
              {/* Hotel Timings & Desk Hours */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-[#E7E2DA] space-y-4">
                <div className="flex items-center gap-2.5 text-neutral-900">
                  <Clock className="w-5 h-5 text-[#1B4332]" />
                  <h3 className="text-lg font-bold font-editorial">
                    Hotel Timings & Desk Hours
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-neutral-600">
                  <div className="flex justify-between py-2 border-b border-neutral-100">
                    <span className="font-medium text-neutral-700">Front Desk & Reception</span>
                    <span className="font-bold text-[#1B4332]">24 Hours / 7 Days</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-100">
                    <span className="font-medium text-neutral-700">Standard Check-In</span>
                    <span className="font-bold text-neutral-900">2:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-100">
                    <span className="font-medium text-neutral-700">Standard Check-Out</span>
                    <span className="font-bold text-neutral-900">11:00 AM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-100">
                    <span className="font-medium text-neutral-700">Palmshore Dining Service</span>
                    <span className="font-bold text-neutral-900">7:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium text-neutral-700">Early Check-In / Late Check-Out</span>
                    <span className="font-bold text-neutral-700">Subject to availability</span>
                  </div>
                </div>
              </div>

              {/* Getting to Palmshore Hotel */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-[#E7E2DA] space-y-4">
                <div className="flex items-center gap-2.5 text-neutral-900">
                  <Navigation className="w-5 h-5 text-[#E05332]" />
                  <h3 className="text-lg font-bold font-editorial">
                    Getting to Palmshore Hotel
                  </h3>
                </div>

                <ul className="space-y-3 text-xs text-neutral-600 font-light">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-medium text-neutral-900">Hotel Address:</strong> Near govt hospital, Pollachi-Palakkad road, Kozhinjampara - 678555.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-medium text-neutral-900">By Road:</strong> Prominently located along Pollachi-Palakkad road near the government hospital in Kozhinjampara.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-medium text-neutral-900">By Train & Air:</strong> Convenient road access from Palakkad Junction (PGT) and Coimbatore International Airport (CJB).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-medium text-neutral-900">Guest Parking:</strong> Secure on-property vehicle parking available complimentary for hotel residents.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Google Maps & Directions Showcase */}
        <section className="py-12 bg-white border-t border-[#EAE6DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#B89258] font-bold">
                  Location & Map
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-editorial text-neutral-900">
                  Find Us in Kozhinjampara
                </h3>
                <p className="text-xs text-neutral-500">
                  Near govt hospital, Pollachi-Palakkad road, Kozhinjampara - 678555
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Palmshore+Hotel+Near+govt+hospital+Pollachi-Palakkad+road+Kozhinjampara+678555"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B4332] hover:bg-emerald-950 text-white text-xs uppercase tracking-widest font-semibold rounded-full shadow-xs transition cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Interactive Map Card */}
            <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#E5DFD5] shadow-inner bg-neutral-100">
              <iframe
                title="Palmshore Hotel Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31358.84752763264!2d76.812!3d10.745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86113b5e438c3%3A0x6b4cb3ec55152fa2!2sKozhinjampara%2C%20Kerala%20678555!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
