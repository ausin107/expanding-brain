import { twMerge } from 'tailwind-merge'
import SwapBox from '@/components/SwapBox'
import AirdropButton from '@/components/Button'
import InviteBox from '@/components/InviteBox'
import Image from 'next/image'
import Blast_Logo from '@/assets/Blast_Logo.webp'
export default function Home() {
  return (
    <main
      className={twMerge(
        'w-[100vw] md:h-[95vh] min-h-[95vh] pb-12 md:pb-0 md:overflow-hidden overflow-x-hidden bg-gradient-to-b from-black to-[#121c1c]'
      )}>
      <div className='lg:pt-40 md:pt-40 pt-32 h-full flex lg:flex-row flex-col md:w-full lg:justify-between xl:pl-20 lg:pl-8 lg:px-0 md:px-16 px-5 md:items-start lg:items-start justify-normal overflow-hidden'>
        <article className=''>
          <div className='lg:max-w-[33rem] md:max-w-[35rem] w-full md:flex lg:block items-start flex-col'>
            <h2 className='lg:text-4xl md:text-5xl text-3xl font-semibold lg:text-left text-secondary md:mb-10 mb-7 tracking-wide  lg:!leading-[3rem] md:!leading-[3.5rem] uppercase'>
              The Community Coin of Blast
            </h2>
            <p className='text-[#ccd4e0] font-semibold md:text-xl text-lg md:mb-10 mb-7 lg:text-left md:!leading-10'>
              New Ethereum game! Join & earn! Calling builders, creators & crypto enthusiasts!
            </p>
            <AirdropButton
              className='font-bold xl:px-24 lg:px-16'
              containerClass='lg:justify-start justify-center hidden lg:flex'>
              JOIN NOW
            </AirdropButton>
          </div>
        </article>
        <aside className='h-[90%] xl:px-10 lg:px-5 flex lg:items-center md:items-start items-center flex-col lg:border-l border-third md:border-t-0 md:pt-0 border-t pt-7'>
          <InviteBox className='md:mb-10 mb-7' />
          <section className='flex flex-col lg:items-center md:items-start items-center'>
            <h3 className='text-light font-bold lg:mb-5 mb-7'>BUILT ON</h3>
            <Image src={Blast_Logo} alt='Blast Logo image' className='xl:w-full' />
          </section>
        </aside>
      </div>
    </main>
  )
}
