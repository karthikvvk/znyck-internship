import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image';

export default function Home() {
  return (
    <Html>
      <Head>
        {/* Viewport Meta Tag for Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
<body>
    <div className="font-Poppins min-h-screen flex flex-col bg-gradient-to-r from-[#566FFD] to-[#F866C6]">
      <div  className="bg-gradient-to-r from-[#566FFD] to-[#F866C6]">


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

      <div className=" text-[#000000] font-Poppins min-h-screen flex flex-col bg-[#DFDDE0]">
        <header className='font-Poppins flex flex-col'>
          <h1 className='text text-[28px]  font-bold text-[#000000] md:text-center mt-10'>EMPOWERING COMMUNITIES: OVERCOMING THE CYCLE OF POVERTY AND INEQUALITY</h1>
        </header>
        <div className='flex flex-col text text-[18px] p-10'>
            <p>
            In a world where poverty and inequality continue to hinder progress for millions, countless individuals and families are left without
              the resources they need to thrive. At The Social Project, we are committed to changing this narrative by empowering the most 
              vulnerable members of our society—including children, youth, women, and marginalized communities—through education, mentorship,
              health camps, and social initiatives.
            </p>
            <p className='mt-7'>Our mission is to provide essential support across various areas:</p>
            <ul className='list-disc'>
              <div className='ml-9'>          
                <li className='mt-7'>Education: Offering quality education and life skills to children and youth, ensuring they have the tools to build a brighter future.</li>
                <li className='mt-7'>Women Empowerment: Empowering women through skills training and support programs, helping them achieve financial independence and improved quality of life.</li>
                <li className='mt-7'>Health and Awareness: Conducting health camps, awareness programs, and environmental initiatives that promote well-being and sustainable living.</li></div>
            </ul>
            <p className='mt-7'>Community Support: Collaborating with local organizations and social groups to foster growth and resilience within communities.</p>

            <p className='mt-7'>
              Join us in our mission to uplift and empower communities across our reach. Your support is crucial in expanding our initiatives and ensuring that every individual has access to the opportunities they deserve.
            </p>
            <p>
            Together, we can make a lasting impact—transforming lives and creating a world where everyone has the chance to succeed. Let’s work together to build a better, brighter future for all.
            </p>
          </div>
          <div className=' justify-center items-center flex flex-row'>
            <button className="bg-[#17D8E2] text-[#0F0F0F] px-4 py-2 rounded-full">Donate</button>
          </div>
      </div>

    </div>
</body>
    </Html>
  )
}
