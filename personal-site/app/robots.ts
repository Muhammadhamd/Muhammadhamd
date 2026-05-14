import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://mhamd.selfbrand.app/sitemap.xml',
    host: 'https://mhamd.selfbrand.app',
  };
}
