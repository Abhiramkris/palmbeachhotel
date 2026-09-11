export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const HOTEL_AMENITIES: Amenity[] = [
  {
    id: "parking",
    name: "Free On-Site Parking",
    description: "Spacious, secure vehicle parking within the hotel premises.",
    icon: "shield-check",
  },
  {
    id: "wifi",
    name: "Free High-Speed Wi-Fi",
    description: "Fast fiber internet across all rooms and public spaces.",
    icon: "wifi",
  },
  {
    id: "restaurant",
    name: "Restaurant & Dining",
    description: "Authentic Kerala specialties and fresh multi-cuisine favorites.",
    icon: "utensils-crossed",
  },
  {
    id: "room-service",
    name: "24/7 Room Service",
    description: "In-room dining delivered fresh to your suite at any hour.",
    icon: "concierge-bell",
  },
  {
    id: "airport-transfer",
    name: "Airport Transfers",
    description: "Chauffeur pickup and drop arranged upon request.",
    icon: "car",
  },
  {
    id: "guest-service",
    name: "24/7 Front Desk",
    description: "Round-the-clock check-in, concierge, and luggage handling.",
    icon: "clock",
  },
];
