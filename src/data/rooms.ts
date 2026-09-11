export interface RoomType {
  slug: string;
  name: string;
  tagline: string;
  rate: number; // in INR
  extraPersonRate: number; // in INR
  capacity: {
    baseGuests: number;
    maxGuests: number;
  };
  bedType: string;
  size: string;
  view: string;
  bathroom: string;
  airConditioned: boolean;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  amenities: {
    name: string;
    icon: string;
  }[];
  primaryImage: string;
  gallery: {
    src: string;
    caption: string;
  }[];
}

export const EXTRA_PERSON_RATE = 400;
export const TAX_PERCENTAGE = 12;

export interface BookingTypeOption {
  slug: string;
  name: string;
  category: "room" | "venue" | "dining";
  rateLabel: string;
}

export const ALL_BOOKING_TYPES: BookingTypeOption[] = [
  { slug: "standard-non-ac", name: "Standard Non-A/C Room", category: "room", rateLabel: "₹1,870 / night" },
  { slug: "standard-ac", name: "Standard A/C Room", category: "room", rateLabel: "₹2,140 / night" },
  { slug: "executive-room", name: "Executive Room", category: "room", rateLabel: "₹2,530 / night" },
  { slug: "suite-room", name: "Suite Room", category: "room", rateLabel: "₹2,960 / night" },
  { slug: "premium-suite", name: "Premium Suite Room", category: "room", rateLabel: "₹3,470 / night" },
  { slug: "grand-banquet-hall", name: "Grand Banquet Hall", category: "venue", rateLabel: "250+ Capacity Event Dais" },
  { slug: "palmshore-restaurant", name: "Palmshore Restaurant & Dining", category: "dining", rateLabel: "Table & Group Dining" },
];

