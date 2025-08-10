import Link from "next/link";
import React from "react";
import { IoIosHeart } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { footerData } from "@/utils/data";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="bg-[#1C4980] text-white text-sm/[1.3] overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full  lg:w-[40%] xl:w-[33%] relative z-50 py-7 pl-0 lg:p-12 lg:pl-0">
              <img
                src="/images/footer_bg.webp"
                className="w-screen lg:w-[50vw] h-full -z-10 max-w-none top-0  absolute -right-5 lg:right-0"
                alt=""
              />
              <div className="not-last:pb-5 not-last:mb-5 not-last:border-b border-dotted border-[#1C4980]">
                <Link
                  href="#"
                  className="w-auto inline-block h-[55px] relative -z-10"
                >
                  <img
                    src="/images/footer_logo_bg.webp"
                    className="absolute z-0 top-1/2 left-[-75px] aspect-square min-w-[204px] -translate-y-1/2"
                    alt=""
                  />
                  <img
                    src="/images/logo-white.svg"
                    className="w-auto h-full relative z-20 object-contain"
                    alt=""
                  />
                </Link>
                <div className=" text-white font-medium text-base/5 mt-5 flex items-center gap-1.5">
                  Built with <IoIosHeart size={18} className="text-[#E9407A]" />{" "}
                  in India for the world
                </div>
              </div>
              <div className="not-last:pb-5 not-last:mb-5 not-last:border-b border-dotted border-[#1C4980]">
                <h4 className="text-lg/5 md:text-[20px]/6 font-semibold mb-5">
                  Stay Connected
                </h4>
                <div className="space-y-6">
                  <div className="relative">
                    <h4 className="font-semibold mb-3">Sales Inquiries</h4>
                    <ul className="space-y-3 text-[#d2d2d2]">
                      <li>
                        <a
                          href="#"
                          className="flex items-center gap-2 hover:text-white"
                        >
                          <IoMail /> sales@unstop.com
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center gap-2 hover:text-white"
                        >
                          <IoCall /> +91-9311777388 (Mon to Fri, 9 AM to 6 PM)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <h4 className="font-semibold mb-3">Support Inquiries</h4>
                    <ul className="space-y-3 text-[#d2d2d2]">
                      <li>
                        <a
                          href="#"
                          className="flex items-center gap-2 hover:text-white"
                        >
                          <IoMail /> support@unstop.com
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="relative flex gap-3 items-center -ml-2">
                    <a
                      href="#"
                      className="w-8 h-8 border border-transparent rounded-full hover:border-light/50 grid place-items-center"
                    >
                      <FaFacebookF size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 border border-transparent rounded-full hover:border-light/50 grid place-items-center"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 border border-transparent rounded-full hover:border-light/50 grid place-items-center"
                    >
                      <FaYoutube size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 border border-transparent rounded-full hover:border-light/50 grid place-items-center"
                    >
                      <FaXTwitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="not-last:pb-5 not-last:mb-5 not-last:border-b max-w-[500px] border-dotted border-[#1C4980]">
                <h4 className="text-lg/5 md:text-[20px]/6 font-semibold mb-3">
                  Stay Updated{" "}
                </h4>
                <p className="text-white">
                  We'll send you updates on the latest opportunities to showcase
                  your talent and get hired and rewarded regularly.
                </p>
                <div className="mt-4">
                  <div className="flex relative rounded-lg overflow-hidden">
                    <input
                      className="w-full h-10 bg-white rounded-lg pr-14 text-blacklight placeholder:text-blacklight pl-3"
                      placeholder=" Subscribe to our newsletter! "
                    />
                    <button className="w-12 top-0 absolute bottom-0 right-0 p-1 text-white bg-primarylight cursor-pointer hover:bg-primary grid place-items-center  rounded-r-lg">
                      <IoMdSend size={22} />
                    </button>
                  </div>
                  <div className="mt-4 flex gap-5 flex-wrap">
                    <button
                      type="button"
                      className="px-4 py-3 cursor-pointer text-xs/4 font-medium transition-all duration-200 rounded-lg  inline-flex items-center gap-1.5 bg-[#245db0] hover:bg-primary text-white"
                    >
                      Share Your Story Now
                    </button>
                    <button
                      type="button"
                      className="px-4 py-3 cursor-pointer text-xs/4 font-medium transition-all duration-200 rounded-lg  inline-flex items-center gap-1.5 bg-[#245db0] hover:bg-primary text-white"
                    >
                      Publish Opportunity
                    </button>
                  </div>
                </div>
              </div>
              <div className="not-last:pb-5 not-last:mb-5 not-last:border-b border-dotted border-[#1C4980]">
                <h4 className="text-lg/5 md:text-[20px]/6 font-semibold">
                  Download Unstop App
                </h4>
                <div className="mt-4 flex gap-2 lg:gap-5 flex-wrap">
                  <Link href="/" className="block">
                    <img
                      src="/images/google-play.svg"
                      className="h-10"
                      alt=""
                    />
                  </Link>
                  <Link href="/" className="block">
                    <img src="/images/app-store.svg" className="h-10" alt="" />
                  </Link>
                </div>
              </div>
              <div className="not-last:pb-5 not-last:mb-5 not-last:border-b border-dotted border-[#1C4980]">
                <p className="text-white">
                  Best Viewed in Latest Versions of Edge, Mozilla, Chrome, Opera
                  & Safari. V: 8.9.2025.10.37
                </p>
              </div>
              <div className="not-last:pb-5 not-last:mb-5 not-last:border-b border-dotted border-[#1C4980]">
                <p className="text-white text-xs">
                  Copyright © 2025{" "}
                  <Link href="/" className="underline">
                    FLIVE Consulting Pvt Ltd
                  </Link>{" "}
                  - All rights reserved.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[60%] xl:w-[67%] py-10 p-0  lg:p-14 lg:pr-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <div className="relative space-y-10">
                  <h4 className="text-lg/5 md:text-[20px]/6 font-semibold mb-4">
                    Products
                  </h4>
                  <ul className="text-sm/5 text-[#ffffffb3] space-y-2">
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Brand & Engage
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Source
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Screen
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Assess
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Interview
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Hiring Automation
                      </Link>{" "}
                    </li>
                  </ul>
                  <h4 className="text-lg/5 md:text-[20px]/6 font-semibold mb-4">
                    Mentorship
                  </h4>
                  <ul className="text-sm/5 text-[#ffffffb3] space-y-2">
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Be a Mentor
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Explore Mentors
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Mentorship FAQs
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Mentorship Blogs
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
                <div className="relative space-y-10">
                  <h4 className="text-lg/5 md:text-[20px]/6 font-semibold mb-4">
                    Participate
                  </h4>
                  <ul className="text-sm/5 text-[#ffffffb3] space-y-2">
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Brand & Engage
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Source
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Screen
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Assess
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Hiring Automation
                      </Link>{" "}
                    </li>
                  </ul>
                  <h4 className="text-lg/5 md:text-[20px]/6 font-semibold mb-4">
                    Apply
                  </h4>
                  <ul className="text-sm/5 text-[#ffffffb3] space-y-2">
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Be a Mentor
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Explore Mentors
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Mentorship FAQs
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Mentorship Blogs
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
                <div className="relative col-span-2 md:col-span-1 grid grid-cols-2 md:block gap-5">
                  <div>
                    <h4 className="text-lg/5 md:text-[20px]/6 font-semibold mb-4">
                      Learn
                    </h4>
                    <ul className="text-sm/5 text-[#ffffffb3] space-y-2">
                      <li>
                        {" "}
                        <Link href="#" className="hover:text-white">
                          Brand & Engage
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link href="#" className="hover:text-white">
                          Source
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link href="#" className="hover:text-white">
                          Screen
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link href="#" className="hover:text-white">
                          Assess
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link href="#" className="hover:text-white">
                          Interview
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link href="#" className="hover:text-white">
                          Hiring Automation
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg/5 md:text-[20px]/6 font-semibold mb-4">
                      Practice
                    </h4>
                    <ul className="text-sm/5 text-[#ffffffb3] space-y-2">
                      <li>
                        {" "}
                        <Link href="#" className="hover:text-white">
                          Be a Mentor
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link href="#" className="hover:text-white">
                          Explore Mentors
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link href="#" className="hover:text-white">
                          Mentorship FAQs
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link href="#" className="hover:text-white">
                          Mentorship Blogs
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mt-10 pt-8 border-t border-[#22222230] ">
                <div className="pr-6 w-full md:w-[40%]">
                  <h4 className="text-lg/5 md:text-[20px]/6 font-semibold mb-4">
                    Our Properties
                  </h4>
                  <ul className="text-xs/4 md:text-sm/5 text-[#ffffffb3] space-y-2">
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Unstop Talent Awards 2025
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Unstop Talent Meet 2025
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Unstop Talent Report 2025
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Education Loan EMI Calculator
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Unstop Igniters Club
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#" className="hover:text-white">
                        Online Quizzing Festival
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
                <div className="w-full mt-5 md:mt-0 md:w-[60%] space-y-3">
                  {footerData.map((items, index) => (
                    <ul
                      key={index}
                      className="text-xs/4 md:text-sm/5 text-[#ffffffb3] flex flex-wrap gap-x-3 gap-y-2"
                    >
                      {items.map((item, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className={`hover:text-white pl-3 ${
                              index === 0 ? "border-0" : "border-l border-light"
                            }`}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2.5">
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-3 md:gap-5">
            <div>
              <img
                src="/images/footer-icons.png"
                className="md:h-7 object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-shrink-0 gap-2 items-center">
              <img
                src="/images/footer1.svg"
                className="w-[44px] h-[44px] lg:w-[70px] lg:h-[70px] object-contain"
                alt=""
              />
              <img
                src="/images/footer2.webp"
                className="w-[44px] h-[44px] lg:w-[70px] lg:h-[70px] object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
