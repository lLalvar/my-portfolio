import Image from 'next/image'

import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

const skills = [
  { name: 'React', icon: '/icons/react.png' },
  { name: 'Next.js', icon: '/icons/nextjs.png' },
  { name: 'Vue.js', icon: '/icons/vue.png' },
  { name: 'Nuxt.js', icon: '/icons/nuxt.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.png' },
  { name: 'JavaScript', icon: '/icons/javascript.png' },
  { name: 'Tailwind CSS', icon: '/icons/tailwindcss.png' },
  { name: 'Electron', icon: '/icons/electron.svg' },
]

const tools = [
  'Docker',
  'Git',
  'Figma',
  'Storybook',
  'Shadcn UI',
  'Material UI',
]

export default function Skills() {
  return (
    <section id='skills' className='relative py-8 md:py-12'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-6 max-w-2xl'
        >
          <Badge
            variant='outline'
            className='border-muted bg-muted/50 mb-3 gap-2 px-4 py-1.5 text-sm'
          >
            <Code size={14} />
            <span>Technologies</span>
          </Badge>
          <h2 className='mb-3 text-4xl font-bold tracking-tight md:text-5xl'>
            Skills & Technologies
          </h2>
          <p className='text-muted-foreground text-lg'>
            Languages, frameworks, and tools I use to build modern web
            applications.
          </p>
        </motion.div>

        <div className='space-y-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className='text-muted-foreground mb-3 text-sm font-semibold tracking-wider uppercase'>
              Languages & Frameworks
            </h3>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className='bg-muted group hover:bg-muted/80 flex flex-col items-center gap-3 rounded-lg p-4 transition-colors'
                >
                  <div className='relative h-12 w-12'>
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className='object-contain'
                    />
                  </div>
                  <span className='text-sm font-medium'>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className='text-muted-foreground mb-3 text-sm font-semibold tracking-wider uppercase'>
              Tools & DevOps
            </h3>
            <div className='flex flex-wrap gap-3'>
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge
                    variant='secondary'
                    className='bg-muted px-4 py-2 text-sm font-medium'
                  >
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
