import React from 'react'
import Button from './Button'

type inviteBoxProps = {
  title?: string
  subTitle?: string
}

function InviteBox({
  title = 'MAINNET AIRDROP',
  subTitle = 'Enter your invite code to claim your airdrop',
}: inviteBoxProps) {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-lg text-primary font-bold mb-7'>{title}</h3>
      <p className='text-secondary font-semibold w-4/5 text-center mb-7'>{subTitle}</p>
      <div className='flex flex-row mb-10'>
        <div className='relative flex justify-center mr-2'>
          <input
            maxLength={1}
            className='py-3 px-2 text-center border-third border-2 rounded-xl bg-transparent md:w-12 text-2xl text-secondary uppercase outline-none'
          />
          <div className='w-6 h-[2px] bg-third absolute bottom-2'></div>
        </div>
        <div className='relative flex justify-center mr-2'>
          <input
            maxLength={1}
            className='py-3 px-2 text-center border-third border-2 rounded-xl bg-transparent md:w-12 text-2xl text-secondary uppercase outline-none'
          />
          <div className='w-6 h-[2px] bg-third absolute bottom-2'></div>
        </div>
        <div className='relative flex justify-center mr-2'>
          <input
            maxLength={1}
            className='py-3 px-2 text-center border-third border-2 rounded-xl bg-transparent md:w-12 text-2xl text-secondary uppercase outline-none'
          />
          <div className='w-6 h-[2px] bg-third absolute bottom-2'></div>
        </div>
        <div className='relative flex justify-center mr-2'>
          <input
            maxLength={1}
            className='py-3 px-2 text-center border-third border-2 rounded-xl bg-transparent md:w-12 text-2xl text-secondary uppercase outline-none'
          />
          <div className='w-6 h-[2px] bg-third absolute bottom-2'></div>
        </div>
        <div className='relative flex justify-center mr-2'>
          <input
            maxLength={1}
            className='py-3 px-2 text-center border-third border-2 rounded-xl bg-transparent md:w-12 text-2xl text-secondary uppercase outline-none'
          />
          <div className='w-6 h-[2px] bg-third absolute bottom-2'></div>
        </div>
      </div>
      <Button className='bg-secondary px-10'>ENTER INVITE CODE</Button>
    </div>
  )
}

export default InviteBox
