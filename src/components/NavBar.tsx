import React from 'react'
import Link from 'next/link'
import Button from './Button'
import { GiHamburgerMenu } from "react-icons/gi";


const NavBar = () => {
  return (
    <div>
      <div className='md:flex hidden mt-[24px] mb-[45px] ml-[100px] mr-[100px] justify-between'>
          <img src="/assets/logo.png" alt="" className="h-[53px]" />
          <div className="flex flex-1 justify-between items-center">
            <div className="flex justify-between ml-auto w-[80%] items-center">
              <Link href="/" className='p-4 pl-6 pr-6 rounded-[120px] hover:bg-[#FC8A06] hover:text-white'>Home</Link>
              <Link href="/" className='p-4 pl-6 pr-6 rounded-[120px] hover:bg-[#FC8A06] hover:text-white'>Browse Menu</Link>
              <Link href="/" className='p-4 pl-6 pr-6 rounded-[120px] hover:bg-[#FC8A06] hover:text-white'>Special Offers</Link>
              <Link href="/" className='p-4 pl-6 pr-6 rounded-[120px] hover:bg-[#FC8A06] hover:text-white'>Restaurants</Link>
              <Link href="/" className='p-4 pl-6 pr-6 rounded-[120px] hover:bg-[#FC8A06] hover:text-white'>Track Order</Link>
              <Button text='Login/Signup' image='/assets/image.png' className='flex items-center justify-center w-[234px] h-[61px] bg-[#03081F] text-white text-center rounded-[120px]'/>
            </div>
          </div>
      </div>

      <div className="flex md:hidden justify-between px-5 py-4">
        <img src="/assets/logo.png" alt="" className="h-[53px]" />
        <p className='text-[64px]'><GiHamburgerMenu/></p>
      </div>
    </div>
  )
}

export default NavBar