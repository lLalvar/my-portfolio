'use client'

import { motion } from 'framer-motion'
import { Box, Github, Linkedin, Mail } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

import SocialButton from './SocialButton'

export default function Footer({
  incrementEasterEgg,
}: {
  incrementEasterEgg: () => void
}) {
  return (
    <footer className='border-border bg-card/40 border-t py-16 backdrop-blur-sm'>
      <div className='container'>
        <div className='mx-auto max-w-5xl'>
          <div className='mb-8 flex flex-col items-start justify-between md:flex-row md:items-center'>
            <div className='mb-6 md:mb-0'>
              <motion.div
                className='mb-2 flex items-center gap-2'
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Box size={20} className='text-primary' />
                </motion.div>
                <span className='text-xl font-bold tracking-tight'>Lalvar</span>
              </motion.div>
              <p className='text-muted-foreground'>
                Frontend Developer & Creative Coder ✨
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
            <motion.p
              className='text-muted-foreground mb-4 text-sm md:mb-0'
              whileHover={{ color: '#FF5252' }}
              onClick={() => incrementEasterEgg()}
            >
              © {new Date().getFullYear()} Lalvar. Made with ❤️
            </motion.p>

            <div className='flex items-center gap-6'>
              <motion.a
                href='#home'
                className='text-muted-foreground hover:text-foreground text-sm transition-colors'
                whileHover={{ scale: 1.1, x: -2, y: -2 }}
              >
                Back to top 🔝
              </motion.a>
              <span className='text-border'>•</span>
              <motion.a
                href='#projects'
                className='text-muted-foreground hover:text-foreground text-sm transition-colors'
                whileHover={{ scale: 1.1, rotate: -3 }}
              >
                Projects 🚀
              </motion.a>
              <span className='text-border'>•</span>
              <motion.a
                href='#skills'
                className='text-muted-foreground hover:text-foreground text-sm transition-colors'
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                Skills 🧠
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
