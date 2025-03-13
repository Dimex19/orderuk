import React from 'react'
import Button from '../Button'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { HiClock } from "react-icons/hi2";


const Hero = () => {
  return (
    <div className="relative mx-[50px]">
        <div className='relative flex justify-between bg-[#03081FE5] p-[57px] text-white'>
                <div className="mt-[150px]">
                    <p className="font-normal text-[16px]">I'm lovin' it!</p>
                    <p className="font-semibold text-[50px]">McDonald’s East London</p>
                    <div className="flex gap-4">
                        <Button className="px-8 py-3 flex gap-3 border border-white rounded-[120px]" text='Minimum Order: 12 GBP' image='/assets/icons/order.png' />
                        <Button className="px-8 py-3 flex gap-3 border border-white rounded-[120px]" text='Delivery in 20-25 Minutes' image='/assets/icons/moto.png' />
                    </div>
                </div>
                <div className="relative h-full">
                    <img src="/assets/restBurger.png" alt=""/>
                    <div className="absolute flex flex-col items-center justify-center gap-3 text-black bg-white w-[136px] h-[158px] z-50 top-[60%] left-[-56px] rounded-xl">
                        <p className="text-[60px] text-center leading-10">3.4</p>
                        <div className="flex items-center justify-center">
                            <p className='text-[#FFD700] text-[24px]'><MdOutlineStarPurple500/></p>
                            <p className='text-[#FFD700] text-[24px]'><MdOutlineStarPurple500/></p>
                            <p className='text-[#FFD700] text-[24px]'><MdOutlineStarPurple500/></p>
                            <p className='text-[#FFD700] text-[24px]'><MdOutlineStarPurple500/></p>
                            <p className='text-[#FFD700] text-[24px]'><MdOutlineStarPurple500/></p>
                        </div>
                        <p className="text-[16px] text-center opacity-50">1234 reviews</p>
                    </div>
                </div>
        </div>
        <div className="absolute bottom-[-30px] flex items-center gap-3 w-[285px] px-8 py-4 bg-[#FC8A06] text-[18px] font-semibold text-white rounded-tr-xl rounded-br-xl">
            <p className="f"><HiClock/></p>
            <p className="">Open until 3:00 AM</p>
        </div>
    </div>
  )
}

export default Hero