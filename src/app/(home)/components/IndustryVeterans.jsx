"use client";
import { industryLogos } from "@/utils/data";
import React from "react";
import Slider from "react-slick";

export default function IndustryVeterans() {
  const settings = {
    infinite: true,
    speed: 1000,
    cssEase: "ease-in-out",
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="hidden md:block py-12">
      <div className="bg-gray-100 py-[10px] pl-[40px] pr-0 flex items-center">
        <div className="w-[175px]">
          <h2 className="text-sm">
            Industry veterans{" "}
            <span className="text-[#383838] text-base font-semibold block">
              Trust us
            </span>
          </h2>
        </div>
        <div className="w-full overflow-hidden">
          <Slider {...settings}>
            {industryLogos.map((logo, index) => {
              return (
                <div key={logo} className="w-[166px] h-[95px] mr-[20px]">
                  <img
                    src={logo}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
