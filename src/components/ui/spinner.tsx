import * as React from 'react'

import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const spinnerVariants = cva(
  'aspect-square animate-spin rounded-full border-b-4 border-primary',
  {
    variants: {
      size: {
        default: 'w-36 h-36',
        sm: 'w-4 h-4',
        lg: 'w-12 h-12',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

const overlayVariants = cva('z-0', {
  variants: {
    background: {
      true: 'fixed inset-0 bg-black/10',
      false: '',
    },
  },
  defaultVariants: {
    background: true,
  },
})

const containerVariants = cva('z-10 flex items-center justify-center', {
  variants: {
    position: {
      fixed: 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      centered: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      inline: 'relative',
    },
  },
  defaultVariants: {
    position: 'fixed',
  },
})

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  isSpinning: boolean
  background?: boolean
  position?: 'fixed' | 'centered' | 'inline'
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      className,
      isSpinning,
      background = true,
      position = 'fixed',
      size,
      ...props
    },
    ref
  ) => {
    if (!isSpinning) return null

    return (
      <>
        <div className={overlayVariants({ background })} aria-hidden='true' />
        <div
          className={cn(containerVariants({ position }), className)}
          ref={ref}
          role='status'
          aria-label='Loading'
          {...props}
        >
          <div className={cn(spinnerVariants({ size }))} />
        </div>
      </>
    )
  }
)
Spinner.displayName = 'Spinner'

export { Spinner }
