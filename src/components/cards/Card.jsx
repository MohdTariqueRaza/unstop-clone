"use client";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight, FiUsers } from "react-icons/fi";

const Card = ({ item }) => {
  return (
    <div className="px-2 h-full group">
      <Link href={item.link} className="h-full">
        <div className="bg-white min-h-[230px] flex flex-col rounded-xl border border-light overflow-hidden h-full group-hover:border-primary transition-all duration-300">
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[74px] object-cover"
            />
            <div className="absolute top-16 left-4 flex gap-1">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#f6f6f6] text-xs font-medium px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="p-2 absolute top-4 right-4 w-[75px] h-[75px] rounded-lg bg-[#fff] shadow-[0_3.39623px_10.18868px_#0000001a]">
              <img
                src={item.logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
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
                <FiUsers />
                <span className="text-black">{item.applied}</span> Applied
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

export default Card;
