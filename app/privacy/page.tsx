import BreadCrumb from '@/components/BreadCrumb'
import Link from 'next/link'
import React from 'react'

function Privacy() {
  return (
    <>
      <div className='lg:h-auto h-fit min-h-screen flex flex-col items-center lg:pt-32 md:pt-24 pt-20 px-5 bg-gradient-to-b from-black to-[#121c1c] xl:px-20 lg:px-8 md:px-14 pb-20'>
        <BreadCrumb title='Home' url='/' className='self-start md:mb-7 mb-4' />
        <h1 className='text-secondary font-bold xl:text-5xl lg:text-4xl md:text-3xl text-xl xl:mb-14 lg:mb-10 mb-7'>
          Privacy of Expanding Brain
        </h1>
        <p className='text-third lg:text-xl lg:mb-7 mb-4'>
          At connectwallet.app, we are committed to safeguarding the privacy of our website visitors and users. This
          Privacy Policy outlines how we collect, use, disclose, and protect your personal information. By accessing or
          using connectwallet.app, you agree to the terms of this Privacy Policy.
        </p>
        <ol className='list-decimal text-secondary xl:text-xl md:px-10 px-5'>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Information We Collect:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li className='mb-3'>
                <strong className='text-secondary'>Personal Information:</strong> When you visit connectwallet.app or
                use our services, we may collect personal information such as your name, email address, contact details,
                and any other information you provide voluntarily.
              </li>
              <li className='mb-3'>
                <strong className='text-secondary'>Automatically Collected Information:</strong> We may collect certain
                information automatically when you visit our website, including your IP address, browser type, device
                information, and usage data through cookies and similar technologies.
              </li>
              <li className='mb-3'>
                <strong className='text-secondary'>Third-Party Sources:</strong> We may receive information about you
                from third-party sources to enhance our services or for marketing purposes. We ensure that such sources
                have lawful bases for disclosing your information.
              </li>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>How We Use Your Information:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li className='mb-3'>
                We may use the information we collect for various purposes, including but not limited to:
              </li>
              <ul className='md:px-3 px-0'>
                <li className='flex'>
                  <svg
                    className='fill-none mr-2'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M4 12.6111L8.92308 17.5L20 6.5'
                      className='stroke-secondary'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                  Providing and improving our services
                </li>
                <li className='flex'>
                  <svg
                    className='fill-none mr-2'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M4 12.6111L8.92308 17.5L20 6.5'
                      className='stroke-secondary'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                  Communicating with you
                </li>
                <li className='flex'>
                  <svg
                    className='fill-none mr-2'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M4 12.6111L8.92308 17.5L20 6.5'
                      className='stroke-secondary'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                  Personalizing your experience
                </li>
                <li className='flex'>
                  <svg
                    className='fill-none mr-2'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M4 12.6111L8.92308 17.5L20 6.5'
                      className='stroke-secondary'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                  Analyzing usage trends
                </li>
                <li className='flex'>
                  <svg
                    className='fill-none mr-2'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M4 12.6111L8.92308 17.5L20 6.5'
                      className='stroke-secondary'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                  Marketing and advertising purposes
                </li>
                <li className='flex'>
                  <svg
                    className='fill-none mr-2'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M4 12.6111L8.92308 17.5L20 6.5'
                      className='stroke-secondary'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                  Complying with legal obligations
                </li>
              </ul>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Information Sharing:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li className='mb-3'>
                We do not sell, trade, or rent your personal information to third parties for their marketing purposes.
                However, we may share your information with trusted third-party service providers who assist us in
                operating our website and providing our services.
              </li>
              <li>
                We may also disclose your information in response to legal requests or to protect our rights, property,
                or safety.
              </li>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Cookies and Tracking Technologies:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li>
                We use cookies and similar tracking technologies to enhance your experience on connectwallet.app,
                analyze usage patterns, and personalize content. You can manage your cookie preferences through your
                browser settings.
              </li>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Data Security:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li>
                We implement appropriate security measures to protect your personal information from unauthorized
                access, alteration, disclosure, or destruction.
              </li>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Your Rights:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li>
                You have the right to access, correct, or delete your personal information held by connectwallet.app.
                You may also opt-out of receiving marketing communications from us.
              </li>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Children`&apos;`s Privacy:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li>
                Our website and services are not directed to individuals under the age of 13. We do not knowingly
                collect personal information from children. If you are a parent or guardian and believe that your child
                has provided us with personal information, please contact us, and we will take appropriate steps to
                remove such information.
              </li>
            </ul>
          </li>
          <li className='mb-5'>
            <strong className='lg:text-xl'>Changes to this Privacy Policy:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li>
                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective
                immediately upon posting the revised Privacy Policy on connectwallet.app.
              </li>
            </ul>
          </li>
          <li className='mb-7'>
            <strong className='lg:text-xl'>Contact Us:</strong>
            <ul className='list-disc text-third mt-4 md:px-4 px-0'>
              <li>
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact
                us at{' '}
                <Link href='mailto:team@expandingbrain.ai' className='text-secondary hover:opacity-70'>
                  team@expandingbrain.ai
                </Link>
                .
              </li>
            </ul>
          </li>
        </ol>
        <p className='text-third lg:text-xl lg:mb-7'>
          By continuing to use connectwallet.app, you signify your acceptance of this Privacy Policy. Please review this
          Privacy Policy periodically for any updates or changes.
        </p>
      </div>
      <div className='absolute bottom-0 w-full h-[4.5rem] flex items-center justify-end md:px-10 px-5'>
        <Link href='/' className='hover:text-primary md:mr-10 mr-5 md:text-base text-sm text-secondary'>
          Home
        </Link>
        <Link href='/terms' className='hover:text-primary md:text-base text-sm text-secondary'>
          Terms and Conditions
        </Link>
      </div>
    </>
  )
}

export default Privacy