export const HOTEL_ROOMS: RoomType[] = [
  {
    slug: "standard-non-ac",
    name: "Standard Non-A/C Room",
    tagline: "Naturally ventilated comfort surrounded by lush palm greenery",
    rate: 1870,
    extraPersonRate: 400,
    capacity: {
      baseGuests: 2,
      maxGuests: 3,
    },
    bedType: "Queen Bed",
    size: "240 sq.ft (22 m²)",
    view: "Courtyard & Garden View",
    bathroom: "Private En-Suite with Hot Shower",
    airConditioned: false,
    shortDescription:
      "Naturally ventilated courtyard-facing room with queen bed and refreshing garden breezes.",
    fullDescription:
      "Our Standard Non-A/C Room offers a pure tranquil sanctuary in Palakkad. Positioned to catch the gentle evening breeze, this thoughtfully appointed room features a comfortable queen-size bed draped in crisp white linens, solid hardwood furnishings, an en-suite ceramic-tiled bathroom with continuous hot water, and a cozy vanity mirror and desk.",
    highlights: [
      "Natural cross-ventilation & whisper-quiet ceiling fans",
      "Private en-suite bathroom with 24/7 hot water supply",
      "Writing desk, vanity mirror, and intercom connection",
      "Daily housekeeping & room service on call",
    ],
    amenities: [
      { name: "Ceiling Fan", icon: "fan" },
      { name: "En-Suite Bath", icon: "bath" },
      { name: "24/7 Hot Water", icon: "droplets" },
      { name: "High-Speed Wi-Fi", icon: "wifi" },
      { name: "Writing Desk", icon: "pen-tool" },
      { name: "Room Service", icon: "bell" },
      { name: "Daily Housekeeping", icon: "sparkles" },
      { name: "Intercom", icon: "phone" },
    ],
    primaryImage: "/assets/rooms/deluxe-room-bed.jpeg",
    gallery: [
      {
        src: "/assets/rooms/deluxe-room-bed.jpeg",
        caption: "Queen Bed with clean linens and bedside controls",
      },
      {
        src: "/assets/rooms/deluxe-room-work-desk.jpeg",
        caption: "Dedicated dressing vanity, writing desk, and mirror",
      },
      {
        src: "/assets/rooms/deluxe-room-bathroom.jpeg",
        caption: "Contemporary private bathroom with walk-in glass shower",
      },
      {
        src: "/assets/interior/hotel-corridor.jpeg",
        caption: "Tranquil guest corridor leading to courtyard gardens",
      },
    ],
  },
  {
    slug: "standard-ac",
    name: "Standard A/C Room",
    tagline: "Cool tranquility with garden views and modern hospitality",
    rate: 2140,
    extraPersonRate: 400,
    capacity: {
      baseGuests: 2,
      maxGuests: 3,
    },
    bedType: "King Bed",
    size: "270 sq.ft (25 m²)",
    view: "Palm Garden & Courtyard View",
    bathroom: "Glass Shower Cubicle & Modern Vanity",
    airConditioned: true,
    shortDescription:
      "Climate-controlled comfort with plush king bed, rain shower, and calming garden views.",
    fullDescription:
      "The Standard A/C Room combines crisp modern climate control with serene comfort. Relax on a generous king-size bed fitted with premium mattress toppers and accent pillows. Complete with a flat-screen television, complimentary high-speed Wi-Fi, and a contemporary bathroom with rain shower, it delivers effortless comfort after a day exploring the heritage and scenic beauty of Palakkad.",
    highlights: [
      "Whisper-quiet split air-conditioning with individual remote",
      "Spacious king bed with custom headboard nightstands",
      "Flat-screen television with satellite channels",
      "En-suite bathroom with glass shower partition",
    ],
    amenities: [
      { name: "Split Air Conditioning", icon: "snowflake" },
      { name: "King-Size Bed", icon: "bed" },
      { name: "Glass Rain Shower", icon: "bath" },
      { name: "High-Speed Wi-Fi", icon: "wifi" },
      { name: "LED Television", icon: "tv" },
      { name: "In-Room Safe", icon: "shield-check" },
      { name: "Tea & Coffee Kettle", icon: "coffee" },
      { name: "24/7 Room Service", icon: "bell" },
    ],
    primaryImage: "/assets/rooms/deluxe-room-bed-alt.jpeg",
    gallery: [
      {
        src: "/assets/rooms/deluxe-room-bed-alt.jpeg",
        caption: "King-size bed with custom headboard lighting",
      },
      {
        src: "/assets/rooms/deluxe-room-bed-wide.jpeg",
        caption: "Wide view showing full room floorplan and accent rug",
      },
      {
        src: "/assets/rooms/deluxe-room-bathroom.jpeg",
        caption: "Sleek bathroom with frosted glass shower enclosure",
      },
      {
        src: "/assets/rooms/deluxe-room-work-desk.jpeg",
        caption: "Entertainment wall with flat-screen television & luggage bench",
      },
    ],
  },
  {
    slug: "executive-room",
    name: "Executive Room",
    tagline: "Refined aesthetic, premium warm tones, and armchair lounge",
    rate: 2530,
    extraPersonRate: 400,
    capacity: {
      baseGuests: 2,
      maxGuests: 3,
    },
    bedType: "Executive King Bed",
    size: "320 sq.ft (30 m²)",
    view: "Palm Tree Landscape View",
    bathroom: "Designer Walk-in Rain Shower & Bath Amenities",
    airConditioned: true,
    shortDescription:
      "Spacious room with king bed, handcrafted armchair lounge, and executive work desk.",
    fullDescription:
      "Designed for travelers who value refined detailing and extra room to unwind, our Executive Room boasts gold-and-maroon artisanal accents, high ceilings, and an en-suite sitting lounge with twin armchairs. Ideal for both leisure travelers and business executives seeking a restful haven with high-speed connectivity and concierge privileges.",
    highlights: [
      "Executive lounge corner with solid-wood armchairs & coffee table",
      "Warm ambient lighting with brass floor lamp and bedside sconces",
      "Executive workstation with universal power sockets & fast Wi-Fi",
      "Upgraded bathroom amenities & plush luxury cotton bathrobes",
    ],
    amenities: [
      { name: "Climate Control AC", icon: "snowflake" },
      { name: "Armchair Lounge Area", icon: "armchair" },
      { name: "Executive Work Desk", icon: "laptop" },
      { name: "Premium Rain Shower", icon: "bath" },
      { name: "Smart TV with Streaming", icon: "tv" },
      { name: "Mini Bar & Fridge", icon: "wine" },
      { name: "Complimentary Bottled Water", icon: "droplet" },
      { name: "Express Laundry Service", icon: "shirt" },
    ],
    primaryImage: "/assets/rooms/executive-room-bed-front.jpeg",
    gallery: [
      {
        src: "/assets/rooms/executive-room-bed-front.jpeg",
        caption: "Artisanal gold and maroon detailing on king bed",
      },
      {
        src: "/assets/rooms/executive-room-bed-side.jpeg",
        caption: "Side perspective with handcrafted armchairs and brass lighting",
      },
      {
        src: "/assets/rooms/deluxe-room-seating-area.jpeg",
        caption: "Private seating corner with framed fine art prints",
      },
      {
        src: "/assets/rooms/deluxe-room-bathroom.jpeg",
        caption: "Immaculate en-suite bath with modern fixtures",
      },
    ],
  },
  {
    slug: "suite-room",
    name: "Suite Room",
    tagline: "Expansive luxury living with private glass dining table",
    rate: 2960,
    extraPersonRate: 400,
    capacity: {
      baseGuests: 2,
      maxGuests: 4,
    },
    bedType: "Master King Bed",
    size: "420 sq.ft (39 m²)",
    view: "Panoramic Palm & Courtyard View",
    bathroom: "Spacious En-Suite with Glass Partition & Vanity",
    airConditioned: true,
    shortDescription:
      "Grand suite with master bedroom and a private 4-seater glass dining area.",
    fullDescription:
      "The Suite Room is our signature haven for discerning couples and families. Featuring a distinct architectural division between sleeping and dining quarters, it showcases a designer square glass dining table with four upholstered hardwood chairs, bespoke mood cove lighting, multiple entertainment screens, and expansive windows welcoming morning sun.",
    highlights: [
      "In-suite private glass dining table for 4 guests",
      "Spacious separated layout for relaxation and dining",
      "Multiple LED televisions with premium streaming options",
      "Personalized front-desk check-in & priority concierge",
    ],
    amenities: [
      { name: "Private Dining Area", icon: "utensils" },
      { name: "Master King Bed", icon: "bed" },
      { name: "Split AC in all zones", icon: "snowflake" },
      { name: "Mini Refrigerator", icon: "refrigerator" },
      { name: "Gourmet Coffee Station", icon: "coffee" },
      { name: "In-Room Dining Service", icon: "bell" },
      { name: "Electronic Safe", icon: "shield-check" },
      { name: "Deluxe Bath Products", icon: "sparkles" },
    ],
    primaryImage: "/assets/rooms/suite-room-dining-area.jpeg",
    gallery: [
      {
        src: "/assets/rooms/suite-room-dining-area.jpeg",
        caption: "Private four-seater glass dining suite with wall TV and art niches",
      },
      {
        src: "/assets/rooms/deluxe-room-bed-wide.jpeg",
        caption: "Master king bedroom with deep charcoal accents and shaggy rug",
      },
      {
        src: "/assets/rooms/deluxe-room-seating-area.jpeg",
        caption: "Adjacent parlor sitting area for evening tea",
      },
      {
        src: "/assets/rooms/deluxe-room-work-desk.jpeg",
        caption: "Full vanity console, dressing mirror, and tea station",
      },
      {
        src: "/assets/rooms/deluxe-room-bathroom.jpeg",
        caption: "Contemporary bathroom suite with rain shower",
      },
    ],
  },
  {
    slug: "premium-suite",
    name: "Premium Suite Room",
    tagline: "The pinnacle of Palmshore luxury, hospitality, and panoramic Palakkad outlooks",
    rate: 3470,
    extraPersonRate: 400,
    capacity: {
      baseGuests: 2,
      maxGuests: 4,
    },
    bedType: "Grand California King Bed",
    size: "520 sq.ft (48 m²)",
    view: "Palms & Architectural Atrium View",
    bathroom: "Luxury Spa Rain Shower, Hair Dryer & Deluxe Toiletries",
    airConditioned: true,
    shortDescription:
      "Our most prestigious suite with panoramic views, private dining parlor, and VIP care.",
    fullDescription:
      "The Premium Suite Room represents the absolute zenith of luxury at Palmshore Hotel. Expansive square footage accommodates an opulent bedroom with gold-embroidered textiles, a full dining salon for hosting intimate dinners, ergonomic executive work center, and bespoke bath amenities. Perfect for honeymooners, wedding parties, or travelers desiring premier comfort.",
    highlights: [
      "Largest floor plan on property with dedicated salon & bedroom",
      "Complimentary chef-curated gourmet breakfast delivered to suite",
      "Private dining salon with glass table and high-definition smart TV",
      "Priority check-in, late check-out upon request, and VIP turn-down service",
    ],
    amenities: [
      { name: "Full Dining Salon", icon: "utensils" },
      { name: "Grand King Bed", icon: "bed" },
      { name: "Multi-Zone Climate Control", icon: "snowflake" },
      { name: "Complimentary Gourmet Breakfast", icon: "croissant" },
      { name: "Stocked Mini Bar", icon: "wine" },
      { name: "High-Speed Fiber Wi-Fi", icon: "wifi" },
      { name: "Luxury Bathrobes & Slippers", icon: "sparkles" },
      { name: "Dedicated 24/7 Butler Support", icon: "bell-ring" },
    ],
    primaryImage: "/assets/rooms/executive-room-bed-front.jpeg",
    gallery: [
      {
        src: "/assets/rooms/executive-room-bed-front.jpeg",
        caption: "Grand king bedroom with ornate detailing and designer headboard",
      },
      {
        src: "/assets/rooms/suite-room-dining-area.jpeg",
        caption: "Exclusive suite dining salon with warm recessed accent niches",
      },
      {
        src: "/assets/rooms/executive-room-bed-side.jpeg",
        caption: "Lounge area with handcrafted wooden armchairs",
      },
      {
        src: "/assets/rooms/deluxe-room-work-desk.jpeg",
        caption: "Vanity station, mini bar cabinet, and coffee counter",
      },
      {
        src: "/assets/rooms/deluxe-room-bathroom.jpeg",
        caption: "Sparkling glass shower cubicle and premium fixtures",
      },
    ],
  },
];
