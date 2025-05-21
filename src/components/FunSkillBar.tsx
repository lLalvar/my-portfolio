import Image from 'next/image'
import { useState } from 'react'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

export default function FunSkillBar({
  name,
  icon,
  index,
  category,
}: {
  name: string
  icon: string
  index: number
  category: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  // Fun animations and colors based on skill category
  const getGradient = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return 'linear-gradient(90deg, #3B82F6, #60A5FA)'
      case 'language':
        return 'linear-gradient(90deg, #8B5CF6, #A78BFA)'
      case 'styling':
        return 'linear-gradient(90deg, #EC4899, #F472B6)'
      case 'animation':
        return 'linear-gradient(90deg, #F59E0B, #FBBF24)'
      case 'tools':
        return 'linear-gradient(90deg, #10B981, #34D399)'
      case 'state':
        return 'linear-gradient(90deg, #6366F1, #818CF8)'
      case 'markup':
        return 'linear-gradient(90deg, #EF4444, #F87171)'
      case 'desktop':
        return 'linear-gradient(90deg, #FBBF24, #F59E0B)'
      default:
        return 'linear-gradient(90deg, #6B7280, #9CA3AF)'
    }
  }

  // Fun phrases for different skill categories
  const getSkillDescription = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return 'Building amazing user experiences 🏗️'
      case 'language':
        return 'Speaking fluent code 💬'
      case 'styling':
        return 'Making things beautiful ✨'
      case 'animation':
        return 'Bringing interfaces to life 🎭'
      case 'tools':
        return 'Equipped for any challenge 🛠️'
      case 'state':
        return 'Managing all the things 🧠'
      case 'markup':
        return 'Structuring the digital world 📐'
      case 'desktop':
        return 'Crafting desktop magic 🖥️'
      default:
        return 'Creating digital magic ✨'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className='group bg-muted rounded-md p-4'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className='mb-2 flex items-center justify-between'
        whileHover={{ scale: 1.02 }}
      >
        <span className='flex items-center gap-2 font-medium'>
          <motion.span
            animate={{
              rotate: isHovered ? [0, 10, -10, 0] : 0,
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image src={icon} alt={`${name} icon`} width={24} height={24} />
          </motion.span>
          {name}
        </span>
        <motion.span
          className='bg-muted/70 text-muted-foreground rounded-full px-2 py-0.5 text-xs'
          whileHover={{ scale: 1.05 }}
        >
          {category}
        </motion.span>
      </motion.div>

      <div className='bg-muted/50 h-2 w-full overflow-hidden rounded-full'>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: 'easeOut',
          }}
          className='h-full rounded-full'
          style={{
            background: isHovered ? getGradient(category) : '',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
        transition={{ duration: 0.3 }}
        className={cn('text-muted-foreground mt-1 text-xs')}
      >
        {getSkillDescription(category)}
      </motion.div>
    </motion.div>
  )
}
