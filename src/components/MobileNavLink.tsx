import { motion } from 'framer-motion'

export default function MobileNavLink({
  href,
  setMobileMenuOpen,
  children,
  isActive,
}: {
  href: string
  setMobileMenuOpen: (open: boolean) => void
  children: React.ReactNode
  isActive: boolean
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    setMobileMenuOpen(false)

    // Fix for the scroll behavior
    setTimeout(() => {
      const targetId = href.replace('#', '')
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }, 0)
  }

  return (
    <motion.a
      whileHover={{ scale: 1.05, x: 5 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      onClick={handleClick}
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
