'use client'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import Logo from '@/assets/Logo.png'
import { LoginButton } from './LoginButton'
function Navbar() {
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const title = searchParams.get('title') || 'Expanding Brain'
  return (
    <header
      className={twMerge(
        'w-[100vw] xl:px-20 xl:py-6 lg:px-8 lg:py-6 md:py-5 md:px-14 pt-2 px-6 fixed top-0 z-10 flex flex-row items-center justify-between lg:border-b border-third navbar-bg',
        pathName == '/' && 'border-none md:bg-transparent navbar-bg'
      )}>
      <Link href='/' className='flex items-center'>
        <h1 className='text-primary xl:text-2xl lg:text-base md:text-2xl text-lg font-bold mr-5 lg:w-full uppercase'>
          {title}
        </h1>
      </Link>
      <div className='block'>
        <LoginButton />
      </div>
    </header>
  )
}

export default Navbar
