import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className='px-36 pb-5 pt-16 fixed top-0 z-10 flex flex-row items-center'>
      <h1 className='text-primary text-3xl font-bold mr-10'>Expading Brain</h1>
      <nav className='flex flex-row text-third lg:text-base font-bold'>
        <Link href='' className='md:mr-10 hover:text-white'>
          HOME
        </Link>
        <Link href='' className='md:mr-10 hover:text-white'>
          AIRDROP
        </Link>
        <Link href='' className='md:mr-10 hover:text-white'>
          ABOUT
        </Link>
        <Link href='' className='md:mr-10 hover:text-white'>
          LEADERBOARD
        </Link>
        <div className='cursor-pointer'>
          <svg viewBox='0 0 24.00 24.00' fill='none' width={24} height={24} xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
              stroke='#9BA885'
              stroke-width='1.8960000000000001'
              stroke-linecap='round'
              stroke-linejoin='round'></path>
            <path
              d='M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998'
              stroke='#9BA885'
              stroke-width='1.8960000000000001'
              stroke-linecap='round'
              stroke-linejoin='round'></path>
            <path
              d='M15 3C16.95 8.84 16.95 15.16 15 21'
              stroke='#9BA885'
              stroke-width='1.8960000000000001'
              stroke-linecap='round'
              stroke-linejoin='round'></path>
            <path
              d='M3 16V15C8.84 16.95 15.16 16.95 21 15V16'
              stroke='#9BA885'
              stroke-width='1.8960000000000001'
              stroke-linecap='round'
              stroke-linejoin='round'></path>
            <path
              d='M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001'
              stroke='#9BA885'
              stroke-width='1.8960000000000001'
              stroke-linecap='round'
              stroke-linejoin='round'></path>
          </svg>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
