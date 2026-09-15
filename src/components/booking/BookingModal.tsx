"use client";

import { useState } from "react";
import { X, PhoneCall, CheckCircle2, User, Phone, Mail, Hotel, ArrowRight, Loader2 } from "lucide-react";
import { ALL_BOOKING_TYPES } from "@/data/rooms";
import { sendContactInquiry } from "@/lib/contact";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomSlug?: string;
  initialName?: string;
  initialPhone?: string;
  initialEmail?: string;
  initialBookingRef?: string;
  initialSubmitted?: boolean;
}

export default function BookingModal(props: BookingModalProps) {
  if (!props.isOpen) return null;

  return (
    <BookingModalDialog
      key={`${props.preselectedRoomSlug || "default"}-${props.initialSubmitted ? "conf" : "form"}-${props.initialPhone || ""}-${props.initialBookingRef || ""}`}
      {...props}
    />
  );
}

function BookingModalDialog({
  onClose,
  preselectedRoomSlug,
  initialName = "",
  initialPhone = "",
  initialEmail = "",
  initialBookingRef = "",
  initialSubmitted = false,
}: BookingModalProps) {
  const [selectedType, setSelectedType] = useState(
    preselectedRoomSlug || ALL_BOOKING_TYPES[0].slug
  );
  const [name, setName] = useState(initialName);
  const [phone, setPhone] = useState(initialPhone);
  const [email, setEmail] = useState(initialEmail);
  const [confirmed, setConfirmed] = useState(initialSubmitted);
  const [bookingRef, setBookingRef] = useState(
    () => initialBookingRef || (initialSubmitted ? `PS-${Math.floor(100000 + Math.random() * 900000)}` : "")
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentType =
    ALL_BOOKING_TYPES.find((t) => t.slug === selectedType) || ALL_BOOKING_TYPES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const ref = `PS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);

    await sendContactInquiry({
      sender_name: name,
      sender_email: email,
      phone_number: phone,
      subject: `Direct Booking Request: ${currentType.name} [Ref: ${ref}]`,
      message:
        `Direct Reservation Request from Palmshore Hotel website:\n` +
        `Reference Code: ${ref}\n` +
        `Selected Category: ${currentType.name} (${currentType.rateLabel})\n` +
        `Guest Name: ${name}\n` +
        `Phone / WhatsApp: ${phone}\n` +
        `Email: ${email}\n` +
        `Requested Confirmation Call: Yes`,
    });

    setIsSubmitting(false);
    setConfirmed(true);
  };

  const handleResetAndClose = () => {
    setConfirmed(false);
    onClose();
  };


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl shadow-2xl overflow-hidden border border-[#E8E4DD] max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#1B4332] text-white">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#E5D0B5] font-semibold block">
              Direct Reservation Desk
            </span>
            <h3 className="text-xl font-bold font-editorial">
              {confirmed ? "Booking Received" : "Book Your Stay"}
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            aria-label="Close booking modal"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-[#1C1E1B]">
          {confirmed ? (
            /* Post-Submission Screen */
            <div className="py-4 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
              {/* Phone Call Alert Badge */}
              <div className="w-16 h-16 bg-emerald-100 text-[#1B4332] rounded-full flex items-center justify-center mx-auto shadow-sm">
                <PhoneCall className="w-8 h-8" />
              </div>

              <div className="space-y-3">
                <h4 className="text-2xl font-bold text-neutral-900 font-editorial">
                  Inquiry Received!
                </h4>

                {/* Primary User Requirement: Confirmation Call Notice */}
                <div className="bg-[#1B4332] text-white p-4 sm:p-5 rounded-2xl shadow-md text-center max-w-md mx-auto">
                  <p className="text-sm sm:text-base font-bold text-[#F4ECE1] leading-relaxed">
                    There will be a confirmation call from our end shortly to finalize your booking details.
                  </p>
                  <p className="text-xs text-neutral-300 mt-1.5">
                    Our front desk will contact you via call or WhatsApp shortly.
                  </p>
                </div>
              </div>

              {/* Inquiry Summary Box */}
              <div className="bg-white p-5 rounded-2xl border border-[#E8E4DD] text-left max-w-md mx-auto text-xs space-y-2.5 shadow-xs">
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500 font-medium">Reference Code</span>
                  <span className="font-mono font-bold text-[#1B4332] text-sm">{bookingRef}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500 font-medium">Reservation Type</span>
                  <span className="font-bold text-neutral-800 text-right">{currentType.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500 font-medium">Full Name</span>
                  <span className="font-semibold text-neutral-800">{name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500 font-medium">Phone Number</span>
                  <span className="font-semibold text-neutral-800">{phone}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500 font-medium">Email</span>
                  <span className="font-semibold text-neutral-800 truncate max-w-[200px]">{email}</span>
                </div>
              </div>

              {/* 24/7 Desk Help */}
              <div className="bg-[#FAF6F0] border border-[#EAE2D5] rounded-xl p-3 max-w-md mx-auto text-[11px] text-neutral-600">
                <span>Need urgent assistance? Call front desk directly at </span>
                <a href="tel:+919539073788" className="font-bold text-[#1B4332] hover:underline">
                  +91 95390 73788
                </a>
                <span> or WhatsApp </span>
                <a href="https://wa.me/919539073788" className="font-bold text-[#1B4332] hover:underline" target="_blank" rel="noopener noreferrer">
                  +91 95390 73788
                </a>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#1B4332] hover:bg-[#123124] text-white rounded-full text-xs uppercase tracking-widest font-bold transition shadow-md cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            /* Streamlined 4-Field Form: Type, Name, Number, Email */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* 1. TYPE */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
                  <Hotel className="w-3.5 h-3.5 text-[#1B4332]" />
                  <span>Type (Room / Venue Category) *</span>
                </label>
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    required
                    className="w-full appearance-none bg-white border border-[#DCD5C9] rounded-xl px-4 py-3 text-xs font-medium text-neutral-900 focus:outline-2 focus:outline-[#1B4332] shadow-xs cursor-pointer pr-10"
                  >
                    <optgroup label="Rooms & Suites">
                      {ALL_BOOKING_TYPES.filter((t) => t.category === "room").map((item) => (
                        <option key={item.slug} value={item.slug}>
                          {item.name} — {item.rateLabel}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Venues & Dining">
                      {ALL_BOOKING_TYPES.filter((t) => t.category !== "room").map((item) => (
                        <option key={item.slug} value={item.slug}>
                          {item.name} ({item.rateLabel})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* 2. NAME */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#1B4332]" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Varma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-[#DCD5C9] rounded-xl px-4 py-3 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-2 focus:outline-[#1B4332] shadow-xs"
                />
              </div>

              {/* 3. NUMBER */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#1B4332]" />
                  <span>Phone / WhatsApp Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-[#DCD5C9] rounded-xl px-4 py-3 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-2 focus:outline-[#1B4332] shadow-xs"
                />
              </div>

              {/* 4. EMAIL */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#1B4332]" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-[#DCD5C9] rounded-xl px-4 py-3 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-2 focus:outline-[#1B4332] shadow-xs"
                />
              </div>

              {/* Confirmation Call Notice Badge */}
              <div className="bg-[#F4ECE1] border border-[#E3D4C1] rounded-2xl p-3.5 flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-[#1B4332] shrink-0" />
                <div className="text-xs text-neutral-700">
                  <span className="font-bold text-[#1B4332]">Confirmation Call: </span>
                  Our front desk will call you directly to confirm your dates & finalize your booking.
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl bg-[#1B4332] hover:bg-[#123124] disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#E5D0B5]" />
                    <span>Sending Booking Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Booking Request</span>
                    <ArrowRight className="w-4 h-4 text-[#E5D0B5]" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 text-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Pay at check-in · Direct desk confirmation</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
