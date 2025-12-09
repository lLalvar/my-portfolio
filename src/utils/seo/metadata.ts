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
    title: 'Lalvar | Frontend Developer - React, Next.js, Vue.js Specialist',
    description:
      'Frontend Developer with 4+ years of experience specializing in React, Next.js, Vue.js, and modern web development. Currently at Shiftr, building e-commerce platforms and custom dashboards. Based in Armenia.',
    keywords: [
      'Lalvar',
      'Frontend Developer',
      'React Developer',
      'Next.js Developer',
      'Vue.js Developer',
      'TypeScript Developer',
      'Web Developer Armenia',
      'Frontend Engineer',
      'React Portfolio',
      'Next.js Portfolio',
      'Vue.js Portfolio',
      'E-commerce Developer',
      'UI Developer',
      'JavaScript Developer',
      'Tailwind CSS',
      'Shadcn UI',
      'Material UI',
      'Responsive Web Design',
      'Web Development Armenia',
      'Frontend Developer Portfolio',
    ].join(', '),
    authors: [{ name: 'Lalvar' }],
    category: 'portfolio',
    openGraph: {
      title: 'Lalvar | Frontend Developer - React, Next.js, Vue.js Specialist',
      description:
        'Frontend Developer with 4+ years of experience building responsive, accessible, and high-performance web applications. Specializing in React, Next.js, Vue.js, TypeScript, and modern web technologies.',
      images,
      type: 'profile',
      siteName,
      url: APP_URL,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Lalvar | Frontend Developer Portfolio',
      description:
        'Frontend Developer with 4+ years of experience in React, Next.js, Vue.js, and modern web development.',
      images: images.map((img) => `${APP_URL}${img.url}`),
    },
    alternates: {
      canonical: APP_URL,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
