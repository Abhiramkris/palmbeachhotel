import { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contact & Location | Palmshore Hotel Kozhinjampara",
  description:
    "Contact Palmshore Hotel, Near govt hospital, Pollachi-Palakkad road, Kozhinjampara - 678555. 24/7 Front Desk Phone +91 95390 73788, hotelpalmshore@gmail.com.",
  openGraph: {
    title: "Contact & Location | Palmshore Hotel Kozhinjampara",
    description:
      "Get in touch with Palmshore Hotel, Near govt hospital, Pollachi-Palakkad road, Kozhinjampara - 678555. Direct front desk reservations & banquet booking.",
    images: ["/assets/exterior/hero_polished.png"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
