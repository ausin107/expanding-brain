'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { ClassNameValue } from 'tailwind-merge'
import WelcomeBox from './WelcomeBox'
import CountDown from './CountDown'
import { Suspense } from 'react'
import { sendTwitterConversion } from '@/utils/twitterTracking'
type mainContainerProps = {
  children?: React.ReactNode
  className?: ClassNameValue
}

function MainContainer({ children, className }: mainContainerProps) {
  return (
    <main className='lg:h-auto h-fit md:h-screen min-h-screen flex flex-col items-center lg:pt-32 md:pt-40 pt-24 px-5 bg-gradient-to-b from-black to-[#121c1c]'>
      <Suspense>
        <WelcomeBox />
      </Suspense>
      <h5 className='text-secondary lg:text-2xl md:text-3xl text-xl mb-8 text-center'>
        Connect Your Wallet to to Use the dAPP
      </h5>
      <div className='md:mb-0 mb-14'>
        <div className={twMerge('flex items-center flex-col md:mb-10 mb-5 flex-wrap')}>
          <ConnectButton.Custom>
            {({ account, chain, openConnectModal, mounted, openAccountModal }) => {
              const ready = mounted
              const connected = ready && account && chain
              const buttonTracking = () => {
                openConnectModal()
                sendTwitterConversion()
              }
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
                          onClick={buttonTracking}
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
                          {account?.displayName}
                        </button>
                      )
                  })()}
                </div>
              )
            }}
          </ConnectButton.Custom>
          <div className='flex flex-col items-center justify-center mt-8'>
            <h5 className='mb-8 text-lg text-secondary'>Try our dapp in</h5>
            <CountDown targetDate='2024-04-09' />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 w-full h-[4.5rem] flex items-center justify-end md:px-10 px-5'>
        <Link
          href='https://expandingbrain.ai/privacy.php'
          className='hover:text-primary md:mr-10 mr-5 md:text-base text-sm text-secondary'>
          Privacy
        </Link>
        <Link
          href='https://expandingbrain.ai/terms-and-conditions.php'
          className='hover:text-primary md:text-base text-sm text-secondary'>
          Terms and Conditions
        </Link>
      </div>
    </main>
  )
}

export default MainContainer
