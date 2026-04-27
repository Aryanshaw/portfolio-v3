"use client";

import LeftSide from "@/components/custom/left";
import RightSide from "@/components/custom/right";
import React, { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const page = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isMobile) {
        document.getElementById("right-side")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isMobile]);


  return (
    <div className="flex flex-1 relative w-full h-screen flex-col md:flex-row md:overflow-hidden overflow-y-auto">
      <div className="md:flex-[0.4] w-full">
        <LeftSide />
      </div>
      <div className="md:flex-[0.6] w-full">
        <RightSide />
      </div>
    </div>
  );
};

export default page;
