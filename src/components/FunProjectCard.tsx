import React from 'react'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card } from './ui/card'

export default function FunProjectCard({
  project,
  isHovered,
}: {
  project: {
    id: number
    title: string
    description: string
    tags: string[]
    url: string
    githubUrl: string
    image: string
    color: string
    icon: string
  }
  isHovered: boolean
}) {
  return (
    <Card className='group relative h-full overflow-hidden border shadow-lg'>
      {/* Animated background blob */}
      <motion.div
        className='absolute inset-0 opacity-20'
        style={{ backgroundColor: project.color }}
        animate={{
          opacity: isHovered ? 0.3 : 0.1,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className='relative flex h-full flex-col p-6 md:p-8'>
        <div className='mb-4 flex items-start justify-between'>
          <motion.h3
            className='flex items-center gap-2 text-2xl font-bold tracking-tight'
            animate={{ y: isHovered ? -2 : 0 }}
          >
            <motion.span
              animate={{ rotate: isHovered ? [0, 15, 0, -15, 0] : 0 }}
              transition={{ duration: 1.5 }}
              className='mr-2 inline-block'
            >
              {project.icon}
            </motion.span>
            {project.title}
          </motion.h3>
          <div className='flex gap-2'>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant='ghost'
                size='icon'
                asChild
                className='h-8 w-8 rounded-full opacity-70 hover:opacity-100'
              >
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit live site'
                >
                  <ExternalLink size={14} />
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant='ghost'
                size='icon'
                asChild
                className='h-8 w-8 rounded-full opacity-70 hover:opacity-100'
              >
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='View source code'
                >
                  <Github size={14} />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.p
          className='text-muted-foreground mb-6 line-clamp-3'
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          {project.description}
        </motion.p>

        <div className='mt-auto flex flex-wrap gap-2'>
          {project.tags.map((tag, tagIndex) => (
            <motion.div
              key={tagIndex}
              initial={{ opacity: 0.9 }}
              whileHover={{ scale: 1.1, y: -3 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Badge
                variant='secondary'
                className='bg-background/60 backdrop-blur-sm'
              >
                {tag}
              </Badge>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='absolute -right-20 -bottom-20 h-40 w-40 rounded-full'
          style={{ backgroundColor: project.color }}
          animate={{
            opacity: isHovered ? 0.2 : 0.1,
            scale: isHovered ? 1.3 : 1,
            x: isHovered ? -10 : 0,
            y: isHovered ? -10 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </Card>
  )
}
