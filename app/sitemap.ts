import { MetadataRoute } from 'next';
import { EXPERTISE_SECTORS, PROJECTS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cdmsd.org.pk';

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/expertise',
    '/projects',
    '/resources',
    '/news',
    '/team',
    '/careers',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const expertiseRoutes: MetadataRoute.Sitemap = EXPERTISE_SECTORS.map((sec) => ({
    url: `${baseUrl}/expertise/${sec.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((proj) => ({
    url: `${baseUrl}/projects/${proj.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...expertiseRoutes, ...projectRoutes];
}
