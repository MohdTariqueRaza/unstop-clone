import React from "react";

export default function DownloadRefer({}) {
  return (
    <div className="container mx-auto px-4 py-12 hidden md:block">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-blue-100 md:w-1/3 p-6 flex flex-col items-center text-center md:text-left rounded-[20px] overflow-hidden relative pt-[20px] pb-0 px-[30px] hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
            <span className="block text-lg sm:text-2xl leading-6 sm:leading-7 text-[#1C4980] font-normal">
              Download
            </span>
            Unstop App
          </h2>

          <div className="mt-auto w-full">
            <img
              src="/images/download.webp"
              alt="download"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>

        <div className="bg-yellow-100 md:w-2/3 p-6 flex flex-col md:text-left overflow-hidden rounded-[20px] relative hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-3xl font-semibold mb-4">Refer & Win</h2>
          <p className="mb-6 max-w-[329px] text-base font-normal">
            MacBook, iPhone, Apple Watch, AirPods, Cash Rewards and more!
          </p>
          <button className="mb-6 px-5 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-950 cursor-pointer text-sm transition w-max">
            Get Started
          </button>
          <img
            src="/images/refer_win.webp"
            alt="refer & win"
            className="w-[230px] md:w-[230px] lg:w-[332px] h-auto rounded-md object-cover absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
}
