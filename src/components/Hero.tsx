import React from 'react'
import Button from './Button'
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Hero = () => {
  return (
    <div className='flex justify-center items-center md:justify-start md:items-center h-[350px] md:h-[610px] text-white rounded-[12px] border md:ml-[100px] mx-4 md:mr-[100px] bg-[#03081F] relative'>
        <div className="flex flex-col ml-0 md:ml-[36px] m-auto absolute z-50">
            <p className='text-[12px] text-center md:text-left md:text-[16px] md:mt-[134px]'>Order Restaurant food, takeaway and groceries.</p>
            <h1 className='font-semibold text-[34px] text-center md:text-left md:text-[54px]'>Feast Your Senses,<br /> <span className="text-[#FC8A06]">Fast and Fresh</span></h1>
            <p className='text-[13px] text-center md:text-left mt-4 mb-3'>Enter a postcode to see what we deliver</p>
            <div className="hidden md:flex h-[57px] relative w-[397px]">
                <input type="text" className='w-[397px] h-[57px] border p-[20px] rounded-[120px] text-black'/>
                <Button text='Search' className='bg-[#FC8A06] w-[188px] h-[58px] rounded-[120px] text-white absolute right-0'/>
            </div>
            <div className="md:hidden h-[57px] relative w-[308px]">
                <input type="text" className='w-[308px] h-[57px] border p-[20px] rounded-[120px] text-black'/>
                <Button text={<IoIosArrowDroprightCircle/>} className='bg-[#FC8A06] w-[58px] h-[58px] rounded-[120px] text-white absolute right-0'/>
            </div>
        </div>
        <div className="hidden md:flex absolute w-[50%] h-full right-0">
            <img src="/assets/notification1.png" alt="" className="absolute right-[139px] top-[102px] z-20" />
            <img src="/assets/notification2.png" alt="" className="absolute right-2.5 top-[270px] z-20" />
            <img src="/assets/notification1.png" alt="" className="absolute right-[89px] bottom-[55px] z-20" />
            <img src="/assets/pizzagirl.png" alt="" className='absolute bottom-0 right-[421px] z-20' />
            <img src="/assets/spag.png" alt="" className='absolute right-[291px] bottom-0 z-10'/>
            <div className="w-[626px] h-[565px] rounded-tl-[282.5px] rounded-br-[12px] bg-[#FC8A06] absolute right-0 bottom-0"></div>
        </div>
    </div>
  )
}

export default Hero