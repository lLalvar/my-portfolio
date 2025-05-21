'use client'

import { useEffect, useRef, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'

const Main = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const easterEggTriggerCount = useRef(0)
  const easterEggTimeout = useRef<NodeJS.Timeout | null>(null)

  const incrementEasterEgg = () => {
    easterEggTriggerCount.current += 1
    if (easterEggTriggerCount.current >= 5) {
      setShowEasterEgg(true)
      easterEggTriggerCount.current = 0
      if (easterEggTimeout.current) clearTimeout(easterEggTimeout.current)
      easterEggTimeout.current = setTimeout(() => setShowEasterEgg(false), 3000)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills']
      let current = ''

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 300 && rect.bottom >= 300) {
            current = section
            break
          }
        }
      }

      if (current && current !== activeSection) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  return (
    <div className='bg-background text-foreground relative min-h-screen font-sans'>
      {/* Easter Egg Animation */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -100 }}
            className='bg-primary text-primary-foreground fixed top-1/4 left-1/2 z-50 -translate-x-1/2 transform rounded-xl px-8 py-4 shadow-lg'
          >
            <h3 className='text-xl font-bold'>🎉 Easter Egg Found! 🎉</h3>
            <p>You discovered a secret! Nicely done!</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Navigation with fun animation */}
      <div className='fixed end-12 top-1/2 z-40 hidden -translate-y-1/2 transform md:block'>
        <div className='flex flex-col gap-6'>
          {['home', 'projects', 'skills'].map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              className='relative'
              whileHover={{
                scale: 1.3,
                rotate:
                  section === 'home' ? 10 : section === 'projects' ? -10 : 10,
              }}
              whileTap={{ scale: 0.8 }}
            >
              <div
                className={`h-3 w-3 rounded-full ${activeSection === section ? 'bg-primary' : 'bg-muted-foreground/40'}`}
              />
              <motion.span
                className='absolute top-1/2 left-6 origin-left -translate-y-1/2 transform text-sm font-medium whitespace-nowrap'
                initial={{ opacity: 0, x: -10, scale: 0.8 }}
                animate={{
                  opacity: activeSection === section ? 1 : 0,
                  x: activeSection === section ? 0 : -10,
                  scale: activeSection === section ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
              >
                {section === 'home'
                  ? '🏠'
                  : section === 'projects'
                    ? '🚀'
                    : '🧠'}
              </motion.span>
            </motion.a>
          ))}
        </div>
      </div>

      <Header
        activeSection={activeSection}
        incrementEasterEgg={incrementEasterEgg}
      />
      <Hero />
      <Projects />
      <Skills incrementEasterEgg={incrementEasterEgg} />
      <Footer incrementEasterEgg={incrementEasterEgg} />
    </div>
  )
}

export default Main
