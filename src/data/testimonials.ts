export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  stayType: string;
  rating: number;
}

export const GUEST_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "The perfect place to slow down. Beautiful rooms, warm hospitality, and sunsets we simply didn’t want to leave behind. The palm courtyard is pure magic at dusk.",
    author: "Ananya & Raghavan S.",
    location: "Bangalore, India",
    stayType: "Suite Room Stay",
    rating: 5,
  },
  {
    id: "test-2",
    quote:
      "We hosted our company’s annual retreat here. The banquet hall facilities, stage, and audio setup were flawless, and the coastal dining buffet was praised by all 80 delegates.",
    author: "Capt. Vikram Deshmukh",
    location: "Mumbai, India",
    stayType: "Corporate Conference & Executive Stay",
    rating: 5,
  },
  {
    id: "test-3",
    quote:
      "Authentic coastal charm without pretension. Waking up to garden birds, sipping fresh coconut water, and having attentive staff remember our breakfast preferences made it truly exceptional.",
    author: "Elena Rostova",
    location: "Geneva, Switzerland",
    stayType: "Holiday Vacation",
    rating: 5,
  },
  {
    id: "test-4",
    quote:
      "Immaculately clean rooms, modern bathrooms with great water pressure, and peaceful evenings walking along the fountain courtyard. Hotel Palmbeach exceeded all our expectations.",
    author: "Prashanth Nair",
    location: "Cochin, Kerala",
    stayType: "Deluxe King Room",
    rating: 5,
  },
];
