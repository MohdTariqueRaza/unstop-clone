"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiSearch, FiPlus, FiChevronDown } from "react-icons/fi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { BsBagCheck } from "react-icons/bs";
import { GoTrophy } from "react-icons/go";
import { LuUserRound } from "react-icons/lu";
import { CgDetailsMore } from "react-icons/cg";
import { moreDropdownItems, navItems, sideNavItems } from "@/utils/data";
import Search from "../ui/Search";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      <div className="border-b border-light py-2.5 bg-white sticky top-0 left-0 z-[991]">
        <div className="container !max-w-[1540px] !px-5 xl:!px-12">
          <div className="flex flex-wrap text-sm/5  items-center">
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/" className="block w-[70px] lg:w-[82px] lg:h-8">
                <img
                  src="/images/logo.svg"
                  className="w-full h-full object-contain"
                  alt=""
                />
              </Link>
              <div
                className="relative hidden md:block"
                onClick={() => setIsOpen(true)}
              >
                <input
                  type="text"
                  className="w-full border border-light  rounded-3xl py-2 focus:border-[#0073E6] focus:!outline-0 px-3 pl-10"
                  placeholder="search..."
                />

                <FiSearch className="w-5 h-5 absolute top-1/2 left-[22px] -translate-1/2" />
              </div>
              <div className="hidden md:block">
                <Search isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
            <div className="flex flex-wrap xl:gap-8 ml-auto">
              <ul className="flex-wrap hidden lg:flex items-center gap-4">
                {navItems.map((item) => (
                  <li className="xl:px-1" key={item}>
                    <Link
                      href="#"
                      className="py-2 px-3 inline-block transition-all duration-200 hover:bg-[#f5f5f5] font-medium text-blacklight rounded-3xl border border-transparent [.active]:border-primarylight [.active]:text-primarylight"
                    >
                      {item}
                    </Link>
                  </li>
                ))}

                <li className="relative xl:px-1 group">
                  <button
                    type="button"
                    className="py-2 px-3 transition-all duration-200 hover:bg-[#f5f5f5] font-medium text-blacklight rounded-3xl border border-transparent [.active]:border-primarylight [.active]:text-primarylight flex items-center gap-2 cursor-pointer"
                  >
                    More <FiChevronDown size={18} />
                  </button>

                  <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200 z-20 p-2">
                    {moreDropdownItems.map((item) => (
                      <li key={item.title}>
                        <Link
                          href="#"
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 rounded-md"
                        >
                          {item.icon}
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <div className="pl-4 lg:border-l flex flex-row-reverse xl:flex-row flex-wrap gap-3 items-center border-light">
                <button
                  type="button"
                  className="px-4 hidden py-2 cursor-pointer font-medium text-black transition-all duration-200 rounded-3xl border xl:inline-flex items-center gap-1.5  hover:text-primarylight"
                >
                  <FiPlus size={16} /> Host
                </button>
                <button
                  type="button"
                  className="xl:px-4 xl:py-2 cursor-pointer font-medium text-black transition-all duration-200 rounded-3xl xl:border inline-flex items-center gap-1.5 border-[#ffc700] xl:bg-[#fff6d9] hover:border-primarylight hover:text-primarylight"
                >
                  <MdOutlineBusinessCenter
                    className="text-black"
                    size={20}
                    onClick={() => setMobileMenuOpen(true)}
                  />
                  <span className="hidden xl:block">For Business</span>
                </button>
                <span className="border-l hidden  !h-full border-light xl:!block" />
                <button
                  type="button"
                  className="px-4 py-2 cursor-pointer font-medium transition-all duration-200 rounded-3xl  inline-flex items-center gap-1.5 bg-primarylight hover:bg-primary text-white"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex gap-3 ${
          isVisible ? "active" : ""
        } lg:hidden border-t border-light px-4 fixed bg-white py-2.5 justify-between w-full  transition-all duration-500 [.active]:bottom-0 bottom-[-100px] z-[991]`}
      >
        <button
          type="button"
          className="text-[10px]/3 flex flex-col items-center gap-1 font-medium text-black active [.active]:text-primarylight  text-center"
        >
          <IoHomeOutline size={20} />
          <span>Unstop</span>
        </button>
        <button
          type="button"
          className="text-[10px]/3 flex flex-col items-center gap-1 font-medium text-black [.active]:text-primarylight  text-center"
        >
          <PiStudentFill size={20} />
          <span>Internships</span>
        </button>
        <button
          type="button"
          className="text-[10px]/3 flex flex-col items-center gap-1 font-medium text-black [.active]:text-primarylight  text-center"
        >
          <BsBagCheck size={20} />
          <span>Jobs</span>
        </button>
        <button
          type="button"
          className="text-[10px]/3 flex flex-col items-center gap-1 font-medium text-black [.active]:text-primarylight  text-center"
        >
          <GoTrophy size={20} />
          <span>Competitions</span>
        </button>
        <button
          type="button"
          className="text-[10px]/3 flex flex-col items-center gap-1 font-medium text-black [.active]:text-primarylight  text-center"
        >
          <LuUserRound size={20} />
          <span>Mentorships</span>
        </button>
        <button
          type="button"
          className="text-[10px]/3 flex flex-col items-center gap-1 font-medium text-black [.active]:text-primarylight  text-center"
        >
          <CgDetailsMore size={20} />
          <span>More</span>
        </button>
      </div>

      <div>
        <div
          className={`fixed inset-0 z-[991] bg-[#0009] bg-opacity-50 transition-opacity duration-300 ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        <div
          className={`fixed top-0 right-0 z-[992] h-full w-full sm:w-4/5 sm:max-w-md bg-white shadow-xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button and Header */}
          <div className="flex justify-between items-center p-6 sticky z-50 bg-white border-b border-gray-300 top-0 left-0 w-full">
            <h2 className="text-lg">For Business</h2>
            <button
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 pt-0">
            <div>
              <div className="-mx-6 border-b border-gray-300 mb-6"></div>
              {sideNavItems.map((item, index) => (
                <div key={index}>
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-400 mb-3 text-xs">
                      {item.heading}
                    </h3>
                    <ul className="space-y-2">
                      {item.subHeading.map((store, i) => (
                        <li
                          key={i}
                          className="flex items-center px-2 gap-2 text-gray-700 text-sm py-2 rounded-md hover:bg-gray-100 cursor-pointer"
                        >
                          {store.icon}
                          <span className="text-sm">{store.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="-mx-6 border-b border-gray-300 mb-6"></div>
                </div>
              ))}
              <div className="text-center">
                <button className="w-full py-3 text-sm font-medium border border-gray-400 text-gary-400 rounded-full hover:bg-gray-500 transition">
                  Organizer Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
