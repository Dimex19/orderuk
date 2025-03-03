import React from 'react'
import { FaApple, FaFacebook, FaInstagram, FaSnapchat, FaTiktok } from 'react-icons/fa'
import Button from '@/components/Button'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='pt-[81px] bg-[#D9D9D9]'>
        <div className="px-[5%] md:px-[100px] mb-[58px] md:flex justify-between">
            <div className="f">
                <img src="/assets/logo2.png" alt="" />
                <div className="flex mt-[33px]">
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
                <p className="text-[15px] font-normal mt-[22px]">Company # 490039-445, Registered with <br/>House of companies.</p>
            </div>
            <div className="md:flex md:gap-10">
                <div className="flex flex-col justify-center items-center mb-8 md:mb-0" >
                    <p className="text-[14px] md:text-[18px] font-bold">Get Exclusive Deals in your Inbox</p>
                    <div className="h-[57px] relative w-[100%] md:w-[481px] mt-[23px] md:scale-100">
                        <input type="text" className='w-[100%] md:w-[481px] h-[59px] p-[20px] rounded-[120px] bg-[#bdbdbd] text-black'/>
                        <Button text='Subscribe' className='bg-[#FC8A06] w-[171px] h-[60px] rounded-[120px] text-white absolute right-0'/>
                    </div>
                    <p className="font-normal text-[13px] mt-3 md:ml-[30px]">we wont spam, read our email policy</p>
                    <div className="flex gap-[14px] mb-8 md:mb-0 mt-[21px] md:ml-[30px]">
                        <p className="text-[40px]"><FaFacebook/></p>
                        <p className="text-[40px]"><FaInstagram/></p>
                        <p className="text-[40px]"><FaTiktok/></p>
                        <p className="text-[40px]"><FaSnapchat/></p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mb-5" >
                    <p className='text-[18px] font-bold'>Legal Pages</p>
                    <Link href="#" className='text-[15px] underline'>Terms and Conditions</Link>
                    <Link href="#" className='text-[15px] underline'>Privacy</Link>
                    <Link href="#" className='text-[15px] underline'>Cookies</Link>
                    <Link href="#" className='text-[15px] underline'>Modern Slavery Statement</Link>
                </div>
                <div className="flex flex-col gap-4" >
                    <p className='text-[18px] font-bold'>Important Links</p>
                    <Link href="#" className='text-[15px] underline'>Get help</Link>
                    <Link href="#" className='text-[15px] underline'>Add your restaurant</Link>
                    <Link href="#" className='text-[15px] underline'>Sign up to deliver</Link>
                    <Link href="#" className='text-[15px] underline'>Create a business account</Link>
                </div>
            </div>
        </div>
        <div className="px-3 md:px-[100px] py-5 flex justify-center md:justify-between bg-[#03081F] text-white text-[15px]">
            <p className="text-[14px] text-center">Order.uk Copyright 2024, All Rights Reserved.</p>
            <div className="hidden md:flex gap-10">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms</Link>
                <Link href="#">Pricing</Link>
                <Link href="#">Do not share or sell my personal informatiom</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer