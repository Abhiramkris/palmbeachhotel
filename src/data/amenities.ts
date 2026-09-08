export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const HOTEL_AMENITIES: Amenity[] = [
  {
    id: "pool",
    name: "Swimming Pool",
    description: "Outdoor pool surrounded by palm gardens and sun loungers.",
    icon: "waves",
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
    description: "Fresh coastal seafood and authentic multi-cuisine favorites.",
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
