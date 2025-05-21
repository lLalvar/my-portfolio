import { siteName } from '@/config/seo'
import { APP_URL } from '@/constants'

export function generateSiteJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    alternateName: 'Askew Industries',
    url: APP_URL,
    description:
      'Your complete solution for seamless maintenance processes in the mining and industrial industries. Optimize performance, ensure compliance, and reduce downtime with advanced tools from Askew Industries.',
    image: `${APP_URL}/logo.png`,
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${APP_URL}/logo.png`,
      },
    },
  }
}
