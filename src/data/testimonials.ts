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
      "The perfect place to slow down. Beautiful rooms, warm hospitality, and pure magic at dusk.",
    author: "Ananya & Raghavan S.",
    location: "Bangalore, India",
    stayType: "Suite Room Stay",
    rating: 5,
  },
  {
    id: "test-2",
    quote:
      "Flawless banquet hall facilities and audio setup for our 80 conference delegates. Exceptional food.",
    author: "Capt. Vikram Deshmukh",
    location: "Mumbai, India",
    stayType: "Corporate Retreat",
    rating: 5,
  },
  {
    id: "test-3",
    quote:
      "Authentic Kerala charm in Palakkad. Fresh morning air, peaceful gardens, and attentive staff who anticipate every need.",
    author: "Elena Rostova",
    location: "Geneva, Switzerland",
    stayType: "Holiday Vacation",
    rating: 5,
  },
  {
    id: "test-4",
    quote:
      "Immaculately clean rooms, wonderful fountain courtyard, and great food. Exceeded all expectations.",
    author: "Prashanth Nair",
    location: "Cochin, Kerala",
    stayType: "Executive King Room",
    rating: 5,
  },
];
