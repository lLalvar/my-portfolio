import { Metadata } from 'next'

import { metadataBase, siteName } from '@/config/seo'
import { APP_URL } from '@/constants'

const images = [
  {
    url: '/logo.png',
    width: 155,
    height: 44,
    alt: 'Askew Industries logo',
  },
]

export function mainMetadata(): Metadata {
  return {
    metadataBase,
    title: 'Revolutionizing Modern Maintenance | Askew Industries',
    description:
      'Your complete solution for seamless maintenance processes in the mining and industrial industries. Optimize performance, ensure compliance, and reduce downtime with advanced tools from Askew Industries.',
    keywords:
      'Askew Industries, mining maintenance, industrial maintenance, predictive maintenance, automated scheduling, compliance tracking, maintenance app, reduce downtime, optimize performance, regulatory compliance, maintenance technology, industrial solutions',
    category: 'website',
    openGraph: {
      title: 'Revolutionizing Modern Maintenance | Askew Industries',
      description:
        'Complete solution for seamless maintenance in mining and industrial sectors. Optimize performance, ensure compliance, and reduce downtime with advanced tools.',
      images,
      type: 'website',
      siteName,
      url: APP_URL,
    },
    alternates: {
      canonical: APP_URL,
    },
  }
}
