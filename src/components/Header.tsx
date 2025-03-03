'use client'
import Link from 'next/link'

import React from 'react'
const Header = () => {
  return (
    <div className='hidden md:flex justify-between border bg-[#FAFAFA] rounded-b-[12px] ml-[100px] mr-[100px]'>
        <div className="flex items-center">
            <img src="/assets/star.png" alt="star" className='w-[25px] mr-3 ml-[37px]' />
            <p className="text-[15px]"> Get 5% Off your first order,<span className='text-[#FC8A06] font-bold leading-[22.5px] decoration-[#FC8A06] underline'> Promo: ORDER5</span></p>
        </div>
        <div className="flex">
        <div className="flex items-center mr-10">
            <img src="/assets/location.png" alt="" className='mr-[14px]'/>
            <p className="text-[15px] mr-[15px]">Regent Street, <span className='underline'>A4</span>, A4201, London</p>
            <Link href=""><p className="text-[#FC8A06] text-[14px] underline">Change Location</p></Link>
        </div>
        <div className="flex items-center w-[348px] bg-[#028643] h-[70px] rounded-b-[12px]">
            <div className="h-full border-r p-4">
                <img src="/assets/basket.png" alt="" />
            </div>
            <div className="border-white h-full border-r flex justify-center items-center">
            <p className='text-4 font-semibold text-white pl-[16px] pr-[14px]'>23 Items</p>

            </div>
            <div className="h-full">
            <p className='text-4 font-semibold flex justify-center items-center text-white h-full border-r  pl-[16px] pr-[10px]'>GBP 79.89</p>
            </div>
            <div className="h-full p-[12.8px]">
                <img src="/assets/arrowdown.png" alt="" className='w-[38px] h-[38px] m-auto'/>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Header