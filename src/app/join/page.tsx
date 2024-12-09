import react from 'react'
import Image from 'next/image'
import Logo from '/public/assets/logo/nikelogo.png'
import Link from 'next/link'
const Join = () => {
    return(
      <div id='join' className='relative w-full max-w-[300px] mx-auto my-10 bg-white border border-black rounded-2xl transition-transform duration-200 hover:scale-105'>
      <div className="w-full h-[128px] flex flex-col items-center justify-center p-4">
          <Image src={Logo} alt="Logo" height={35} width={65} />
          <div className="flex flex-col items-center justify-center mt-4">
              <h1 className="font-bold text-xl text-black">YOUR ACCOUNT</h1>
              <h1 className="font-bold text-xl text-black">FOR EVERYTHING</h1>
              <h1 className="font-bold text-xl text-black">NIKE</h1>
          </div>
      </div>
  
      <div className='w-full p-4'>
          <input type="email" className='w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105' placeholder='Email Address' />
  
          <input type="password" className='w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105' placeholder='Password' />
  
          <input type="text" placeholder='First Name' className='w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105' />
  
          <input type="text" placeholder='Last Name' className='w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105' />
  
          <input type="date" className='w-full h-[40px] px-4 py-2 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105' />
  
          <p className='text-[11px] leading-[13px] text-[#8D8D8D] text-center mb-4'>Get a Nike Member Reward every year on your Birthday.</p>
  
          <label htmlFor="country" className='block text-black mb-2'>Country</label>
          <select id="Country" name="Country" className='w-full h-[40px] px-4 mb-4 bg-white border border-[#E5E5E5] rounded-[3px] text-black transition-transform duration-200 transform hover:scale-105'>
              <option value="India">India</option>
              <option value="USA">Pakistan</option>
              <option value="Canada">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Germany">Germany</option>
              <option value="Iran">Iran</option>
              <option value="Russia">Russia</option>
          </select>
  
          <div className="flex items-center mb-4">
              <input type="radio" name="gender" value="male" className="h-4 w-4 mr-2" />
              <label className="text-black mr-4">Male</label>
              <input type="radio" name="gender" value="female" className="h-4 w-4 mr-2" />
              <label className="text-black">Female</label>
          </div>
  
          <div className='flex items-center mb-4'>
              <input type="checkbox" className='h-4 w-4 mr-2' />
              <p className='text-[#8D8D8D] text-[11px] leading-[14px]'>Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
          </div>
  
          <div className='mb-4'>
              <p className="text-[#BCBCBC] text-[12px]">By creating an account, you agree to Nike&apos;s <a href="/" className='text-black'><u>Privacy Policy</u></a></p>
              <p className="text-[#BCBCBC] text-[12px]">and <a href="/" className='text-black'><u> Terms of Use</u></a></p>
          </div>
  
          <button className='w-full h-[40px] bg-black border border-black rounded-[3px] transition-transform duration-200 transform hover:scale-105'>
              SIGN IN
          </button>
  
          <div className='h-[24px] mt-4'>
              <p className="text-[#BCBCBC] text-[12px] text-center">Already a Member <u className="text-black"><Link href={"/Sign In"}>Join us?</Link></u></p>
          </div>
      </div>
  </div>
    
    )
}
export default Join