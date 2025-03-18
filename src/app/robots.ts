import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/', 
        '/admin/',
        '/_next/',
        '/server-sitemap.xml',
      ],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://liamgrahampsychometry.co.za'}/sitemap.xml`,
  };
}