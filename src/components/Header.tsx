'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

import FunNavLink from './FunNavLink'
import MobileNavLink from './MobileNavLink'

export default function Header({
  activeSection,
  incrementEasterEgg,
}: {
  activeSection: string
  incrementEasterEgg: () => void
}) {
  const { setTheme, resolvedTheme } = useTheme()
  const [localTheme, setLocalTheme] = useState<string | undefined>()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)

  const toggleTheme = () => {
    setLocalTheme(localTheme === 'dark' ? 'light' : 'dark')
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if (resolvedTheme) {
      setLocalTheme(resolvedTheme)
    }
  }, [resolvedTheme])

  const toggleSpin = () => {
    if (!isSpinning) {
      setIsSpinning(true)
      setTimeout(() => {
        setIsSpinning(false)
      }, 1000)
    }
  }

  return (
    <header className='bg-background/80 border-border fixed top-0 left-0 z-40 h-17 w-full border-b backdrop-blur-md'>
      <div className='container flex items-center justify-between py-4 md:max-w-[90rem]'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='flex items-center gap-0.5'
          onClick={incrementEasterEgg}
        >
          <motion.div
            animate={{
              rotate: isSpinning ? [0, 360] : 0,
              scale: isSpinning ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 0.8 }}
            onClick={toggleSpin}
            className='text-primary cursor-pointer'
          >
            <Image
              src='/logo.png'
              alt='Logo'
              width={24}
              height={24}
              className='dark:brightness-90'
            />
          </motion.div>
          <motion.span
            className='text-2xl font-bold tracking-tight select-none'
            whileHover={{ y: [0, -3, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            alvar
          </motion.span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className='hidden items-center gap-8 md:flex'>
          <FunNavLink href='#home' isActive={activeSection === 'home'}>
            Home
          </FunNavLink>
          <FunNavLink href='#projects' isActive={activeSection === 'projects'}>
            Projects
          </FunNavLink>
          <FunNavLink href='#skills' isActive={activeSection === 'skills'}>
            Skills
          </FunNavLink>

          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant='ghost'
              size='icon'
              onClick={toggleTheme}
              className='ms-2 rounded-full'
            >
              {!localTheme ? (
                ''
              ) : localTheme === 'dark' ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className='flex items-center md:hidden'>
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant='ghost'
              size='icon'
              onClick={toggleTheme}
              className='mr-2'
            >
              {!localTheme ? (
                ''
              ) : localTheme === 'dark' ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </Button>
          </motion.div>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='bg-card border-border w-full overflow-hidden border-b md:hidden'
          >
            <div className='container flex flex-col space-y-4 py-4'>
              <MobileNavLink
                href='#home'
                isActive={activeSection === 'home'}
                setMobileMenuOpen={setMobileMenuOpen}
              >
                🏠 Home
              </MobileNavLink>
              <MobileNavLink
                href='#projects'
                isActive={activeSection === 'projects'}
                setMobileMenuOpen={setMobileMenuOpen}
              >
                🚀 Projects
              </MobileNavLink>
              <MobileNavLink
                href='#skills'
                isActive={activeSection === 'skills'}
                setMobileMenuOpen={setMobileMenuOpen}
              >
                🧠 Skills
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
