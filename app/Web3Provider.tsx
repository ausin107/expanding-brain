'use client'
import { getDefaultConfig, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { argentWallet, trustWallet, ledgerWallet } from '@rainbow-me/rainbowkit/wallets'
import { WagmiProvider } from 'wagmi'
import { blast } from 'wagmi/chains'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi/react'
const { wallets } = getDefaultWallets()
const queryClient = new QueryClient()

const config = getDefaultConfig({
  appName: 'Expanding Brain',
  appUrl: 'https://connectwallet.pro/',
  appDescription: 'Connect Wallet',
  projectId: `${process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID}`,
  wallets: [
    ...wallets,
    {
      groupName: 'Other',
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [blast],
  ssr: true,
})
createWeb3Modal({
  wagmiConfig: config,
  projectId: `${process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID}`,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
})
function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Web3Provider
