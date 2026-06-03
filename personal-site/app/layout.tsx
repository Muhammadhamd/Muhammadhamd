import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AIWidget from "@/components/AIWidget";
import { ogImageUrl } from "@/lib/seo";

const HOME_OG = ogImageUrl(
  "Agentic AI Engineer & Automation Systems Builder",
  "Muhammad Hamd"
);

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mhamd.selfbrand.app"),
  title:
    "Muhammad Hamd | Agentic AI Engineer & Automation Systems Builder",
  description:
    "Muhammad Hamd is an agentic AI engineer and systems builder from Karachi, Pakistan. Building production-ready LLM systems, AI agents, and workflow automation. Available for hire globally.",
  keywords: [
    "Muhammad Hamd",
    "Hamd Ali",
    "Muhammad Hamd Ali",
    "HamdAiOn",
    "AI Engineer Pakistan",
    "AI Systems Builder",
    "Agentic AI Engineer Pakistan",
    "WatBot",
    "selfbrand AI",
    "Asmara AI",
    "MindKeepr",
    "WhatsApp AI Automation",
    "LLM Engineer",
    "AI Automation Expert",
    "Technology Entrepreneur Pakistan",
    "AI Founder Pakistan"
  ],
  authors: [{ name: "Muhammad Hamd", url: "https://mhamd.selfbrand.app" }],
  creator: "Muhammad Hamd",
  publisher: "Muhammad Hamd",
  alternates: {
    canonical: "https://mhamd.selfbrand.app",
  },
  openGraph: {
    title:
      "Muhammad Hamd | Agentic AI Engineer & Automation Systems Builder",
    description:
      "Agentic AI engineer and systems builder from Karachi, Pakistan. Production-ready LLM systems, AI agents, and workflow automation. Available for hire globally.",
    url: "https://mhamd.selfbrand.app",
    siteName: "Muhammad Hamd",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: HOME_OG,
        width: 1200,
        height: 630,
        alt: "Muhammad Hamd, Agentic AI Engineer & Automation Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@m_hamd_",
    creator: "@m_hamd_",
    title: "Muhammad Hamd | Agentic AI Engineer & Automation Systems Builder",
    description:
      "Agentic AI engineer and systems builder from Karachi, Pakistan. Production-ready LLM systems, AI agents, and workflow automation. Available for hire globally.",
    images: [HOME_OG],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/hamd.png",
    apple: "/hamd.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full`}
    >
      <body className="relative min-h-screen bg-white text-[#111111] font-sans antialiased">
        {children}
        <AIWidget />
      </body>
    </html>
  );
}
