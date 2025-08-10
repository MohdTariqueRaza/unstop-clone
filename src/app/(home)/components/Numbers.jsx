"use client";
import { cards } from "@/utils/data";
import dynamic from "next/dynamic";
import React from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

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
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 506,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function CardGrid() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 overflow-x-auto pb-[80px] hidden md:block">
        <h2 className="text-center text-3xl font-semibold mb-6">Our Numbers</h2>
        <div className="flex gap-4 min-w-max justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-gray-100 rounded-xl p-1 sm:p-1 md:p-1 lg:p-5 text-center"
            >
              <h3 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                {card.heading}
                <span className="text-[#0073e6] ml-1.5">
                  {card.numberAbbreviation}
                </span>
              </h3>
              <p className="text-gray-600">{card.paragraph}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden pt-[30px] pb-[70px] bg-gradient-to-b from-yellow-100/0 to-yellow-100/100">
        <img
          src="/images/unstoppable.webp"
          alt="unstoppable"
          className="mx-auto w-4/5"
        />
        <div className="w-full overflow-hidden bg-white">
          <Slider {...settings}>
            {cards.map((item, idx) => (
              <div
                key={idx}
                className="px-3 py-2 text-center border-l border-[#fefac8]"
              >
                <div className="text-base font-bold">
                  {item.heading}
                  <span className="text-[#FFC700]">
                    {item.numberAbbreviation}
                  </span>
                  <span className="text-[10px] block font-normal">
                    {item.paragraph}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
