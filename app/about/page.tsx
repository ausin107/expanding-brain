import Image from 'next/image'
import Logo from '@/assets/Logo.png'
import AirdropButton from '@/components/Button'

function About() {
  return (
    <div className='w-[100vw] min-h-screen xl:pt-40 xl:px-40 lg:pt-32 md:pt-28 md:px-14 px-5 pt-24 xl:pb-20 pb-10 bg-gradient-to-b from-black to-[#121c1c]'>
      <section className='xl:mb-20 mb-5 md:pt-10 pt-5'>
        <p className='text-third font-bold xl:text-2xl xl:mb-16 md:mb-10 mb-7'>
          Welcome to Connect Wallet, the revolutionary cryptocurrency platform where users wield the power to shape the
          trajectory of digital currencies. In a landscape dominated by the agendas of big tech and centralized
          authorities, Connect Wallet stands as a beacon of empowerment, championing the principles of decentralization,
          community governance, and user-centricity.
          <br />
          <br />
          At Connect Wallet, we recognize the inherent potential of blockchain technology to democratize finance and
          foster inclusive participation in the global economy. However, we also acknowledge the limitations of existing
          systems, where decisions about cryptocurrency features, functionalities, and priorities are often made behind
          closed doors by a select few.
          <br />
          <br />
          That&apos;s why we&apos;ve built Connect Wallet – to put control back where it belongs, in the hands of the
          people. Our platform empowers users to actively participate in governance decisions, ensuring that the
          direction of cryptocurrency development reflects the collective will of the community, rather than the
          interests of centralized entities.
          <br />
          <br />
          Through a transparent and democratic voting process, users can propose, debate, and ultimately decide on key
          aspects of cryptocurrency design and implementation. Whether it&apos;s determining the allocation of funds,
          defining consensus mechanisms, or shaping governance protocols, every user has a voice and a vote in shaping
          the future of digital currencies.
          <br />
          <br />
          But Connect Wallet is more than just a governance platform – it&apos;s a vibrant community of individuals
          united by a shared vision of a more equitable and user-centric financial system. Here, users from all walks of
          life come together to exchange ideas, share insights, and collaborate on initiatives that advance the
          principles of decentralization and empowerment.
          <br />
          <br />
          Whether you&apos;re a seasoned crypto enthusiast, a passionate advocate for financial inclusion, or someone
          who simply wants a say in the future of finance, Connect Wallet welcomes you with open arms. Join us as we
          embark on this journey to redefine the landscape of cryptocurrency – one vote, one decision, and one user at a
          time.
          <br />
          <br />
          Together, we&apos;ll create a more democratic, transparent, and inclusive digital economy, where the power to
          innovate and shape the future resides firmly in the hands of the people. Welcome to Connect Wallet – where
          your voice matters, and your choices shape the future.
        </p>
        <h3 className='text-secondary xl:text-2xl lg:text-xl md:text-lg md:mb-10 mb-7 font-semibold'>
          Legal Disclaimers
        </h3>
        <p className='text-third font-bold xl:text-2xl xl:mb-16 md:mb-10 mb-7'>
          $EXPC is not intended to constitute securities in Panama, Singapore or any relevant jurisdiction, and will not
          entitle token holders to any promise of dividends, revenue, fees, profits or investment returns.
          <br />
          <br />
          $EXPC is non-refundable and cannot be exchanged for cash (or its equivalent value in any other digital asset)
          or any payment obligation, does not represent any shareholding, ownership, participation, right, title, or
          interest in any entity, is not a representation of money (including electronic money), payment instrument,
          security, commodity, bond, debt instrument, unit in a collective investment or managed investment scheme or
          any other kind of financial instrument or investment, and does not entitle token holders to any promise of
          revenue, fees, profits or investment returns.
          <br />
          <br />
          $EXPC does not represent any shareholding, participation, right, title, or interest in any entity, enterprise
          or undertaking. Once issued, it does not appear that holders of $EXPC incur any liability to any entity,
          enterprise or undertaking).
          <br />
          <br />
          There is no buy-back or destruction mechanism planned for $EXPC.
          <br />
          <br />
          $EXPC is non-refundable, not redeemable for any assets of any entity or organization, and $EXPC cannot be
          exchanged for cash (or its equivalent value in any other digital asset) or any payment obligation by any
          entity or any affiliate.
          <br />
          <br />
          $EXPC is not a loan to any entity and there is no expectation of profit nor interest payment.
          <br />
          <br />
          Users are acquiring $EXPC to participate in Connect Wallet and to obtain services on the ecosystem thereon.
          <br />
          <br />
          $EXPC may have no value and there is no guarantee or representation of value or liquidity for $EXPC.
        </p>
      </section>
      <section className='w-full flex items-center justify-center'>
        <div className='md:bg-black rounded-xl xl:py-12 xl:px-24 lg:py-8 lg:px-24 md:py-8 md:px-24 px-4 py-6 flex items-center flex-col'>
          <h1 className='text-secondary xl:text-4xl lg:text-3xl md:text-2xl xl:md:mb-10 mb-7 lg:mb-7 md:mb-10 font-semibold md:block hidden'>
            Swap for $EXPC token now ?
          </h1>
          <AirdropButton className='md:mb-8 md:px-16 px-10'>SWAP NOW</AirdropButton>
        </div>
      </section>
    </div>
  )
}

export default About
