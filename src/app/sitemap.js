import { PAGES } from '@config/pages.config';
import { SERVICES } from '@config/services.config';
import { SITE_META } from '@config/meta.config.js';

export default function sitemap() {
  const baseUrl = SITE_META.url;

  const pages = Object.values(PAGES).map(p => ({
    url: `${baseUrl}${p.path}`,
    lastModified: p.sitemap.lastModified || new Date(),
    changeFrequency: p.sitemap.changeFrequency || 'monthly',
    priority: p.sitemap.priority || 0.8,
  }));

  const services = Object.values(SERVICES).map(s => ({
    url: `${baseUrl}/services/${s.slug.link}`,
    lastModified: new Date('2025-11-19'),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...pages, ...services];
}
