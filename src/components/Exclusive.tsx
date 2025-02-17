"use client";

import React, { useRef } from "react";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Exclusive = () => {
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
    <div className="ml-[100px] mr-[100px] mt-[53px] mb-[100px]">
      <div className="flex justify-between items-center">
        <p className="font-bold text-[32px]">Up to -40% 🎊 Order.uk exclusive deals</p>
        <div className="flex justify-between items-center w-[35%]">
          {["Vegan", "Sushi", "Pizza & Fast food", "Others"].map((item) => (
            <Button
              key={item}
              text={item}
              className="text-[16px] font-normal pl-6 pr-6 pt-4 pb-4 bg-transparent border border-transparent rounded-none hover:border-[#FC8A06] hover:rounded-[120px]"
            />
          ))}
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative mt-[54px]">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={() => scroll("left")}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Slider */}
        <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar"
            >

          {Array(5).fill(0).map((_, index) => (
            <div
              key={index}
              className="w-[496px] h-[325px] flex-shrink-0 relative rounded-[12px] bg-cover"
              style={{ backgroundImage: `url(/assets/ex1.png)` }}
            >
              <div className="w-[88px] h-[66px] ml-[78%] bg-[#03081F] rounded-bl-[12px] rounded-br-[12px] flex items-center justify-center">
                <p className="text-[18px] text-white font-bold text-center">-40%</p>
              </div>
              <p className="text-[#FC8A06] text-[18px] font-medium ml-[46px] mt-[160px]">Restaurant</p>
              <p className="text-[24px] text-white font-bold ml-[46px]">Chef Burgers London</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={() => scroll("right")}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Exclusive;
