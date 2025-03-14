import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='mx-[50px] mt-[70px] flex items-center justify-center md:justify-between'>
        <p className='hidden md:flex text-[18px] md:text-[22px] lg:text-[28px] xl:text-[32px] font-bold'>All Offers from McDonald’s East London</p>
        <div className="relative">
            <p className="absolute top-4 left-5 text-[18px] font-bold"><CiSearch/></p>
            <input type="text" className='border border-[#03081F] pl-12  py-3 rounded-[120px] md:w-[250px] w-[300px]' placeholder='Search from menu...'/>
        </div>
    </div>
  )
}

export default Search