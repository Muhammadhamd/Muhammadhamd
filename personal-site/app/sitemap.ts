import { MetadataRoute } from 'next';
import { services } from '@/lib/services';
import { locations } from '@/lib/locations';
import { posts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mhamd.selfbrand.app';
  const now = new Date();

  const workPages = [
    'mindkeepr',
    'watbot',
    'cubitrek',
    'asmara-ai',
    'selfbrand',
    'vative-apps',
  ];

  // High-intent conversion + trust pages (Week 2).
  const corePages: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
    { path: '/hire-me', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/uses', priority: 0.6, changeFrequency: 'monthly' },
  ];

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...corePages.map((p) => ({
      url: `${baseUrl}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...services.map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...locations.map((l) => ({
      url: `${baseUrl}/${l.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...posts.map((p) => ({
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: new Date(p.updated || p.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...workPages.map((slug) => ({
      url: `${baseUrl}/work/${slug}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}
