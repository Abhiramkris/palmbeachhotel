export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
  detail: string;
}

export const HOTEL_AMENITIES: Amenity[] = [
  {
    id: "pool",
    name: "Swimming Pool",
    description: "Sun-dappled outdoor swimming pool framed by swaying coastal palms.",
    icon: "waves",
    detail: "Relax on cushioned sun loungers with towel service and tropical refreshments.",
  },
  {
    id: "wifi",
    name: "Free Wi-Fi",
    description: "High-speed optical fiber wireless internet across all rooms and public lounges.",
    icon: "wifi",
    detail: "Seamless connectivity for streaming, work calls, and uninterrupted leisure.",
  },
  {
    id: "restaurant",
    name: "Restaurant & Dining",
    description: "Signature in-house dining hall preparing coastal delicacies & multi-cuisine feasts.",
    icon: "utensils-crossed",
    detail: "Fresh daily catch, authentic local spices, and delightful vegetarian spreads.",
  },
  {
    id: "room-service",
    name: "Room Service",
    description: "Prompt culinary in-room dining delivered fresh to your suite at any hour.",
    icon: "concierge-bell",
    detail: "From morning specialty coffee to late-night suppers served with warm care.",
  },
  {
    id: "airport-transfer",
    name: "Airport Transfer",
    description: "Convenient chauffeur-driven pickup and drop assistance for effortless travel.",
    icon: "car",
    detail: "Comfortable air-conditioned vehicles arranged upon request for stress-free transit.",
  },
  {
    id: "guest-service",
    name: "24/7 Guest Service",
    description: "Round-the-clock front desk, concierge assistance, and luggage handling.",
    icon: "clock",
    detail: "Attentive hospitality team on standby day and night to fulfill every request.",
  },
];
