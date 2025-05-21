'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

import SignInDialog from '../auth/SignInDialog'
import SignUpDialog from '../auth/SignUpDialog'
import { Spinner } from '../ui/spinner'
import NavItems from './NavItems'

export default function Header() {
  return (
    <header>
      <nav className='relative flex w-full items-center justify-between gap-20'>
        <div className='flex items-center gap-20'>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt='logo'
              width={155}
              height={44}
              priority
              className='h-[44px] w-[155px] transition-all duration-300 ease-in-out'
            />
          </Link>
          <NavItems />
        </div>
        <div className='flex gap-2'>
          <Suspense fallback={<Spinner isSpinning={true} />}>
            <SignUpDialog />
            <SignInDialog />
          </Suspense>
        </div>
      </nav>
    </header>
  )
}
