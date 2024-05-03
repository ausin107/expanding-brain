import { openSidebar, closeSidebar } from '@/lib/features/sidebarSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ClassNameValue, twMerge } from 'tailwind-merge'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ConnectButton } from '@rainbow-me/rainbowkit'

type MobileProps = {
  className?: ClassNameValue
}
function MobileNavbar({ className }: MobileProps) {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state) => state.sidebar.isOpen)
  const handleToggleSidebar = () => {
    isOpen ? dispatch(closeSidebar()) : dispatch(openSidebar())
  }
  const pathName = usePathname()

  return (
    <nav className={twMerge('lg:hidden', className)}>
      <svg
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        className='fill-none md:w-8 md:h-8 w-6 h-6'
        onClick={handleToggleSidebar}>
        <path
          d='M4 6H20M4 12H20M4 18H20'
          className='stroke-primary'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'></path>
      </svg>
      <div
        className={twMerge(
          'w-[100vw] h-[100vh] absolute md:top-28 top-20 left-0 mt-3 border-t-4 border-third text-third font-semibold opacity-0 transition duration-500 invisible',
          isOpen && 'opacity-1 duration-500 transition visible'
        )}>
        <div className='w-full h-full bg-black opacity-70 absolute'></div>
        <div className='absolute w-full z-10'>
          <div
            className={twMerge(
              'md:py-6 md:px-12 py-5 px-8 md:text-xl text-base border-b-2 border-third',
              pathName == '/' && 'text-secondary'
            )}>
            <Link onClick={handleToggleSidebar} href='/'>
              HOME
            </Link>
          </div>
          <div
            className={twMerge(
              'md:py-6 md:px-12 py-5 px-8 md:text-xl text-base border-b-2 border-third',
              pathName.includes('/about') && 'text-secondary'
            )}>
            <Link onClick={handleToggleSidebar} href='/about'>
              ABOUT
            </Link>
          </div>
          <div className='md:py-6 md:px-12 py-5 px-8 md:text-xl text-base border-b-2 border-third flex items-center'>
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
            <div className='ml-3'>LANGUAGE</div>
          </div>
          <div className='md:py-6 md:px-12 py-5 px-8 md:text-xl text-base border-b-2 border-third flex items-center'>
            <svg
              viewBox='0 -2 20 20'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              width={24}
              height={24}>
              <g id='SVGRepo_iconCarrier'>
                <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                  <g
                    id='Dribbble-Light-Preview'
                    transform='translate(-60.000000, -7521.000000)'
                    className='icon fill-third'>
                    <g id='icons' transform='translate(56.000000, 160.000000)'>
                      <path
                        stroke='none'
                        d='M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705'></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <div className='ml-3'>TWITTER</div>
          </div>
          <div className='md:py-6 md:px-12 py-5 px-8 md:text-xl text-base border-b-2 border-third flex items-center'>
            <svg
              className='fill-third'
              viewBox='0 0 32 32'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}>
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                <path d='M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z'></path>
              </g>
            </svg>
            <div className='ml-3'>TELEGRAM</div>
          </div>
          <Link
            onClick={handleToggleSidebar}
            href='/swap'
            className='md:py-6 md:px-12 py-5 px-8 md:text-xl text-base border-b-2 border-third flex items-center text-yellow-300'>
            CONNECT WALLET
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default MobileNavbar
