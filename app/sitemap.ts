// Module imports
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://loopholelabs.io/docs',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ]
}
