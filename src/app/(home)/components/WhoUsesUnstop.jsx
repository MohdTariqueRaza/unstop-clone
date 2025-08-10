"use client";
import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useUnstopCards } from "@/utils/data";
function WhoUsesUnstop() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="py-8  lg:py-12">
      <div className="container">
        <h2 className="text-[20px]/[26px] font-semibold text-black mb-[16px]">
          Who's using Unstop?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {useUnstopCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-light"
            >
              <div className="relative pe-[120px] p-4 pb-6 border-b-2 border-[#f6f6f6]">
                <h3 className="text-sm/[1.2] lg:text-[16px]/[22px] text-black font-[500] mb-2">
                  {card.title}
                </h3>
                <p className="text-[12px] text-black">
                  <span className="font-semibold">
                    {card.description.split(":")[0]}:
                  </span>
                  {card.description.split(":")[1]}
                </p>
                <div className="absolute w-[100px] right-[16px] top-[16px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto rounded-sm"
                  />
                </div>
              </div>
              {expanded && (
                <ul className="p-4 text-black text-[12px] lg:text-sm">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start mt-3 gap-2">
                      {item.icon}
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-4 flex items-center justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-black cursor-pointer text-[14px]/[18px] font-[500] gap-2 flex items-center justify-center hover:text-primarylight"
          >
            {expanded ? "View Less " : "Know How "}
            {expanded ? <FaChevronDown size={12} /> : <FaChevronUp size={12} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhoUsesUnstop;
