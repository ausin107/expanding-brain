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
    <main
      className={twMerge('md:relative w-[100vw] md:h-[94vh] md:overflow-hidden overflow-x-hidden', isOpen && 'blur')}>
      <Image
        src={Background}
        alt='Background Image'
        className='md:relative absolute top-0 w-full h-full object-cover object-left lg:object-center'
      />
      <div className='md:absolute relative top-0 lg:pt-36 md:pt-40 pt-32 flex lg:flex-row flex-col h-full md:w-full lg:justify-between xl:pl-20 lg:pl-8 lg:px-0 md:px-24 px-5 md:items-center lg:items-start justify-normal overflow-hidden'>
        <article className='mb-10 lg:mb-0'>
          <div className='lg:max-w-[33rem] md:max-w-[35rem] w-full md:flex lg:block items-center flex-col'>
            <h2 className='xl:text-[42px] lg:text-4xl md:text-3xl text-3xl font-semibold md:text-center lg:text-left text-secondary xl:mb-16 mb-10 tracking-wide'>
              The Community Coin of Blast
            </h2>
            <p className='text-[#ccd4e0] font-semibold lg:text-xl md:text-base text-lg lg:mb-16 md:mb-10 md:text-center lg:text-left'>
              New Ethereum game! Join & earn! Calling builders, creators & crypto enthusiasts!
            </p>
            <Button
              className='font-bold xl:px-24 lg:px-16 hidden md:block'
              containerClass='flex justify-center md:block'>
              JOIN NOW
            </Button>
          </div>
        </article>
        <aside className='xl:w-[38%] lg:w-2/5 md:h-[30rem] xl:h-[40rem] lg:h-[32rem] lg:mr-10 py-5 px-4 md:mb-0 mb-10 h-[40rem] lg:border-2 rounded-xl border-secondary flex flex-col justify-around bg-[#00000080]'>
          <h1 className='text-2xl text-primary font-bold text-center drop-shadow-[0_0_5px_#007bff]'>
            BUY AND STAKE <span className='text-[#FCFC03]'>$EBC</span> FOR 10% DISCOUNT
          </h1>
          <p className='text-white text-center'>
            Buy and stake $EBC to earn rewards, plus qualify for the huge airdrop!
          </p>
          <div className='flex justify-between w-full '>
            <button className='xl:py-3 xl:px-10 lg:py-2 lg:px-8 md:py-3 md:px-11 py-2 px-6 rounded-lg bg-secondary hover:bg-white drop-shadow-btn font-bold tracking-wide'>
              ETH
            </button>
            <button className='xl:py-3 xl:px-10 lg:py-2 lg:px-8 md:py-3 md:px-11 py-2 px-6 rounded-lg bg-secondary hover:bg-white drop-shadow-btn font-bold tracking-wide'>
              USDT
            </button>
            <button className='xl:py-3 xl:px-10 lg:py-2 lg:px-8 md:py-3 md:px-11 py-2 px-6 rounded-lg bg-secondary hover:bg-white drop-shadow-btn font-bold tracking-wide'>
              CARD
            </button>
          </div>
          <div className='flex md:flex-row flex-col items-center justify-between'>
            <div className='md:w-[48%] w-full md:mb-0 mb-7 border-secondary rounded-lg border-2 py-1 px-5 bg-[#000000a6]'>
              <h5 className='text-sm text-secondary font-semibold'>Pay with ETH</h5>
              <input
                placeholder='0'
                type='number'
                className='borders-none bg-transparent outline-none text-white text-lg number-input w-full'
              />
            </div>
            <div className='md:w-[48%] w-full border-secondary rounded-lg border-2 py-1 px-5 bg-[#000000a6]'>
              <h5 className='text-sm text-secondary font-semibold'>Receive $EBC</h5>
              <input
                placeholder='0'
                type='number'
                className='border-none bg-transparent outline-none text-white text-lg number-input w-full'
              />
            </div>
          </div>
          <div className='flex w-full justify-center'>
            <button className='py-3 px-11 md:w-auto w-full rounded-lg bg-primary drop-shadow-btn font-bold tracking-wide hover:bg-white'>
              BUY FOR 42% APY
            </button>
          </div>
          <p className='w-full text-center text-white text-sm font-medium'>Power by Web3Payment</p>
        </aside>
      </div>
    </main>
  )
}
