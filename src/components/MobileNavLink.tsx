import { motion } from 'framer-motion'

export default function MobileNavLink({
  href,
  onClick,
  children,
  isActive,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
  isActive: boolean
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.05, x: 5 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      onClick={onClick}
      className={`text-foreground block px-4 py-2 font-medium transition-colors ${
        isActive
          ? 'bg-primary/10 text-primary rounded-md'
          : 'hover:bg-muted/30 hover:text-primary/80 rounded-md'
      }`}
    >
      {children}
    </motion.a>
  )
}
