import Image from 'next/image'
import Logo from '@/assets/Logo.png'
import Blast_Logo from '@/assets/Blast_Logo.webp'
import AirdropButton from '@/components/Button'

function About() {
  return (
    <div className='w-[100vw] xl:pt-40 xl:px-40 lg:pt-32 md:pt-28 md:px-14 px-5 pt-24 xl:pb-20 pb-10 bg-gradient-to-b from-black to-[#121c1c]'>
      <section className='flex md:flex-row flex-col items-center justify-evenly w-full xl:mb-20 mb-5'>
        <Image src={Logo} alt='Image' className='xl:w-[25rem] lg:w-60 md:w-56 w-56' />
        <div className='max-w-[45rem]'>
          <h1 className='text-secondary xl:text-4xl lg:text-2xl md:text-xl text-lg font-bold xl:mb-14 lg:mb-5 md:mb-2 mb-7'>
            The Community Coin of Blast
          </h1>
          <p className='text-third xl:text-2xl xl:mb-16 lg:mb-5 md:mb-2 mb-5'>
            New Ethereum game! Join & earn! Calling builders, creators & crypto enthusiasts!
          </p>
          <div>
            <p className='text-third font-semibold lg:mb-5 md:mb-2 mb-5'>BUILT ON</p>
            <Image src={Blast_Logo} alt='Image' className='w-52' />
          </div>
        </div>
      </section>
      <section className='xl:mb-20 md:mb-10 mb-7 w-full'>
        <h1 className='text-secondary font-bold xl:text-5xl lg:text-3xl md:text-2xl text-xl mb-8'>Vision</h1>
        <p className='text-third xl:text-2xl font-semibold md:mb-10 mb-7'>
          Expanding Brain is a community coin and social movement built on the Blast L2 blockchain.
        </p>
        <p className='text-third font-bold xl:text-xl'>
          Welcome to a new era of Ethereum. Brought to you by Blast and Expading Brain. This game is different. Your
          voice is rewarded with $EBC. Every contribution builds our network. We call upon the builders, creators, and
          degens. It’s time, are you ready? Join the Expading Brain as we head to the MOON.
        </p>
      </section>
      <section className='xl:mb-20 md:mb-10 mb-7'>
        <h1 className='text-secondary xl:text-5xl lg:text-3xl md:text-2xl text-xl xl:mb-16 md:mb-10 mb-7 font-semibold'>
          Creator Incentives
        </h1>
        <p className='text-third font-bold xl:text-2xl md:mb-10 mb-7'>
          Incentives drive outcomes. Which is why every new protocol has a reward system based on on-chain activity.
          <br />
          <br />
          What if a meme coin did the same for social activity?
        </p>
        <h3 className='text-secondary xl:text-2xl lg:text-xl md:text-lg xl:mb-16 md:mb-10 mb-7 font-semibold'>
          HOW IT WORKS
        </h3>
        <p className='text-third font-bold xl:text-2xl xl:mb-16 md:mb-10 mb-7'>
          Expanding Brain has reward programs designed to encourage users to contribute and participate in its
          ecosystem.
          <br />
          <br />
          $EBC may only be utilized as the unit of account within Expanding Brain’s ecosystem.
        </p>
        <p className='text-third font-bold xl:text-2xl xl:mb-16 md:mb-10 mb-7 border-l-8 border-[#2422e5] md:pl-7 pl-4'>
          1. Your tweet becomes eligible to accumulate points once the @Expanding Brain_ account likes it.
          <br />
          <br />
          2. The liked Tweet earns 1 point for every view it receives.
          <br />
          <br />
          3. The points can be redeemed for $PAC at a later date.
        </p>
        <p className='text-third font-bold xl:text-2xl xl:mb-16 md:mb-10 mb-7'>
          We’ll only like Expanding Brain related content and filter out activity suspect of botting or misplay.
          <br />
          <br />
          Ultimately, the more you share Expanding Brain, the more $EBC you can earn.
        </p>
        <h3 className='text-secondary xl:text-2xl lg:text-xl md:text-lg xl:mb-16 md:mb-10 mb-7 font-semibold'>
          WHO IS THIS FOR?
        </h3>
        <p className='text-third font-bold xl:text-2xl xl:mb-16 md:mb-10 mb-7'>
          Expanding Brain isn’t just for big influencers. It’s for the memelords, artists, traders, musicians, traders,
          writers etc… Everyone loves the feeling of earning $EBC and getting a surge of engagement from a Expanding
          Brain retweet. And we’re focused on giving that feeling to as many creators as we can.
        </p>
      </section>
      <section>
        <h1 className='text-secondary xl:text-5xl lg:text-3xl md:text-2xl text-xl xl:mb-16 md:mb-10 mb-7 font-semibold'>
          Tokenomics
        </h1>
        <p className='text-third font-bold xl:text-2xl xl:mb-16 md:mb-10 mb-7'>
          To build an engaged community, $EBC is being airdropped to Blast depositors and creators
        </p>
        <h3 className='text-secondary xl:text-2xl lg:text-xl md:text-lg md:mb-10 mb-7 font-semibold'>
          $EBC is a fair launch
        </h3>
        <p className='text-third font-bold xl:text-2xl xl:mb-16 md:mb-10 mb-7'>
          We’re rewarding all Blast community members from the start for their contributions.
          <br />
          <br />
          There are no insider allocations, paid tweets, collab deals, or taxes.
          <br />
          <br />
          This token structure enables us to continually grow the Expanding Brain network and have a reserve to fund
          future community-led Blast initiatives.
          <br />
          <br />
          Users may keep $EBC in their wallet and utilize it for spending with any third party, platform, or merchant.
        </p>
      </section>
      <section>
        <h1 className='text-secondary xl:text-5xl lg:text-3xl md:text-2xl text-xl xl:mb-16 md:mb-10 mb-7 font-semibold'>
          Join the Expanding Brain
        </h1>
        <p className='text-third font-bold xl:text-2xl xl:mb-16 md:mb-10 mb-7 border-l-8 border-[#2422e5] md:pl-7 pl-4'>
          Twitter: <span className='text-primary'>@pacmoon_</span>
          <br />
          <br />
          Telegram: <span className='text-primary'>Join Now</span>
          <br />
          <br />
          Website: <span className='text-primary'>http://pacmoon.io</span>
        </p>
        <p className='text-third font-bold xl:text-2xl xl:mb-16 md:mb-10 mb-7'>
          Legal Disclaimers
          <br />
          <br />
          $PAC is not intended to constitute securities in Panama, Singapore or any relevant jurisdiction, and will not
          entitle token holders to any promise of dividends, revenue, fees, profits or investment returns.
          <br />
          <br />
          $PAC is non-refundable and cannot be exchanged for cash (or its equivalent value in any other digital asset)
          or any payment obligation, does not represent any shareholding, ownership, participation, right, title, or
          interest in any entity, is not a representation of money (including electronic money), payment instrument,
          security, commodity, bond, debt instrument, unit in a collective investment or managed investment scheme or
          any other kind of financial instrument or investment, and does not entitle token holders to any promise of
          revenue, fees, profits or investment returns.
          <br />
          <br />
          $PAC does not represent any shareholding, participation, right, title, or interest in any entity, enterprise
          or undertaking. Once issued, it does not appear that holders of $PAC incur any liability to any entity,
          enterprise or undertaking).
          <br />
          <br />
          There is no buy-back or destruction mechanism planned for $PAC.
          <br />
          <br />
          $PAC is non-refundable, not redeemable for any assets of any entity or organization, and $PAC cannot be
          exchanged for cash (or its equivalent value in any other digital asset) or any payment obligation by any
          entity or any affiliate.
          <br />
          <br />
          $PAC is not a loan to any entity and there is no expectation of profit nor interest payment.
          <br />
          <br />
          Users are acquiring $PAC to participate in PacMoon and to obtain services on the ecosystem thereon.
          <br />
          <br />
          $PAC may have no value and there is no guarantee or representation of value or liquidity for $PAC.
        </p>
      </section>
      <section className='w-full flex items-center justify-center'>
        <div className='md:bg-black rounded-xl xl:py-12 xl:px-24 lg:py-8 lg:px-24 md:py-8 md:px-24 px-4 py-6 flex items-center flex-col'>
          <h1 className='text-secondary xl:text-4xl lg:text-3xl md:text-2xl xl:md:mb-10 mb-7 lg:mb-7 md:mb-10 font-semibold md:block hidden'>
            Have you claimed your airdrop yet?
          </h1>
          <AirdropButton className='md:mb-8 md:px-16 px-10'>CLAIM YOUR AIRDROP</AirdropButton>
        </div>
      </section>
    </div>
  )
}

export default About
