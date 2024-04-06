import Link from 'next/link'
import React from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
type BreadCrumbProps = {
  className?: ClassNameValue
  title: string
  url: string
}

function BreadCrumb({ className, title, url }: BreadCrumbProps) {
  return (
    <div className={twMerge('flex items-center', className)}>
      <svg width={19} height={19} viewBox='0 0 24 24' className='fill-none mr-2' xmlns='http://www.w3.org/2000/svg'>
        <path
          className='fill-secondary'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z'></path>
      </svg>
      <Link href={url} className='hover:text-primary md:mr-10 mr-5 text-base lg:text-secondary text-primary'>
        {title}
      </Link>
    </div>
  )
}

export default BreadCrumb
