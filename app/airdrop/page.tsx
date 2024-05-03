'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
type StateObj = {
  isFllow: boolean
  isVerify: boolean
  isLoading: boolean
}
function Airdrop({}) {
  const [isFllowTw, setFllow] = useState({ isFllow: false, isVerify: false, isLoading: false })
  const [isJoinTele, setJoin] = useState({ isFllow: false, isVerify: false, isLoading: false })
  const [currentTask, setCurrentTask] = useState(0)
  const handleFllowTw = () => {
    setFllow({ isFllow: true, isVerify: false, isLoading: false })
    window.open('https://twitter.com/home')
  }
  const handleVerify = () => {
    setFllow({ isFllow: true, isVerify: false, isLoading: true })
    setTimeout(() => {
      setFllow({ isFllow: true, isVerify: true, isLoading: false })
      setCurrentTask(1)
    }, 2500)
  }
  const handleJoinTele = () => {
    setJoin({ isFllow: true, isVerify: false, isLoading: false })
    window.open('https://twitter.com/home')
  }
  const handleVerifyTele = () => {
    setJoin({ isFllow: true, isVerify: false, isLoading: true })
    setTimeout(() => {
      setJoin({ isFllow: true, isVerify: true, isLoading: false })
      setCurrentTask(2)
    }, 2500)
  }
  const TaskComponent = (index: number, verify: StateObj) => {
    if (verify.isVerify) {
      return (
        <svg viewBox='0 0 24 24' width={50} height={50} fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
          <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
          <g id='SVGRepo_iconCarrier'>
            <path
              d='M4 12.6111L8.92308 17.5L20 6.5'
              stroke='#000000'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'></path>
          </g>
        </svg>
      )
    } else if (verify.isLoading) {
      return (
        <svg
          viewBox='0 0 24 24'
          width={40}
          height={40}
          className='fill-none animate-spin'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612'
            stroke='#ffffff'
            stroke-width='3.55556'
            stroke-linecap='round'></path>
        </svg>
      )
    } else return <div>{index}</div>
  }
  return (
    <div className='lg:h-auto min-h-screen flex flex-col items-center md:pt-40 pt-32 pb-16 px-5 bg-gradient-to-b from-black to-[#121c1c]'>
      <div className='flex flex-col items-center justify-center xl:mb-10 lg:mb-8 mb-10 xl:py-10 xl:px-32 lg:py-8 lg:px-28 md:py-10 md:px-12 py-7 px-12 md:border-8 border-4 border-third border-opacity-30'>
        <h1 className='xl:text-4xl lg:text-2xl md:text-4xl text-xl text-center font-bold text-primary mb-5'>
          Welcome to Expanding Brain
        </h1>
        <h3 className='text-secondary xl:text-2xl lg:text-lg md:text-xl text-base text-center font-bold'>
          Claim your $EXPC Airdrop
        </h3>
      </div>
      <h5 className='text-secondary lg:text-2xl md:text-3xl text-xl mb-8'>Verify Your Eligibility</h5>
      <div>
        <div
          className={twMerge(
            'flex items-center md:mb-10 mb-5 flex-wrap',
            currentTask != 0 && 'opacity-50 cursor-not-allowed'
          )}>
          <div
            className={twMerge(
              'w-16 h-16 flex items-center justify-center bg-[#2422e5] rounded-2xl text-secondary text-2xl font-bold md:mr-10 mr-5',
              isFllowTw.isVerify && 'bg-yellow-400'
            )}>
            {TaskComponent(1, isFllowTw)}
          </div>
          <button
            onClick={handleFllowTw}
            className={twMerge(
              'md:flex-none py-5 xl:w-[28rem] lg:w-80 md:w-80 w-56 border-4 border-[#2422e5] rounded-lg hover:bg-[#2422e5] text-secondary font-bold xl:text-2xl lg:text-lg md:text-xl text-base uppercase md:mr-7 mr-0',
              currentTask != 0 && 'cursor-not-allowed hover:bg-transparent'
            )}>
            Follow twitter
          </button>
          <button
            onClick={handleVerify}
            className={twMerge(
              'uppercase text-xl text-secondary p-3 border-red-500 hover:bg-red-500 border-2 text-center invisible basis-full md:basis-auto hidden md:block md:mt-0 mt-5',
              currentTask != 0 && 'cursor-not-allowed hover:bg-transparent',
              isFllowTw.isFllow && !isFllowTw.isVerify && 'visible block'
            )}>
            verify
          </button>
        </div>
        <div
          className={twMerge(
            'flex items-center md:mb-10 mb-5 flex-wrap',
            currentTask != 1 && 'opacity-50 cursor-not-allowed'
          )}>
          <div
            className={twMerge(
              'w-16 h-16 flex items-center justify-center bg-[#2422e5] rounded-2xl text-secondary text-2xl font-bold md:mr-10 mr-5',
              isJoinTele.isVerify && 'bg-yellow-400'
            )}>
            {TaskComponent(2, isJoinTele)}
          </div>
          <button
            onClick={handleJoinTele}
            className={twMerge(
              'md:flex-none py-5 xl:w-[28rem] lg:w-80 md:w-80 w-56 border-4 border-[#2422e5] rounded-lg hover:bg-[#2422e5] text-secondary font-bold xl:text-2xl lg:text-lg md:text-xl text-base uppercase md:mr-7 mr-0',
              currentTask != 1 && 'cursor-not-allowed hover:bg-transparent'
            )}>
            join telegram
          </button>
          <button
            onClick={handleVerifyTele}
            className={twMerge(
              'uppercase text-xl text-secondary p-3 border-red-500 hover:bg-red-500 border-2 text-center invisible basis-full md:basis-auto hidden md:block md:mt-0 mt-5',
              currentTask != 1 && 'cursor-not-allowed hover:bg-transparent',
              isJoinTele.isFllow && !isJoinTele.isVerify && 'visible block'
            )}>
            verify
          </button>
        </div>
        <div
          className={twMerge(
            'flex items-center md:mb-10 mb-5 flex-wrap',
            currentTask != 2 && 'opacity-50 cursor-not-allowed'
          )}>
          <div
            className={twMerge(
              'w-16 h-16 flex items-center justify-center bg-[#2422e5] rounded-2xl text-secondary text-2xl font-bold md:mr-10 mr-5'
            )}>
            {TaskComponent(3, { isFllow: false, isVerify: false, isLoading: false })}
          </div>
          <ConnectButton.Custom>
            {({ account, chain, openConnectModal, mounted }) => {
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
                        <button
                          onClick={openConnectModal}
                          className={twMerge(
                            'md:flex-none py-5 xl:w-[28rem] lg:w-80 md:w-80 w-56 border-4 border-[#2422e5] rounded-lg hover:bg-[#2422e5] text-secondary font-bold xl:text-2xl lg:text-lg md:text-xl text-base uppercase md:mr-7 mr-0',
                            currentTask != 2 && 'cursor-not-allowed hover:bg-transparent'
                          )}>
                          Connect walllet
                        </button>
                      )
                    }
                    if (connected) setCurrentTask(3)
                  })()}
                </div>
              )
            }}
          </ConnectButton.Custom>
        </div>
      </div>
    </div>
  )
}

export default Airdrop
