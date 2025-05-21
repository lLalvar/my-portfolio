'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { navItems } from '@/data/navItems'
import { cn } from '@/lib/utils'

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'

function NavItems() {
  const pathName = usePathname()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <>
      <div className='block md:hidden'>
        <Sheet open={isSheetOpen} onOpenChange={(open) => setIsSheetOpen(open)}>
          <SheetTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='absolute -end-2 top-1/2 -translate-y-1/2 border-[#cad4e1]'
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Navigation</SheetTitle>
            <ul className='flex flex-col pt-4'>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className={cn(
                      'px-4 py-2 whitespace-nowrap text-[#7f817d] transition-colors',
                      pathName === item.url
                        ? 'text-foreground'
                        : 'hover:text-foreground'
                    )}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
      <ul className='navItems-center hidden md:flex'>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.url}
              className={cn(
                'px-4 py-2 whitespace-nowrap text-[#7f817d] transition-colors',
                pathName === item.url
                  ? 'text-foreground'
                  : 'hover:text-foreground'
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavItems
