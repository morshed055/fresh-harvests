import Link from "next/link";
import Image from "next/image";
import appstore from "../../../public/image/appstore.png";
import googleplay from "../../../public/image/googleplay.png";
import Logo from "../../../public/image/Logo.png";
import visa from "../../../public/image/Visa.png";
import paypal from "../../../public/image/Paypal.png";
import apple_pay from "../../../public/image/XMLID_34_.png";
import twitter from "../../../public/image/1.png";
import facebook from "../../../public/image/2.png";
import instagram from "../../../public/image/3.png";

import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] py-8 md:py-12  ">
    <div className="max-w-[1200px] mx-auto">
    <section className="grid grid-cols-4  gap-y-4 font-rubik ">
        <div className="flex flex-col justify-between col-span-5 md:col-span-1">
          <Image src={Logo} alt="logo"
          className="w-[195.58px] h-[34px] md:w-[296px] md:h-[51.5px]"
         />
         
        </div>
        <div className="col-span-5 md:col-span-3 grid grid-cols-3 mx-4 md:justify-items-center">
        <div className="">
          <h2 className="text-[12px] md:text-lg font-medium text-[#212337] my-4 ">Quick Links 1</h2>
          <ul className="flex flex-col gap-2 font-normal text-[12px] md:text-sm leading-4.5 md:leading-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-green-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-700 hover:text-green-700">
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-700 hover:text-green-700">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-700 hover:text-green-700">
                Details Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
        <h2 className="text-[12px] md:text-lg font-medium text-[#212337] my-4">Quick Links 2</h2>
        <ul className="flex flex-col gap-2 font-normal text-[12px] md:text-sm leading-4.5 md:leading-6">            <li>
              <Link href="/" className="text-gray-700 hover:text-green-700">
                Favorite
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-700 hover:text-green-700">
                Card
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-700"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-700 hover:text-green-700">
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div>
        <h2 className="text-[12px] md:text-lg font-medium text-[#212337] my-4">Contact US</h2>
        <ul className="flex flex-col gap-2 font-normal text-[12px] md:text-sm leading-4.5 md:leading-6">            <li className="flex items-center gap-1">
              <Phone size={15} /> <span>1234 5678 90</span>
            </li>
            <li className="flex items-center gap-1">
              <Mail size={15} /> <span>Freshharvests@gmail.com</span>
            </li>
            <li className="flex items-center gap-1">
              <MapPin size={20} />
              <span>Tanjung Sari Street, Pontianak, Indonesia</span>
            </li>
          </ul>
         
        </div>
        </div>
        
      </section>
      <section>
        <div className="flex flex-col-reverse md:flex-row justify-between gap-2 my-4 ">
          <div className="flex flex-col gap-2 ">
            <h4 className="text-[12px] font-medium">Download Apps</h4>
            <ul className="flex gap-3">
              <li>
                <Image src={appstore} alt="logo" width={138} height={40} />
              </li>
              <li>
                <Image src={googleplay} alt="logo" width={138} height={40} />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-[12px] font-medium">Accepted Payment Methods</h4>
            <ul className="flex items-center gap-3">
              <li>
                <Image src={visa} alt="logo" width={70} height={48} />
              </li>
              <li>
                <Image src={paypal} alt="logo"  width={70} height={48} />
              </li>
              <li>
                <Image src={apple_pay} alt="logo"  width={70} height={48} />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-4  " >
        <p className="font-normal md:font-medium txt-[12px]">© Copyright 2024, All Rights Reserved by Banana Studio</p>
        <ul className="flex items-center gap-3">
              <li>
                <Image src={twitter} alt="logo" width={32} height={32} />
              </li>
              <li>
                <Image src={facebook} alt="logo"  width={32} height={32} />
              </li>
              <li>
                <Image src={instagram} alt="logo"  width={32} height={32} />
              </li>
            </ul>
        
      </section>
    </div>
    </footer>
  );
};

export default Footer;
