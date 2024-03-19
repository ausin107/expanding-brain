'use client'
import Image from 'next/image'
import Background from '@/assets/Background.jpg'
import Button from '@/components/Button'
import InviteBox from '@/components/InviteBox'
import Blast_Logo from '@/assets/Blast_Logo.webp'
import { useAppSelector } from '@/lib/hooks'
import { twMerge } from 'tailwind-merge'
export default function Home() {
  const isOpen = useAppSelector((state) => state.sidebar.isOpen)
  return (
    <main className={twMerge('relative w-[100vw] h-[95vh] md:overflow-hidden overflow-x-hidden', isOpen && 'blur')}>
      <Image
        src={Background}
        alt='Background Image'
        className='relative top-0 w-full h-full object-cover object-left lg:object-center'
      />
      <div className='absolute top-0 xl:pt-48 lg:pt-40 md:pt-40 md:px-0 px-5 pt-32 flex lg:flex-row flex-col h-[90%] lg:w-full md:w-3/5 lg:justify-between xl:pl-20 lg:pl-8 md:pl-8 justify-normal overflow-hidden'>
        <article className='mb-10 lg:mb-0'>
          <div className='lg:max-w-[33rem] md:max-w-[35rem] w-full'>
            <h2 className='xl:text-[42px] lg:text-4xl md:text-3xl text-3xl font-semibold text-secondary xl:mb-16 mb-10 tracking-wide'>
              The Community Coin of Blast
            </h2>
            <p className='text-[#ccd4e0] font-semibold lg:text-xl md:text-base text-lg lg:mb-16'>
              New Ethereum game! Join & earn! Calling builders, creators & crypto enthusiasts!
            </p>
            <Button
              className='font-bold xl:px-24 lg:px-16 hidden lg:block'
              containerClass='flex justify-center md:block'>
              JOIN NOW
            </Button>
          </div>
        </article>
        <aside className='xl:px-5 lg:px-5 flex lg:items-center md:items-start items-center flex-col lg:border-l border-third'>
          <InviteBox className='' />
          <section className='flex flex-col lg:items-center md:items-start items-center mt-10'>
            <h3 className='text-light font-bold mb-5'>BUILT ON</h3>
            <Image src={Blast_Logo} alt='Blast Logo image' className='xl:w-full' />
          </section>
        </aside>
      </div>
    </main>
  )
}
