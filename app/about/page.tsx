import Image from 'next/image'
import Logo from '@/assets/Logo.png'
import AirdropButton from '@/components/Button'

function About() {
  return (
    <div className='w-[100vw] min-h-screen xl:pt-40 xl:px-40 lg:pt-32 md:pt-28 md:px-14 px-5 pt-24 xl:pb-20 pb-10 bg-gradient-to-b from-black to-[#121c1c]'>
      <section className='xl:mb-20 mb-5 md:pt-10 pt-5'>
        <p className='text-third font-bold xl:text-2xl xl:mb-16 md:mb-10 mb-7'>
          Welcome to Expanding Brain, where we&apos;re not just revolutionizing GPU computing rental and AI – we&apos;re
          redefining the very essence of decentralized computing. Built on the Solana blockchain, Expanding Brain
          represents a paradigm shift in how we harness the immense power of CPUs and GPUs.
          <br />
          <br />
          Imagine a world where computing power isn&apos;t concentrated in the hands of a few, but distributed across a
          decentralized network of individuals and businesses. That&apos;s the vision driving Expanding Brain. Our
          platform taps into the latent potential of GPUs, transforming them from mere hardware components into valuable
          assets within a global ecosystem.
          <br />
          <br />
          At Expanding Brain, we&apos;re not just building a cryptocurrency – we&apos;re building a community. GPU
          owners become active participants in our network, contributing their computing resources to process AI and
          machine learning applications. In return, they&apos;re rewarded with Brain Coin ($EXBC), a digital currency
          that represents their stake in the future of decentralized computing.
          <br />
          <br />
          But Expanding Brain isn&apos;t just about rewarding GPU owners – it&apos;s about empowering developers and
          businesses with access to unprecedented computing power. Whether you&apos;re a researcher tackling complex AI
          algorithms or a startup developing cutting-edge machine learning applications, Expanding Brain provides the
          infrastructure you need to succeed.
          <br />
          <br />
          Join us as we embark on this journey to unlock the full potential of decentralized GPU networks. Together,
          we&apos;ll shape the future of computing and pave the way for a more inclusive and equitable digital economy.
        </p>
        <h3 className='text-secondary xl:text-2xl lg:text-xl md:text-lg md:mb-10 mb-7 font-semibold'>
          Legal Disclaimers
        </h3>
        <p className='text-third font-bold xl:text-2xl xl:mb-16 md:mb-10 mb-7'>
          $EXBC is not intended to constitute securities in Panama, Singapore or any relevant jurisdiction, and will not
          entitle token holders to any promise of dividends, revenue, fees, profits or investment returns.
          <br />
          <br />
          $EXBC is non-refundable and cannot be exchanged for cash (or its equivalent value in any other digital asset)
          or any payment obligation, does not represent any shareholding, ownership, participation, right, title, or
          interest in any entity, is not a representation of money (including electronic money), payment instrument,
          security, commodity, bond, debt instrument, unit in a collective investment or managed investment scheme or
          any other kind of financial instrument or investment, and does not entitle token holders to any promise of
          revenue, fees, profits or investment returns.
          <br />
          <br />
          $EXBC does not represent any shareholding, participation, right, title, or interest in any entity, enterprise
          or undertaking. Once issued, it does not appear that holders of $EXBC incur any liability to any entity,
          enterprise or undertaking).
          <br />
          <br />
          There is no buy-back or destruction mechanism planned for $EXBC.
          <br />
          <br />
          $EXBC is non-refundable, not redeemable for any assets of any entity or organization, and $EXBC cannot be
          exchanged for cash (or its equivalent value in any other digital asset) or any payment obligation by any
          entity or any affiliate.
          <br />
          <br />
          $EXBC is not a loan to any entity and there is no expectation of profit nor interest payment.
          <br />
          <br />
          Users are acquiring $EXBC to participate in Expanding Brain and to obtain services on the ecosystem thereon.
          <br />
          <br />
          $EXBC may have no value and there is no guarantee or representation of value or liquidity for $EXBC.
        </p>
      </section>
      <section className='w-full flex items-center justify-center'>
        <div className='md:bg-black rounded-xl xl:py-12 xl:px-24 lg:py-8 lg:px-24 md:py-8 md:px-24 px-4 py-6 flex items-center flex-col'>
          <h1 className='text-secondary xl:text-4xl lg:text-3xl md:text-2xl xl:md:mb-10 mb-7 lg:mb-7 md:mb-10 font-semibold md:block hidden'>
            Swap for $EXBC token now ?
          </h1>
          <AirdropButton className='md:mb-8 md:px-16 px-10'>SWAP NOW</AirdropButton>
        </div>
      </section>
    </div>
  )
}

export default About
