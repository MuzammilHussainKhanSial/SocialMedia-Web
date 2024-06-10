import React, { useEffect } from "react";
import { useState } from "react";
import { FaBell, FaShoppingCart, FaEnvelope, FaUserFriends, FaSearch, FaBars } from 'react-icons/fa';
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";


function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`mx-auto  px-5 dark:bg-slate-900 dark: fixed top-0 left-0  right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-800 dark: duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
       
       <nav className="text-black  px-[32px] py-[15px]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Links */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink to ="#" className=" plus text-[14px] plus text-[#6F7F92] hover:text-[#2f65b9] font-semibold">HOME</NavLink>
          <div className="relative group">
            <NavLink to="#" className=" plus text-[14px] text-[#6F7F92] hover:text-[#2f65b9] font-semibold">COMMUNITY</NavLink>
            <div className="absolute hidden group-hover:block bg-white  mt-1 rounded shadow-lg">
              {/* Comunity DropDown */}
              <div className=" grid grid-cols-3 w-[40em] h-[20em] overflow-y-auto overflow-x-hidden bg-white py-[10px]  px-[40px] rounded-md shadow-sm">
                <div>
                <NavLink to="#" className=" plus block px-4 py-2 text-[16px] font-semibold text-[#07142e]  ps-[20px]">Social</NavLink>
                <ul>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">Activity</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">Member</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">Group</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">Badges</NavLink>
                  </li>
                </ul>
                </div>
                <div>
                <NavLink to="#" className=" plus block px-4 py-2 text-[16px] font-semibold text-[#07142e]  ps-[50px]">Profile</NavLink>
                <ul>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">TimeLine</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">About User</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">User'Timeline</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">User'Friend</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">User'Group</NavLink>
                  </li>
                </ul>
                </div>
                <div>
                <NavLink to="#" className=" plus block px-4 py-2 text-[16px] font-semibold text-[#07142e]  ps-[20px]">Forum</NavLink>
                <ul>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">All Form </NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">Form Detail</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">Topic Single</NavLink>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <NavLink to="#" className=" plus text-[14px] text-[#6F7F92] hover:text-[#2f65b9] font-semibold">PAGES</NavLink>
            <div className="absolute hidden group-hover:block bg-gray-700  mt-1 rounded shadow-lg">
              {/* Page DropDow */}
            <div className=" grid grid-cols-1 w-[20em] h-[20em] overflow-y-auto overflow-x-hidden bg-white py-[10px]  px-[40px] rounded-md shadow-sm">
                <div>
                <NavLink to="#" className=" plus block px-4 py-2 text-[16px] font-semibold text-[#07142e]  ps-[20px]">About Us</NavLink>
                <ul>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#6f7f92] hover:text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">Contact Us</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#6f7f92] hover:text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">Frequrently Asked Question</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#6f7f92] hover:text-[#2f65b9]  font-semibold px-[16px] py-[11px]" to="">Terms&Condition</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#6f7f92] hover:text-[#2f65b9]  font-semibold px-[16px] py-[11px]" to="">Privacy Policy</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#6f7f92] hover:text-[#2f65b9]  font-semibold px-[16px] py-[11px]" to="">Comming Soon</NavLink>
                  </li>
                </ul>
                </div>
              </div>
            </div>
            {/* Page DropDown End */}
          </div>
          <div className="relative group">
            <NavLink to="#" className=" plus text-[14px] text-[#6F7F92] hover:text-[#2f65b9] font-semibold">BLOG</NavLink>
            <div className="absolute hidden group-hover:block bg-gray-700  mt-1 rounded shadow-lg">
              {/* DropDown Blogs */}
            <div className=" grid grid-cols-1 w-[20em] h-[20em] overflow-y-auto overflow-x-hidden bg-white py-[10px]  px-[40px] rounded-md shadow-sm">
                <div>
                <NavLink to="#" className=" plus block px-4 py-2 text-[16px] font-semibold text-[#07142e]  ps-[20px]">Blog Listing</NavLink>
                <ul>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#6f7f92] hover:text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">Blog Grid</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#6f7f92] hover:text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">Blog Sidebar</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#6f7f92] hover:text-[#2f65b9]  font-semibold px-[16px] py-[11px]" to="">Blog Single</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#6f7f92] hover:text-[#2f65b9]  font-semibold px-[16px] py-[11px]" to="">Blog Sidebar</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#6f7f92] hover:text-[#2f65b9]  font-semibold px-[16px] py-[11px]" to="">Blog Detail</NavLink>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <NavLink to="#" className=" plus text-[14px] text-[#6F7F92] hover:text-[#2f65b9] font-semibold">SHOP</NavLink>
            <div className="absolute hidden group-hover:block bg-gray-700  mt-1 rounded shadow-lg">
              {/* Shop   Blogs */}
            <div className=" grid grid-cols-1 w-[20em] h-[15em] overflow-y-auto overflow-x-hidden bg-white py-[10px]  px-[40px] rounded-md shadow-sm">
                <div>
                <NavLink to="#" className=" plus block px-4 py-2 text-[16px] font-semibold text-[#07142e]  ps-[20px]">Start</NavLink>
                <ul>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#6f7f92] hover:text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">CheckOut</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#6f7f92] hover:text-[#2f65b9] font-semibold px-[16px] py-[11px]" to="">Wishlist</NavLink>
                  </li>
                  <li  className="font-[400] mt-[20px]">
                    <NavLink className="plus text-[14px] text-[#6f7f92] hover:text-[#2f65b9]  font-semibold px-[16px] py-[11px]" to="">My Account</NavLink>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <NavLink to="#" className=" plus text-[14px] text-[#6F7F92] hover:text-[#2f65b9] font-semibold">COURSES</NavLink>
        </div>
        <div className="flex  items-center gap-x-7">
        {/* Right side - Icons */}
        <div className="flex items-center space-x-9">
        <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />

                {/* sun icon */}
                <svg
                  className="swap-off fill-current w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on fill-current w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>

          <FaSearch className="text-[20px] text-[#6F7F92] " />
          <FaUserFriends className="text-[20px] text-[#6F7F92] " />
          <FaEnvelope className="text-[20px] text-[#6F7F92] " />
          <FaBell className="text-[20px] text-[#6F7F92] " />
          <FaShoppingCart className="text-[20px] text-[#6F7F92] " />
       

          <img src="src/assest/profile/1716180000-bpthumb.jpg" alt="Profile" className="rounded-full w-12 h-12" />
        </div>
        <MobileMenu />  
      </div>
     
      
    </nav>
    </div>
    </>
  );
}

export default Navbar;
