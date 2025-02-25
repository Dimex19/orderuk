import React from 'react'
import Button from '@/components/Button'

const Service = () => {
  return (
    <div className="ml-[100px] mr-[100px] pl-[129px] pr-[108px] pt-[129px] bg-[#D9D9D9] rounded-[12px]">
        <div className="flex justify-between items-center">
            <h1 className='text-[32px] font-bold'>Know more about us!</h1>
            <div className="flex justify-between items-center w-[55%]">
            {["Frequent Questions", "Who are we?", "Partner Program", "Help & Support"].map((item) => (
                <Button
                key={item}
                text={item}
                className="text-[16px] font-normal pl-6 pr-6 pt-4 pb-4 bg-transparent border border-transparent rounded-none hover:border-[#FC8A06] hover:rounded-[120px] hover:font-bold"
                />
            ))}
            </div>
        </div>
        <div className="flex bg-[#03081F]">
            
        </div>
    </div>
  )
}

export default Service