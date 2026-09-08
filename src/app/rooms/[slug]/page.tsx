import { notFound } from "next/navigation";
import { Metadata } from "next";
import { HOTEL_ROOMS } from "@/data/rooms";
import RoomDetailView from "@/components/rooms/RoomDetailView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return HOTEL_ROOMS.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = HOTEL_ROOMS.find((r) => r.slug === slug);

  if (!room) {
    return {
      title: "Room Not Found | Hotel Palmbeach",
    };
  }

  return {
    title: `${room.name} — ₹${room.rate.toLocaleString("en-IN")}/night | Hotel Palmbeach`,
    description: room.shortDescription,
    openGraph: {
      title: `${room.name} — Hotel Palmbeach`,
      description: room.shortDescription,
      images: [room.primaryImage],
    },
  };
}

export default async function RoomPage({ params }: PageProps) {
  const { slug } = await params;
  const room = HOTEL_ROOMS.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  return <RoomDetailView room={room} />;
}
