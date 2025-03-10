import React from 'react'
import Button from './Button'
const Partner = () => {
    return (
        <div className="relative md:flex justify-between items-end mx-3 md:mx-[100px] mt-[63px] mb-[56px]">
            <div className="relative mb-6 md:mb-0 md:w-[48%] h-[220px] md:h-[425px] bg-[url('/assets/waiter1.png')] bg-cover bg-center rounded-[12px]">
                <div className="ml-8 md:ml-[70px] flex items-center justify-center bg-white py-2 px-3 md:p-0 w-[200px] md:w-[288px] md:h-[63px] rounded-b-[12px] ">
                    <p className='font-bold text-[10px] md:text-[18px] md:text=[18px] text-black'>Earn more with lower fees</p>
                </div>
                <div className="mt-[70px] md:mt-[123px] ml-8 md:ml-[70px]">
                    <p className="font-medium text-[13px] md:text-[18px] text-[#FC8A06]">Signup as a business</p>
                    <p className="font-bold text-[24px] md:text-[44px] text-white">Partner with us</p>
                </div>
                <Button text='Get Started' className='mt-3 md:mt-[36px] ml-8 md:ml-[70px] bg-[#FC8A06] w-[107px] md:w-[225px] h-[29px] md:h-[58px] rounded-[120px] text-white' textClass='text-[10px] md:text-[16px]'/>

            </div>
            <div className="relative md:w-[48%] h-[220px] md:h-[425px] bg-[url('/assets/waiter2.png')] bg-cover bg-center rounded-[12px]">
                <div className="ml-8 md:ml-[70px] flex items-center justify-center bg-white py-2 px-3 md:p-0 w-[200px] md:w-[288px] md:h-[63px] rounded-b-[12px] ">
                    <p className='font-bold text-[10px] md:text-[18px] md:text=[18px] text-black'>Earn more with lower fees</p>
                </div>
                <div className="mt-[70px] md:mt-[123px] ml-8 md:ml-[70px]">
                    <p className="font-medium text-[13px] md:text-[18px] text-[#FC8A06]">Signup as a rider</p>
                    <p className="font-bold text-[24px] md:text-[44px] text-white">Earn with us</p>
                </div>
                <Button text='Get Started' className='mt-3 md:mt-[36px] ml-8 md:ml-[70px] bg-[#FC8A06] w-[107px] md:w-[225px] h-[29px] md:h-[58px] rounded-[120px] text-white' textClass='text-[10px] md:text-[16px]'/>

            </div>
        </div>
    )
}

export default Partner
