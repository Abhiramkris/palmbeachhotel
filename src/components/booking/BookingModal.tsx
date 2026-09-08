"use client";

import { useState } from "react";
import { X, Calendar, Users, Home, CheckCircle2, ShieldCheck } from "lucide-react";
import { HOTEL_ROOMS, EXTRA_PERSON_RATE, TAX_PERCENTAGE } from "@/data/rooms";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomSlug?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
  initialRooms?: number;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedRoomSlug,
  initialCheckIn,
  initialCheckOut,
  initialGuests = 2,
  initialRooms = 1,
}: BookingModalProps) {
  const defaultCheckIn = () => {
    if (initialCheckIn) return initialCheckIn;
    return new Date().toISOString().split("T")[0];
  };

  const defaultCheckOut = () => {
    if (initialCheckOut) return initialCheckOut;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  const [selectedSlug, setSelectedSlug] = useState(
    preselectedRoomSlug || HOTEL_ROOMS[0].slug
  );
  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [guests, setGuests] = useState(initialGuests);
  const [roomsCount, setRoomsCount] = useState(initialRooms);
  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  if (!isOpen) return null;

  const currentRoom =
    HOTEL_ROOMS.find((r) => r.slug === selectedSlug) || HOTEL_ROOMS[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(1, Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)));
  const nights = isNaN(diffTime) ? 1 : diffTime;

  // Extra guest calculation
  const extraGuests = Math.max(0, guests - currentRoom.capacity.baseGuests * roomsCount);
  const baseTotal = currentRoom.rate * roomsCount * nights;
  const extraGuestTotal = extraGuests * EXTRA_PERSON_RATE * nights;
  const subtotal = baseTotal + extraGuestTotal;
  const tax = Math.round(subtotal * (TAX_PERCENTAGE / 100));
  const grandTotal = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `PB-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setConfirmed(true);
  };

  const handleResetAndClose = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl shadow-2xl overflow-hidden border border-[#E8E4DD] max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#1B4332] text-white">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold">
              Official Reservation Desk
            </span>
            <h3 className="text-xl font-bold font-editorial">Reserve Your Palmbeach Sanctuary</h3>
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
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-neutral-900 font-editorial">
                  Reservation Confirmed!
                </h4>
                <p className="text-sm text-neutral-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold">{guestName}</span>. Your booking request for the{" "}
                  <span className="font-semibold">{currentRoom.name}</span> has been logged with reference{" "}
                  <span className="font-mono font-bold text-emerald-900">{bookingRef}</span>.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E8E4DD] text-left max-w-md mx-auto text-xs space-y-2.5">
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500">Dates</span>
                  <span className="font-medium text-neutral-800">
                    {checkIn} to {checkOut} ({nights} {nights === 1 ? "night" : "nights"})
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500">Guests & Rooms</span>
                  <span className="font-medium text-neutral-800">
                    {guests} Guests · {roomsCount} {roomsCount === 1 ? "Room" : "Rooms"}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500">Estimated Total (incl. 12% GST)</span>
                  <span className="font-bold text-base text-emerald-800">₹{grandTotal.toLocaleString("en-IN")}</span>
                </div>
                <p className="text-[11px] text-neutral-500 pt-1">
                  Our concierge will contact you via WhatsApp at <span className="font-medium text-neutral-700">{phone}</span> to confirm arrival time and check-in details.
                </p>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-8 py-3 bg-[#1B4332] text-white rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-emerald-950 transition cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Room Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                  Select Room Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {HOTEL_ROOMS.map((room) => {
                    const isSelected = selectedSlug === room.slug;
                    return (
                      <button
                        type="button"
                        key={room.slug}
                        onClick={() => setSelectedSlug(room.slug)}
                        className={`p-3 rounded-xl text-left border transition flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? "bg-emerald-950 text-white border-emerald-950 shadow-xs"
                            : "bg-white text-neutral-800 border-[#E8E4DD] hover:border-neutral-400"
                        }`}
                      >
                        <div className="flex items-start justify-between w-full">
                          <span className="font-semibold text-xs leading-snug">{room.name}</span>
                          <span
                            className={`text-xs font-bold font-mono ml-2 ${
                              isSelected ? "text-[#C5A880]" : "text-emerald-800"
                            }`}
                          >
                            ₹{room.rate.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] mt-1 block ${
                            isSelected ? "text-neutral-300" : "text-neutral-500"
                          }`}
                        >
                          {room.bedType} · Max {room.capacity.maxGuests} Guests
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dates & Capacity Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-2xl border border-[#E8E4DD]">
                <div>
                  <label className="text-[11px] font-medium text-neutral-500 mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-emerald-800" />
                    <span>Check-in</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-lg p-2 focus:outline-emerald-800"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-medium text-neutral-500 mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-emerald-800" />
                    <span>Check-out</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-lg p-2 focus:outline-emerald-800"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-medium text-neutral-500 mb-1 flex items-center gap-1">
                    <Users className="w-3 h-3 text-emerald-800" />
                    <span>Guests</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max={currentRoom.capacity.maxGuests * roomsCount}
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                    className="w-full text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-lg p-2 focus:outline-emerald-800"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-medium text-neutral-500 mb-1 flex items-center gap-1">
                    <Home className="w-3 h-3 text-emerald-800" />
                    <span>Rooms</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={roomsCount}
                    onChange={(e) => setRoomsCount(parseInt(e.target.value) || 1)}
                    className="w-full text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-lg p-2 focus:outline-emerald-800"
                  />
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Varma"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full text-xs bg-white border border-neutral-300 rounded-xl p-3 focus:outline-emerald-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs bg-white border border-neutral-300 rounded-xl p-3 focus:outline-emerald-800"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs bg-white border border-neutral-300 rounded-xl p-3 focus:outline-emerald-800"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Arrival time, extra bed preference, airport pickup details..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full text-xs bg-white border border-neutral-300 rounded-xl p-3 focus:outline-emerald-800 resize-none"
                  />
                </div>
              </div>

              {/* Price Calculation Summary */}
              <div className="bg-[#F3EFEA] p-4 rounded-2xl border border-[#E5DFD5] space-y-2 text-xs">
                <div className="flex justify-between text-neutral-700">
                  <span>
                    {currentRoom.name} (₹{currentRoom.rate.toLocaleString("en-IN")} × {roomsCount} × {nights} {nights === 1 ? "night" : "nights"})
                  </span>
                  <span>₹{baseTotal.toLocaleString("en-IN")}</span>
                </div>
                {extraGuests > 0 && (
                  <div className="flex justify-between text-neutral-700">
                    <span>
                      Extra Person Charge ({extraGuests} extra × ₹{EXTRA_PERSON_RATE} × {nights}n)
                    </span>
                    <span>₹{extraGuestTotal.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="flex justify-between text-neutral-600">
                  <span>Taxes (12% GST as applicable)</span>
                  <span>₹{tax.toLocaleString("en-IN")}</span>
                </div>
                <div className="pt-2 border-t border-neutral-300 flex justify-between items-center font-bold text-sm text-[#1B4332]">
                  <span>Total Payable</span>
                  <span className="text-base font-mono">₹{grandTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>No upfront payment required · Pay at check-in</span>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#1B4332] hover:bg-emerald-950 text-white text-xs uppercase tracking-widest font-semibold rounded-full shadow-md transition cursor-pointer"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
