'use client'
import Logo from '/public/assets/logo/nikelogo.png'
import Image from 'next/image'
import Link from 'next/link'



const Login = () => {
    return(
      <div id="login"className='flex flex-col relative max-w-[380px] w-full mx-auto my-10 border border-black rounded-2xl transition-transform duration-200 transform hover:scale-105'>
      <div className="w-full h-[128px] flex flex-col items-center justify-center p-4">
          <Image src={Logo} alt="Logo" height={35} width={65} />
          <div className="flex flex-col items-center justify-center mt-4">
              <h1 className="font-bold text-xl text-black">YOUR ACCOUNT</h1>
              <h1 className="font-bold text-xl text-black">FOR EVERYTHING</h1>
              <h1 className="font-bold text-xl text-black">NIKE</h1>
          </div>
      </div>
  
      <div className='w-full p-4'>
          <input type="email" className='w-full h-[40px] px-4 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105' placeholder='Email Address' />
          <input type="password" className='w-full h-[40px] px-4 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105' placeholder='Password' />
  
          <div className='flex items-center mb-4'>
              <input type="checkbox" className="mr-2" />
              <label className="text-[12px] leading-[14px] text-[#8D8D8D]">Keep me signed in</label>
              <a href='/' className='ml-auto text-[12px] leading-[14px] text-[#BCBCBC] transition-transform duration-200 transform hover:scale-105'>Forgotten your password?</a>
          </div>
  
          <div className='mb-4'>
              <p className='text-[12px] leading-[16px] text-[#8D8D8D] text-center'>By logging in, you agree to Nike's <u><a href="/" className='px-1'>Privacy Policy</a></u></p>
              <p className='text-[12px] leading-[16px] text-[#8D8D8D] text-center'>and <u><a href="/" className='px-1'>Terms of Use.</a></u></p>
          </div>
  
          <button className='w-full h-[40px] bg-black border border-black rounded-[3px] transition-transform duration-200 transform hover:scale-105 text-white'>
              SIGN IN
          </button>
  
          <div className='h-[24px] mt-4'>
              <p className="text-[#BCBCBC] text-[12px] text-center">Not a Member <u className="text-black"><Link href={"/joinus"}>Join us?</Link></u></p>
          </div>
      </div>
  </div>)
}
export default Login