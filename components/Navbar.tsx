'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { openSidebar, closeSidebar } from '@/lib/features/sidebarSlice'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import Logo from '@/assets/Logo.png'
import { LoginButton } from './LoginButton'
import MobileNavbar from './MobileNavbar'
function Navbar() {
  const [currentTabs, setTabs] = useState(null)
  const tabRefs = useRef<HTMLAnchorElement[] | null[]>([])

  const pathName = usePathname()
  return (
    <header
      className={twMerge(
        'w-[100vw] xl:px-20 xl:py-6 lg:px-8 lg:pt-10 md:py-10 md:px-8 pt-2 px-6 fixed top-0 z-10 flex flex-row items-center justify-between md:justify-normal lg:border-b border-third bg-[#11140c]',
        pathName == '/' && 'border-none bg-transparent'
      )}>
      <Link href='/' className='flex items-center'>
        <Image src={Logo} alt='Image' className='w-20' />
        <h1 className='text-primary xl:text-3xl lg:text-base md:text-xl text-lg font-bold mr-5 lg:w-full md:w-1/2'>
          Expanding Brain
        </h1>
      </Link>
      <nav className='md:flex flex-row text-third xl:text-base items-center text-base font-bold hidden mr-auto'>
        <Link href='/' className={twMerge('md:mr-5 hover:text-white', pathName == '/' && 'text-secondary')}>
          HOME
        </Link>
        <Link
          href='/airdrop'
          className={twMerge('md:mr-5 hover:text-white', pathName.includes('/airdrop') && 'text-secondary')}>
          AIRDROP
        </Link>
        <Link
          href='/about'
          className={twMerge('md:mr-5 hover:text-white', pathName.includes('/about') && 'text-secondary')}>
          ABOUT
        </Link>
        {/* <Link
          href=''
          className={twMerge('md:mr-5 hover:text-white', pathName.includes('/leaderboard') && 'text-secondary')}>
          LEADERBOARD
        </Link> */}
        <div className='cursor-pointer'>
          <svg viewBox='0 0 24.00 24.00' fill='none' width={24} height={24} xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
              className='stroke-third'
              strokeWidth='1.8960000000000001'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998'
              className='stroke-third'
              strokeWidth='1.8960000000000001'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M15 3C16.95 8.84 16.95 15.16 15 21'
              className='stroke-third'
              strokeWidth='1.8960000000000001'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M3 16V15C8.84 16.95 15.16 16.95 21 15V16'
              className='stroke-third'
              strokeWidth='1.8960000000000001'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001'
              className='stroke-third'
              strokeWidth='1.8960000000000001'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
          </svg>
        </div>
      </nav>
      <div className='hidden md:block'>
        <LoginButton />
      </div>
      <MobileNavbar />
    </header>
  )
}

export default Navbar
