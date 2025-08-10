"use client";
import { items } from "@/utils/data";
import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function LevelUpSkills() {
  return (
    <div className="pb-12 hidden md:block hover:-translate-y-1 cursor-pointer transition-all duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden gap-6 md:gap-0">
          {/* Image Section */}
          <div className="md:w-1/2 flex-shrink-0 shadow-sm">
            <img
              src="/images/learn.webp"
              alt="learn"
              className="w-full h-auto object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none min-h-[272px]"
            />
          </div>

          {/* Text Section */}
          <div className="md:flex-1 min-w-0 bg-gray-100 px-6 py-4 sm:px-10 md:px-12 shadow-sm flex flex-col justify-center gap-5 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
            <h2 className="font-semibold text-sm sm:text-lg md:text-xl lg:text-3xl">
              <span className="text-[#00376e]">Learn &</span> Level Up Your
              Skills
              <span className="text-xs sm:text-sm md:text-base block text-gray-400 mt-1.5 font-normal">
                Select from a wide range of courses to upskill and advance your
                career!
              </span>
            </h2>

            <ul className="flex flex-wrap items-center gap-4">
              {items.map((text, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="bg-yellow-400 text-black rounded-full p-1">
                    <FaCheck size={14} />
                  </span>
                  <span className="text-black text-xs sm:text-sm">{text}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="text-xs sm:text-sm w-max px-5 py-3 cursor-pointer font-medium transition-all duration-200 rounded-3xl inline-flex items-center gap-1.5 bg-primary hover:bg-primarylight text-white"
            >
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
