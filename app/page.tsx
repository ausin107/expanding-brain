import Image from 'next/image'
import Background from '@/assets/Background.jpg'
import Button from '@/components/Button'
import InviteBox from '@/components/InviteBox'
import Blast_Logo from '@/assets/Blast_Logo.webp'
export default function Home() {
  return (
    <main className='relative w-[100vw] h-[100vh] overflow-hidden'>
      <Image src={Background} alt='Background Image' className='relative top-0 w-full h-full' />
      <div className='absolute top-0 xl:ml-32 xl:pt-40 lg:ml-12 lg:pt-32 flex flex-row h-[90%] w-[90%] overflow-hidden'>
        <article className='xl:mr-36 xl:w-[60%] lg:w-4/5 lg:mr-12'>
          <div className='xl:w-3/5 lg:w-4/5'>
            <h2 className='xl:text-[42px] lg:text-4xl font-semibold text-secondary mb-10 tracking-wide'>
              The L2 that helps you earn more ETH
            </h2>
            <p className='text-[#D7E0CC] font-medium text-xl mb-10'>
              The only Ethereum L2 with native yield for ETH and stablecoins. Mainnet now live.
            </p>
            <Button className='font-bold'>BRIDGE & EARN</Button>
          </div>
        </article>
        <aside className='pl-5 flex items-center flex-col border-l border-third'>
          <InviteBox />
          <section className='flex flex-col items-center mt-10'>
            <h3 className='text-light font-bold mb-5'>BUILT ON</h3>
            <Image src={Blast_Logo} alt='Blast Logo image' className='xl:w-full' />
          </section>
        </aside>
      </div>
    </main>
  )
}
