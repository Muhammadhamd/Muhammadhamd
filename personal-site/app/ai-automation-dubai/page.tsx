import LocationView from "@/components/LocationView";
import { locations } from "@/lib/locations";
import { pageMetadata } from "@/lib/seo";

const location = locations.find((l) => l.slug === "ai-automation-dubai")!;

export const metadata = pageMetadata({
  title: location.metaTitle,
  description: location.metaDescription,
  path: `/${location.slug}`,
  ogTitle: location.h1,
  ogTag: "AI Automation",
});

export default function AiAutomationDubaiPage() {
  return <LocationView location={location} />;
}
