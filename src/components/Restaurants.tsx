'use client'
import React, { useRef } from "react";

const Categories = () => {
    const data = [
        {
            title: "McDonald's London",
            image: "/assets/mcdonalds.png",
        },
        {
            title: "Papa Johns",
            image: "/assets/papa.png",
        },
        {
            title: "KFC West London",
            image: "/assets/kfc.png",
        },
        {
            title: "Texas Chicken",
            image: "/assets/texas.png",
        },
        {
            title: "Burger King",
            image: "/assets/burgerking.png",
        },
        {
            title: "Shaurma 1",
            image: "/assets/shaurma.png",
        },
    ];
    const sliderRef = useRef<HTMLDivElement>(null);
    
      const scroll = (direction: "left" | "right") => {
        if (sliderRef.current) {
          const scrollAmount = 500; // Adjust scroll speed
          if (direction === "left") {
            sliderRef.current.scrollLeft -= scrollAmount;
          } else {
            sliderRef.current.scrollLeft += scrollAmount;
          }
        }
      };
    return (
        <div className="mx-3 md:mx-[100px] mt-[63px] mb-[56px]">
            <p className="font-bold text-[16px] md:text-[32px]">Popular Restaurants</p>
            <div ref={sliderRef} className="flex justify-between gap-4 overflow-x-scroll no-scrollbar mt-[51px]">
                {data.map((item, index) => (
                    <div key={index} className="w-[238px] h-[266px] flex-shrink-0 rounded-[12px] flex flex-col">
                        <img src={item.image} alt={item.title} className="h-[203px]" />
                        <div className="bg-[#FC8A06] h-[63px] rounded-b-[12px] flex items-center justify-center">
                            <p className="font-bold text-[18px] text-white">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
