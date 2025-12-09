'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'
import {
  BarChart3,
  Bot,
  Calculator,
  Code,
  LayoutDashboard,
  Rocket,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  UtensilsCrossed,
  Wine,
} from 'lucide-react'

import FunProjectCard from '@/components/FunProjectCard'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'

const projects = [
  {
    id: 2,
    title: 'Cryptoverse',
    description:
      'A cryptocurrency dashboard with real-time data, charts, and news aggregation.',
    tags: ['React', 'API', 'Chart.js'],
    url: 'https://lalvar-cryptoverse.netlify.app',
    githubUrl: 'https://github.com/lLalvar/cryptoverse',
    image: '/api/placeholder/600/400',
    color: 'hsl(215, 100%, 60%)',
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'React Recipe App',
    description:
      'A recipe app built with React that allows users to search and save their favorite recipes.',
    tags: ['React', 'API', 'Hooks'],
    url: 'https://lalvar-react-recipe-app.netlify.app',
    githubUrl: 'https://github.com/lLalvar/React-Recip-App',
    image: '/api/placeholder/600/400',
    color: 'hsl(40, 100%, 60%)',
    icon: UtensilsCrossed,
  },
  {
    id: 1,
    title: 'Electronics Store',
    description:
      'An e-commerce platform for electronics with cart functionality and payment integration.',
    tags: ['Vue.js', 'Swiper', 'Pinia'],
    url: 'https://lalvar-electronics-store.netlify.app',
    githubUrl: 'https://github.com/lLalvar/Electronics-store',
    image: '/api/placeholder/600/400',
    color: 'hsl(170, 100%, 40%)',
    icon: ShoppingCart,
  },
  {
    id: 4,
    title: 'React Dashboard',
    description:
      'Admin dashboard with data visualization, user management, and responsive design.',
    tags: ['React', 'Material UI', 'Nivo Charts'],
    url: 'https://lalvar-react-admin-dashboard.netlify.app/',
    githubUrl: 'https://github.com/lLalvar/react-admin-dashboard',
    image: '/api/placeholder/600/400',
    color: 'hsl(280, 100%, 65%)',
    icon: LayoutDashboard,
  },
  {
    id: 5,
    title: 'Pizza Ordering App',
    description:
      'Next.js application for ordering pizzas with user authentication and order tracking.',
    tags: ['Next.js', 'Tailwind'],
    url: 'https://nextjs-pizza-ordering-app.netlify.app',
    githubUrl: 'https://github.com/lLalvar/Pizza-Ordering-App',
    image: '/api/placeholder/600/400',
    color: 'hsl(15, 100%, 50%)',
    icon: UtensilsCrossed,
  },
  {
    id: 8,
    title: 'Calculator App',
    description:
      'A simple calculator app built with JavaScript and deployed on GitHub Pages.',
    tags: ['JavaScript', 'HTML/CSS'],
    url: 'https://llalvar.github.io/Calculator_App',
    githubUrl: 'https://github.com/lLalvar/Calculator_App',
    image: '/api/placeholder/600/400',
    color: 'hsl(300, 100%, 60%)',
    icon: Calculator,
  },
  {
    id: 11,
    title: 'Cocktail Website',
    description:
      'A Vue.js website for browsing and searching cocktail recipes.',
    tags: ['Vue.js', 'API', 'CSS'],
    url: 'https://lalvar-vuejs-cocktial.netlify.app',
    githubUrl: 'https://github.com/lLalvar/Vue.js-Cocktail-website',
    image: '/api/placeholder/600/400',
    color: 'hsl(340, 100%, 60%)',
    icon: Wine,
  },
  {
    id: 12,
    title: 'GPT-3',
    description:
      'Modern UI/UX website showcasing OpenAI GPT-3 capabilities and use cases.',
    tags: ['React', 'CSS', 'Responsive Design'],
    url: 'https://gpt3-react-mastery.netlify.app',
    githubUrl: 'https://github.com/lLalvar/gpt3',
    image: '/api/placeholder/600/400',
    color: 'hsl(36, 100%, 50%)',
    icon: Bot,
  },
]

export default function Projects() {
  return (
    <section id='projects' className='relative py-8 md:py-12'>
      <div className='relative container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-6 max-w-xl'
        >
          <Badge
            variant='outline'
            className='bg-muted/50 border-muted mb-3 gap-2 px-4 py-1.5 text-sm'
          >
            <Code size={14} />
            <span>Projects</span>
          </Badge>
          <h2 className='mb-3 text-4xl font-bold tracking-tight md:text-5xl'>
            Featured Projects
          </h2>
          <p className='text-muted-foreground text-lg'>
            A collection of projects showcasing my skills in building modern web
            applications with React, Next.js, Vue.js, and more.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <FunProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className='mt-6 flex justify-center'>
          <Link
            href='https://github.com/lLalvar'
            target='_blank'
            rel='noopener noreferrer'
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
            })}
          >
            <Rocket size={16} className='mr-2' />
            See More on GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}
