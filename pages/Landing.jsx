import Image from "next/image";
import React from "react";
import Academics from "../components/Landing/Academics";
import Advantages from "../components/Landing/Advantages";
import Join from "../components/Landing/Join";

const Landing = () => {
  return (
    <div className="">
      <div className="w-screen h-screen overflow-hidden">
        <video autoPlay loop muted>
          <source
            src={`https://apexcollege.edu.np/storage/files/apex-college-video-with-text.mp4`}
            type="video/mp4"
            className="w-screen h-screen"
          />
        </video>
      </div>
      {/* join here */}
      <Join />
      {/* advandtages */}
      <Advantages />
      {/* academic programs */}
      {/* <Academics /> */}
      {/* life here */}
    </div>
  );
};

export default Landing;
