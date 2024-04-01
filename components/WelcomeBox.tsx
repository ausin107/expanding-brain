'use client'
import { useSearchParams } from 'next/navigation'

function WelcomeBox() {
  const searchParams = useSearchParams()
  const title = searchParams?.get('title') || 'Welcome to Expanding Brain'
  const desc = searchParams?.get('desc') || 'Claim your $EBC Airdrop'
  return (
    <div className='flex flex-col items-center justify-center xl:mb-10 lg:mb-8 mb-10 xl:py-10 xl:px-32 lg:py-8 lg:px-28 md:py-10 md:px-12 py-7 px-12 md:border-8 border-4 border-third border-opacity-30'>
      <h1 className='xl:text-4xl lg:text-2xl md:text-4xl text-xl text-center font-bold text-primary mb-5'>{title}</h1>
      <h3 className='text-secondary xl:text-2xl lg:text-lg md:text-xl text-base text-center font-bold'>{desc}</h3>
    </div>
  )
}

export default WelcomeBox
