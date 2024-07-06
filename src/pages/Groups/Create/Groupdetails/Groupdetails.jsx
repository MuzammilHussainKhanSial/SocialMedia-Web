import React from "react";
import { Link, NavLink } from "react-router-dom";

function Groupdetails() {
  return (
    <main className=" w-full h-full bg-[#F8F9FA]">
      <div className=" w-full">
        <div className=" flex flex-col p-4 gap-8 w-full py-8">
          <div className="rounded w-full bg-[#FFFFFF] p-8 flex flex-wrap gap-12 font-sans  text-[16px]">
            <div className="div">
              <button className=" text-[#07142e] font-[500]">1.Details</button>
            </div>
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">2.Setting</button>
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
          <div className=" flex flex-col gap-6 rounded b w-full  bg-[#FFFFFF] p-8 font-sans ">
            <div className="div">
              {/* <label>Group Name (required)</label> */}
              <input
                className=" outline-none rounded bg-[#F8F9FA] w-full pl-8 p-4"
                placeholder="Group Name (required)"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className=" flex flex-col">
              {/* <label>Group Description (required)</label> */}
              <textarea
                className=" pl-8 pt-6 bg-[#F8F9FA] rounded outline-none"
                placeholder="Group Description (required)"
                id=""
                name=""
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <div className=" flex justify-end font-sans mt-4 ">
                <NavLink to="/groupsetting">

                <button className=" rounded bg- font-[600] sm:text-[14px] text-[10px] text-[#ffffff] bg-[#2A5AA6] hover:bg-[#24385a] transition-all duration-300 px-3 py-2 sm:px-5 sm:py-4">
                CREATE GROUP AND CONTINUE
              </button>
                </NavLink>
                
                
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Groupdetails;
