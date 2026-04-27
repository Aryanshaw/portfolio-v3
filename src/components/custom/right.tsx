import React from "react";
import Work from "./right/Work";
import Navbar from "./right/Navbar";
import About from "./right/About";
import Hero from "./right/Hero";
import Sketches from "./right/Sketches";
import Cinema from "./right/Cinema";
import Now from "./right/Now";
import Contact from "./right/Contact";

function RightSide() {
  return (
    <div
      id="right-side"
      className="w-full h-full bg-off-white relative overflow-y-auto scroll-smooth flex flex-col"
    >
      <Navbar />
      <main className="flex-1 flex flex-col gap-0">
        {/* hero section */}
        <div className="px-8 md:px-16 lg:px-24">
          <Hero />
        </div>

        {/* Work section */}
        <div className="px-8 md:px-16 lg:px-24 flex flex-col gap-14 mb-14">
          <div className="h-[2px] bg-text-ghost/40"></div>
          <Work />
        </div>

        {/* About section */}
        <div className="flex flex-col">
          <div className="px-8 md:px-16 lg:px-24">
            <div className="h-[2px] bg-text-ghost/40"></div>
          </div>
          <About />
        </div>

        {/* Sketches section */}
        <Sketches />

        {/* Cinema section */}
        <Cinema />

        {/* Now section */}
        <Now />

        {/* Contact section */}
        <Contact />
      </main>
    </div>
  );
}

export default RightSide;
