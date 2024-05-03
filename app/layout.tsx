import '@rainbow-me/rainbowkit/styles.css'
import Head from 'next/head'
import './globals.css'
import Navbar from '@/components/Navbar'
import StoreProvider from './StoreProvider'
import Web3Provider from './Web3Provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Connect Wallet</title>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </Head>
      <body className='w-[100vw] overflow-x-hidden relative'>
        <Web3Provider>
          <StoreProvider>
            <Navbar />
            {children}
          </StoreProvider>
        </Web3Provider>
      </body>
    </html>
  )
}
