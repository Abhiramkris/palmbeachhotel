export interface Attraction {
  id: string;
  name: string;
  distance: string;
  description: string;
  category: string;
  image: string;
}

export const NEARBY_ATTRACTIONS: Attraction[] = [
  {
    id: "waterfront",
    name: "Palmbeach Waterfront & Shoreline",
    distance: "5 min from the hotel",
    description:
      "Golden sands, rhythmic surf, and panoramic sunset horizons ideal for evening barefoot strolls.",
    category: "Beach & Coast",
    image: "/assets/exterior/hotel-exterior-day.jpeg",
  },
  {
    id: "heritage-town",
    name: "Historic Lighthouse & Heritage Town",
    distance: "15 min from the hotel",
    description:
      "A storied coastal landmark with panoramic observation views of the Arabian Sea and historic quarters.",
    category: "History & Architecture",
    image: "/assets/exterior/hotel-building-facade-night.jpeg",
  },
  {
    id: "fish-market",
    name: "Local Fish Market & Spice Bazaar",
    distance: "10 min from the hotel",
    description:
      "Vibrant morning markets brimming with fresh deep-sea catch, handpicked cardamom, cloves, and local handicrafts.",
    category: "Culture & Cuisine",
    image: "/assets/dining/restaurant-dining-tables.jpeg",
  },
  {
    id: "backwaters",
    name: "Backwaters & Sunset Kayaking",
    distance: "20 min from the hotel",
    description:
      "Tranquil estuaries surrounded by mangrove trails, ideal for guided canoe excursions and bird watching.",
    category: "Nature & Eco-Tours",
    image: "/assets/exterior/exterior-glass-staircase-night.jpeg",
  },
  {
    id: "coconut-groves",
    name: "Coastal Coconut Groves & Trails",
    distance: "8 min from the hotel",
    description:
      "Scenic shaded cycling pathways winding through centuries-old coconut plantations and traditional coastal settlements.",
    category: "Outdoors & Leisure",
    image: "/assets/exterior/reception-entrance-fountain.jpeg",
  },
];
