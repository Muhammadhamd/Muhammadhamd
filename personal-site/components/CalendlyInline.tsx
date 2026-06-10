"use client";

import { useEffect, useRef } from "react";

// Inline Calendly scheduling widget for the /contact page. Loads Calendly's
// embed script once on demand (mirrors openCalendly() in AIAssistant.tsx) and
// lets Calendly hydrate the .calendly-inline-widget div. Renders nothing when
// no url is configured, so a blank CALENDLY_URL never shows a broken frame.
export default function CalendlyInline({ url }: { url?: string | null }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!url || typeof window === "undefined") return;

    if (!document.getElementById("calendly-widget-css")) {
      const link = document.createElement("link");
      link.id = "calendly-widget-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    if (!document.getElementById("calendly-widget-js")) {
      const script = document.createElement("script");
      script.id = "calendly-widget-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [url]);

  if (!url) return null;

  return (
    <div className="rounded-3xl border-2 border-zinc-950 bg-white p-3 shadow-[5px_5px_0px_0px_rgba(124,59,237,0.95)] sm:p-4">
      <div
        ref={ref}
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: "320px", height: "640px" }}
      />
    </div>
  );
}
