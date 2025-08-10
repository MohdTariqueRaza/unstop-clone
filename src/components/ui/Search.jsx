"use client";
import { searchData } from "@/utils/data";

export default function Search({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-[#0009] bg-opacity-50 z-[990px] top-[59px] left-0"
      ></div>
      <div className="absolute mt-2 bg-white  shadow-lg rounded-2xl w-[500px] z-50 top-[40px] left-[115px] p-4">
        <h2 className="text-lg mb-4">Categories</h2>
        <div className="flex items-center gap-2 flex-wrap">
          {searchData.map((item) => (
            <button
              key={item.searchText}
              type="button"
              className="p-2 cursor-pointer font-medium text-black transition-all duration-200 rounded-3xl border border-light items-center gap-1.5 flex hover:bg-gray-100"
            >
              <div
                className="p-2 bg-amber-500 rounded-full"
                style={{ backgroundColor: `${item.iconBgColor}` }}
              >
                {item.icon}
              </div>
              {item.searchText}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
