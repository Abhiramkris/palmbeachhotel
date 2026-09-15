import { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contact & Location | Palmshore Hotel Palakkad",
  description:
    "Contact Palmshore Hotel in Palakkad, Kerala. 24/7 Front Desk Phone +91 95390 73788, hotelpalmshore@gmail.com. Book rooms directly or inquire about our 150+ capacity banquet hall.",
  openGraph: {
    title: "Contact & Location | Palmshore Hotel Palakkad",
    description:
      "Get in touch with Palmshore Hotel in Palakkad. Direct front desk reservations, WhatsApp support, and event banquet hall booking.",
    images: ["/assets/exterior/hero_polished.png"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
