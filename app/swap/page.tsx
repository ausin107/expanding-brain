import { twMerge } from 'tailwind-merge'
import SwapBox from '@/components/SwapBox'
import AirdropButton from '@/components/Button'
export default function Swap() {
  return (
    <main
      className={twMerge(
        'w-[100vw] md:h-[95vh] md:overflow-hidden overflow-x-hidden bg-gradient-to-b from-[#081010] to-[#182e2e]'
      )}>
      <div className='lg:pt-40 md:pt-40 pt-32 flex lg:flex-row flex-col md:w-full lg:justify-between xl:pl-20 lg:pl-8 lg:px-0 md:px-24 px-5 md:items-center lg:items-start justify-normal overflow-hidden'>
        <article className='mb-10 lg:mb-0'>
          <div className='lg:max-w-[33rem] md:max-w-[35rem] w-full md:flex lg:block items-center flex-col'>
            <h2 className='xl:text-[42px] lg:text-4xl md:text-3xl text-3xl font-semibold md:text-center lg:text-left text-secondary xl:mb-16 mb-10 tracking-wide'>
              The Community Coin of Blast
            </h2>
            <p className='text-[#ccd4e0] font-semibold lg:text-xl md:text-base text-lg lg:mb-16 md:mb-10 mb-10 md:text-center lg:text-left'>
              New Ethereum game! Join & earn! Calling builders, creators & crypto enthusiasts!
            </p>
            <AirdropButton
              className='font-bold xl:px-24 lg:px-16'
              containerClass='flex lg:justify-start justify-center'>
              JOIN NOW
            </AirdropButton>
          </div>
        </article>
        <SwapBox />
      </div>
    </main>
  )
}
