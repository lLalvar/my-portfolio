'use client'

import { motion } from 'framer-motion'

export default function FunNavLink({
  href,
  children,
  isActive,
}: {
  href: string
  children: React.ReactNode
  isActive: boolean
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      className={`text-foreground relative font-medium transition-colors ${
        isActive ? 'text-primary' : 'hover:text-primary/80'
      }`}
    >
      {children}
      {isActive && (
        <motion.span
          layoutId='activeNav'
          className='bg-primary absolute right-0 -bottom-1 left-0 h-0.5'
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      )}
    </motion.a>
  )
}
