import { Metadata } from 'next'

import { metadataBase, siteName } from '@/config/seo'
import { APP_URL } from '@/constants'

const images = [
  {
    url: '/avatar.webp',
    width: 400,
    height: 400,
    alt: 'Lalvar Portfolio avatar',
  },
]

export function mainMetadata(): Metadata {
  return {
    metadataBase,
    title: 'Lalvar | Frontend Developer Portfolio',
    description:
      'Explore the portfolio of Lalvar, a frontend developer specializing in React, Next.js, and modern web technologies. Discover projects, skills, and creative work.',
    keywords:
      'Lalvar, frontend developer, portfolio, React, Next.js, JavaScript, web development, UI, UX, projects, web design, creative developer',
    category: 'portfolio',
    openGraph: {
      title: 'Lalvar | Frontend Developer Portfolio',
      description:
        'Showcasing projects, skills, and creativity in modern web development. Explore Lalvar’s work and expertise in React, Next.js, and more.',
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
