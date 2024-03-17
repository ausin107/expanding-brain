import Image from 'next/image'
import {} from 'react'
import About_1 from '@/assets/about/about_1.webp'
import About_2 from '@/assets/about/about_2.webp'
import About_3 from '@/assets/about/about_3.webp'
import Cast from '@/assets/icons/cast.webp'
import Coins from '@/assets/icons/coins.webp'
import Bill from '@/assets/icons/bill.webp'
import Blast_Logo from '@/assets/Blast_Logo.webp'
import Button from '@/components/Button'
import Link from 'next/link'
function About() {
  return (
    <div className='w-[100vw] xl:pt-40 xl:px-40 lg:pt-32 md:pt-40 md:px-0 pt-32 pb-20 bg-[#11140c]'>
      <section className='flex flex-row items-center justify-evenly w-full mb-20'>
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
      <section className='mb-20 w-full'>
        <h1 className='text-secondary font-bold xl:text-4xl mb-8 w-4/5'>
          Other L2s don&apos;t have yield, so the value of your assets depreciate over time.
        </h1>
        <p className='text-third xl:text-2xl font-semibold mb-16 w-4/5'>
          Blast is the first L2 that incorporates native yield. Your balance on Blast compounds automatically.
        </p>
        <Image src={About_2} alt='Image' className='w-full mb-20' />
        <div className='flex text-secondary w-full justify-between'>
          <p className='pl-7 border-l border-opacity-40 border-third w-[45%]'>
            Blast yield comes from ETH staking and RWA protocols. The yield from these decentralized protocols is passed
            back to Blast users automatically. The default interest rate on other L2s is 0%. On Blast, it&apos;s 4% for
            ETH and 15% for stablecoins.
          </p>
          <p className='pl-7 border-l border-opacity-40 border-third w-[45%]'>
            Our goal as contributors is to grow the on-chain economy with the highest-yield L2 possible. Community
            members who join our mission will have the opportunity to earn the Blast Airdrop. The first stage of the
            airdrop is [now live].
          </p>
        </div>
      </section>
      <section className='mb-20'>
        <h1 className='text-secondary xl:text-4xl mb-20 font-semibold'>How Blast works</h1>
        <div className='flex justify-between mb-32'>
          <div className='w-[30%]'>
            <div className='flex mb-10 items-center'>
              <Image src={Cast} alt='Image' className='mr-5 w-14' />
              <h3 className='text-secondary lg:text-2xl'>AUTO REBASING</h3>
            </div>
            <p className='text-third font-bold'>
              Users transact in ETH. Dapps are built around ETH. Blast was designed from the ground up so that ETH
              itself is natively rebasing on the L2.
            </p>
          </div>
          <div className='w-[30%]'>
            <div className='flex mb-10 items-center'>
              <Image src={Coins} alt='Image' className='mr-5 w-14' />
              <h3 className='text-secondary lg:text-2xl'>L1 STAKING</h3>
            </div>
            <p className='text-third font-bold'>
              Blast only became possible this year following Ethereum&apos;s Shanghai upgrade. ETH yield from L1
              staking, initially Lido, is automatically transferred to users via rebasing ETH on the L2.
            </p>
          </div>
          <div className='w-[30%]'>
            <div className='flex mb-10 items-center'>
              <Image src={Bill} alt='Image' className='mr-5 w-14' />
              <h3 className='text-secondary lg:text-2xl'>T-BILL YIELD</h3>
            </div>
            <p className='text-third font-bold'>
              Users who bridge stablecoins receive USDB, Blast&apos;s auto-rebasing stablecoin. The yield for USDB comes
              from MakerDAO&apos;s on-chain T-Bill protocol. USDB can be redeemed for USDC when bridging back to
              Ethereum.
            </p>
          </div>
        </div>
        <p className='text-third text-sm w-full text-center italic'>
          In the future, the Blast community will have the power to supplement, or even fully replace, Lido and MakerDAO
          with Blast-native solutions or other third party protocols.
        </p>
      </section>
      <section className='mb-20'>
        <h1 className='text-secondary xl:text-4xl mb-8 font-semibold'>Why a new L2</h1>
        <p className='text-third xl:text-2xl font-semibold mb-10 w-4/5'>
          The risk-free rate on existing L2s is 0%. It&apos;s time to change that.
        </p>
        <div className='flex text-secondary w-full justify-between mb-32'>
          <p className='pl-7 border-l border-opacity-40 border-third w-[35%] font-medium'>
            After the merge, Ethereum provides 4% yield on ETH. On-chain T-Bill protocols provide 15% yield on
            stablecoins. If users do not match or beat these rates, they are losing money to a form of inflation.
          </p>
          <p className='pl-7 border-l border-opacity-40 border-third w-[60%] font-medium'>
            L2s today do not have this yield. Incorporating ETH and stablecoin yield natively requires a new L2 designed
            from the ground up. Blast is an EVM-compatible, optimistic rollup that raises the baseline yield for users
            and developers without changing the experience cryptonatives expect.
          </p>
        </div>
        <p className='text-third text-sm w-full text-center italic'>
          The “risk-free” rate is the theoretical return on an investment with zero risk. In reality, there are no true
          risk-free rates, only low-risk rates. Even T-Bills carry risk.
        </p>
      </section>
      <section className='mb-20'>
        <h1 className='text-secondary xl:text-4xl mb-8 font-semibold'>Who we are</h1>
        <div className='flex'>
          <Image src={Blast_Logo} alt='Image' className='mx-24 my-10' />
          <p className='pl-12 border-l border-third border-opacity-50 text-third text-xl font-semibold flex items-center justify-center'>
            Pacman created Blur, the top NFT marketplace protocol on Ethereum with over 333,063 users and $7b worth of
            NFTs traded. Blur distributed the 5th largest airdrop in Ethereum history.
          </p>
        </div>
      </section>
      <section className='mb-20 w-full'>
        <h1 className='text-secondary xl:text-4xl mb-8 font-semibold'>Airdrop timeline</h1>
        <p className='text-third xl:text-2xl font-medium mb-10'>
          The Blast Community Airdrop is split between Early Access Members (50%) and Developers (50%).
        </p>
        <p className='text-secondary w-3/5 mb-20 font-semibold'>
          The Early Access airdrop is now live. You can earn airdrop points by bridging to Blast and inviting friends.
          Airdrop points can be redeemed in May.
        </p>
        <Image src={About_3} alt='Image' className='w-full mb-20' />
        <p className='text-third xl:text-2xl font-medium mb-10 w-4/5'>
          The developer airdrop goes live in January when the Blast Testnet launches. Learn more in our{' '}
          <span className='text-primary'>developer docs.</span>
        </p>
      </section>
      <section className='w-full flex items-center justify-center'>
        <div className='bg-black w-4/5 rounded-xl py-16 px-10 flex items-center flex-col'>
          <h1 className='text-secondary xl:text-4xl mb-10 font-semibold'>Have an Early Access invite?</h1>
          <Button className='mb-8'>CLAIM YOUR AIRDROP</Button>
          <div className='text-third font-medium'>
            <Link href='/' className='text-primary hover:text-white'>
              Click here
            </Link>{' '}
            if you&apos;re a developer
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
