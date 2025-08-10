"use client";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const AICard = ({ item }) => {
  return (
    <div className="px-2 h-full group">
      <Link href={item.link} className="h-full">
        <div className="bg-white min-h-[230px] flex flex-col rounded-xl border border-light overflow-hidden h-full hover:border-primary transition-all duration-300">
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-contain"
            />
          </div>
          <div className="pt-8 pb-4 px-4">
            <h3 className="text-black font-semibold text-[18px]/[24px] mb-4 group-hover:text-[#0073e6]">
              {item.title}
            </h3>
            <p className="text-blacklight text-[12px]/[16px] line-clamp-1">
              {item.description}
            </p>
          </div>
          <div className="flex justify-between text-[12px]/[16px] items-center mt-auto p-4 pt-0">
            <div className="space-y-1">
              <div className="flex items-center text-blacklight gap-2">
                Start Test
              </div>
            </div>
            <div className="w-[30px] h-[30px] group-hover:bg-primary group-hover:text-[#fff] flex items-center justify-center rounded-full text-[AFAFAF]">
              <FiArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AICard;
