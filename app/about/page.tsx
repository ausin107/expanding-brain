import Image from 'next/image'
import {} from 'react'
import Logo from '@/assets/Logo.png'
import Blast_Logo from '@/assets/Blast_Logo.webp'
import Button from '@/components/Button'
import Link from 'next/link'
function About() {
  return (
    <div className='w-[100vw] xl:pt-40 xl:px-40 lg:pt-32 md:pt-40 md:px-0 pt-32 pb-20 bg-[#11140c]'>
      <section className='flex flex-row items-center justify-evenly w-full mb-20'>
        <Image src={Logo} alt='Image' className='w-[25rem]' />
        <div className='max-w-[45rem]'>
          <h1 className='text-secondary xl:text-4xl font-bold xl:mb-16'>The Community Coin of Blast</h1>
          <p className='text-third xl:text-2xl xl:mb-16'>
            New Ethereum game! Join & earn! Calling builders, creators & crypto enthusiasts!
          </p>
          <div>
            <p className='text-third font-semibold xl:mb-5'>BUILT ON</p>
            <Image src={Blast_Logo} alt='Image' />
          </div>
        </div>
      </section>
      <section className='mb-20 w-full'>
        <h1 className='text-secondary font-bold xl:text-5xl mb-8 w-4/5'>Vision</h1>
        <p className='text-third xl:text-2xl font-semibold mb-10 w-4/5'>
          Expanding Brain is a community coin and social movement built on the Blast L2 blockchain.
        </p>
        <p className='text-third font-bold xl:text-xl'>
          Welcome to a new era of Ethereum. Brought to you by Blast and Expading Brain. This game is different. Your
          voice is rewarded with $EXP. Every contribution builds our network. We call upon the builders, creators, and
          degens. It’s time, are you ready? Join the Expading Brain as we head to the MOON.
        </p>
      </section>
      <section className='mb-20'>
        <h1 className='text-secondary xl:text-5xl mb-16 font-semibold'>Creator Incentives</h1>
        {/* <div className='bg-secondary w-3/5 rounded py-5'>
          <svg viewBox='0 0 24 24' className='w-10 h-10 fill-none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M4.39502 12.0014C4.39544 12.4156 4.73156 12.751 5.14577 12.7506C5.55998 12.7502 5.89544 12.4141 5.89502 11.9999L4.39502 12.0014ZM6.28902 8.1116L6.91916 8.51834L6.91952 8.51777L6.28902 8.1116ZM9.33502 5.5336L9.0396 4.84424L9.03866 4.84464L9.33502 5.5336ZM13.256 5.1336L13.4085 4.39927L13.4062 4.39878L13.256 5.1336ZM16.73 7.0506L16.1901 7.57114L16.1907 7.57175L16.73 7.0506ZM17.7142 10.2078C17.8286 10.6059 18.2441 10.8358 18.6422 10.7214C19.0403 10.607 19.2703 10.1915 19.1558 9.79342L17.7142 10.2078ZM17.7091 9.81196C17.6049 10.2129 17.8455 10.6223 18.2464 10.7265C18.6473 10.8307 19.0567 10.5901 19.1609 10.1892L17.7091 9.81196ZM19.8709 7.45725C19.9751 7.05635 19.7346 6.6469 19.3337 6.54272C18.9328 6.43853 18.5233 6.67906 18.4191 7.07996L19.8709 7.45725ZM18.2353 10.7235C18.6345 10.8338 19.0476 10.5996 19.1579 10.2004C19.2683 9.80111 19.034 9.38802 18.6348 9.2777L18.2353 10.7235ZM15.9858 8.5457C15.5865 8.43537 15.1734 8.66959 15.0631 9.06884C14.9528 9.46809 15.187 9.88119 15.5863 9.99151L15.9858 8.5457ZM19.895 11.9999C19.8946 11.5856 19.5585 11.2502 19.1443 11.2506C18.7301 11.251 18.3946 11.5871 18.395 12.0014L19.895 11.9999ZM18.001 15.8896L17.3709 15.4829L17.3705 15.4834L18.001 15.8896ZM14.955 18.4676L15.2505 19.157L15.2514 19.1566L14.955 18.4676ZM11.034 18.8676L10.8815 19.6019L10.8839 19.6024L11.034 18.8676ZM7.56002 16.9506L8.09997 16.4301L8.09938 16.4295L7.56002 16.9506ZM6.57584 13.7934C6.46141 13.3953 6.04593 13.1654 5.64784 13.2798C5.24974 13.3942 5.01978 13.8097 5.13421 14.2078L6.57584 13.7934ZM6.58091 14.1892C6.6851 13.7884 6.44457 13.3789 6.04367 13.2747C5.64277 13.1705 5.23332 13.4111 5.12914 13.812L6.58091 14.1892ZM4.41914 16.544C4.31495 16.9449 4.55548 17.3543 4.95638 17.4585C5.35727 17.5627 5.76672 17.3221 5.87091 16.9212L4.41914 16.544ZM6.05478 13.2777C5.65553 13.1674 5.24244 13.4016 5.13212 13.8008C5.02179 14.2001 5.25601 14.6132 5.65526 14.7235L6.05478 13.2777ZM8.30426 15.4555C8.70351 15.5658 9.11661 15.3316 9.22693 14.9324C9.33726 14.5331 9.10304 14.12 8.70378 14.0097L8.30426 15.4555ZM5.89502 11.9999C5.89379 10.7649 6.24943 9.55591 6.91916 8.51834L5.65889 7.70487C4.83239 8.98532 4.3935 10.4773 4.39502 12.0014L5.89502 11.9999ZM6.91952 8.51777C7.57513 7.50005 8.51931 6.70094 9.63139 6.22256L9.03866 4.84464C7.65253 5.4409 6.47568 6.43693 5.65852 7.70544L6.91952 8.51777ZM9.63045 6.22297C10.7258 5.75356 11.9383 5.62986 13.1059 5.86842L13.4062 4.39878C11.9392 4.09906 10.4158 4.25448 9.0396 4.84424L9.63045 6.22297ZM13.1035 5.86793C14.2803 6.11232 15.3559 6.7059 16.1901 7.57114L17.27 6.53006C16.2264 5.44761 14.8807 4.70502 13.4085 4.39927L13.1035 5.86793ZM16.1907 7.57175C16.9065 8.31258 17.4296 9.21772 17.7142 10.2078L19.1558 9.79342C18.8035 8.5675 18.1557 7.44675 17.2694 6.52945L16.1907 7.57175ZM19.1609 10.1892L19.8709 7.45725L18.4191 7.07996L17.7091 9.81196L19.1609 10.1892ZM18.6348 9.2777L15.9858 8.5457L15.5863 9.99151L18.2353 10.7235L18.6348 9.2777ZM18.395 12.0014C18.3963 13.2363 18.0406 14.4453 17.3709 15.4829L18.6312 16.2963C19.4577 15.0159 19.8965 13.5239 19.895 11.9999L18.395 12.0014ZM17.3705 15.4834C16.7149 16.5012 15.7707 17.3003 14.6587 17.7786L15.2514 19.1566C16.6375 18.5603 17.8144 17.5643 18.6315 16.2958L17.3705 15.4834ZM14.6596 17.7782C13.5643 18.2476 12.3517 18.3713 11.1842 18.1328L10.8839 19.6024C12.3508 19.9021 13.8743 19.7467 15.2505 19.157L14.6596 17.7782ZM11.1865 18.1333C10.0098 17.8889 8.93411 17.2953 8.09997 16.4301L7.02008 17.4711C8.06363 18.5536 9.40936 19.2962 10.8815 19.6019L11.1865 18.1333ZM8.09938 16.4295C7.38355 15.6886 6.86042 14.7835 6.57584 13.7934L5.13421 14.2078C5.48658 15.4337 6.13433 16.5545 7.02067 17.4718L8.09938 16.4295ZM5.12914 13.812L4.41914 16.544L5.87091 16.9212L6.58091 14.1892L5.12914 13.812ZM5.65526 14.7235L8.30426 15.4555L8.70378 14.0097L6.05478 13.2777L5.65526 14.7235Z'
              fill='#000000'></path>
          </svg>
          <div className='text-third font-bold xl:text-xl'>Content</div>
        </div> */}
        <p className='text-third font-bold xl:text-2xl mb-10'>
          Incentives drive outcomes. Which is why every new protocol has a reward system based on on-chain activity.
          <br />
          <br />
          What if a meme coin did the same for social activity?
        </p>
        <h3 className='text-secondary xl:text-2xl mb-16 font-semibold'>HOW IT WORKS</h3>
        <p className='text-third font-bold xl:text-2xl mb-16'>
          Expanding Brain has reward programs designed to encourage users to contribute and participate in its
          ecosystem.
          <br />
          <br />
          $EXP may only be utilized as the unit of account within Expanding Brain’s ecosystem.
        </p>
        <p className='text-third font-bold xl:text-2xl mb-16 border-l-8 border-[#2422e5] pl-7'>
          1. Your tweet becomes eligible to accumulate points once the @Expanding Brain_ account likes it.
          <br />
          <br />
          2. The liked Tweet earns 1 point for every view it receives.
          <br />
          <br />
          3. The points can be redeemed for $PAC at a later date.
        </p>
        <p className='text-third font-bold xl:text-2xl mb-16'>
          We’ll only like Expanding Brain related content and filter out activity suspect of botting or misplay.
          <br />
          <br />
          Ultimately, the more you share Expanding Brain, the more $EXP you can earn.
        </p>
        <h3 className='text-secondary xl:text-2xl mb-16 font-semibold'>WHO IS THIS FOR?</h3>
        <p className='text-third font-bold xl:text-2xl mb-16'>
          Expanding Brain isn’t just for big influencers. It’s for the memelords, artists, traders, musicians, traders,
          writers etc… Everyone loves the feeling of earning $EXP and getting a surge of engagement from a Expanding
          Brain retweet. And we’re focused on giving that feeling to as many creators as we can.
        </p>
      </section>
      <section>
        <h1 className='text-secondary xl:text-5xl mb-16 font-semibold'>Tokenomics</h1>
        <p className='text-third font-bold xl:text-2xl mb-16'>
          To build an engaged community, $EXP is being airdropped to Blast depositors and creators
        </p>
        <h3 className='text-secondary xl:text-2xl mb-10 font-semibold'>$EXP is a fair launch</h3>
        <p className='text-third font-bold xl:text-2xl mb-16'>
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
          Users may keep $EXP in their wallet and utilize it for spending with any third party, platform, or merchant.
        </p>
      </section>
      <section>
        <h1 className='text-secondary xl:text-5xl mb-16 font-semibold'>Join the Expanding Brain</h1>
        <p className='text-third font-bold xl:text-2xl mb-16 border-l-8 border-[#2422e5] pl-7'>
          Twitter: <span className='text-primary'>@pacmoon_</span>
          <br />
          <br />
          Telegram: <span className='text-primary'>Join Now</span>
          <br />
          <br />
          Website: <span className='text-primary'>http://pacmoon.io</span>
        </p>
        <p className='text-third font-bold xl:text-2xl mb-16'>
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
        <div className='bg-black w-4/5 rounded-xl py-16 px-10 flex items-center flex-col'>
          <h1 className='text-secondary xl:text-4xl mb-10 font-semibold'>Have you claimed your airdrop yet?</h1>
          <Button className='mb-8'>CLAIM YOUR AIRDROP</Button>
        </div>
      </section>
    </div>
  )
}

export default About
