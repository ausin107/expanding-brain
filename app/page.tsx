'use client'
import CountDown from '@/components/CountDown'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
function Home() {
  const searchParams = useSearchParams()
  const title = searchParams.get('title') || 'Welcome to Expanding Brain'
  const desc = searchParams.get('desc') || 'Claim your $EBC Airdrop'
  return (
    <div className='lg:h-auto h-screen min-h-screen flex flex-col items-center md:pt-40 pt-32 pb-16 px-5 bg-gradient-to-b from-black to-[#121c1c]'>
      <div className='flex flex-col items-center justify-center xl:mb-10 lg:mb-8 mb-10 xl:py-10 xl:px-32 lg:py-8 lg:px-28 md:py-10 md:px-12 py-7 px-12 md:border-8 border-4 border-third border-opacity-30'>
        <h1 className='xl:text-4xl lg:text-2xl md:text-4xl text-xl text-center font-bold text-primary mb-5'>{title}</h1>
        <h3 className='text-secondary xl:text-2xl lg:text-lg md:text-xl text-base text-center font-bold'>{desc}</h3>
      </div>
      <h5 className='text-secondary lg:text-2xl md:text-3xl text-xl mb-8 text-center'>
        Connect Your Wallet to to Use the dAPP
      </h5>
      <div>
        <div className={twMerge('flex items-center flex-col md:mb-10 mb-5 flex-wrap')}>
          <ConnectButton.Custom>
            {({ account, chain, openConnectModal, mounted, openAccountModal }) => {
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
                            'md:flex-none py-5 xl:w-[28rem] lg:w-80 md:w-80 w-56 border-4 border-[#2422e5] rounded-lg hover:bg-[#2422e5] text-secondary font-bold xl:text-2xl lg:text-lg md:text-xl text-base uppercase'
                          )}>
                          Connect walllet
                        </button>
                      )
                    }
                    if (connected)
                      return (
                        <button
                          onClick={openAccountModal}
                          type='button'
                          className={twMerge(
                            'md:flex-none py-5 xl:w-[28rem] lg:w-80 md:w-80 w-56 rounded-lg hover:bg-red-600 hover:scale-105 bg-secondary text-black font-bold xl:text-2xl lg:text-lg md:text-xl text-base uppercase'
                          )}>
                          {account.displayName}
                        </button>
                      )
                  })()}
                </div>
              )
            }}
          </ConnectButton.Custom>
          <CountDown targetDate='2024-04-09' />
        </div>
      </div>
    </div>
  )
}

export default Home
