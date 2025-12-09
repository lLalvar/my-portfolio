import { siteName } from '@/config/seo'
import { APP_URL } from '@/constants'

export function generateSiteJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lalvar',
    jobTitle: 'Frontend Developer',
    description:
      'Frontend Developer with 4+ years of experience specializing in React, Next.js, Vue.js, and modern web development. Currently working at Shiftr, building e-commerce platforms and custom dashboards.',
    url: APP_URL,
    image: `${APP_URL}/avatar.webp`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AM',
      addressLocality: 'Armenia',
    },
    knowsAbout: [
      'React',
      'Next.js',
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Web Development',
      'Frontend Development',
      'E-commerce Development',
      'Responsive Web Design',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Yerevan State University',
    },
    sameAs: [
      'https://github.com/lLalvar',
      'https://linkedin.com/in/lalvar',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Shiftr',
    },
  }
}
