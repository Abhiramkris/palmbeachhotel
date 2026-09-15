export interface HotelAssetItem {
  id: string;
  title: string;
  description: string;
  category: "brand" | "exterior" | "rooms" | "dining" | "banquet" | "interior";
  src: string;
  featured?: boolean;
}

export const HOTEL_ASSETS = {
  brand: {
    logo: "/assets/brand/palmshore-logo.png",
    neonSignage: "/assets/brand/hotel-neon-signage-night.jpeg",
  },
  exterior: {
    heroPolished: "/assets/exterior/hero_polished.png",
    heroExteriorDay: "/assets/exterior/hotel-exterior-day.jpeg",
    receptionFountain: "/assets/exterior/reception-entrance-fountain.jpeg",
    buildingFacadeNight: "/assets/exterior/hotel-building-facade-night.jpeg",
    buildingNightWide: "/assets/exterior/hotel-building-night-wide.jpeg",
    glassStaircaseNight: "/assets/exterior/exterior-glass-staircase-night.jpeg",
    glassStaircaseNightAlt: "/assets/exterior/exterior-glass-staircase-night-alt.jpeg",
  },
  rooms: {
    deluxeBed: "/assets/rooms/deluxe-room-bed.jpeg",
    deluxeBedAlt: "/assets/rooms/deluxe-room-bed-alt.jpeg",
    deluxeBedWide: "/assets/rooms/deluxe-room-bed-wide.jpeg",
    deluxeSeating: "/assets/rooms/deluxe-room-seating-area.jpeg",
    deluxeWorkDesk: "/assets/rooms/deluxe-room-work-desk.jpeg",
    deluxeBathroom: "/assets/rooms/deluxe-room-bathroom.jpeg",
    executiveBedFront: "/assets/rooms/executive-room-bed-front.jpeg",
    executiveBedSide: "/assets/rooms/executive-room-bed-side.jpeg",
    suiteDiningArea: "/assets/rooms/suite-room-dining-area.jpeg",
  },
  dining: {
    diningTables: "/assets/dining/restaurant-dining-tables.jpeg",
    diningHallWide: "/assets/dining/restaurant-dining-hall.jpeg",
  },
  banquet: {
    conferenceHallWide: "/assets/banquet/banquet-conference-hall-wide.jpeg",
    conferenceHallRows: "/assets/banquet/banquet-conference-hall-rows.jpeg",
    stagePodium: "/assets/banquet/banquet-stage-podium.jpeg",
  },
  interior: {
    lobbyLounge: "/assets/interior/lobby-lounge-area.jpeg",
    corridor: "/assets/interior/hotel-corridor.jpeg",
  },
} as const;

