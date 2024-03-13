import Image from "next/image";
import Background from '@/assets/Background.jpg'
import Button from "@/components/Button";
export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] overflow-hidden">
      <Image src={Background} alt="Background Image" className="relative top-0 w-full h-full"/>
      <article className="absolute top-0 ">
        <h2 className="lg:text-[42px] font-bold text-[#c7effd]">The L2 that helps you earn more ETH</h2>
        <p>The only Ethereum L2 with native yield for ETH and stablecoins. Mainnet now live.</p>
        <Button className=''>BRIDGE & EARN</Button>
      </article>
    </main>
  );
}
