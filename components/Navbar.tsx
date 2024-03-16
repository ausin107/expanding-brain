'use client'
import Link from 'next/link'
import React from 'react'
import { openSidebar, closeSidebar } from '@/lib/features/sidebarSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
function Navbar() {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state) => state.sidebar.isOpen)
  const handleToggleSidebar = () => {
    isOpen ? dispatch(closeSidebar()) : dispatch(openSidebar())
  }
  return (
    <header className='w-full xl:px-32 xl:pt-16 lg:px-12 lg:pt-10 md:pt-16 md:px-8 pt-10 px-6 fixed top-0 z-10 flex flex-row items-center justify-between md:justify-normal'>
      <h1 className='text-primary lg:text-3xl md:text-xl text-2xl font-bold lg:mr-10 mr-5'>Expading Brain</h1>
      <nav className='md:flex flex-row text-third xl:text-base text-base font-bold hidden'>
        <Link href='/' className='lg:mr-10 md:mr-5 hover:text-white'>
          HOME
        </Link>
        <Link href='' className='lg:mr-10 md:mr-5 hover:text-white'>
          AIRDROP
        </Link>
        <Link href='' className='lg:mr-10 md:mr-5 hover:text-white'>
          ABOUT
        </Link>
        <Link href='' className='lg:mr-10 md:mr-5 hover:text-white'>
          LEADERBOARD
        </Link>
        <div className='cursor-pointer'>
          <svg viewBox='0 0 24.00 24.00' fill='none' width={24} height={24} xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
              stroke='#9BA885'
              strokeWidth='1.8960000000000001'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998'
              stroke='#9BA885'
              strokeWidth='1.8960000000000001'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M15 3C16.95 8.84 16.95 15.16 15 21'
              stroke='#9BA885'
              strokeWidth='1.8960000000000001'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M3 16V15C8.84 16.95 15.16 16.95 21 15V16'
              stroke='#9BA885'
              strokeWidth='1.8960000000000001'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001'
              stroke='#9BA885'
              strokeWidth='1.8960000000000001'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
          </svg>
        </div>
      </nav>
      <nav className='md:hidden'>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          width={24}
          height={24}
          onClick={handleToggleSidebar}>
          <path
            d='M4 6H20M4 12H20M4 18H20'
            className='stroke-primary'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'></path>
        </svg>
        {isOpen && <div className='w-[100vw] h-[100vh] absolute top-20 left-0 bg-black opacity-30'></div>}
      </nav>
    </header>
  )
}

export default Navbar
