'use client'

import { useEffect, useState } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'

const Main = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills']
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
      {/* Floating Navigation */}
      <div className='fixed end-12 top-1/2 z-40 hidden -translate-y-1/2 transform md:block'>
        <div className='flex flex-col gap-4'>
          {[
            { id: 'home', label: 'Home' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' },
          ].map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className='group relative'
            >
              <div
                className={`h-2 w-2 rounded-full transition-all ${
                  activeSection === section.id
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/40 group-hover:bg-muted-foreground/60'
                }`}
              />
            </a>
          ))}
        </div>
      </div>

      <Header activeSection={activeSection} />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default Main
