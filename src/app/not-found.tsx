import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function NotFound() {
  return (
    <div className='text-foreground flex h-[calc(100dvh-414px)] flex-col items-center justify-center gap-4 pt-12'>
      <div className='text-6xl font-bold'>404</div>
      <h1 className='text-2xl'>Not Found</h1>
      <Link
        href='/'
        className={cn(
          buttonVariants({
            className: 'px-6',
          })
        )}
      >
        Go Home
      </Link>
    </div>
  )
}
