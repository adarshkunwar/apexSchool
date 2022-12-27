import React from "react";
import Image from "next/image";
import img from "../../resources/unity.jpg";
const Join = () => {
  return (
    <div>
      <div className="w-screen relative ">
        <div className="absolute opacity-10 -z-20  ">
          {/* <Image src={img} alt="" className="w-screen object-fill" /> */}
        </div>
        <div className="text-8xl text-center py-20 text-blue-500">
          Become a <br /> Kalikan <br />
          here
        </div>
      </div>
    </div>
  );
};

export default Join;
