import React from "react";
import { NavLink } from "react-router-dom";

const Groupcover = () => {
  return (
    <main className=" w-full h-full bg-[#F8F9FA]">
      <div className=" w-full ">
        <div className=" flex flex-col p-4 gap-8 w-full py-8">
          <div className="rounded w-full bg-[#FFFFFF] p-8 flex flex-wrap gap-12 font-sans  text-[16px]">
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">1.Details</button>
            </div>
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">2.Setting</button>
            </div>
            <div>
              <button className="text-[#6f7f92] font-[400]">3.Forum</button>
            </div>
            <div className="div">
              <button className=" text-[#6f7f92] font-[400]">4.Photo</button>
            </div>
            <div className="div">
              <button className="text-[#07142e] font-[500]">
                5.Cover Image
              </button>
            </div>
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">6.Invites</button>
            </div>
          </div>

          <div className=" flex flex-col gap-6 rounded b w-full  bg-[#FFFFFF] p-8 font-sans ">
            <div className=" w-full h-full">
              <img
                className=" w-full h-full object-cover"
                src="/default-cover.jpg"
                alt=""
              />
            </div>
            <div className=" text-[#6f7f92] font-[400] font-sans text-[16px]">
              <p>
                The Cover Image will be used to customize the header of your
                group.
              </p>
            </div>
            <div className=" w-full bg-[#F8F9FA] rounded p-6 ">
              <div className=" w-full flex flex-col gap-2">
                <div className=" flex flex-col justify-center items-center w-full h-[300px] border-2 border-dashed border-[#6f7f92] font-sans">
                  <div className=" text-[#07142e] text-[16px] font-[500]">
                    Drop your file here
                  </div>
                  <div className=" text-[#767676] text-[18px] font-[400]">
                    or
                  </div>
                  <div className=" mt-3">
                    <label
                      for="file-upload"
                      class="cursor-pointer rounded font-[600] sm:text-[14px] text-[10px] text-[#ffffff] bg-[#2A5AA6] hover:bg-[#24385a] transition-all duration-300 sm:px-5 sm:py-2 px-3 py-2"
                    >
                      SELECT YOUR FILE
                    </label>
                    <input id="file-upload" type="file" class="hidden"></input>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full p-4 bg-[#F8EAEA] border-l-2 border-solid rounded-r-lg border-[#F14646]">
                  <p className=" text-[#f14646] text-[14px] font-[400] font-sans ">
                  For better results, make sure to upload an image that is larger than 0px wide, and 225px tall.
                  </p>
                </div>

            <div className=" flex gap-4 justify-end font-sans mt-4 ">
              <NavLink to="/groupphoto">
              <button className=" rounded bg- font-[600] sm:text-[14px] text-[10px] text-[#ffffff] bg-[#2A5AA6] hover:bg-[#24385a] transition-all duration-300 sm:px-5 sm:py-4 px-3 py-2">
                BACK TO PREVIOUS STEP
              </button>
              </NavLink>
              
              <NavLink to="/groupinvite">
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

export default Groupcover;
