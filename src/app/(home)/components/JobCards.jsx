"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FiArrowUpRight } from "react-icons/fi";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Card from "@/components/cards/Card";
import Link from "next/link";
import { useMedia } from "@/hooks/useMedia";
import { jobs } from "@/utils/data";

function JobCard() {
  const [settings, setSettings] = useState(null);
  const { isMobile, isTablet, isLaptop } = useMedia();

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

  return (
    <div className="pb-12">
      <div className="container">
        <div className="flex lg:items-center gap-4 mb-4">
          <div className="flex-1">
            <h2 className="text-lg/[1.2] lg:text-2xl xl:text-[30px] font-semibold text-black">
              Jobs
            </h2>
            <p className="text-blacklight text-[14px]/[18px] mt-2 hidden lg:block">
              Find jobs that fit your career aspirations.
            </p>
          </div>
          <Link
            href="/"
            className="text-black text-[14px]/[18px] flex items-center gap-1 hover:text-primarylight"
          >
            View all <FiArrowUpRight size={16} />
          </Link>
        </div>
        <div className="w-[calc(100%+16px)] -ml-2">
          <Slider {...settings} className="common-slider">
            {jobs.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
