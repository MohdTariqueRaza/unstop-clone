"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCube } from "react-icons/fa";

const Hero = () => {
  const names = ["Arjun", "Ayaan", "Priya", "Rahul", "Sneha"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % names.length);
        setIsVisible(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="py-8 lg:py-12 overflow-hidden">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row flex-wrap lg:items-center gap-4 lg:gap-10 max-w-[600px] lg:max-w-max mx-auto">
          <div className="flex-1  lg:pr-5 text-base/[1.2] text-blacklight">
            <div className="hidden lg:block">
              <h1 className="text-[30px]/[1.2] lg:text-[40px]/[1.2] xl:text-[50px] font-semibold mb-2 text-black">
                <span className="text-primary">Unlock</span> Your Career
              </h1>
              <p className="">
                Explore opportunities from across the globe to grow, showcase
                skills, gain CV points & get hired by your dream company.
              </p>
            </div>
            <div className="lg:mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                className="py-2 w-full lg:w-auto px-2.5 pr-6 text-sm/4 cursor-pointer font-medium transition-all duration-200 rounded-3xl  inline-flex items-center gap-2 bg-[#ebe8fd]  text-black"
              >
                <img
                  className="w-10 h-10 object-contain"
                  src="/images/diamond_1.webp"
                  alt=""
                />
                <div className="text-left">
                  <h4
                    className={`text-[10px] lg:text-xs font-light text-blacklight transition-opacity duration-500 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {names[currentIndex]}
                  </h4>
                  <h5 className="font-semibold"> Just Went Unstop Pro! </h5>
                </div>
              </button>

              <button
                type="button"
                className="py-2 w-full lg:w-auto px-2.5 pr-6 text-sm/4 cursor-pointer font-medium transition-all duration-200 rounded-3xl  items-center gap-2 bg-[#ffc700] text-black h-[50px] block lg:hidden cursor-pointer"
              >
                <div className="flex items-center justify-center gap-3 w-full">
                  <FaCube size={18} />
                  <h5 className="font-semibold">Unstop For Business</h5>
                  <FaArrowRightLong />
                </div>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[540px]  relative">
            <img
              src="/images/hero-assets1.webp"
              className="absolute hidden md:block top-2 w-14 right-full"
              alt=""
            />
            <img
              src="/images/hero-assets2.webp"
              className="absolute  hidden md:block top-1/2 -translate-y-1/2 w-11 left-full"
              alt=""
            />
            <ul className="grid grid-cols-2 gap-3 md:gap-4">
              <li className="rounded-xl min-h-[108px] z-40 relative cursor-pointer transition-all duration-500 hover:-translate-y-1 overflow-hidden bg-[#9BE6C1] py-2 px-3">
                <div className="w-1/2">
                  <h3 className="text-sm md:text-lg font-medium mb-0.5">
                    Internships
                  </h3>
                  <ul className="text-[10px] lg:text-xs text-[#383838] font-light sapce-y-0.5">
                    <li className="font-normal"> Gain </li>
                    <li> Practical </li>
                    <li> Experience </li>
                  </ul>
                </div>
                <img
                  src="/images/hero-1.webp"
                  className="absolute bottom-0 right-0 max-h-full -z-0 max-w-[70%]"
                  alt=""
                />
              </li>
              <li className="rounded-xl min-h-[108px] z-40 relative cursor-pointer transition-all duration-500 hover:-translate-y-1 overflow-hidden bg-[#fec192] py-2 px-3">
                <div className="w-1/2">
                  <h3 className="text-sm md:text-lg font-medium mb-0.5">
                    Internships
                  </h3>
                  <ul className="text-[10px] lg:text-xs text-[#383838] font-light sapce-y-0.5">
                    <li className="font-normal"> Gain </li>
                    <li> Practical </li>
                    <li> Experience </li>
                  </ul>
                </div>
                <img
                  src="/images/hero-2.webp"
                  className="absolute bottom-0 right-0 max-h-full -z-0 max-w-[70%]"
                  alt=""
                />
              </li>
              <li className="rounded-xl min-h-[108px] z-40 relative cursor-pointer transition-all duration-500 hover:-translate-y-1 overflow-hidden bg-[#9bc9ff] py-2 px-3">
                <div className="w-1/2">
                  <h3 className="text-sm md:text-lg font-medium mb-0.5">
                    Internships
                  </h3>
                  <ul className="text-[10px] lg:text-xs text-[#383838] font-light sapce-y-0.5">
                    <li className="font-normal"> Gain </li>
                    <li> Practical </li>
                    <li> Experience </li>
                  </ul>
                </div>
                <img
                  src="/images/hero-2.webp"
                  className="absolute bottom-0 right-0 max-h-full -z-0 max-w-[70%]"
                  alt=""
                />
              </li>
              <li className="rounded-xl min-h-[108px] z-40 relative cursor-pointer transition-all duration-500 hover:-translate-y-1 overflow-hidden bg-[#c8bbff] py-2 px-3">
                <div className="w-1/2">
                  <h3 className="text-sm md:text-lg font-medium mb-0.5">
                    Internships
                  </h3>
                  <ul className="text-[10px] lg:text-xs text-[#383838] font-light sapce-y-0.5">
                    <li className="font-normal"> Gain </li>
                    <li> Practical </li>
                    <li> Experience </li>
                  </ul>
                </div>
                <img
                  src="/images/hero-1.webp"
                  className="absolute bottom-0 right-0 max-h-full -z-0 max-w-[70%]"
                  alt=""
                />
              </li>
              <li className="rounded-xl min-h-[108px] z-40 relative cursor-pointer transition-all duration-500 hover:-translate-y-1 overflow-hidden bg-[#ffdd80] py-2 px-3">
                <div className="w-1/2">
                  <h3 className="text-sm md:text-lg font-medium mb-0.5">
                    Internships
                  </h3>
                  <ul className="text-[10px] lg:text-xs text-[#383838] font-light sapce-y-0.5">
                    <li className="font-normal"> Gain </li>
                    <li> Practical </li>
                    <li> Experience </li>
                  </ul>
                </div>
                <img
                  src="/images/hero-1.webp"
                  className="absolute bottom-0 right-0 max-h-full -z-0 max-w-[70%]"
                  alt=""
                />
              </li>
              <li className="rounded-xl min-h-[108px] z-40 relative cursor-pointer transition-all duration-500 hover:-translate-y-1 overflow-hidden bg-[#ffb1cc] py-2 px-3">
                <div className="w-1/2">
                  <h3 className="text-sm md:text-lg font-medium mb-0.5">
                    Internships
                  </h3>
                  <ul className="text-[10px] lg:text-xs text-[#383838] font-light sapce-y-0.5">
                    <li className="font-normal"> Gain </li>
                    <li> Practical </li>
                    <li> Experience </li>
                  </ul>
                </div>
                <img
                  src="/images/hero-2.webp"
                  className="absolute bottom-0 right-0 max-h-full -z-0 max-w-[70%]"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
