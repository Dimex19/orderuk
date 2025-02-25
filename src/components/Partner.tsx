import React from 'react'
import Button from './Button'
const Partner = () => {
    return (
        <div className="relative flex justify-between items-end ml-[100px] mr-[100px] mt-[63px] mb-[56px]">
            <div className="relative w-[48%] h-[425px] bg-[url('/assets/waiter1.png')] bg-cover bg-center rounded-[12px]">
                <div className="absolute left-[70px] flex items-center justify-center bg-white w-[288px] h-[63px] rounded-b-[12px] ">
                    <p className='font-bold text=[18px] text-black'>Earn more with lower fees</p>
                </div>
                <div className="mt-[187px] ml-[70px]">
                    <p className="font-medium text-[18px] text-[#FC8A06]">Signup as a business</p>
                    <p className="font-bold text-[44px] text-white">Partner with us</p>
                </div>
                <Button text='Get Started' className='mt-[36px] ml-[70px] bg-[#FC8A06] w-[205px] h-[58px] rounded-[120px] text-white'/>

            </div>
            <div className="relative w-[48%] h-[425px] bg-[url('/assets/waiter2.png')] bg-cover bg-center rounded-[12px]">
                <div className="absolute left-[70px] flex items-center justify-center bg-white w-[288px] h-[63px] rounded-b-[12px] ">
                    <p className='font-bold text=[18px] text-black'>Earn more with lower fees</p>
                </div>
                <div className="mt-[187px] ml-[70px]">
                    <p className="font-medium text-[18px] text-[#FC8A06]">Signup as a rider</p>
                    <p className="font-bold text-[44px] text-white">Ride with us</p>
                </div>
                <Button text='Get Started' className='mt-[36px] ml-[70px] bg-[#FC8A06] w-[205px] h-[58px] rounded-[120px] text-white'/>

            </div>
        </div>
    )
}

export default Partner
