import LocationView from "@/components/LocationView";
import { locations } from "@/lib/locations";
import { pageMetadata } from "@/lib/seo";

const location = locations.find((l) => l.slug === "ai-engineer-pakistan")!;

export const metadata = pageMetadata({
  title: location.metaTitle,
  description: location.metaDescription,
  path: `/${location.slug}`,
  ogTitle: location.h1,
  ogTag: "AI Engineer",
});

export default function AiEngineerPakistanPage() {
  return <LocationView location={location} />;
}
