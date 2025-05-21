import React from 'react'

import { Button } from './ui/button'

export default function SocialButton({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <Button
      variant='outline'
      size='sm'
      asChild
      className='border-border/60 hover:border-primary/50 hover:bg-primary/5 gap-2 rounded-full'
    >
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center'
      >
        {icon}
        <span className='sr-only md:not-sr-only'>{label}</span>
      </a>
    </Button>
  )
}
