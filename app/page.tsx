'use client'
import Link from 'next/link'
import { Suspense } from 'react'
import WelcomeBox from '@/components/WelcomeBox'
import CountDown from '@/components/CountDown'
import ConnectBox from '@/components/ConnectBox'
import { useSearchParams } from 'next/navigation'

function Home() {
  const searchParam = useSearchParams()
  const countQueryString = searchParam.get('count') || 'Try our dapp in'
  return (
    <main className='lg:h-auto h-fit md:h-screen min-h-screen flex flex-col items-center lg:pt-32 md:pt-40 pt-24 px-5 bg-gradient-to-b from-black to-[#121c1c]'>
      <Suspense>
        <WelcomeBox />
        <ConnectBox />
        <div className='flex flex-col items-center justify-center mt-8 md:mb-10 mb-5'>
          <h5 className='mb-8 text-lg text-secondary'>{countQueryString}</h5>
          <CountDown targetDate='2024-06-07' />
        </div>
      </Suspense>
      <div className='absolute bottom-0 w-full h-[4.5rem] flex items-center justify-end md:px-10 px-5'>
        <Link href='/privacy' className='hover:text-primary md:mr-10 mr-5 md:text-base text-sm text-secondary'>
          Privacy
        </Link>
        <Link href='/terms' className='hover:text-primary md:text-base text-sm text-secondary'>
          Terms and Conditions
        </Link>
      </div>
    </main>
  )
}

export default Home
