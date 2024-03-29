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
              pathName.includes('/airdrop') && 'text-secondary'
            )}>
            <Link onClick={handleToggleSidebar} href='/airdrop'>
              AIRDROP
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
          <div className='md:py-6 md:px-12 py-5 px-8 md:text-xl text-base border-b-2 border-third'>
            <Link onClick={handleToggleSidebar} href='/'>
              LEADERBOARD
            </Link>
          </div>
          <div className='md:py-6 md:px-12 py-5 px-8 md:text-xl text-base border-b-2 border-third flex'>
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
          <div className='md:py-6 md:px-12 py-5 px-8 md:text-xl text-base border-b-2 border-third flex'>
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
          <div className='md:py-6 md:px-12 py-5 px-8 md:text-xl text-base border-b-2 border-third flex'>
            <svg viewBox='0 0 24 24' width={30} height={30} fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                <path
                  d='M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z'
                  className='icon fill-third'></path>
              </g>
            </svg>
            <div className='ml-3'>DISCORD</div>
          </div>
          <div className='md:py-6 md:px-12 py-5 px-8 md:text-xl text-base border-b-2 border-third flex'>
            <ConnectButton.Custom>
              {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
                const ready = mounted
                const connected = ready && account && chain
                return (
                  <div
                    {...(!ready && {
                      'aria-hidden': true,
                      style: {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      },
                    })}>
                    {(() => {
                      if (!connected) {
                        return (
                          <button onClick={openConnectModal} type='button' className='text-yellow-300'>
                            CONNECT WALLET
                          </button>
                        )
                      }
                      if (chain.unsupported) {
                        return (
                          <button onClick={openChainModal} type='button' className='text-red-600'>
                            WRONG NETWORK
                          </button>
                        )
                      }
                      return (
                        <button onClick={openAccountModal} type='button' className='text-yellow-300'>
                          {account.displayName}
                        </button>
                      )
                    })()}
                  </div>
                )
              }}
            </ConnectButton.Custom>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MobileNavbar
