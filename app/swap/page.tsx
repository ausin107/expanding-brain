import { twMerge } from 'tailwind-merge'
import SwapBox from '@/components/SwapBox'
import AirdropButton from '@/components/Button'
export default function Swap() {
  return (
    <main
      className={twMerge(
        'w-[100vw] md:min-h-screen md:overflow-hidden overflow-x-hidden bg-gradient-to-b from-[#081010] to-[#182e2e]'
      )}>
      <div className='lg:pt-40 md:pt-40 pt-32 flex lg:flex-row flex-col md:w-full xl:pl-20 lg:pl-8 lg:px-0 md:px-24 px-5 md:items-center lg:items-start justify-center overflow-hidden'>
        <SwapBox />
      </div>
    </main>
  )
}
