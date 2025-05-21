'use client'

import Link from 'next/link'
import { useState } from 'react'

import { motion } from 'framer-motion'
import { Code, Rocket } from 'lucide-react'

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
    icon: '📈',
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
    icon: '🍲',
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
    icon: '🛒',
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
    icon: '📊',
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
    icon: '🍕',
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
    icon: '🧮',
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
    icon: '🍹',
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
    icon: '🤖',
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id='projects' className='relative py-20 md:py-32'>
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className='bg-primary/5 absolute top-1/3 right-1/3 h-72 w-72 rounded-full blur-3xl'
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -30, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className='bg-accent/5 absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full blur-3xl'
        />
      </div>

      <div className='relative container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-16 max-w-xl'
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Badge
              variant='outline'
              className='bg-muted/50 border-muted mb-4 gap-2 px-4 py-1.5 text-sm'
            >
              <Code size={14} />
              <span>My Cool Stuff</span>
            </Badge>
          </motion.div>
          <motion.h2
            className='mb-4 text-4xl font-bold tracking-tighter md:text-5xl'
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
          >
            Projects that <span className='text-primary'>define</span> my
            <motion.span
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className='ml-2 inline-block'
            >
              craft
            </motion.span>
          </motion.h2>
          <motion.p
            className='text-muted-foreground text-lg'
            whileHover={{ scale: 1.02 }}
          >
            A collection of projects that showcase my skills and passion for
            creating engaging web experiences. Click on any card to see the
            magic! ✨
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => {
                setHoveredProject(project.id)
              }}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <FunProjectCard
                project={project}
                isHovered={hoveredProject === project.id}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className='mt-16 flex justify-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href='https://github.com/lLalvar'
            target='_blank'
            rel='noopener noreferrer'
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'group',
            })}
          >
            <motion.span
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className='mr-2'
            >
              <Rocket size={16} />
            </motion.span>
            <span>See More on GitHub</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
