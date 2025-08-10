'use client'
import { useState, useEffect } from "react";

export function useMedia() {
  const [screen, setScreen] = useState({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setScreen({
        isMobile: width <= 640,
        isTablet: width > 640 && width <= 1024,
        isLaptop: width > 1024 && width <= 1366,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screen;
}
