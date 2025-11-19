import { SITE_META } from '@config/meta.config.js';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_META.url}/sitemap.xml`,
  };
}
