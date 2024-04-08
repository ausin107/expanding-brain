import { sendTwitterConversion } from '@/utils/twitterTracking'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { twMerge } from 'tailwind-merge'
function ConnectBox() {
  return (
    <div className=''>
      <h5 className='text-secondary lg:text-2xl md:text-3xl text-xl mb-8 text-center'>
        Connect Your Wallet to Use the dAPP
      </h5>
      <div className={twMerge('flex items-center flex-col flex-wrap')}>
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
                          'md:flex-none py-5 xl:w-[28rem] lg:w-80 md:w-80 w-56 border-4 border-[#2422e5] rounded-lg bg-[#2422e5] hover:scale-105 text-secondary font-bold xl:text-2xl lg:text-lg md:text-xl text-base uppercase'
                        )}>
                        Connect Wallet
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
      </div>
    </div>
  )
}

export default ConnectBox
