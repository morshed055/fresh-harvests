import React from "react";
import Rectangle_img from "../../public/image/Rectangle 3.png";
import top_Leaf from "../../public/image/top_leaf.png";
import group_2 from "../../public/image/Group 2.png";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="border-1 mb-20 py-16 ">
      <div className="text-center mx-auto max-h-[718px] relative">
        <Image
          src={top_Leaf}
          alt="bg-leaf"
          className="bottom_right_leaf w-[90px] h-[70.03px] absolute right-[0rem] -top-[4rem] md:right-[2rem] md:-top-[2rem]  lg:right-[13rem] lg:top-[6rem] rotate-[125deg] "
        />
        <Image
          src={top_Leaf}
          alt="bg-leaf"
          className=" w-[77px] h-[65px] absolute left-[1rem] top-[2rem] md:left-[0rem] md:top-[5rem] lg:left-[13rem] lg:top-[7rem]  rotate-180 "
        />
        <Image
          src={group_2}
          alt="bg-leaf"
          className=" w-[40px] h-[70px] md:w-[61.48px] md:h-[69.19px] absolute right-[5rem] -bottom-[7rem] md:left-[13rem] md:-bottom-[4rem] lg:left-[28rem]  -rotate-45 "
        />

        <span className="text-sm md:text-xl font-semibold text-[#749B3F] text-shadow bg-[rgba(116,155,63,0.1)] px-2">
          Testimonial
        </span>
        <h1 className="text-[#212337] font-rubik font-semibold text-[32px] md:text-[48px]  md:leading-[90px] tracking-tight mx-14 md:mx-0 my-3">
          What Our Customers Say
        </h1>
        <p className="text-[12px] md:text-sm font-normal tracking-tight leading-6 mx-2 md:mx-0">
          Don't just take our word for it—here's what some of our customers have
          to
          <br /> say about their experience with Fresh Harvest:
        </p>
      </div>

      {/* Centered Div */}
      <div className="flex flex-col md:flex-row justify-around  max-w-[1013px] mx-auto   max-h-[533px] items-center mt-16">
        <div>
          <Image
            src={Rectangle_img}
            alt="bg-leaf"
            className="bottom_right_leaf w-[287px] h-[396px]"
          />
        </div>
        <div className="w-[643px]  text-left  flex flex-col items-center bg-[#F4F6F6] py-4 rounded-lg">
          <div className="flex flex-col">
            <p className=" text-sm  md:text-xl text-[#4A4A52] max-w-[280px] md:max-w-[448px] leading-6  md:leading-8 tracking-tight  font-normal ">
              "I absolutely love Fresh Harvest! The quality of their produce is
              outstanding. It's always fresh, flavorful, and delicious. The
              convenience of ordering online and having it delivered to my
              doorstep saves me so much time. Fresh Harvest has become my go-to
              for all my fruit and vegetable needs.
            </p>
            <p className="text-left text-lg md:text-xl mt-8">
              <strong>John Doe -</strong> Professional Chef
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
