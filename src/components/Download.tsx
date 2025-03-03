import React from 'react'
import { FaApple } from "react-icons/fa";

const Download = () => {
  return (
    <div className="relative flex items-end ml-[100px] mr-[100px] mt-[63px] mb-[56px] bg-gradient-to-r from-[#ffffff] to-[#E0E1DC] ">
      <div className=" w-[50%] h-[611px] flex items-end z-10">
        <img src="/assets/friends1.png" alt="" className="absolute bottom-0 left-0" />
        <img src="/assets/friends2.png" alt="" className="absolute bottom-0 left-4" />
      </div>

      <div className="flex flex-col absolute right-0 w-[60%] h-[611px] items-center">
        <div className="flex items-center space-x-4 mt-[110px]">
          <p className="flex items-center text-[64px] font-bold"><img src="/assets/logo.png" alt="brand logo" className='h-[100%]'/>ing</p>
          <p className='text-[64px] font-bold'> is more</p>
        </div>
        <div className='flex justify-end text-center items-center mt-5 mr-24 w-[878px] h-[90px] bg-[#03081F] rounded-[120px]'>
          <p className="text-[44px] pr-9 text-white font-medium"><span className="text-[#FC8A06] underline">Personalised </span> & Instant</p>
        </div>
        <p className="font-normal text-[24px] mt-[30px]">Download the Order.uk app for faster ordering</p>
        <div className="flex border border-red mt-[23px]">
          <button className="flex justify-center p-[2px] items-center  bg-black rounded-[10px] border px-4 py-2">
            <p className="text-3xl text-white "><FaApple /></p>
            <div className="ml-2">
              <p className="text-[9px] text-white  ">Download on the</p>
              <p className="text-white font-semibold leading-5">App Store</p>
            </div>
          </button>
          <button className="flex justify-center bg-black gap-2 items-center  rounded-[10px] border px-4 py-2">
            <img src='/assets/googleplaylogo.png' alt="" className="w-[px] h-[26.12px]" />
            <div className="ml-2">
              <p className="text-[10px] text-white  font-semibold text-start">GET IT ON</p>
              <p className="text-white font-semibold -mt-1">Google Play</p>
            </div>
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Download;
