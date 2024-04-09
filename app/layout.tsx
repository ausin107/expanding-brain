import '@rainbow-me/rainbowkit/styles.css'
import Head from 'next/head'
import './globals.css'
import Navbar from '@/components/Navbar'
import StoreProvider from './StoreProvider'
import Web3Provider from './Web3Provider'
import { Suspense } from 'react'
import Script from 'next/script'
import localFont from 'next/font/local'
import { twMerge } from 'tailwind-merge'
const geomGraphic = localFont({ src: '../public/fonts/Geom Graphic W03 Regular.woff2' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Script src='/initTwitter.js' strategy='lazyOnload' />
      <Script type='text/javascript' src='//script.crazyegg.com/pages/scripts/0123/1324.js' async />
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Expanding Brain</title>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </Head>
      <body className={twMerge('w-[100vw] overflow-x-hidden relative', geomGraphic.className)}>
        <Web3Provider>
          <StoreProvider>
            <Suspense>
              <Navbar />
            </Suspense>
            {children}
          </StoreProvider>
        </Web3Provider>
      </body>
    </html>
  )
}
