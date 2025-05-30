import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { Inter } from "next/font/google";
import { MdHomeFilled } from "react-icons/md";
import "./globals.css";
import { SlMagnifier } from "react-icons/sl";
import React from "react";
import { GrNotification } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { LuCircleSlash2 } from "react-icons/lu";
import { PiBookmarkSimple } from "react-icons/pi";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { CgMoreO } from "react-icons/cg";
import { MdPersonOutline } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import FeedCard from "@/components/FeedCard";
const inter = Inter({
  subsets: ["latin"],
});

interface TwitterSideBarButtton {
  title: string;
  icon: React.ReactNode;
}

const SideBarMenuItems: TwitterSideBarButtton[] = [
  {
    title: "Home",
    icon: <MdHomeFilled className="text-4xl" />,
  },
  {
    title: "Explore",
    icon: <SlMagnifier className="text-3xl " />,
  },
   {
    title: "Notifications",
    icon: <GrNotification className="text-3xl " />,
  },
  {
    title: "Messages",
    icon: <MdOutlineEmail className="text-3xl " />,
  },
  {
    title: "Grok",
    icon: <LuCircleSlash2 className="text-3xl " />,
  },
  {
    title: "Bookmarks",
    icon: <PiBookmarkSimple className="text-3xl " />,
  },
  {
    title: "Jobs",
    icon: <PiSuitcaseSimpleBold className="text-3xl " />,
  },
   {
    title: "Communities",
    icon: <BsPeople className="text-3xl " />,
  },
  {
    title: "Premium",
    icon: <FaXTwitter className="text-3xl " />,
  },
   {
    title: "Profile",
    icon: <MdPersonOutline className="text-3xl " />,
  },
   {
    title: "More",
    icon: <CgMoreO className="text-3xl " />,
  },


 
];

export default function Home() {
  return (
    <div className="font-inter">
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3   pt-1 ml-15 ">
          <div className="text-4xl h-fit pl-6 hover:bg-zinc-800 p-2 cursor-pointer transition-all rounded-full">
            <FaXTwitter />
          </div>
          <div className="mt-1 text-2xl  font-semi-bold ">
            <ul >
              {SideBarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-zinc-800 p-2 cursor-pointer transition-all rounded-full px-5 py-4 w-fit"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          <div className="flex justify-center items-center mt-2 mr-12 pl-2 pr-4 font-semibold">
            <button className="bg-white  px-2  py-4 text-black text-2xl bold rounded-full  w-full ">Post</button> 
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px]  border-l-[1px] border border-gray-600">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