export const HOTEL_GALLERY_ITEMS: HotelAssetItem[] = [
  // Exterior
  {
    id: "exterior-day",
    title: "Courtyard & Hotel Grounds",
    description: "Lush green palm courtyard and elegant exterior facade in natural daylight.",
    category: "exterior",
    src: HOTEL_ASSETS.exterior.heroExteriorDay,
    featured: true,
  },
  {
    id: "exterior-glass-staircase-alt",
    title: "Glass Atrium Staircase",
    description: "Contemporary glass staircase architecture illuminated against the night sky.",
    category: "exterior",
    src: HOTEL_ASSETS.exterior.glassStaircaseNightAlt,
  },
  {
    id: "exterior-night-wide",
    title: "Illuminated Night View",
    description: "Atmospheric evening illumination showcasing the landscaped grounds and building architecture.",
    category: "exterior",
    src: HOTEL_ASSETS.exterior.buildingNightWide,
    featured: true,
  },
  {
    id: "exterior-facade-night",
    title: "Night Facade & Palms",
    description: "Modern architectural facade framed by towering palm trees at night.",
    category: "exterior",
    src: HOTEL_ASSETS.exterior.buildingFacadeNight,
  },
  {
    id: "staircase-night",
    title: "Glass Atrium Staircase",
    description: "Floor-to-ceiling glass staircase warmly lit under the night sky.",
    category: "exterior",
    src: HOTEL_ASSETS.exterior.glassStaircaseNight,
  },

  // Rooms
  {
    id: "deluxe-room-bed",
    title: "Deluxe King Room",
    description: "Plush king-size bed with crisp linens, modern headboard lighting, and comfortable furnishings.",
    category: "rooms",
    src: HOTEL_ASSETS.rooms.deluxeBed,
    featured: true,
  },
  {
    id: "deluxe-room-wide",
    title: "Deluxe Bedroom Suite",
    description: "Spacious master bedroom with plush carpet runner and ambient lighting.",
    category: "rooms",
    src: HOTEL_ASSETS.rooms.deluxeBedWide,
  },
  {
    id: "executive-room-bed",
    title: "Executive Premium Room",
    description: "Refined accommodations with warm wood accents, accent lighting, and comfort styling.",
    category: "rooms",
    src: HOTEL_ASSETS.rooms.executiveBedFront,
    featured: true,
  },
  {
    id: "suite-dining",
    title: "Suite Private Dining",
    description: "Dedicated in-suite dining area with glass dining table, upholstered seating, and entertainment.",
    category: "rooms",
    src: HOTEL_ASSETS.rooms.suiteDiningArea,
  },
  {
    id: "deluxe-room-seating",
    title: "In-Room Lounge Seating",
    description: "Comfortable sitting area for leisure or quiet reading inside deluxe suites.",
    category: "rooms",
    src: HOTEL_ASSETS.rooms.deluxeSeating,
  },
  {
    id: "deluxe-work-desk",
    title: "Workstation & Entertainment",
    description: "Ergonomic work desk with large vanity mirror, LED television, and coffee station.",
    category: "rooms",
    src: HOTEL_ASSETS.rooms.deluxeWorkDesk,
  },
  {
    id: "deluxe-bathroom",
    title: "En-Suite Bath",
    description: "Sparkling clean contemporary bathroom with walk-in rain shower glass cubicle.",
    category: "rooms",
    src: HOTEL_ASSETS.rooms.deluxeBathroom,
  },

  // Dining
  {
    id: "dining-hall",
    title: "The Palmshore Restaurant",
    description: "Airy multi-cuisine restaurant offering fine dining and buffet arrangements.",
    category: "dining",
    src: HOTEL_ASSETS.dining.diningHallWide,
    featured: true,
  },
  {
    id: "dining-tables",
    title: "Intimate Dining Spaces",
    description: "Tastefully dressed tables with attentive service for memorable meals.",
    category: "dining",
    src: HOTEL_ASSETS.dining.diningTables,
  },

  // Banquet
  {
    id: "banquet-hall-wide",
    title: "Grand Banquet & Conference Hall",
    description: "Expansive 150+ guest capacity hall equipped for conferences, receptions, and corporate galas.",
    category: "banquet",
    src: HOTEL_ASSETS.banquet.conferenceHallWide,
    featured: true,
  },
  {
    id: "banquet-rows",
    title: "Theatre & Event Seating",
    description: "Flexible theatre-style setup for 150+ guests with draped banquet chairs and climate control.",
    category: "banquet",
    src: HOTEL_ASSETS.banquet.conferenceHallRows,
  },
  {
    id: "banquet-podium",
    title: "Conference Stage & Podium",
    description: "Professional dais with acoustic podium and panel table for keynotes and presentations.",
    category: "banquet",
    src: HOTEL_ASSETS.banquet.stagePodium,
  },

  // Interior
  {
    id: "lobby-lounge",
    title: "Guest Reception Lounge",
    description: "Welcoming lobby with plush sofas, natural sunlight, and guest concierge desk.",
    category: "interior",
    src: HOTEL_ASSETS.interior.lobbyLounge,
    featured: true,
  },
  {
    id: "hotel-corridor",
    title: "Guest Wing Corridor",
    description: "Quiet, brightly illuminated guest floor corridors with greenery accents.",
    category: "interior",
    src: HOTEL_ASSETS.interior.corridor,
  },
];
