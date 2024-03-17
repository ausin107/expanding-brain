import Image from 'next/image'
import {} from 'react'
import About_1 from '@/assets/about/about_1.webp'
import Blast_Logo from '@/assets/Blast_Logo.webp'
function About() {
  return (
    <div className='w-[100vw] xl:pt-40 xl:px-40 lg:pt-32 md:pt-40 md:px-0 pt-32'>
      <section className='flex flex-row items-center justify-evenly w-full'>
        <Image src={About_1} alt='Image' />
        <div className='max-w-[45rem]'>
          <h1 className='text-secondary xl:text-5xl font-bold xl:mb-16'>Blast is the L2 that helps you earn</h1>
          <p className='text-third xl:text-2xl xl:mb-16'>
            The only Ethereum L2 with native yield for ETH and stablecoins.
          </p>
          <div>
            <p className='text-third font-semibold xl:mb-5'>BUILT ON</p>
            <Image src={Blast_Logo} alt='Image' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
