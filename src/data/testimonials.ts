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
    id: "review-1",
    quote:
      "Loved my stay here! The staff treated us like family. The rooms were super clean and comfortable. Food was delicious and felt like home-cooked meals. Service was fast and polite. Perfect place for families and travelers!",
    author: "Umesh Unni",
    location: "Google Review",
    stayType: "Family Vacation",
    rating: 5,
  },
  {
    id: "review-2",
    quote:
      "The rooms were clean, spacious, and well-maintained with a calm, relaxing ambiance. Food and hotel service is very good, atmosphere is very nice. Totally satisfied, must try!",
    author: "Adhib Aji",
    location: "Google Review",
    stayType: "Holiday Stay",
    rating: 5,
  },
  {
    id: "review-3",
    quote:
      "The atmosphere was inviting, the staff was friendly, and the food was outstanding. Excellent hospitality, attentive team, and good management.",
    author: "Amal Nandhakumar",
    location: "Google Review",
    stayType: "Guest Stay & Dining",
    rating: 5,
  },
  {
    id: "review-4",
    quote:
      "Neat and clean restaurant and hotel. Bar, food, rooms, and hall for meetings all in one place. Calm place with excellent service.",
    author: "Satheeshkumar Alayankadukalam",
    location: "Google Review",
    stayType: "Business & Leisure",
    rating: 5,
  },
  {
    id: "review-5",
    quote:
      "Very nice hotel with clean rooms and well-maintained bathrooms. The room was spotless and comfortable. Truly the best find on this route.",
    author: "BITTU SAJEEV",
    location: "Google Review",
    stayType: "Transit Stay",
    rating: 5,
  },
  {
    id: "review-6",
    quote:
      "The room was spotless, spacious, and elegantly decorated. Good food and great ambience. We had a wonderful experience!",
    author: "Saranya S",
    location: "Google Review",
    stayType: "Family Stay",
    rating: 5,
  },
];
