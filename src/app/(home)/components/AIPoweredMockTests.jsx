"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { useMedia } from "@/hooks/useMedia";
import AICard from "@/components/cards/AICard";
import { aiPoweredMockTests, tabs } from "@/utils/data";

function AIPoweredMockTests() {
  const [settings, setSettings] = useState(null);
  const { isMobile, isTablet, isLaptop } = useMedia();
  const [activeTab, setActiveTab] = useState("Tech");

  useEffect(() => {
    setSettings({
      dots: isMobile,
      infinite: false,
      speed: 500,
      slidesToShow: isLaptop ? 3 : isTablet ? 2 : isMobile ? 1 : 4,
      slidesToScroll: 1,
      arrows: !isMobile,
    });
  }, [isMobile, isTablet, isLaptop]);

  const filteredData = aiPoweredMockTests.filter(
    (item) => item.category === activeTab
  );

  return (
    <div className="pb-12">
      <div className="container">
        <div className="flex lg:items-center gap-4 mb-4">
          <div className="flex-1">
            <h2 className="text-lg/[1.2] lg:text-2xl xl:text-[30px] font-semibold text-black">
              AI-Powered <span className="text-[#1c4980]">Mock Tests</span>
            </h2>
            <p className="text-blacklight text-[14px]/[18px] mt-2 hidden lg:block">
              Master your concepts with AI-Powered full-length mock tests for
              360° preparation!
            </p>
          </div>
          <Link
            href="/"
            className="text-black text-[14px]/[18px] flex items-center gap-1 hover:text-primarylight"
          >
            View all <FiArrowUpRight size={16} />
          </Link>
        </div>

        <div className="bg-gray-100 p-1 rounded-full mb-6 inline-flex gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm rounded-full cursor-pointer ${
                activeTab === tab
                  ? "bg-white border border-gray-300"
                  : "bg-transparent hover:bg-white border border-gray-100"
              } transition-colors`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="w-[calc(100%+16px)] -ml-2">
          {settings && (
            <Slider {...settings} className="common-slider">
              {filteredData.map((item) => (
                <AICard key={item.id} item={item} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
}

export default AIPoweredMockTests;
