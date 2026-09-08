export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-checkin",
    question: "What time is check-in and check-out?",
    answer:
      "Check-in begins at 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out can be accommodated subject to room availability upon advance request with the front desk.",
  },
  {
    id: "faq-breakfast",
    question: "Is breakfast included in my room tariff?",
    answer:
      "Complimentary gourmet breakfast is included with all Suite and Premium Suite reservations. For Standard and Executive rooms, freshly prepared à la carte or buffet breakfast spreads can be enjoyed at our restaurant or requested via room service.",
  },
  {
    id: "faq-transfer",
    question: "Do you provide airport and railway transfers?",
    answer:
      "Yes, we provide comfortable chauffeur-driven car transfers to and from nearby airports and railway stations. Please share your flight or train schedule with our concierge at least 24 hours prior to arrival.",
  },
  {
    id: "faq-wifi",
    question: "Is high-speed Wi-Fi available across the property?",
    answer:
      "Yes, complimentary high-speed optical fiber Wi-Fi is accessible throughout all guest bedrooms, suites, banquet halls, restaurant, and outdoor courtyard gardens.",
  },
  {
    id: "faq-extrabed",
    question: "Can I request an extra bed or accommodate additional guests?",
    answer:
      "Yes, an extra rollaway mattress with clean linens and bath towels can be provided for ₹400 per extra guest per night (taxes as applicable), subject to maximum room occupancy limits.",
  },
  {
    id: "faq-cancellation",
    question: "What is the cancellation policy?",
    answer:
      "Cancellations made up to 48 hours prior to your scheduled check-in time incur no cancellation fee. Cancellations made within 48 hours or no-shows are subject to a one-night room charge.",
  },
  {
    id: "faq-children",
    question: "Are children allowed at Hotel Palmbeach?",
    answer:
      "Children of all ages are warmly welcomed. Children under 6 years stay free of charge when utilizing existing bedding. Cribs and baby high chairs are available upon request.",
  },
  {
    id: "faq-modify",
    question: "How can I modify or extend my reservation?",
    answer:
      "You can modify or extend your reservation dates by contacting our 24/7 reservations desk via phone, WhatsApp, or email with your booking confirmation number.",
  },
];
