import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadhamd.com"),
  title: "Muhammad Hamd | AI Systems Builder & Entrepreneur",
  description:
    "Muhammad Hamd (Hamd Ali) is a technology entrepreneur and agentic AI engineer from Karachi, Pakistan. Founder of WatBot and selfbrand AI. Building autonomous AI systems for automation and conversational workflows.",
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
  authors: [{ name: "Muhammad Hamd", url: "https://muhammadhamd.com" }],
  creator: "Muhammad Hamd",
  publisher: "Muhammad Hamd",
  alternates: {
    canonical: "https://muhammadhamd.com",
  },
  openGraph: {
    title: "Muhammad Hamd | AI Systems Builder & Entrepreneur",
    description:
      "Muhammad Hamd (Hamd Ali) is a technology entrepreneur and agentic AI engineer from Karachi, Pakistan. Founder of WatBot and selfbrand AI.",
    url: "https://muhammadhamd.com",
    siteName: "Muhammad Hamd",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "https://muhammadhamd.com/hamd.png",
        width: 800,
        height: 800,
        alt: "Muhammad Hamd — AI Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HamdAiOn",
    creator: "@HamdAiOn",
    title: "Muhammad Hamd | AI Systems Builder & Entrepreneur",
    description:
      "Muhammad Hamd (Hamd Ali) is a technology entrepreneur and agentic AI engineer from Karachi, Pakistan. Founder of WatBot and selfbrand AI.",
    images: ["https://muhammadhamd.com/hamd.png"],
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
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full bg-white text-[#111111] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
