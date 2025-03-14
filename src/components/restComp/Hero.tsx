import React from 'react'
import Button from '../Button'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { HiClock } from "react-icons/hi2";


const Hero = () => {
  return (
    <div className="relative mx-2.5 md:mx-[50px]">
        <div className='relative flex md:flex-row flex-col-reverse justify-between bg-[#03081FE5] p-[57px] text-white'>
                <div className="mt-[40px] lg:mt-[60px] xl:mt-[150px]">
                    <p className="font-normal text-[16px]">I&apos;m lovin&apos; it!</p>
                    <p className="font-semibold text-[20px] md:mb-2 md:text-[24px] xl:text-[40px]">McDonald’s East London</p>
                    <div className="flex gap-4 flex-wrap">
                        <Button className="px-4 py-2 xl:px-6 xl:py-3 flex items-center gap-2 border border-white rounded-[120px]" text='Minimum Order: 12 GBP' image='/assets/icons/order.png' imageClass='w-6 h-6' textClass='text-[12px]'/>
                        <Button className="px-4 py-2 xl:px-6 xl:py-3 flex items-center gap-2 border border-white rounded-[120px]" text='Delivery in 20-25 Minutes' image='/assets/icons/moto.png' imageClass='w-6 h-6' textClass='text-[12px]'/>
                    </div>
                </div>
                <div className="relative h-full lg:w-[40%]">
                    <img src="/assets/restBurger.png" alt="" className=''/>
                    <div className="absolute  scale-50 xl:scale-90 2xl:scale-100 flex flex-col items-center justify-center gap-3 text-black bg-white w-[136px] h-[158px] z-50 top-[60%] left-[-56px] rounded-xl">
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