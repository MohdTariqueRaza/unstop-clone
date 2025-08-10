"use client";
import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { useMedia } from "@/hooks/useMedia";
import OpportunityCard from "@/components/cards/OpportunityCard";
import { opportunities } from "@/utils/data";

function Opportunity() {
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
    <div className="pb-12 hidden md:block">
      <div className="container">
        <div className="flex lg:items-center gap-4 mb-4">
          <div className="flex-1">
            <h2 className="text-lg/[1.2] lg:text-2xl xl:text-[30px] font-semibold text-black">
              Pick{" "}
              <span className="text-[#00376e]">The Right Opportunity!</span>
            </h2>
            <p className="text-blacklight text-[14px]/[18px] mt-2 hidden lg:block">
              Explore opportunities that best suits your skills and interests!
            </p>
          </div>
          <Link
            href="/"
            className="text-black text-[14px]/[18px] flex items-center gap-1"
          >
            Explore all <FiArrowUpRight size={16} />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {opportunities.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <OpportunityCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Opportunity;
