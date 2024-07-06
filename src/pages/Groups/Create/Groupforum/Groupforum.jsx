import React from "react";
import { NavLink } from "react-router-dom";

const Groupforum = () => {
  return (
    <main className=" w-full h-full bg-[#F8F9FA]">
      <div className=" w-full">
        <div className=" flex flex-col p-4 gap-8 w-full py-8">
          <div className="rounded w-full bg-[#FFFFFF] p-8 flex flex-wrap gap-12 font-sans  text-[16px]">
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">1.Details</button>
            </div>
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">2.Setting</button>
            </div>
            <div>
              <button className="text-[#07142e] font-[500]">3.Forum</button>
            </div>
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">4.Photo</button>
            </div>
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">
                5.Cover Image
              </button>
            </div>
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">6.Invites</button>
            </div>
          </div>
          {/*Gallery */}
          <div className=" flex flex-col gap-6 rounded b w-full  bg-[#FFFFFF] p-8 font-sans ">
            <h1 className=" font-[600] text-[33px] text-[#07142e] py-3">
              Group Forum
            </h1>
            <p className=" text-[#6f7f92] text-[16px] font-[400]">
              Create a discussion forum to allow members of this group to
              communicate in a structured, bulletin-board style fashion.
            </p>
            <form className=" flex gap-2 items-center">
              <input className=" w-4 h-4" type="checkbox" name="" id="" />
              <label
                className=" font-[400] text-[16px] text-[#07142e]"
                htmlFor=""
              >
                Yes. I want this group to have a forum.
              </label>
            </form>
            <div className=" flex gap-4 justify-end font-sans mt-4 ">
              <NavLink to="/groupsetting">
              <button className=" rounded bg- font-[600] sm:text-[14px] text-[10px] text-[#ffffff] bg-[#2A5AA6] hover:bg-[#24385a] transition-all duration-300 sm:px-5 sm:py-4 px-3 py-2">
                BACK TO PREVIOUS STEP
              </button>

              </NavLink>
            
              <NavLink to="/groupphoto">
              <button className=" rounded bg- font-[600] sm:text-[14px] text-[10px] text-[#ffffff] bg-[#2A5AA6] hover:bg-[#24385a] transition-all duration-300 sm:px-5 sm:py-4 px-3 py-2">
                NEXT STEP
              </button>
              </NavLink>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Groupforum;
