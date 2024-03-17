import InviteBox from '@/components/InviteBox'
import Link from 'next/link'
import {} from 'react'
function Airdrop({}) {
  return (
    <div className='flex flex-col items-center justify-center h-[100vh] bg-gradient-to-b from-[#0b0c08] to-[#252b1b] '>
      <InviteBox className='mb-12' />
      <div className='flex flex-col items-center'>
        <p className='text-secondary'>Already registered?</p>
        <Link href='/' className='text-primary'>
          Log in with your wallet.
        </Link>
      </div>
    </div>
  )
}

export default Airdrop
