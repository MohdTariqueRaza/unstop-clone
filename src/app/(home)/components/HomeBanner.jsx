"use client";
import { useMedia } from "@/hooks/useMedia";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const HomeBanner = () => {
    const [settings, setSettings] = useState(null);
    const { isMobile } = useMedia();
    console.log(isMobile ? '1' : '2')
    useEffect(() => {

        setSettings({
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: isMobile ? 1 : 2,
            slidesToScroll: isMobile ? 1 : 2,
            arrows: !isMobile,
        });
    }, [isMobile]);


    return (
        <div className="pb-10">
            <div className="container">
                <div className="w-[calc(100%+16px)] -ml-2">
                    <Slider {...settings} className="common-slider">
                        <div className="px-2 outline-0 border-0 h-full">
                            <img src="/images/b1.webp" className="w-full h-full object-cover block rounded-md" alt="" />
                        </div>
                        <div className="px-2 outline-0 border-0 h-full">
                            <img src="/images/b2.webp" className="w-full h-full object-cover block rounded-md" alt="" />
                        </div>
                        <div className="px-2 outline-0 border-0 h-full">
                            <img src="/images/b3.webp" className="w-full h-full object-cover block rounded-md" alt="" />
                        </div>
                        <div className="px-2 outline-0 border-0 h-full">
                            <img src="/images/b4.webp" className="w-full h-full object-cover block rounded-md" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
