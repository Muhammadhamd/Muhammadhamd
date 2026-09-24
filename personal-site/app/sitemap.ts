import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { services } from '@/lib/services';
import { locations } from '@/lib/locations';
import { industries } from '@/lib/industries';
import { getAllPostSummaries } from '@/lib/blog';

// Cached by default; refresh at most every 5 min so CMS articles get listed.
export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;
  // Code posts plus articles published from the CMS.
  const posts = await getAllPostSummaries();

  const workPages = [
    'mindkeepr',
    'watbot',
    'cubitrek',
    'asmara-ai',
    'selfbrand',
    'vative-apps',
  ];

  // High-intent conversion + trust pages.
  const corePages: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
    { path: '/hire-me', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/case-studies', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/experience', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/uses', priority: 0.6, changeFrequency: 'monthly' },
  ];

  // Note: lastModified is only set where a real content date exists (blog
  // posts). Stamping every page with the build date on each deploy trains
  // search engines to ignore lastmod, so static pages omit it.
  return [
    {
      url: baseUrl,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...corePages.map((p) => ({
      url: `${baseUrl}${p.path}`,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    {
      url: `${baseUrl}/services`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...services.map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...locations.map((l) => ({
      url: `${baseUrl}/${l.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...industries.map((i) => ({
      url: `${baseUrl}/ai-for/${i.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/blog`,
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
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}
