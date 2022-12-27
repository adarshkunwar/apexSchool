import React from "react";
import Image from "next/image";
import img from "../../resources/unity.jpg";

const features = [
  {
    img: "https://unsplash.com/photos/uqMgWAj3RMU",
    name: "Its good",
    desc: "like you wouldnt belive",
  },
  {
    img: "../../resources/unity.jpg",
    name: "Its good",
    desc: "like you wouldnt belive",
  },
  {
    img: "../../resources/unity.jpg",
    desc: "like you wouldnt belive",
    name: "Its good",
  },
  {
    img: "../../resources/unity.jpg",
    desc: "like you wouldnt belive",
    name: "Its good",
  },
  {
    img: "../../resources/unity.jpg",
    desc: "like you wouldnt belive",
    name: "Its good",
  },
  {
    img: "../../resources/unity.jpg",
    desc: "like you wouldnt belive",
    name: "Its good",
  },
];
const Advantages = () => {
  return (
    <div className={` bg-blue-200 `}>
      <div className="text-6xl text-black py-20 pb-10  text-center">
        Our Features
      </div>
      <div className={`px-5 w-screen py-10 flex bg-blue-200 justify-evenly  `}>
        {features.map((data, i) => (
          <div
            className={`px-5 py-5 border-2 hover:scale-105 transition-all bg-neutral-1  00 border-black rounded-lg flex flex-col items-center ${
              i < 4 ? "block" : "hidden"
            }`}
          >
            <div className="w-60 h-60 mx-auto">
              {" "}
              <Image
                src={img}
                alt="image"
                className="w-60 h-60 object-cover rounded-lg"
              />
              {/* <img src={data.img} alt="image" />{" "} */}
            </div>
            <div className="text-2xl">{data.name}</div>
            <div className="text-lg text-center">{data.desc}</div>
            <button className="border bg-yellow-200">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
