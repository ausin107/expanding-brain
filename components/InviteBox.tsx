'use client'
import AirdropButton from '@/components/Button'
import { ClassNameValue, twMerge } from 'tailwind-merge'

type inviteBoxProps = {
  title?: string
  subTitle?: string
  className?: ClassNameValue
}

function InviteBox({
  title = 'EXPANDING BRAIN',
  subTitle = 'Swap for $EXPC token to join community now',
  className,
}: inviteBoxProps) {
  return (
    <div className={twMerge('flex flex-col lg:items-center md:items-start items-center', className)}>
      <h3 className='lg:text-lg md:text-2xl text-lg text-primary font-bold md:mb-10 mb-7'>{title}</h3>
      <p className='text-secondary font-semibold xl:w-4/5 lg:w-full w-4/5 lg:text-center md:text-left md:mb-10 mb-7 xl:text-base lg:text-sm text-lg text-center'>
        {subTitle}
      </p>
      <AirdropButton className='bg-secondary px-20'>SWAP NOW</AirdropButton>
    </div>
  )
}

export default InviteBox
