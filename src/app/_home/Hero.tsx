'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Sparkles } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <main
      id='home'
      className='relative flex min-h-[calc(100dvh-var(--spacing)*17)] items-center pt-20'
    >
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className='bg-primary/10 absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-3xl'
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className='bg-accent/10 absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full blur-3xl'
        />
      </div>

      <div className='relative container'>
        <div className='mx-auto max-w-5xl'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-4 inline-block'
            whileHover={{ scale: 1.1 }}
          >
            <Badge
              variant='outline'
              className='bg-primary/10 border-primary/20 gap-2 px-4 py-1.5 text-sm'
            >
              <Sparkles size={14} className='text-primary' />
              <span>Frontend Wizard ✨</span>
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='mb-6 text-5xl font-bold tracking-tighter md:text-7xl'
          >
            <motion.span
              initial={{ color: 'hsl(12, 71%, 56%)' }}
              animate={{
                color: [
                  'hsl(220, 80%, 60%)',
                  'hsl(140, 70%, 50%)',
                  'hsl(48, 95%, 60%)',
                  'hsl(18, 75%, 60%)',
                  'hsl(320, 70%, 60%)',
                  'hsl(200, 80%, 70%)',
                  'hsl(28, 80%, 60%)',
                  'hsl(6, 80%, 60%)',
                  'hsl(32, 70%, 55%)',
                  'hsl(0, 70%, 50%)',
                  'hsl(220, 80%, 60%)',
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              Creating digital
            </motion.span>
            <br />
            <motion.span
              className='text-primary'
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              drag
              dragConstraints={{
                left: -10,
                right: 10,
                top: -10,
                bottom: 10,
              }}
            >
              experiences
            </motion.span>{' '}
            that
            <br />
            <motion.span
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 500 }}
            >
              make an impact 💥
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-muted-foreground mb-8 max-w-3xl text-xl md:text-2xl'
          >
            Hi, I&apos;m Lalvar — a frontend developer who brings websites to
            life with a touch of
            <span className='relative inline-block px-1'>
              <span className='relative z-10'>magic</span>
              <motion.span
                className='absolute inset-0 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 opacity-30'
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
            ✨ and lots of creativity!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='flex flex-wrap gap-4'
          >
            <Button size='lg' asChild>
              <a href='#projects' className='group flex items-center gap-2'>
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.2, 1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 4,
                  }}
                >
                  🚀
                </motion.div>
                Explore My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <ArrowUpRight size={16} />
                </motion.span>
              </a>
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant='secondary' size='lg' asChild>
                <a
                  href='https://github.com/lLalvar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2'
                >
                  <motion.div
                    animate={{ rotate: [0, 20, 0, -20, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <Github size={16} />
                  </motion.div>
                  GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className='absolute bottom-12 left-1/2 hidden -translate-x-1/2 transform md:block'
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg
                width='24'
                height='38'
                viewBox='0 0 24 38'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='stroke-foreground/60'
              >
                <rect
                  x='1'
                  y='1'
                  width='22'
                  height='36'
                  rx='11'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <motion.circle
                  animate={{ y: [6, 20, 6] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  cx='12'
                  cy='12'
                  r='4'
                  fill='currentColor'
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
