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
      <div className='absolute top-0 lg:pt-36 md:pt-40 md:px-0 px-5 pt-32 flex lg:flex-row flex-col h-[90%] lg:w-full md:w-3/5 lg:justify-between xl:pl-20 lg:pl-8 md:pl-8 justify-normal overflow-hidden'>
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
        {/* <aside className='xl:px-5 lg:px-5 flex lg:items-center md:items-start items-center flex-col lg:border-l border-third'>
          <InviteBox className='' />
          <section className='flex flex-col lg:items-center md:items-start items-center mt-10'>
            <h3 className='text-light font-bold mb-5'>BUILT ON</h3>
            <Image src={Blast_Logo} alt='Blast Logo image' className='xl:w-full' />
          </section>
        </aside> */}
        <aside className='w-[38%] lg:mr-10 py-5 px-7 lg:border-2 rounded-xl border-secondary flex flex-col justify-around bg-[#00000080]'>
          <h1 className='text-2xl text-primary font-bold text-center drop-shadow-[0_0_5px_#007bff]'>
            BUY AND STAKE <span className='text-[#FCFC03]'>$EBC</span> FOR 10% DISCOUNT
          </h1>
          <p className='text-white text-center'>
            Buy and stake $EBC to earn rewards, plus qualify for the huge airdrop!
          </p>
          <div className='flex justify-between w-full '>
            <button className='py-3 px-11 rounded-lg bg-secondary hover:bg-white drop-shadow-btn font-bold tracking-wide'>
              ETH
            </button>
            <button className='py-3 px-11 rounded-lg bg-secondary hover:bg-white drop-shadow-btn font-bold tracking-wide'>
              USDT
            </button>
            <button className='py-3 px-11 rounded-lg bg-secondary hover:bg-white drop-shadow-btn font-bold tracking-wide'>
              CARD
            </button>
          </div>
          <div className='flex items-center justify-between'>
            <div className='w-[48%] border-secondary rounded-lg border-2 py-1 px-5 bg-[#000000a6]'>
              <h5 className='text-sm text-secondary font-semibold'>Pay with ETH</h5>
              <input
                placeholder='0'
                type='number'
                className='borders-none bg-transparent outline-none text-white text-lg number-input w-full'
              />
            </div>
            <div className='w-[48%] border-secondary rounded-lg border-2 py-1 px-5 bg-[#000000a6]'>
              <h5 className='text-sm text-secondary font-semibold'>Receive $EBC</h5>
              <input
                placeholder='0'
                type='number'
                className='border-none bg-transparent outline-none text-white text-lg number-input w-full'
              />
            </div>
          </div>
          <div className='flex w-full justify-center'>
            <button className='py-3 px-11 rounded-lg bg-primary drop-shadow-btn font-bold tracking-wide hover:bg-white'>
              BUY FOR 42% APY
            </button>
          </div>
          <p className='w-full text-center text-white text-sm font-medium'>Power by Web3Payment</p>
        </aside>
      </div>
    </main>
  )
}
