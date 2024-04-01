'use client'
import { CSSProperties, useEffect, useState } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
type countDownProps = {
  targetDate: string
  className?: ClassNameValue
}

function CountDown({ targetDate, className }: countDownProps) {
  const [timer, SetTimer] = useState(() => {
    const targetTime = new Date(targetDate).getTime()
    const currentTime = new Date().getTime()
    let timeLeft = targetTime - currentTime
    return Math.floor(timeLeft / 1000)
  })
  useEffect(() => {
    const startCountDown = setInterval(() => {
      if (timer > 0) SetTimer(timer - 1)
    }, 1000)

    return () => clearInterval(startCountDown)
  }, [timer])
  const days = Math.floor(timer / (60 * 60 * 24))
  const hours = Math.floor((timer % (60 * 60 * 24)) / (60 * 60))
  const minutes = Math.floor((timer % (60 * 60)) / 60)
  const seconds = Math.floor(timer % 60)
  return (
    <div className={twMerge('grid grid-flow-col gap-5 text-center auto-cols-max', className)}>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': days } as CSSProperties}></span>
        </span>
        days
      </div>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': hours } as CSSProperties}></span>
        </span>
        hours
      </div>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': minutes } as CSSProperties}></span>
        </span>
        min
      </div>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': seconds } as CSSProperties}></span>
        </span>
        sec
      </div>
    </div>
  )
}

export default CountDown
