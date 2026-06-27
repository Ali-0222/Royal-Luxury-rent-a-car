import type { MetadataRoute } from 'next';

const baseUrl = 'https://royalluxuryrentacar.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
