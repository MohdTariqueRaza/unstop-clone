"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineChevronRight } from "react-icons/hi";

const HiringAssessments = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  // This handles click and hover
  const handleActivate = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="pb-12">
      <div className="container">
        <div className="flex lg:items-center gap-4 mb-4">
          <div className="flex-1">
            <h2 className="text-lg/[1.2] lg:text-2xl xl:text-[30px] font-semibold text-black">
              Practice Coding & Ace Hiring Assessments
            </h2>
            <p className="text-blacklight text-[14px]/[18px] mt-2 hidden lg:block">
              Level up your coding skills by practicing the hiring assessments
              of your dream companies & ace your placement game!
            </p>
          </div>
          <Link
            href="/"
            className="text-black text-[14px]/[18px] flex items-center gap-1 hover:text-primarylight"
          >
            View all <FiArrowUpRight size={16} />
          </Link>
        </div>
        <div className="flex flex-wrap lg:h-[360px] lg:flex-nowrap rounded-2xl overflow-hidden border border-light">
          <div
            className={`p-4 w-full lg:w-1/3 relative  group ${
              activeIndex === 1 && "active"
            } [.active]:w-[570px] [.active]:flex-shrink-0 transition-all duration-500 h-full border-t border-light first:border-t-0 lg:border-t-0 lg:border-l lg:first:border-l-0  [.active]:bg-[#9bc9ff]`}
            onClick={() => handleActivate(1)}
            onMouseEnter={() => handleActivate(1)}
          >
            <div className="max-w-[210px] h-full flex flex-col text-xs lg:text-sm/5 text-blacklight group-[.active]:text-black">
              <div className="mb-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#ddedff] flex items-center justify-center">
                  <img
                    src="/images/icon1.png"
                    className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
                    alt=""
                  />
                </div>
              </div>
              <h4 className="text-lg/[20px] lg:text-[20px]/[24px] group-[.active]:text-[24px]/6 lg:group-[.active]:text-[27px]/8 text-black font-semibold mb-3">
                Coding Practice
              </h4>
              <p>
                Level up your coding skills by practicing the hiring Questions.
              </p>
              <div className="flex justify-between pt-2.5 mt-auto group-[.active]:mt-0 gap-3 items-center">
                <p className="text-sm/5 lg:text-base/6 font-medium text-black">
                  400+ Questions{" "}
                </p>
                <HiOutlineChevronRight
                  size={20}
                  className="text-black group-[.active]:hidden"
                />
              </div>
              <div className="pt-2.5 mt-auto hidden group-[.active]:block">
                <button
                  type="button"
                  className="px-4 py-2 cursor-pointer font-medium transition-all duration-200 rounded-3xl  inline-flex items-center gap-1.5 bg-primary hover:bg-primarylight text-white"
                >
                  Start Now
                  <FiArrowUpRight size={20} />
                </button>
              </div>
            </div>
            <img
              src="/images/images.webp"
              className="absolute max-w-[calc(100%-210px)] opacity-0 group-[.active]:opacity-100 bottom-0 right-0"
              alt=""
            />
          </div>
          <div
            className={`p-4 w-full lg:w-1/3 relative  group ${
              activeIndex === 2 && "active"
            } [.active]:w-[570px] [.active]:flex-shrink-0 transition-all duration-500 h-full border-t border-light first:border-t-0 lg:border-t-0 lg:border-l lg:first:border-l-0  [.active]:bg-[#ffb1cc]`}
            onClick={() => handleActivate(2)}
            onMouseEnter={() => handleActivate(2)}
          >
            <div className="max-w-[210px] h-full flex flex-col text-xs lg:text-sm/5 text-blacklight group-[.active]:text-black">
              <div className="mb-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#ddedff] flex items-center justify-center">
                  <img
                    src="/images/icon1.png"
                    className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
                    alt=""
                  />
                </div>
              </div>
              <h4 className="text-lg/[20px] lg:text-[20px]/[24px] group-[.active]:text-[24px]/6 lg:group-[.active]:text-[27px]/8 text-black font-semibold mb-3">
                Coding Practice
              </h4>
              <p>
                Level up your coding skills by practicing the hiring Questions.
              </p>
              <div className="flex justify-between pt-2.5 mt-auto group-[.active]:mt-0 gap-3 items-center">
                <p className="text-sm/5 lg:text-base/6 font-medium text-black">
                  400+ Questions{" "}
                </p>
                <HiOutlineChevronRight
                  size={20}
                  className="text-black group-[.active]:hidden"
                />
              </div>
              <div className="pt-2.5 mt-auto hidden group-[.active]:block">
                <button
                  type="button"
                  className="px-4 py-2 cursor-pointer font-medium transition-all duration-200 rounded-3xl  inline-flex items-center gap-1.5 bg-primary hover:bg-primarylight text-white"
                >
                  Start Now
                  <FiArrowUpRight size={20} />
                </button>
              </div>
            </div>
            <img
              src="/images/images.webp"
              className="absolute max-w-[calc(100%-210px)] opacity-0 group-[.active]:opacity-100 bottom-0 right-0"
              alt=""
            />
          </div>
          <div
            className={`p-4 w-full lg:w-1/3 relative  group ${
              activeIndex === 3 && "active"
            } [.active]:w-[570px] [.active]:flex-shrink-0 transition-all duration-500 h-full border-t border-light first:border-t-0 lg:border-t-0 lg:border-l lg:first:border-l-0  [.active]:bg-[#c8bbff]`}
            onClick={() => handleActivate(3)}
            onMouseEnter={() => handleActivate(3)}
          >
            <div className="max-w-[210px] h-full flex flex-col text-xs lg:text-sm/5 text-blacklight group-[.active]:text-black">
              <div className="mb-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#ddedff] flex items-center justify-center">
                  <img
                    src="/images/icon1.png"
                    className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
                    alt=""
                  />
                </div>
              </div>
              <h4 className="text-lg/[20px] lg:text-[20px]/[24px] group-[.active]:text-[24px]/6 lg:group-[.active]:text-[27px]/8 text-black font-semibold mb-3">
                Coding Practice
              </h4>
              <p>
                Level up your coding skills by practicing the hiring Questions.
              </p>
              <div className="flex justify-between pt-2.5 mt-auto group-[.active]:mt-0 gap-3 items-center">
                <p className="text-sm/5 lg:text-base/6 font-medium text-black">
                  400+ Questions{" "}
                </p>
                <HiOutlineChevronRight
                  size={20}
                  className="text-black group-[.active]:hidden"
                />
              </div>
              <div className="pt-2.5 mt-auto hidden group-[.active]:block">
                <button
                  type="button"
                  className="px-4 py-2 cursor-pointer font-medium transition-all duration-200 rounded-3xl  inline-flex items-center gap-1.5 bg-primary hover:bg-primarylight text-white"
                >
                  Start Now
                  <FiArrowUpRight size={20} />
                </button>
              </div>
            </div>
            <img
              src="/images/images.webp"
              className="absolute max-w-[calc(100%-210px)] opacity-0 group-[.active]:opacity-100 bottom-0 right-0"
              alt=""
            />
          </div>

          <div
            className={`p-4 w-full lg:w-1/3 relative  group ${
              activeIndex === 4 && "active"
            } [.active]:w-[570px] [.active]:flex-shrink-0 transition-all duration-500 h-full border-t border-light first:border-t-0 lg:border-t-0 lg:border-l lg:first:border-l-0  [.active]:bg-[#ffdd80]`}
            onClick={() => handleActivate(4)}
            onMouseEnter={() => handleActivate(4)}
          >
            <div className="max-w-[210px] h-full flex flex-col text-xs lg:text-sm/5 text-blacklight group-[.active]:text-black">
              <div className="mb-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#ddedff] flex items-center justify-center">
                  <img
                    src="/images/icon1.png"
                    className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
                    alt=""
                  />
                </div>
              </div>
              <h4 className="text-lg/[20px] lg:text-[20px]/[24px] group-[.active]:text-[24px]/6 lg:group-[.active]:text-[27px]/8 text-black font-semibold mb-3">
                Coding Practice
              </h4>
              <p>
                Level up your coding skills by practicing the hiring Questions.
              </p>
              <div className="flex justify-between pt-2.5 mt-auto group-[.active]:mt-0 gap-3 items-center">
                <p className="text-sm/5 lg:text-base/6 font-medium text-black">
                  400+ Questions{" "}
                </p>
                <HiOutlineChevronRight
                  size={20}
                  className="text-black group-[.active]:hidden"
                />
              </div>
              <div className="pt-2.5 mt-auto hidden group-[.active]:block">
                <button
                  type="button"
                  className="px-4 py-2 cursor-pointer font-medium transition-all duration-200 rounded-3xl  inline-flex items-center gap-1.5 bg-primary hover:bg-primarylight text-white"
                >
                  Start Now
                  <FiArrowUpRight size={20} />
                </button>
              </div>
            </div>
            <img
              src="/images/images.webp"
              className="absolute max-w-[calc(100%-210px)] opacity-0 group-[.active]:opacity-100 bottom-0 right-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringAssessments;
