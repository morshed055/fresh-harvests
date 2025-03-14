import React from "react";
import { Button } from "./ui/button";
import man_with_bucket from "../../public/image/man-with-bucket.png";
import Logo from "../../public/image/Logo (1).png";
import Product_card from "../../public/image/Product Card.png";
import Group from "../../public/image/Group 2.png";
import top_leaf from "../../public/image/top_leaf.png";

import Image from "next/image";

const About = () => {
  return (
    <div className="border-1 py-14">
      <div className="flex flex-col md:flex-row  gap-24  place-content-center place-items-center max-w-[1213px] mx-auto">
        <div className="col-span-1 relative w-[375.95px]  md:w-[686.11px] md:h-[639px]">
          <Image
            src={man_with_bucket}
            alt="about"
            className="w-[375.95px] h-[360px] md:w-[686.11px] md:h-[639px]"
         
          />
          <Image
            className="absolute top-[53px] right-[61px] md:top-[100px] md:right-[70px] z-10 w-[44px] h-[44px] md:w-[66.48px] md:h-[50.64px] rotate-119"
            src={top_leaf}
            alt="about"
          />
          <Image
            className="absolute top-[233px] right-[39px] md:top-[406px] md:right-[70px] z-10 w-[25.1px] h-[25px] md:w-[50.89px] md:h-[50.64px]"
            src={Group}
            alt="about"
          />
          <Image
            className="absolute bottom-[108px] left-[192px] md:bottom-[198px] md:left-[334px] z-10 w-[104.11px] h-[24.66px] md:w-[190px] md:h-[45px]"
            src={Logo}
            alt="about"
         
          />
          <Image
            className="absolute right-[54px] -bottom-[2px] md:bottom-1 md:right-24 z-10 w-[82.41px] h-[105.21px] md:w-[154px] md:h-[192px]"
            src={Product_card}
            alt="about"
          />
        </div>
        <div className="text-justify-left font-rubik mx-2">
          <span className="text-base md:text-xl font-semibold text-[#749B3F]  text-shadow bg-[rgba(116,155,63,0.1)] px-2 mb-4">
            About Us
          </span>
          <h1 className="text-[32px] md:text-5xl font-medium my-2">About Fresh Harvest</h1>
          <p
            className="text-[12px] md:text-sm  text-[#4A4A52] 
          max-w-[448px] max-h-[144px] leading-4.5 tracking-tight"
          >
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>
          <Button
            className="
           py-6 px-8
           mt-6 border-1 border-[#4A4A52] text-lg bg-[#FFFFFF]  text-[#FF6A1A]"
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
