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
      "Check-in begins at 2:00 PM and check-out is by 11:00 AM. Early check-in is accommodated subject to room availability.",
  },
  {
    id: "faq-breakfast",
    question: "Is breakfast included in my room rate?",
    answer:
      "Complimentary breakfast is included with all Suite bookings. Available à la carte or buffet for all other rooms.",
  },
  {
    id: "faq-transfer",
    question: "Do you provide airport and railway transfers?",
    answer:
      "Yes, chauffeur-driven airport and railway transfers are available upon request with the reception desk.",
  },
  {
    id: "faq-wifi",
    question: "Is high-speed Wi-Fi available across the property?",
    answer:
      "Yes, complimentary high-speed fiber Wi-Fi is available across all guest rooms, banquets, and gardens.",
  },
  {
    id: "faq-extrabed",
    question: "Can I request an extra bed or extra guests?",
    answer:
      "Yes, extra rollaway beds are available for ₹400 per person per night (plus applicable taxes).",
  },
  {
    id: "faq-cancellation",
    question: "What is the cancellation policy?",
    answer:
      "Free cancellation up to 48 hours prior to check-in. Cancellations within 48 hours incur a one-night charge.",
  },
  {
    id: "faq-children",
    question: "Are children allowed at Palmshore Hotel?",
    answer:
      "Yes, children of all ages are welcome. Children under 6 stay free when utilizing existing bedding.",
  },
  {
    id: "faq-modify",
    question: "How can I modify or extend my reservation?",
    answer:
      "Contact our 24/7 reception via phone or WhatsApp at +91 95390 73788 with your reference number to quickly modify dates.",
  },
];
