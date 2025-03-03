import React from 'react'
import Button from '@/components/Button'

const Service = () => {
    const data = [
        {
            title: 'Place an Order!',
            url: '/assets/place.png',
            paragraph: 'Place order through our website or Mobile app'
        },
        {
            title: 'Track Progress!',
            url: '/assets/track.png',
            paragraph: 'Your can track your order status with delivery time'
        },
        {
            title: 'Get your Order!',
            url: '/assets/get.png',
            paragraph: 'Receive your order at a lighting fast speed!p'
        }
    ]
    
  return (
    <div>
        <div className="mx-3 md:mx-[100px] pl-3 md:pl-[129px] pr-3 md:pr-[108px] pb-[115px] pt-[129px] bg-[#D9D9D9] rounded-[12px]">
            <div className="flex justify-between items-center mb-[63px]">
                <h1 className='text-[32px] font-bold'>Know more about us!</h1>
                <div className="hidden md:flex justify-between items-center w-[55%]">
                {["Frequent Questions", "Who are we?", "Partner Program", "Help & Support"].map((item) => (
                    <Button
                    key={item}
                    text={item}
                    className="text-[16px] font-normal pl-6 pr-6 pt-4 pb-4 bg-transparent border border-transparent rounded-none hover:border-[#FC8A06] hover:rounded-[120px] hover:font-bold"
                    />
                ))}
                </div>
            </div>
            <div className="md:flex bg-[#03081F] pl-[72px] rounded-xl">
                <div className="flex flex-col gap-[34px] w-[35%] justify-center items-center">
                    <p className="text-[18px] font-bold bg-[#FC8A06] mt-[78px] pl-12 pr-12 pt-[18px] pb-[18px] border border-transparent rounded-[120px]">How does Order.UK work?</p>
                    <p className="text-white text-[18px]">What payment methods are accepted?</p>
                    <p className="text-white text-[18px]">Can I track my order in real-time?</p>
                    <p className="text-white text-[18px] text-center">Are there any special discounts or <br/> promotions available?</p>
                    <p className="text-white text-[18px] mb-[115px]">Is Order.UK available in my area?</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="md:flex gap-5 pt-[88px] ml-[31px]">
                        {data.map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center w-[238px] h-[285px] bg-[#D9D9D9] rounded-xl">
                            <p className="text-[18px] font-bold mb-[14px]">{item.title}</p>
                            <img src={item.url} alt="" className='w-[128px] h-[128px] mb-[5px]'/>
                            <p className="text-center text-[16px] font-medium">{item.paragraph}</p>
                        </div>
                        ))}
                    </div>
                    <p className="w-[625px] text-[15px] text-center text-white font-normal mt-[33px] mb-[48px]">Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center mx-3 md:mx-[100px] mt-[44px] mb-[45px] bg-[#FC8A06] rounded-xl">
            <div className="flex flex-col items-center text-white pt-[20px] pb-[16px]">
                <p className='text-[64px] font-light text-center'>546+</p>
                <p className="text-[24px]">Registered Riders</p>
            </div>
            <div className="border border-white w-[60%] md:w-1 md:h-[100px]"></div>
            <div className="flex flex-col items-center text-white pt-[20px] pb-[16px]">
                <p className='text-[64px] font-light text-center'>789,900+</p>
                <p className="text-[24px]">Orders Delivered</p>
            </div>
            <div className="border border-white w-[60%] md:w-1 md:h-[100px]"></div>
            <div className="flex flex-col items-center text-white pt-[20px] pb-[16px]">
                <p className='text-[64px] font-light text-center'>690+</p>
                <p className="text-[24px]">Restaurants Partnered</p>
            </div>
            <div className="border border-white w-[60%] md:w-1 md:h-[100px]"></div>
            <div className="flex flex-col items-center text-white pt-[20px] pb-[16px]">
                <p className='text-[64px] font-light text-center'>17,457+</p>
                <p className="text-[24px]">Food items</p>
            </div>
        </div>
    </div>
  )
}

export default Service