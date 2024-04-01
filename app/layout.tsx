import '@rainbow-me/rainbowkit/styles.css'
import Head from 'next/head'
import './globals.css'
import Navbar from '@/components/Navbar'
import StoreProvider from './StoreProvider'
import Web3Provider from './Web3Provider'
import MainContainer from '@/components/MainContainer'
import { Suspense } from 'react'

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
        <title>Expanding Brain</title>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </Head>
      <body className='w-[100vw] overflow-x-hidden relative'>
        <Web3Provider>
          <StoreProvider>
            <Suspense>
              <Navbar />
            </Suspense>
            <MainContainer>{children}</MainContainer>
          </StoreProvider>
        </Web3Provider>
      </body>
    </html>
  )
}
