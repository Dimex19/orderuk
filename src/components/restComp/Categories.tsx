'use client'
import React, { useRef } from "react";

const Categories = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    
  return (
    <div ref={sliderRef} className='mt-[50px] flex justify-between overflow-x-scroll no-scrollbar bg-[#FC8A06] py-4 px-[50px]'>
        <p className="text-white active:bg-black rounded-[120px] px-4 py-2">Offers</p>
        <p className="text-white active:bg-black rounded-[120px] px-4 py-2">Burgers</p>
        <p className="text-white active:bg-black rounded-[120px] px-4 py-2">Fries</p>
        <p className="text-white active:bg-black rounded-[120px] px-4 py-2">Snacks</p>
        <p className="text-white active:bg-black rounded-[120px] px-4 py-2">Salads</p>
        <p className="text-white active:bg-black rounded-[120px]  whitespace-nowrap px-4 py-2">Cold drinks</p>
        <p className="text-white active:bg-black rounded-[120px]  whitespace-nowrap px-4 py-2">Happy Meal®</p>
        <p className="text-white active:bg-black rounded-[120px] px-4 py-2">Desserts</p>
        <p className="text-white active:bg-black rounded-[120px]  whitespace-nowrap px-4 py-2">Hot drinks</p>
        <p className="text-white active:bg-black rounded-[120px] px-4 py-2">Sauces</p>
        <p className="text-white active:bg-black rounded-[120px] px-4 py-2">Orbit®</p>
    </div>
  )
}

export default Categories