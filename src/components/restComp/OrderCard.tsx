import React from 'react'
import Pricing from './Pricing'

interface OrderCardProps {
    title: string,
    description: string,
}

const OrderCard:React.FC<OrderCardProps> = ({title, description}) => {
  return (
    <div className='shadow-custom-card h-[403px] p-5 w-[754px] mb-6 rounded'>
        <p className="font-bold text-[26px]">{title}</p>
        <div className="flex gap-2 mb-[40px] ">
            <img src="/assets/chilli-red.png" alt="" className=''/>
            <img src="/assets/chilli-red.png" alt="" />
            <img src="/assets/chilli-gray.png" alt="" />
            <img src="/assets/chilli-gray.png" alt="" />
            <img src="/assets/chilli-gray.png" alt="" />
        </div>
        <p className="text-[14px] w-[40%] mb-[40px] leading-6">{description}</p>
        <div className="flex flex-wrap gap-3">
            <Pricing className='w-[150px]' text='Small' price={21.89}/>
            <Pricing className='w-[180px]' text='Medium' price={21.89}/>
            <Pricing className='w-[150px]' text='Large' price={21.89}/>
            <Pricing className='w-[300px]' text='XL Large with Sauces' price={21.89}/>
        </div>
    </div>
  )
}

export default OrderCard