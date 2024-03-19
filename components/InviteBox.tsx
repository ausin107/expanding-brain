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
  title = 'EXPANDING BRAIN AIRDROP',
  subTitle = 'Check your eligibily to claim airdrop now',
  className,
}: inviteBoxProps) {
  return (
    <div className={twMerge('flex flex-col lg:items-center md:items-start items-center', className)}>
      <h3 className='text-lg text-primary font-bold mb-7'>{title}</h3>
      <p className='text-secondary font-semibold xl:w-4/5 lg:w-full w-4/5 text-center mb-7 lg:text-sm xl:text-base'>
        {subTitle}
      </p>
      <Button className='bg-secondary px-20'>JOIN NOW</Button>
    </div>
  )
}

export default InviteBox
