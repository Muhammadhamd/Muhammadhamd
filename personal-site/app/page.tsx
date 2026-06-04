import HomeClient from "./HomeClient";

// Server Component: owns the JSON-LD structured data so it renders in the
// initial server HTML (best practice). All interactive/animated UI lives in
// the client component <HomeClient />. Page <title>/description come from the
// server Metadata in app/layout.tsx.
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://hamdali.com/#person",
        name: "Muhammad Hamd",
        alternateName: ["Hamd", "Hamd Ali", "Muhammad Hamd Ali", "muhammadhamd"],
        url: "https://hamdali.com",
        image: {
          "@type": "ImageObject",
          url: "https://hamdali.com/hamd.png",
          width: 400,
          height: 400,
        },
        jobTitle: "Agentic AI Engineer & Automation Systems Builder",
        description:
          "Muhammad Hamd (also known as Hamd Ali and Muhammad Hamd Ali) is an agentic AI engineer and systems builder based in Karachi, Pakistan. He builds production-ready AI-native products focused on automation, LLM infrastructure, and conversational systems.",
        nationality: { "@type": "Country", name: "Pakistan" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Karachi",
          addressCountry: "PK",
        },
        email: "muhammadhamdali572@gmail.com",
        sameAs: [
          "https://linkedin.com/in/muhammadhamd",
          "https://github.com/Muhammadhamd",
          "https://muhammadhamd.medium.com/",
          "https://x.com/m_hamd_",
        ],
        knowsAbout: [
          "Agentic AI Systems",
          "Large Language Models",
          "AI Automation",
          "Backend Engineering",
          "LLM Orchestration",
          "Retrieval-Augmented Generation",
          "Vector Databases",
          "WhatsApp Automation",
          "SaaS Product Development",
          "n8n Workflow Automation",
          "Python AI Development",
          "Node.js",
          "Next.js",
          "Go (Golang)",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "AI Systems Engineer & Entrepreneur",
          occupationLocation: { "@type": "Country", name: "Pakistan" },
          skills:
            "Agentic AI, LLM Integration, Backend Engineering, SaaS, Automation",
        },
        worksFor: [
          {
            "@type": "Organization",
            "@id": "https://watbot.store/#org",
            name: "WatBot",
            url: "https://watbot.store",
          },
          {
            "@type": "Organization",
            "@id": "https://selfbrand.app/#org",
            name: "selfbrand AI",
            url: "https://selfbrand.app",
          },
        ],
        founder: [
          { "@type": "Organization", name: "WatBot", url: "https://watbot.store" },
          { "@type": "Organization", name: "selfbrand AI", url: "https://selfbrand.app" },
          { "@type": "Organization", name: "Asmara.AI", url: "https://asmara.ai" },
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://hamdali.com/#webpage",
        url: "https://hamdali.com",
        name: "Muhammad Hamd: Agentic AI Engineer & Automation Systems Builder",
        description:
          "Personal website of Muhammad Hamd (Hamd Ali), agentic AI engineer and systems builder from Karachi, Pakistan.",
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://hamdali.com/#website",
          url: "https://hamdali.com",
          name: "Muhammad Hamd",
          publisher: { "@id": "https://hamdali.com/#person" },
        },
        about: { "@id": "https://hamdali.com/#person" },
        mainEntity: { "@id": "https://hamdali.com/#person" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://hamdali.com/hamd.png",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://watbot.store/#app",
        name: "WatBot",
        url: "https://watbot.store",
        applicationCategory: "BusinessApplication",
        description:
          "AI-powered WhatsApp automation platform for customer support and conversational workflows, built by Muhammad Hamd.",
        author: { "@id": "https://hamdali.com/#person" },
        creator: { "@id": "https://hamdali.com/#person" },
        operatingSystem: "Web",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://selfbrand.app/#app",
        name: "selfbrand AI",
        url: "https://selfbrand.app",
        applicationCategory: "BusinessApplication",
        description:
          "AI-powered personal branding SaaS for founders and professionals, built by Muhammad Hamd.",
        author: { "@id": "https://hamdali.com/#person" },
        creator: { "@id": "https://hamdali.com/#person" },
        operatingSystem: "Web",
      },
      {
        "@type": "ItemList",
        name: "Products by Muhammad Hamd",
        itemListElement: [
          { "@type": "ListItem", position: 1, url: "https://watbot.store", name: "WatBot" },
          { "@type": "ListItem", position: 2, url: "https://selfbrand.app", name: "selfbrand AI" },
          { "@type": "ListItem", position: 3, url: "https://asmara.ai", name: "Asmara.AI" },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
