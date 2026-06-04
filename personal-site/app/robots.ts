import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://hamdali.com/sitemap.xml',
    host: 'https://hamdali.com',
  };
}
