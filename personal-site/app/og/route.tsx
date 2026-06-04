import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

// Node runtime so we can read the photo from /public at import time.
export const runtime = "nodejs";

// Load the portrait once and inline it as a data URL.
const photoData = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "hamd.png")
).toString("base64")}`;

const INK = "#18181b";
const BLUE = "#195de6";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") || "Agentic AI Engineer & Automation Systems Builder").slice(0, 110);
  const tag = (searchParams.get("tag") || "Muhammad Hamd").slice(0, 50);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          padding: "44px",
          background: "#eef3ff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            background: "#ffffff",
            border: `8px solid ${INK}`,
            borderRadius: "28px",
            boxShadow: `16px 16px 0px 0px ${BLUE}`,
            padding: "56px 64px",
            justifyContent: "space-between",
          }}
        >
          {/* Eyebrow tag */}
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                border: `3px solid ${INK}`,
                background: "#eef3ff",
                borderRadius: "999px",
                padding: "10px 22px",
                fontSize: "22px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: INK,
              }}
            >
              <div style={{ width: "14px", height: "14px", borderRadius: "999px", background: BLUE }} />
              {tag}
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: title.length > 64 ? "56px" : "70px",
              fontWeight: 800,
              color: "#111111",
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
            }}
          >
            {title}
          </div>

          {/* Footer: photo + name */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img
                src={photoData}
                width={84}
                height={84}
                style={{ borderRadius: "999px", border: `4px solid ${INK}`, objectFit: "cover" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "30px", fontWeight: 800, color: "#111111" }}>Muhammad Hamd</div>
                <div style={{ fontSize: "22px", color: "#6b7280" }}>hamdali.com</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 800,
                color: "#ffffff",
                background: BLUE,
                border: `4px solid ${INK}`,
                borderRadius: "999px",
                padding: "12px 26px",
              }}
            >
              AI · Automation · Systems
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
