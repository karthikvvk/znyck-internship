import Head from 'next/head'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-Poppins min-h-screen flex flex-col bg-gradient-to-r from-[#566FFD] to-[#F866C6]">
      <Head>
        <title>The Social Project</title>
      </Head>

      <nav className="flex justify-between items-center border border-gray-700">
        <div className="flex space-x-14 p-6 ">
          <a href="/" className="link">The Social Project</a>
          <a href="/" className="link">Home</a>
          <a href="/about" className="link">About</a>
          <a href="/projects" className="link">Projects</a>
          <a href="/blog" className="link">Blog</a>
          <a href="/get Involved" className="link">Get Involved</a>
          <a href="/contact" className="link">Contact</a>
          <a href="/shop" className="link">Shop</a>
          <button className="bg-[#17D8E2] text-[#0F0F0F] px-4 py-2 rounded-full">Donate</button>
        </div>
        <Image 
        src='/logo.svg'
        height={130}
        width={130}
        alt='logo'
        />
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-center p-4 flex-grow">
        <div className="text-center md:text-left md:w-1/2 p-4">
          <h1 className="text-[24px] font-bold mb-4">SET THE CHANGE IN MOTION</h1>
          <p className="text-[56px] font-bold mb-6">Secure her path to a brighter future...</p>
          <input className='width-15 rounded-s py-3'></input>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-l-none rounded-sm">Join us today</button>
        </div>
        
        <div className='flex justify-center md:justify-end md:w-1/2 p-4'>
          <Image
            src="/child.png"
            alt='design'
            width={941}
            height={694}
          />
        </div>
      </div>
    </div>
  )
}
