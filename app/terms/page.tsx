import BreadCrumb from '@/components/BreadCrumb'
import Link from 'next/link'
import React from 'react'

function Term() {
  return (
    <>
      <div className='lg:h-auto h-fit min-h-screen flex flex-col items-center lg:pt-32 md:pt-24 pt-20 px-5 bg-gradient-to-b from-black to-[#121c1c] xl:px-20 lg:px-8 md:px-14 pb-20'>
        <BreadCrumb title='Home' url='/' className='self-start md:mb-7 mb-4' />
        <h1 className='text-secondary font-bold xl:text-5xl lg:text-4xl md:text-4xl text-xl xl:mb-14 lg:mb-10 mb-7 text-center'>
          Terms and Conditions of Connect Wallet
        </h1>
        <p className='text-third lg:text-xl lg:mb-7 mb-4'>
          These Terms and Conditions govern your access to and use of the connectwallet.app website. By accessing or
          using the Website, you agree to these Terms in full. If you disagree with any part of these Terms, you may not
          access the Website.
        </p>
        <ol className='list-decimal text-secondary xl:text-xl md:px-10 px-5'>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Website Use:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li className='mb-3'>You must be at least 18 years old to access or use the Website.</li>
              <li>
                You agree to use the Website only for lawful purposes and in compliance with these Terms and all
                applicable laws and regulations.
              </li>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Intellectual Property:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li className='mb-3'>
                The Website and its original content, features, and functionality are owned by connectwallet.app and are
                protected by international copyright, trademark, patent, trade secret, and other intellectual property
                or proprietary rights laws.
              </li>
              <li>
                You may not modify, reproduce, distribute, transmit, display, perform, or create derivative works of any
                part of the Website without prior written consent from connectwallet.app.
              </li>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>User Content:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li className='mb-3'>
                You may submit or post content, including comments, messages, and other materials on the Website. By
                submitting User Content, you grant connectwallet.app a worldwide, non-exclusive, royalty-free,
                sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of,
                display, and perform the User Content in connection with the Website.
              </li>
              <li>
                You are solely responsible for your User Content and any consequences of posting or publishing it on the
                Website. You agree not to submit User Content that is unlawful, defamatory, obscene, offensive, or
                otherwise objectionable.
              </li>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Prohibited Activities:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li className='mb-3'>You agree not to engage in any of the following prohibited activities:</li>
              <ul className='px-3 list-[square]'>
                <li className='mb-1'>Violating any laws or regulations.</li>
                <li className='mb-1'>Interfering with the security or integrity of the Website.</li>
                <li className='mb-1'>
                  Impersonating any person or entity or falsely stating or otherwise misrepresenting your affiliation
                  with a person or entity.
                </li>
                <li className='mb-1'>
                  Collecting or harvesting any personally identifiable information from the Website.
                </li>
                <li className='mb-1'>Uploading or transmitting viruses, worms, or any other malicious code.</li>
              </ul>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Disclaimer of Warranties:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li className='mb-3'>
                The Website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without any
                representations or warranties, express or implied. connectwallet.app makes no representations or
                warranties regarding the accuracy, completeness, reliability, or suitability of the Website for any
                purpose.
              </li>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Limitation of Liability:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li>
                In no event shall connectwallet.app, its officers, directors, employees, or agents be liable for any
                indirect, incidental, special, consequential, or punitive damages arising out of or in connection with
                your use of the Website, whether based on warranty, contract, tort (including negligence), or any other
                legal theory.
              </li>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Indemnification:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li>
                You agree to indemnify and hold harmless connectwallet.app, its officers, directors, employees, and
                agents from and against any claims, liabilities, damages, losses, and expenses, including without
                limitation, reasonable legal and accounting fees, arising out of or in any way connected with your
                access to or use of the Website or your violation of these Terms.
              </li>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Governing Law:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li>
                These Terms shall be governed by and construed in accordance with the laws of [insert jurisdiction],
                without regard to its conflict of law principles.
              </li>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Changes to Terms:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li>
                connectwallet.app reserves the right to update or modify these Terms at any time without prior notice.
                Any changes will be effective immediately upon posting the revised Terms on the Website.
              </li>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Contact Us:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li>
                If you have any questions or concerns about these Terms, please contact us at{' '}
                <Link href='mailto:team@expandingbrain.ai' className='text-secondary hover:opacity-70'>
                  team@expandingbrain.ai
                </Link>
              </li>
            </ul>
          </li>
        </ol>
        <p className='text-third lg:text-xl lg:mb-7'>
          By accessing or using the Website, you acknowledge that you have read, understood, and agree to be bound by
          these Terms and any other policies or guidelines referenced herein.
        </p>
      </div>
      <div className='absolute bottom-0 w-full h-[4.5rem] flex items-center justify-end md:px-10 px-5'>
        <Link href='/' className='hover:text-primary md:mr-10 mr-5 md:text-base text-sm text-secondary'>
          Home
        </Link>
        <Link href='/privacy' className='hover:text-primary md:text-base text-sm text-secondary'>
          Privacy
        </Link>
      </div>
    </>
  )
}

export default Term
