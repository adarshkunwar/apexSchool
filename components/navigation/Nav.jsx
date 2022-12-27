import React from "react";
import Image from "next/image";

import img from "../../resources/logo.jpg";
const tabs = [
  {
    tabName: "NOTICE",
    tabLink: "/",
  },
  {
    tabName: "NEWS",
    tabLink: "/",
  },
  {
    tabName: "POLICY",
    tabLink: "/",
  },
  {
    tabName: "PROGRAMS",
    tabLink: "/",
  },
  {
    tabName: "INFORMATIONS",
    tabLink: "/",
  },
  {
    tabName: "GALLERY",
    tabLink: "/",
  },
  {
    tabName: "CONTACT",
    tabLink: "/",
  },
];
const Nav = () => {
  return (
    <div className="w-screen flex bg-transparent absolute justify-end px-20 items-center gap-40 h-20 z-50 text-white">
      {/* <Image
        src={img}
        alt={`asda`}
        className="w-28 h-28 bg-blue-300 rounded-full"
      /> */}
      <div>Logo Placeholder</div>
      <div className="flex gap-2 items-center">
        <dir></dir>
        <div>
          <div>Admission</div>
        </div>
        {/* <div className="flex flex-col gap-2">
          <div className="w-28 py-1 px-4 bg-green-400 text-black">Login</div>
          <div className="w-28 py-1 px-4 bg-red-400 text-black">Admission</div>
        </div> */}
      </div>
      <div className="flex gap-8">
        {tabs.map((nav, i) => (
          <div className="flex-col group cursor-pointer">
            <div className="">{nav.tabName}</div>
            <div className="w-0 group-hover:w-full h-0.5 bg-white"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
