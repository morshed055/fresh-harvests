import React from "react";
import img_2 from "../../public/image/image 2.png";
import img_3 from "../../public/image/image 3.png";
import img_4 from "../../public/image/image 4.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HarvestBlog = () => {
  return (
    <div className="border-1  my-44">
    <div className="text-center mx-auto max-h-[718px] relative">
   

      <span className="text-sm md:text-xl font-semibold text-[#749B3F] text-shadow bg-[rgba(116,155,63,0.1)] px-2">
       Our Blog
      </span>
      <h1 className="text-[#212337] font-rubik font-medium text-[32px] md:text-[48px] md:leading-[90px] tracking-tight">
      Fresh Harvest Blog
      </h1>
      <p className="text-[12px] md:text-sm font-normal tracking-tight leading-6 mx-6 md:mx-0">
      Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.
      </p>
    </div>
    <div className="my-8 flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex flex-col w-[384px] ">
        <Image
          src={img_2}
          alt="bg-leaf"
          className="bottom_right_leaf w-[384px] h-[260px]"
          />
          <div className="flex flex-col  mt-6 gap-4 ">

          <h3 className="font-normal text-lg leading-6 tracking-tight">May 23, 2024</h3>
          <h2 className="font-medium text-lg w-full ">Exploring Seasonal Delights: A Guide to What's Fresh Right Now</h2>
          <ul className="flex flex-row gap-4 font-semibold text-lg text-[#FF6A1A]">
            <li >Read More</li>
            <span className=" cursor-pointer">

            <ArrowRight />
            </span>

          </ul>
          </div>

        </div>
        <div className="flex flex-col w-[384px] ">
        <Image
          src={img_3}
          alt="bg-leaf"
          className="bottom_right_leaf w-[384px] h-[260px]"
          />
          <div className="flex flex-col  mt-6 gap-4 ">

          <h3 className="font-normal text-lg leading-6 tracking-tight">May 23, 2024</h3>
          <h2 className="font-medium text-lg w-full ">Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads"</h2>
          <ul className="flex flex-row gap-4 font-semibold text-lg text-[#FF6A1A]">
            <li >Read More</li>
            <span className=" cursor-pointer">

            <ArrowRight />
            </span>

          </ul>
          </div>

        </div>
        <div className="flex flex-col w-[384px] ">
        <Image
          src={img_4}
          alt="bg-leaf"
          className="bottom_right_leaf w-[384px] h-[260px]"
          />
          <div className="flex flex-col  mt-6 gap-4 ">

          <h3 className="font-normal text-lg leading-6 tracking-tight">May 23, 2024</h3>
          <h2 className="font-medium text-lg w-full ">The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week</h2>
          <ul className="flex flex-row gap-4 font-semibold text-lg text-[#FF6A1A]">
            <li >Read More</li>
            <span className=" cursor-pointer">

            <ArrowRight />
            </span>

          </ul>
          </div>

        </div>
    </div>
  
  </div>
  )
}

export default HarvestBlog