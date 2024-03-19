import '@rainbow-me/rainbowkit/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StoreProvider from './StoreProvider'
import Web3Provider from './Web3Provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='w-[100vw] overflow-x-hidden relative'>
        <Web3Provider>
          <StoreProvider>
            <Navbar />
            {children}
            <Footer />
          </StoreProvider>
        </Web3Provider>
      </body>
    </html>
  )
}
