import { siteName } from '@/config/seo'
import { APP_URL } from '@/constants'

export function generateSiteJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    alternateName: 'Lalvar Portfolio',
    url: APP_URL,
    description:
      'The personal portfolio of Lalvar, a frontend developer passionate about creating engaging web experiences. Explore projects, skills, and more.',
    image: `${APP_URL}/avatar.webp`,
    publisher: {
      '@type': 'Person',
      name: siteName,
      image: {
        '@type': 'ImageObject',
        url: `${APP_URL}/avatar.webp`,
      },
    },
  }
}
