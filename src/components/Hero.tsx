import { Button } from "@/components/ui/button";
import bg_image from "../../public/image/Bg.png";
import Clip_arrow from "../../public/image/Clip path group.png";
import Special_offer from "../../public/image/Special Offer.png";
import appstore from "../../public/image/appstore.png";
import girl_with_bucket from "../../public/image/Image.png";
import googleplay from "../../public/image/googleplay.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="  bg-[url('/image/Hero_bg md:bg-[url('/image/Bg.png')] bg-cover bg-center py-32  ">
     <div className="relative">
     <Image src={girl_with_bucket} alt="Clip_arrow" 
     className="hidden md:block absolute sm:bottom-0 sm:right-0 sm:w-[434px] sm:[473px] md:-top-[82px] md:right-[52px] md:w-[695px] md:h-[798px] " />
      <div className="flex flex-col justify-center mt-24 relative w-full md:max-w-[1200px] md:mx-auto">
        <h3 className="text-sm md:text-xl font-semibold text-[#749B3F]  text-shadow bg-[rgba(116,155,63,0.1)] inline ">
          Welcome to Fresh Harvest
        </h3>
        <h1 className="  text-[#212337] font-rubik font-medium text-5xl md:text-[80px] md:leading-[100px] tracking-tight sm:w-[345px] sm:h-[114px] md:w-[660px] md:h-[190px]  mb-3 md:mb-4">
          Fresh Fruits and Vegetables
        </h1>
        <p className="text-[12px] md:text-sm font-normal leading-4.5 md:leading-6 text-gray-700  md:w-[448px] md:h-[48px]">
          At Fresh Harvests, we are passionate about providing you with the
          freshest and most flavorful fruits and vegetables.
        </p>
        <Button className="bg-[#FF6A1A] py-4 px-8 h-[53px] w-[131px] md:w-[150px] hover:bg-green-800 text-white font-rubik text-[18px] my-2.5">
          Shop Now
        </Button>
        <div className="relative">
          <div className="absolute top-1 left-30">
            <Image src={Clip_arrow} alt="Clip_arrow" className="hidden md:block" />
          </div>
          <div className="absolute  md:left-50">
            <Image src={Special_offer} alt="Clip_arrow" className="w-[191.85px] h-[91px] md:w-[331px] md:h-[157px]" />
          </div>
        </div>
        <div className="mt-48 flex gap-6">
          <div>
            <Image src={appstore} alt="appstore" />
          </div>
          <div>
            <Image src={googleplay} alt="googleplay" />
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};
export default Hero;
