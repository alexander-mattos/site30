import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/cliente/']
        },
        sitemap: 'https://integroseguros.com.br/sitemap.xml',
    }
}