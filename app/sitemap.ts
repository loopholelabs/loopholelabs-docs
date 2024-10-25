// Module Imports
import type { MetadataRoute } from 'next';

// Local Imports
import { architectSource, scaleSource, polyglotSource } from '@/app/source';

const url = (path: string): string => `https://loopholelabs.io/docs${path}`;

const index = [
    ...architectSource.getPages().map((page) => {
        return {
            url: url(page.url),
            lastModified: page.data.lastModified,
            changeFrequency: 'weekly',
            priority: 0.5,
        } as MetadataRoute.Sitemap[number];
    }),
    ...scaleSource.getPages().map((page) => {
        return {
            url: url(page.url),
            lastModified: page.data.lastModified,
            changeFrequency: 'weekly',
            priority: 0.5,
        } as MetadataRoute.Sitemap[number];
    }),
    ...polyglotSource.getPages().map((page) => {
        return {
            url: url(page.url),
            lastModified: page.data.lastModified,
            changeFrequency: 'weekly',
            priority: 0.5,
        } as MetadataRoute.Sitemap[number];
    })
];

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: url(''),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...index,
    ];
}