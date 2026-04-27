import React from "react";
import { Spotlight } from "../ui/spotlight";
import Lanyard from "../Lanyard/Lanyard";
import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";
import Noise from "../Background/Noise";
import { BackgroundBeams } from "../Background/background-beam";

function LeftSide() {
  return (
    <div id="left-side" className="w-full h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 h-screen w-full">
        <Noise
          patternSize={1550}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={20}
        />
      </div>
      {/* Background Aurora */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#242424", "#2B2B2B", "#0E0917"]}
          blend={0.5}
          amplitude={2.0}
          speed={0.5}
        />
        <BackgroundBeams />
      </div>

      <div className="border-4 border-gray border-double rounded-md h-full relative z-10 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} fov={13} transparent={true} />
      </div>
    </div>
  );
}

export default LeftSide;
