import Link from "next/link";
import React from "react";

const OpportunityCard = ({ item }) => {
  return (
    <div className="h-full">
      <Link href="/" className="h-full">
        <div
          className="min-h-[180px] md:min-h-[180px] lg:min-h-[230px] flex flex-col rounded-xl border border-light overflow-hidden h-full hover:-translate-y-1 transition-all duration-300 relative"
          style={{ backgroundColor: item.bgColor }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover relative z-10"
          />
          <div
            className="absolute top-4 left-4 flex gap-1 text-sm md:text-base lg:text-xl font-semibold z-20"
            style={{ color: item.textColor }}
          >
            {item.title}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OpportunityCard;
