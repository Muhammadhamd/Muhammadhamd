import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://muhammadhamd.com';

  const workPages = [
    'mindkeepr',
    'watbot',
    'cubitrek',
    'asmara-ai',
    'selfbrand',
    'vative-apps',
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...workPages.map((slug) => ({
      url: `${baseUrl}/work/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}
