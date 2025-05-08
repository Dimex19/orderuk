import React from 'react'

interface PricingProps {
    className: string,
    price: number,
    text: string
}

const Pricing:React.FC<PricingProps> = ({className, price, text}) => {
  return (
    <div className={`flex items-center gap-4 border-2 max-w-[300px] p-2 rounded hover:bg-black hover:text-white ${className}`}>
        <p className="text-[14px] font-bold">{text}</p>
        <div className="py-2 px-4 bg-[#028643] rounded">
            <p className="text-white text-[14px] font-bold">{price}</p>
        </div>
    </div>
  )
}

export default Pricing