'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import { Github, Heart, Linkedin, Mail, Sparkles } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

import SocialButton from './SocialButton'

export default function Footer() {
  return (
    <footer className='border-border bg-card/40 border-t py-16 backdrop-blur-sm'>
      <div className='container'>
        <div className='mx-auto max-w-5xl'>
          <div className='mb-8 flex flex-col items-start justify-between md:flex-row md:items-center'>
            <div className='mb-6 md:mb-0'>
              <div className='mb-2 flex items-center gap-0.5'>
                <Image
                  src='/logo.png'
                  alt='Logo'
                  width={24}
                  height={24}
                  className='dark:brightness-90'
                />
                <span className='text-2xl font-bold tracking-tight'>alvar</span>
              </div>
              <p className='text-muted-foreground flex items-center gap-1.5'>
                Frontend Developer & Creative Coder
                <Sparkles size={14} className='text-primary' />
              </p>
            </div>

            <div className='flex gap-4'>
              <motion.div
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <SocialButton
                  href='https://github.com/lLalvar'
                  icon={<Github size={18} />}
                  label='GitHub'
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <SocialButton
                  href='mailto:mnacakanyan.lalvar@gmail.com'
                  icon={<Mail size={18} />}
                  label='Email'
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <SocialButton
                  href='https://linkedin.com/in/lalvar'
                  icon={<Linkedin size={18} />}
                  label='LinkedIn'
                />
              </motion.div>
            </div>
          </div>

          <Separator className='mb-8' />

          <div className='flex flex-col items-center justify-between md:flex-row'>
            <p className='text-muted-foreground mb-4 flex items-center gap-1.5 text-sm md:mb-0'>
              © {new Date().getFullYear()} Lalvar. Made with{' '}
              <Heart size={14} className='text-primary fill-primary' />
            </p>

            <div className='flex items-center gap-6'>
              <a
                href='#home'
                className='text-muted-foreground hover:text-foreground text-sm transition-colors'
              >
                Back to top
              </a>
              <span className='text-border'>•</span>
              <a
                href='#experience'
                className='text-muted-foreground hover:text-foreground text-sm transition-colors'
              >
                Experience
              </a>
              <span className='text-border'>•</span>
              <a
                href='#projects'
                className='text-muted-foreground hover:text-foreground text-sm transition-colors'
              >
                Projects
              </a>
              <span className='text-border'>•</span>
              <a
                href='#skills'
                className='text-muted-foreground hover:text-foreground text-sm transition-colors'
              >
                Skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
