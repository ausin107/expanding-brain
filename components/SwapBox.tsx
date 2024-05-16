'use client'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

function SwapBox({}) {
  const [option, setOption] = useState({ id: 0, name: 'SOL' })
  const handleOption = (id: number, name: string) => {
    setOption({ id, name })
  }
  return (
    <aside className='xl:w-[32rem] lg:w-[25rem] md:w-[35rem] md:h-[30rem] xl:h-[33rem] lg:h-[32rem] lg:mr-10 py-5 px-4 md:mb-0 mb-10 h-[40rem] lg:border-2 rounded-xl border-secondary flex flex-col justify-around bg-[#00000080]'>
      <h1 className='lg:text-2xl md:text-3xl text-xl text-primary font-bold text-center drop-shadow-[0_0_5px_#007bff]'>
        BUY AND STAKE <span className='text-[#FCFC03]'>$EXBC</span> FOR 10% DISCOUNT
      </h1>
      <p className='text-white text-center'>Buy and stake $EXBC to earn rewards, plus qualify for the huge airdrop!</p>
      <div className='flex justify-between w-full '>
        <button
          onClick={() => handleOption(0, 'SOL')}
          className={twMerge(
            'xl:py-3 xl:px-10 lg:py-2 lg:px-8 md:py-3 md:px-12 py-2 px-6 rounded-lg bg-secondary hover:bg-white drop-shadow-btn font-bold tracking-wide opacity-40',
            option.id == 0 && 'opacity-100'
          )}>
          SOL
        </button>
        <button
          onClick={() => handleOption(1, 'ETH')}
          className={twMerge(
            'xl:py-3 xl:px-10 lg:py-2 lg:px-8 md:py-3 md:px-12 py-2 px-6 rounded-lg bg-secondary hover:bg-white drop-shadow-btn font-bold tracking-wide opacity-40',
            option.id == 1 && 'opacity-100'
          )}>
          ETH
        </button>
        <button
          onClick={() => handleOption(2, 'USDT')}
          className={twMerge(
            'xl:py-3 xl:px-10 lg:py-2 lg:px-8 md:py-3 md:px-12 py-2 px-6 rounded-lg bg-secondary hover:bg-white drop-shadow-btn font-bold tracking-wide opacity-40',
            option.id == 2 && 'opacity-100'
          )}>
          USDT
        </button>
      </div>
      <div className='flex md:flex-row flex-col items-center justify-between'>
        <div className='md:w-[48%] w-full md:mb-0 mb-7 border-secondary rounded-lg border-2 py-1 px-5 bg-[#000000a6]'>
          <h5 className='text-sm text-secondary font-semibold'>Pay with {option.name}</h5>
          <input
            placeholder='0'
            type='number'
            className='borders-none bg-transparent outline-none text-white text-lg number-input w-full'
          />
        </div>
        <div className='md:w-[48%] w-full border-secondary rounded-lg border-2 py-1 px-5 bg-[#000000a6]'>
          <h5 className='text-sm text-secondary font-semibold'>Receive $EXBC</h5>
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
  )
}

export default SwapBox
