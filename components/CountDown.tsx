'use client'
import { CSSProperties, useEffect, useState } from 'react'

function CountDown({ targetDate }: { targetDate: string }) {
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
  return (
    <div className='grid grid-flow-col gap-5 text-center auto-cols-max mt-10'>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': Math.floor(timer / (60 * 60 * 24)) } as CSSProperties}></span>
        </span>
        days
      </div>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': Math.floor((timer % (60 * 60 * 24)) / (60 * 60)) } as CSSProperties}></span>
        </span>
        hours
      </div>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': Math.floor((timer % (60 * 60)) / 60) } as CSSProperties}></span>
        </span>
        min
      </div>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': Math.floor(timer % 60) } as CSSProperties}></span>
        </span>
        sec
      </div>
    </div>
  )
}

export default CountDown
