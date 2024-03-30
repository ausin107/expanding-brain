import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import { Fragment } from 'react'

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
                    className='bg-[#2422e5] hover:scale-105 text-white py-3 px-5 rounded-lg lg:text-lg md:text-sm font-bold'>
                    Connect
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
                <Fragment>
                  <button
                    onClick={openAccountModal}
                    type='button'
                    className='xl:text-lg lg:text-base md:text-xs font-bold bg-secondary hover:scale-105 text-black py-3 px-5 rounded-lg hidden md:block'>
                    {account.displayName}
                  </button>
                  <div className='block md:hidden'>
                    <ConnectButton accountStatus='avatar' />
                  </div>
                </Fragment>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
