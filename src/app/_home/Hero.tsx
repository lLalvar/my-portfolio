'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github, MapPin } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <main
      id='home'
      className='relative container flex min-h-[calc(100dvh-12rem)] flex-col items-center justify-center gap-4 px-4 pt-16 pb-6 md:flex-row md:gap-6 md:px-12 md:py-8'
    >
      <div className='flex w-full flex-2 items-center'>
        <div className='pointer-events-none absolute inset-0 overflow-hidden'>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            initial={{ opacity: 0 }}
            className='bg-primary absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-3xl'
          />
        </div>
        <div className='relative'>
          <div className='mx-auto max-w-5xl'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3'
            >
              <Badge
                variant='outline'
                className='bg-primary/10 border-primary/20 w-fit px-4 py-1.5 text-sm'
              >
                <span>Frontend Developer</span>
              </Badge>
              <div className='text-muted-foreground flex items-center gap-2 text-sm'>
                <MapPin size={14} />
                <span>Armenia</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='mb-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'
            >
              Hi, I&apos;m <span className='text-primary'>Lalvar</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-muted-foreground mb-2 max-w-3xl text-lg md:text-xl'
            >
              Frontend Developer with 4+ years of experience specializing in{' '}
              <span className='text-foreground font-semibold'>
                React, Next.js, Vue.js
              </span>
              , and modern web development. I build responsive, accessible, and
              high-performance web applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-muted-foreground mb-4 max-w-3xl text-base md:text-lg'
            >
              Currently working at <span className='font-medium'>Shiftr</span>{' '}
              as a Frontend Developer, building e-commerce platforms and custom
              dashboards.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='flex flex-wrap gap-4'
            >
              <Button size='lg' asChild>
                <a href='#projects' className='flex items-center gap-2'>
                  View Projects
                  <ArrowUpRight size={16} />
                </a>
              </Button>
              <Button variant='secondary' size='lg' asChild>
                <a
                  href='https://github.com/lLalvar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2'
                >
                  <Github size={16} />
                  GitHub
                </a>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <a
                  href='https://linkedin.com/in/lalvar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2'
                >
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Avatar Section */}
      <motion.div
        className='relative flex aspect-square w-[60%] flex-1 items-center justify-center md:w-auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className='border-background relative overflow-hidden rounded-full border-2 shadow-lg'>
          <Image
            src='/avatar.webp'
            alt="Lalvar's Avatar"
            width={400}
            height={400}
            className='object-cover transition-transform duration-300 hover:scale-105 dark:brightness-90'
            priority
          />
        </div>
      </motion.div>
    </main>
  )
}
