import React from "react";
import { Button } from "./ui/button";
import top_Leaf from "../../public/image/top_leaf.png";
import bottom_Leaf from "../../public/image/bottom_leaf.png";
import bottom_right_leaf from "../../public/image/offer-bg-leaf.png";
import fruit_img from "../../public/image/fruit_img.png";
import group_2 from "../../public/image/Group 2.png";
import Image from "next/image";

const Offer = () => {
  return (
    <div className="bg-[url('/image/Footer_Section.png')] bg-cover bg-center h-[640px] bg-gray-200 py-24  relative">
         <Image src={bottom_right_leaf} alt="bg-leaf" className="  w-[176px] h-[160px] absolute left-0 bottom-0 "  />
            <Image src={top_Leaf} alt="bg-leaf" className=" w-[90px] h-[70.03px] absolute right-[2rem]  md:right-[26rem] top-[4rem] "  />
            <Image src={bottom_Leaf} alt="bg-leaf" className="   bottom_right_leaf
             w-[70px] h-[92px]
             md:w-[149px] md:h-[195px] absolute right-0 bottom-0"  /> 
            <Image src={group_2} alt="bg-leaf" className="hidden md:block  bottom_right_leaf w-[54.93px] h-[70.91px] absolute right-[20rem] bottom-[27rem]"  /> 
            <Image src={fruit_img} alt="bg-leaf" className="hidden md:block bottom_right_leaf w-[627px] h-[380.5px] absolute bottom-[70px] right-[115px]"  />
      
      <div className="flex  items-center justify-center md:justify-start  h-full relative mx-16"> 
        
        <div className="text-center md:text-justify font-rubik ">
        
          <span className="text=sm md:text-lg font-semibold text-[#749B3F]  text-shadow bg-[rgba(116,155,63,0.1)] px-1 rounded-xl  w-[84px]  md:w-[119px] h-6">
            Special Offer
          </span>
          <h1 className="text-5xl md:text-[5rem] font-medium text-[#212337] my-2 mt-4 leading-16  tracking-tight">
            Seasonal Fruit Bundle
          </h1>
          <h3 className="text-3xl md:text-5xl  font-medium">
            Discount up to{" "}
            <span className="font-bold text-[#749B3F]">80% OFF</span>
          </h3>
          <ul className="flex space-x-[18px]  md:space-x-6 md:mt-6  ">
         
            <li className="text-center flex flex-col justify-center items-center w-[72.44px] h-[90px] md:w-[98px] md:h-[112px] bg-[#FFFFFF] shadow-md rounded-md">
              <h4 className="text-[28px] md:text-[40px] text-[#212337]">03</h4>
              <p className="text-[12px] md:text-lg text-[#4A4A52]">Days</p>
            </li>
            <li className="text-center flex flex-col justify-center items-center w-[72.44px] h-[90px] md:w-[98px] md:h-[112px] bg-[#FFFFFF] shadow-md rounded-md">
              <h4 className="text-[28px] md:text-[40px] text-[#212337]">03</h4>
              <p className="text-[12px] md:text-lg text-[#4A4A52]">Days</p>
            </li>
            <li className="text-center flex flex-col justify-center items-center w-[72.44px] h-[90px] md:w-[98px] md:h-[112px] bg-[#FFFFFF] shadow-md rounded-md">
              <h4 className="text-[28px] md:text-[40px] text-[#212337]">03</h4>
              <p className="text-[12px] md:text-lg text-[#4A4A52]">Days</p>
            </li>
            <li className="text-center flex flex-col justify-center items-center w-[72.44px] h-[90px] md:w-[98px] md:h-[112px] bg-[#FFFFFF] shadow-md rounded-md">
              <h4 className="text-[28px] md:text-[40px] text-[#212337]">03</h4>
              <p className="text-[12px] md:text-lg text-[#4A4A52]">Days</p>
            </li>
            
          </ul>
          <Button className="mt-8 bg-[#176D38] text-white px-8 py-8 rounded-s-4xl rounded-r-4xl hover:bg-[#5a7c2f] font-semibold text-[28px] md:text-[2rem]">
            CODE : <span className="text-[#FAC714]">FRUIT28</span>
          </Button>
        </div>
      </div>
    
    </div>
  );
};

export default Offer;
