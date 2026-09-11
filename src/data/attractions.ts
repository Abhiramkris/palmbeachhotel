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
    id: "palakkad-fort",
    name: "Historic Palakkad Fort (Tipu's Fort)",
    distance: "10 min from hotel",
    description:
      "Granite fortress built in the 18th century, surrounded by a serene moat and scenic green grounds.",
    category: "Heritage & History",
    image: "/assets/exterior/hotel-exterior-day.jpeg",
  },
  {
    id: "malampuzha",
    name: "Malampuzha Dam & Rock Gardens",
    distance: "20 min from hotel",
    description:
      "Expansive reservoir, landscaped gardens, passenger ropeway, and lush Western Ghats mountain backdrops.",
    category: "Nature & Leisure",
    image: "/assets/exterior/hotel-building-facade-night.jpeg",
  },
  {
    id: "kalpathy",
    name: "Kalpathy Heritage Agraharam",
    distance: "12 min from hotel",
    description:
      "Historic Vedic settlement famous for traditional temple architecture and the annual Kalpathy Ratholsavam.",
    category: "Culture & Tradition",
    image: "/assets/dining/restaurant-dining-tables.jpeg",
  },
  {
    id: "kava",
    name: "Kava Raincatcher & Viewpoint",
    distance: "25 min from hotel",
    description:
      "Known as the birthplace of rain clouds, surrounded by rolling hills, misty waters, and lush palm trails.",
    category: "Eco-Tours & Scenic",
    image: "/assets/exterior/exterior-glass-staircase-night.jpeg",
  },
  {
    id: "silent-valley",
    name: "Silent Valley Foothills",
    distance: "Day excursion",
    description:
      "Pristine rainforest biosphere reserve safeguarding rare flora, fauna, and untouched virgin greenery.",
    category: "Wilderness & Sanctuary",
    image: "/assets/exterior/hotel-building-night-wide.jpeg",
  },
];
