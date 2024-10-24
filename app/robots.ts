// Module imports
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        host: 'https://loopholelabs.io/docs',
        sitemap: 'https://loopholelabs.io/docs/sitemap.xml',
    }
}
