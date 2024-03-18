import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'

export const LoginButton = () => {
  return (
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
                  <button
                    onClick={openConnectModal}
                    type='button'
                    className='bg-[#2422e5] hover:scale-105 text-white py-3 px-5 rounded-lg text-lg font-bold'>
                    Connect Wallet
                  </button>
                )
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type='button'
                    className='bg-red-600 hover:scale-105 text-white py-3 px-5 rounded-lg text-lg font-bold'>
                    Wrong network
                  </button>
                )
              }
              return (
                <button
                  onClick={openAccountModal}
                  type='button'
                  className='text-lg font-bold bg-secondary hover:scale-105 text-black py-3 px-5 rounded-lg'>
                  {account.displayName}
                </button>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
