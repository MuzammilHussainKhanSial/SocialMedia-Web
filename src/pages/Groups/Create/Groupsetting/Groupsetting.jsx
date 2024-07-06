import React from "react";
import { NavLink } from "react-router-dom";

const Groupsetting = () => {
  return (
    <main className=" w-full h-full bg-[#F8F9FA]">
      <div className=" w-full">
        <div className=" flex flex-col p-4 gap-8 w-full py-8">
          <div className="rounded w-full bg-[#FFFFFF] p-8 flex flex-wrap gap-12 font-sans  text-[16px]">
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">1.Details</button>
            </div>
            <div className="div">
              <button className="text-[#07142e] font-[500]">2.Setting</button>
            </div>
            <div>
              <button className="text-[#6f7f92] font-[400]">3.Forum</button>
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
            <div className="">
              <form className=" flex gap-3">
                <input className=" w-4 h-4" type="checkbox" name="'" id="" />
                <label
                  className=" font-[400] text-[16px] text-[#07142e]"
                  htmlFor=""
                >
                  Enable Gallery
                </label>
              </form>
            </div>
            <div className=" w-full">
              <h1 className=" font-[500] text-[23px] text-[#07142e] py-3">
                Privacy Options
              </h1>
              <div className=" flex flex-col gap-2 w-full p-3 rounded bg-[#F8F9FA]">
                <form className=" flex gap-2 items-center">
                  <input className=" w-4 h-4" type="radio" name="" id="" />
                  <label
                    className=" font-[400] text-[16px] text-[#07142e]"
                    htmlFor=""
                  >
                    This is a public group
                  </label>
                </form>
                <ul className=" ml-10 list-disc font-sans text-[#6f7f92] color-[#6f7f92] text-[14px] font-[400] flex flex-col gap-1">
                  <li>Any site member can join this group.</li>
                  <li>
                    This group will be listed in the groups directory and in
                    search results.
                  </li>
                  <li>
                    Group content and activity will be visible to any site
                    member.
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex flex-col gap-2 w-full p-3 rounded bg-[#F8F9FA]">
              <form className=" flex gap-2 items-center">
                <input className=" w-4 h-4" type="radio" name="" id="" />
                <label
                  className=" font-[400] text-[16px] text-[#07142e]"
                  htmlFor=""
                >
                  This is a private group
                </label>
              </form>
              <ul className=" ml-10 list-disc font-sans text-[#6f7f92] color-[#6f7f92] text-[14px] font-[400] flex flex-col gap-1">
                <li>
                  Only users who request membership and are accepted can join
                  the group.
                </li>
                <li>
                  This group will be listed in the groups directory and in
                  search results.
                </li>
                <li>
                  Group content and activity will only be visible to members of
                  the group.
                </li>
              </ul>
            </div>
            <div className=" flex flex-col gap-2 w-full p-3 rounded bg-[#F8F9FA]">
              <form className=" flex gap-2 items-center">
                <input className=" w-4 h-4" type="radio" name="" id="" />
                <label
                  className=" font-[400] text-[16px] text-[#07142e]"
                  htmlFor=""
                >
                  This is a hidden group
                </label>
              </form>
              <ul className=" ml-10 list-disc font-sans text-[#6f7f92] color-[#6f7f92] text-[14px] font-[400] flex flex-col gap-1">
                <li>Only users who are invited can join the group.</li>
                <li>
                  This group will not be listed in the groups directory or
                  search results.
                </li>
                <li>
                  Group content and activity will only be visible to members of
                  the group.
                </li>
              </ul>
            </div>
            <h1 className=" font-[500] text-[23px] text-[#07142e] py-3">
              Group Invitations
            </h1>

            <p className=" text-[#6f7f92] text-[16px] font-[400]">
              Which members of this group are allowed to invite others?
            </p>

            <div className=" flex flex-col gap-2 w-full px-3 py-4 rounded bg-[#F8F9FA]">
              <form className=" flex gap-2 items-center">
                <input className=" w-4 h-4" type="radio" name="" id="" />
                <label
                  className=" font-[400] text-[16px] text-[#07142e]"
                  htmlFor=""
                >
                  All group members
                </label>
              </form>
            </div>
            <div className=" flex flex-col gap-2 w-full px-3 py-4 rounded bg-[#F8F9FA]">
              <form className=" flex gap-2 items-center">
                <input className=" w-4 h-4" type="radio" name="" id="" />
                <label
                  className=" font-[400] text-[16px] text-[#07142e]"
                  htmlFor=""
                >
                  Group admins and mods only
                </label>
              </form>
            </div>
            <div className=" flex flex-col gap-2 w-full px-3 py-4 rounded bg-[#F8F9FA]">
              <form className=" flex gap-2 items-center">
                <input className=" w-4 h-4" type="radio" name="" id="" />
                <label
                  className=" font-[400] text-[16px] text-[#07142e]"
                  htmlFor=""
                >
                  Group admins only
                </label>
              </form>
            </div>
            <h1 className=" font-[500] text-[23px] text-[#07142e] py-3">
              Group Messages
            </h1>
            <p className=" text-[#6f7f92] text-[16px] font-[400]">
              Enable Group Messages feature for this group
            </p>
            <p className=" text-[#6f7f92] text-[16px] font-[400]">
              All members of the group will be automatically joined to the
              conversation of this group
            </p>
            <div className=" flex gap-4">
              <form className=" flex gap-2 items-center">
                <input className=" w-4 h-4" type="radio" name="" id="" />
                <label
                  className=" font-[400] text-[16px] text-[#07142e]"
                  htmlFor=""
                >
                  Enabled
                </label>
              </form>
              <form className=" flex gap-2 items-center">
                <input className=" w-4 h-4" type="radio" name="" id="" />
                <label
                  className=" font-[400] text-[16px] text-[#07142e]"
                  htmlFor=""
                >
                  Disabled
                </label>
              </form>
            </div>
            <div className=" flex gap-4 justify-end font-sans mt-4 ">
              <NavLink to="/groupdetails">
                <button className=" rounded bg- font-[600] sm:text-[14px] text-[10px] text-[#ffffff] bg-[#2A5AA6] hover:bg-[#24385a] transition-all duration-300 sm:px-5 sm:py-4 px-3 py-2">
                  BACK TO PREVIOUS STEP
                </button>
              </NavLink>
              <NavLink to="/groupforum">
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

export default Groupsetting;
