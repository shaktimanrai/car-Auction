import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsBorderWidth,
  BsCompass, BsPaypal,
  
}from "react-icons/bs";
import { CgTerminal } from "react-icons/cg";
import { MdPrivacyTip } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { TbJewishStar } from "react-icons/tb";
import { GiKnightBanner } from "react-icons/gi";
import image from "../../../src/components/Assets/Logo.png";
import { BiLogOutCircle, BiComplaints,BiCommand, BiRepost } from "react-icons/bi";
import { FaCalendar } from 'react-icons/fa'


import {
  MdDashboardCustomize,
  MdOutlineProductionQuantityLimits,
  MdOutlineCategory,
  MdAccessTimeFilled,
  MdAdjust,
  MdVerifiedUser ,
  MdDeliveryDining,
  MdVerticalSplit,
  MdDiscFull,
  MdOutlineNotifications,
} from "react-icons/md";

const Sidebar = ({ hamb, setHamb }) => {
  const nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3" />,
      link: "/dashboard",
      name: "Dashboard",
    },
    {
      icon: <MdAccessTimeFilled className="text-xl mr-3" />,
      link: "/auction",
      name: "Auction details",
    },
    
    {
      icon: <FaCalendar className="text-xl mr-3" />,
      link: "/meeting",
      name: "Meeting",
    },
    {
      icon: <MdAdjust className="text-xl mr-3" />,
      link: "/dealers",
      name: "My dealers",
    },
    {
      icon: < MdVerifiedUser className="text-xl mr-3" />,
      link: "/vehiclesdetails",
      name: " Vehicles details",
    },
    {
      icon: <MdDeliveryDining className="text-xl mr-3" />,
      link: "/delivery",
      name: " Delivery Partner List manages system",
    },
    {
      icon: <MdOutlineProductionQuantityLimits className="text-xl mr-3" />,
      link: "/products",
      name: "Product Details manage system",
    },
    {
      icon: <MdVerticalSplit className="text-xl mr-3" />,
      link: "/vendormanages",
      name: " Vendor manages system.",
    },
    {
      icon: <GiKnightBanner className="text-xl mr-3" />,
      link: "/banners",
      name: "Banners",
    },
    {
      icon: <MdOutlineCategory className="text-xl mr-3" />,
      link: "/category",
      name: "Category Details manages",
    },
    {
      icon: <MdDiscFull className="text-xl mr-3" />,
      link: "/discounts",
      name: "Discounts",
    },
    {
      icon: <BsBorderWidth className="text-xl mr-3" />,
      link: "/orders",
      name: "Orders",
    },
    {
      icon: <BsCompass className="text-xl mr-3" />,
      link: "/commission",
      name: " Commission List",
    },
    {
      icon: <BsPaypal className="text-xl mr-3" />,
      link: "/paymentgateway",
      name: " Payment Gateway",
    },
    {
      icon: <CgTerminal className="text-xl mr-3" />,
      link: "/terms",
      name: "Terms and Conditions",
    },

    {
      icon: <MdPrivacyTip className="text-xl mr-3" />,
      link: "/privacyPolicy",
      name: "Privacy Policy",
    },
    {
      icon: <BiSupport className="text-xl mr-3" />,
      link: "/support",
      name: "Help and Support ",
    },
    // {
    //   icon: <BiSupport className="text-xl mr-3" />,
    //   link: "/vendors",
    //   name: "Vendors ",
    // },
    {
      icon: <BiLogOutCircle className="text-xl mr-3" />,
      link: "/",
      name: "Logout",
    },
    {
      icon: <BiCommand className="text-xl mr-3" />,
      link: "/complaints",
      name: "Complaints",
    },
    {
      icon: <BiRepost className="text-xl mr-3" />,
      link: "/reports",
      name: "Reports",
    },
  ];
  return (
    <>
      <aside className="p-4">
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        {/* Logo */}
        <figure className="flex  flex-col items-center">
          <span className="font-bold text-[rgb(241,146,46)]">
            <img src={image} className="h-24" />
          </span>
        </figure>
        {/* Nav-menu */}
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link to={nav.link} key={nav.name} className="">
                <span className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm">
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
