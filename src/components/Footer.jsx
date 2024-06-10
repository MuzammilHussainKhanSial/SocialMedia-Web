// src/Footer.js
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-white mt-[80px] ">
      <div className="mx-auto  py-[80px] px-[32px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2  md:col-span-3 md:flex  flex-col items-center justify-center lg:col-span-2">
            <div className="flex items-center gap-x-[10px] mb-[32px]">
              <img src="src/assest/avatar/logo-mini.svg" className="w-[30px] h-[28px]" alt="" />
           <h4 className="text-[23px] font-semibold text-[#07142e] plus ">SocialV</h4>
          </div>
          <p className="text-[16px] font-normal text-[#6f7f92] plus mb-[16px]">Download app from</p>
            <div className="flex items-center gap-x-[20px]">
            <div className="text-[23px] font-semibold plus text-[#07142e]">
              <img src="src/assest/profile/app-store.png" alt="" />
            </div>
            <div className="text-[16px] font-normal text-[#6f7f92] plus">
              <img src="src/assest/profile/playstore.png" alt="" />
            </div>
            </div>
          </div>
          <div>
            <h5 className="text-[14px] plus font-medium text-[#07142e]">
              COMPANY
            </h5>
            <ul>
              <li className="mt-[20px]">
                <NavLink
                  to="#"
                  className="text-[14px] font-medium plus hover:text-[#2f65b9] text-[#6f7f92] pt-[10px] pb-[10px]"
                >
                  About Us
                </NavLink>
              </li>
              <li className="mt-[20px]">
                <NavLink
                  to="#"
                  className="text-[14px] font-medium plus hover:text-[#2f65b9] text-[#6f7f92] pt-[10px] pb-[10px]"
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="mt-[20px]">
                <NavLink
                  to="#"
                  className="text-[14px] font-medium plus hover:text-[#2f65b9] text-[#6f7f92] pt-[10px] pb-[10px]"
                >
                  Blog
                </NavLink>
              </li>
              <li className="mt-[20px]">
                <NavLink
                  to="#"
                  className="text-[14px] font-medium plus hover:text-[#2f65b9] text-[#6f7f92] pt-[10px] pb-[10px]"
                >
                  Blog Detail
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[14px] plus font-medium text-[#07142e]">
              COMMUNITY
            </h5>
            <ul>
              <li className="mt-[20px]">
                <NavLink
                  to="#"
                  className="text-[14px] font-medium plus hover:text-[#2f65b9] text-[#6f7f92] pt-[10px] pb-[10px]"
                >
                  Activity
                </NavLink>
              </li>
              <li className="mt-[20px]">
                <NavLink
                  to="#"
                  className="text-[14px] font-medium plus hover:text-[#2f65b9] text-[#6f7f92] pt-[10px] pb-[10px]"
                >
                  Timeline
                </NavLink>
              </li>
              <li className="mt-[20px]">
                <NavLink
                  to="#"
                  className="text-[14px] font-medium plus hover:text-[#2f65b9] text-[#6f7f92] pt-[10px] pb-[10px]"
                >
                  Forums
                </NavLink>
              </li>
              <li className="mt-[20px]">
                <NavLink
                  to="#"
                  className="text-[14px] font-medium plus hover:text-[#2f65b9] text-[#6f7f92] pt-[10px] pb-[10px]"
                >
                  Friends
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[14px] plus font-medium text-[#07142e]">
              HELP
            </h5>
            <ul>
              <li className="mt-[20px]">
                <NavLink
                  to="#"
                  className="text-[14px] font-medium plus hover:text-[#2f65b9] text-[#6f7f92] pt-[10px] pb-[10px]"
                >
                  Frequently Asked Questions
                </NavLink>
              </li>
              <li className="mt-[20px]">
                <NavLink
                  to="#"
                  className="text-[14px] font-medium plus hover:text-[#2f65b9] text-[#6f7f92] pt-[10px] pb-[10px]"
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li className="mt-[20px]">
                <NavLink
                  to="#"
                  className="text-[14px] font-medium plus hover:text-[#2f65b9] text-[#6f7f92] pt-[10px] pb-[10px]"
                >
                  Terms & Condition
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[14px] plus font-medium text-[#07142e]">
              FOLLOW US
            </h5>
            <ul>
              <li className="mt-[20px]">
                <NavLink
                  to="#"
                  className="text-[14px] font-medium plus hover:text-[#2f65b9] text-[#6f7f92] pt-[10px] pb-[10px]"
                >
                  Facebook
                </NavLink>
              </li>
              <li className="mt-[20px]">
                <NavLink
                  to="#"
                  className="text-[14px] font-medium plus hover:text-[#2f65b9] text-[#6f7f92] pt-[10px] pb-[10px]"
                >
                  Instagram
                </NavLink>
              </li>
              <li className="mt-[20px]">
                <NavLink
                  to="#"
                  className="text-[14px] font-medium plus hover:text-[#2f65b9] text-[#6f7f92] pt-[10px] pb-[10px]"
                >
                  Dribbble
                </NavLink>
              </li>
            </ul>
          </div>
        </div>  
      </div>
      <hr  className="my-[20px]"/>
      <p className="text-center text-[16px] font-medium text-[#07142e] plus py-[16px]">© 2024 SocialV. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
