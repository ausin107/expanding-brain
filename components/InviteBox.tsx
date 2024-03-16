'use client'
import { useRef, useState } from 'react'
import Button from './Button'
import { ClassNameValue, twMerge } from 'tailwind-merge'

type inviteBoxProps = {
  title?: string
  subTitle?: string
  className?: ClassNameValue
}

function InviteBox({
  title = 'MAINNET AIRDROP',
  subTitle = 'Enter your invite code to claim your airdrop',
  className,
}: inviteBoxProps) {
  const inputRefs = useRef<HTMLInputElement[] | null[]>([])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = inputRefs.current[index]?.value
    if (inputValue?.length == 1) inputRefs.current[index + 1]?.focus()
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.keyCode == 37) {
      event.preventDefault()
      inputRefs.current[index - 1]?.focus()
      inputRefs.current[index - 1]?.setSelectionRange(1, 1)
    } else if (event.keyCode == 39) {
      inputRefs.current[index + 1]?.focus()
    }
  }
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.keyCode == 8) {
      inputRefs.current[index - 1]?.focus()
    }
  }
  return (
    <div className={twMerge('flex flex-col lg:items-center items-start', className)}>
      <h3 className='text-lg text-primary font-bold mb-7'>{title}</h3>
      <p className='text-secondary font-semibold xl:w-4/5 lg:w-full text-center mb-7 lg:text-sm xl:text-base'>
        {subTitle}
      </p>
      <div className='flex flex-row mb-10'>
        <div className='relative flex justify-center mr-2'>
          <input
            ref={(e) => (inputRefs.current[0] = e)}
            onChange={(e) => handleChange(e, 0)}
            onKeyDown={(event) => handleKeyDown(event, 0)}
            onKeyUp={(event) => handleKeyUp(event, 0)}
            maxLength={1}
            className='py-3 px-2 text-center border-third border-2 rounded-xl bg-transparent md:w-12 text-2xl text-secondary uppercase outline-none'
          />
          <div className='w-6 h-[2px] bg-third absolute bottom-2'></div>
        </div>
        <div className='relative flex justify-center mr-2'>
          <input
            ref={(e) => (inputRefs.current[1] = e)}
            onChange={(e) => handleChange(e, 1)}
            onKeyDown={(event) => handleKeyDown(event, 1)}
            onKeyUp={(event) => handleKeyUp(event, 1)}
            maxLength={1}
            className='py-3 px-2 text-center border-third border-2 rounded-xl bg-transparent md:w-12 text-2xl text-secondary uppercase outline-none'
          />
          <div className='w-6 h-[2px] bg-third absolute bottom-2'></div>
        </div>
        <div className='relative flex justify-center mr-2'>
          <input
            ref={(e) => (inputRefs.current[2] = e)}
            onChange={(e) => handleChange(e, 2)}
            onKeyDown={(event) => handleKeyDown(event, 2)}
            onKeyUp={(event) => handleKeyUp(event, 2)}
            maxLength={1}
            className='py-3 px-2 text-center border-third border-2 rounded-xl bg-transparent md:w-12 text-2xl text-secondary uppercase outline-none'
          />
          <div className='w-6 h-[2px] bg-third absolute bottom-2'></div>
        </div>
        <div className='relative flex justify-center mr-2'>
          <input
            ref={(e) => (inputRefs.current[3] = e)}
            onChange={(e) => handleChange(e, 3)}
            onKeyDown={(event) => handleKeyDown(event, 3)}
            onKeyUp={(event) => handleKeyUp(event, 3)}
            maxLength={1}
            className='py-3 px-2 text-center border-third border-2 rounded-xl bg-transparent md:w-12 text-2xl text-secondary uppercase outline-none'
          />
          <div className='w-6 h-[2px] bg-third absolute bottom-2'></div>
        </div>
        <div className='relative flex justify-center mr-2'>
          <input
            ref={(e) => (inputRefs.current[4] = e)}
            onChange={(e) => handleChange(e, 4)}
            onKeyDown={(event) => handleKeyDown(event, 4)}
            onKeyUp={(event) => handleKeyUp(event, 4)}
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
