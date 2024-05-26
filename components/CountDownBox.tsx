'use client'
import { useSearchParams } from 'next/navigation'
import CountDown from './CountDown'
function CountDownBox() {
  const searchParams = useSearchParams()
  const countParam = searchParams.get('count') || 'Try our dapp in'
  return (
    <div className='flex flex-col items-center justify-center mt-8 md:mb-10 mb-5'>
      <h5 className='mb-8 text-lg text-secondary'>{countParam}</h5>
      <CountDown targetDate='2024-06-07' />
    </div>
  )
}

export default CountDownBox
