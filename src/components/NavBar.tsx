'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Button from './Button'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; // Import close icon

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {/* Desktop Navigation */}
      <div className='md:flex hidden mt-[24px] mb-[45px] mx-[100px] justify-between'>
        <img src="/assets/logo.png" alt="" className="h-[53px]" />
        <div className="flex flex-1 justify-between items-center">
          <div className="flex justify-between ml-auto w-[80%] items-center">
            {["Home", "Browse Menu", "Special Offers", "Restaurants", "Track Order"].map((item) => (
              <Link key={item} href="/" className='p-4 pl-6 pr-6 rounded-[120px] hover:bg-[#FC8A06] hover:text-white'>
                {item}
              </Link>
            ))}
            <Button text='Login/Signup' image='/assets/image.png' className='flex items-center justify-center w-[234px] h-[61px] bg-[#03081F] text-white text-center rounded-[120px]' />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden justify-between px-5 py-4">
        <img src="/assets/logo.png" alt="" className="h-[53px]" />
        <p className='text-[64px] cursor-pointer' onClick={() => setShowMenu(true)}>
          <GiHamburgerMenu />
        </p>
      </div>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <div className='fixed top-0 left-0 w-full h-screen bg-white z-[1000] flex flex-col gap-6 shadow-lg'>
          
          <div className="flex justify-between px-10 py-8 border-2">
            <div className="flex items-center gap-4">
              <img src="/assets/menu.png" alt="" />
              <p className='font-bold text-3xl'>Menu</p>
            </div>
            <button onClick={() => setShowMenu(false)} className="text-4xl text-black">
              <IoClose />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col gap-4 overflow-y-auto h-full px-4">
            {["Pizza", "Garlic Bread", "Calzone", "Kebabas", "Salads", "Cold Drinks", "Happy Meal®", "Deserts", "Hot Drinks", "Sauces", "Orbit®"].map((item) => (
              <Link key={item} href="/" className="px-10 py-3 text-2xl font-semibold hover:bg-[#03081F] hover:text-white">
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar;
