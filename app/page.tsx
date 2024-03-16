import Image from 'next/image'
import Background from '@/assets/Background.jpg'
import Button from '@/components/Button'
import InviteBox from '@/components/InviteBox'
import Blast_Logo from '@/assets/Blast_Logo.webp'
export default function Home() {
  return (
    <main className='relative w-[100vw] h-[100vh] md:overflow-hidden overflow-x-hidden'>
      <Image
        src={Background}
        alt='Background Image'
        className='relative top-0 w-full h-full object-cover object-left lg:object-center'
      />
      <div className='absolute top-0 xl:ml-32 xl:pt-40 lg:ml-12 lg:pt-32 md:ml-8 md:pt-40 px-5 pt-32 flex lg:flex-row flex-col h-[90%] lg:w-[90%] md:w-3/5 overflow-hidden'>
        <article className='xl:mr-36 xl:w-[60%] lg:w-4/5 lg:mr-12 md:w-4/5 mb-10 lg:mb-0'>
          <div className='lg:w-4/5 w-full'>
            <h2 className='xl:text-[42px] lg:text-4xl md:text-3xl text-3xl font-semibold text-secondary mb-10 tracking-wide'>
              The L2 that helps you earn more ETH
            </h2>
            <p className='text-[#D7E0CC] font-semibold lg:text-xl md:text-base text-lg mb-10'>
              The only Ethereum L2 with native yield for ETH and stablecoins. Mainnet now live.
            </p>
            <Button className='font-bold' containerClass='flex justify-center md:block'>
              BRIDGE & EARN
            </Button>
          </div>
        </article>
        <aside className='lg:pl-5 flex lg:items-center md:items-start items-center flex-col lg:border-l border-third'>
          <div className='md:hidden flex items-center border-t border-third h-1 w-full pt-2 opacity-30'>
            <div className='h-2 w-12 bg-third mr-3'></div>
            <div className='h-2 w-1 bg-third mr-3'></div>
            <div className='h-2 w-5 bg-third mr-auto'></div>
            <div className='h-[2px] w-24 bg-third'></div>
          </div>
          <InviteBox className='hidden md:block' />
          <section className='flex flex-col lg:items-center md:items-start items-center mt-10'>
            <h3 className='text-light font-bold mb-5'>BUILT ON</h3>
            <Image src={Blast_Logo} alt='Blast Logo image' className='xl:w-full' />
          </section>
        </aside>
      </div>
    </main>
  )
}
