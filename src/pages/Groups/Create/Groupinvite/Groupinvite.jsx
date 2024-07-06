import React from "react";
import { NavLink } from "react-router-dom";

const Groupinvite = () => {
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
              <button className="text-[#6f7f92] font-[400]">3.Forum</button>
            </div>
            <div className="div">
              <button className=" text-[#6f7f92] font-[400]">4.Photo</button>
            </div>
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">
                5.Cover Image
              </button>
            </div>
            <div className="div">
              <button className="text-[#07142e] font-[500]">6.Invites</button>
            </div>
          </div>
          <div className=" flex flex-col gap-6 rounded b w-full  bg-[#FFFFFF] p-8 font-sans ">
            {/* boxes */}
            <div className=" w-full flex md:flex-row flex-col">
              <div className=" md:w-[30%] w-full p-4">
                <div className=" w-full h-[400px] bg-[#F8F9FA] rounded p-6 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
                  <div className=" flex items-center gap-3">
                    <input
                      className=" w-[20px] h-[20px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label
                      className=" text-[#6f7f92] text-[16px] font-sans font-[400]"
                      htmlFor=""
                    >
                      Curtis Campher
                    </label>
                  </div>
                  <div className=" flex items-center gap-3">
                    <input
                      className=" w-[20px] h-[20px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label
                      className=" text-[#6f7f92] text-[16px] font-sans font-[400]"
                      htmlFor=""
                    >
                      {" "}
                      Darlin Robertson
                    </label>
                  </div>
                  <div className=" flex items-center gap-3">
                    <input
                      className=" w-[20px] h-[20px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label
                      className=" text-[#6f7f92] text-[16px] font-sans font-[400]"
                      htmlFor=""
                    >
                      Felix Deo
                    </label>
                  </div>
                  <div className=" flex items-center gap-3">
                    <input
                      className=" w-[20px] h-[20px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label
                      className=" text-[#6f7f92] text-[16px] font-sans font-[400]"
                      htmlFor=""
                    >
                      {" "}
                      Jerome Bell
                    </label>
                  </div>
                  <div className=" flex items-center gap-3">
                    <input
                      className=" w-[20px] h-[20px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label
                      className=" text-[#6f7f92] text-[16px] font-sans font-[400]"
                      htmlFor=""
                    >
                      {" "}
                      leslie Alexander
                    </label>
                  </div>

                  <div className=" flex items-center gap-3">
                    <input
                      className=" w-[20px] h-[20px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label
                      className=" text-[#6f7f92] text-[16px] font-sans font-[400]"
                      htmlFor=""
                    >
                      {" "}
                      leslie Alexander
                    </label>
                  </div>
                  <div className=" flex items-center gap-3">
                    <input
                      className=" w-[20px] h-[20px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label
                      className=" text-[#6f7f92] text-[16px] font-sans font-[400]"
                      htmlFor=""
                    >
                      {" "}
                      leslie Alexander
                    </label>
                  </div>
                  <div className=" flex items-center gap-3">
                    <input
                      className=" w-[20px] h-[20px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label
                      className=" text-[#6f7f92] text-[16px] font-sans font-[400]"
                      htmlFor=""
                    >
                      {" "}
                      leslie Alexander
                    </label>
                  </div>
                  <div className=" flex items-center gap-3">
                    <input
                      className=" w-[20px] h-[20px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label
                      className=" text-[#6f7f92] text-[16px] font-sans font-[400]"
                      htmlFor=""
                    >
                      {" "}
                      leslie Alexander
                    </label>
                  </div>
                  <div className=" flex items-center gap-3">
                    <input
                      className=" w-[20px] h-[20px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label
                      className=" text-[#6f7f92] text-[16px] font-sans font-[400]"
                      htmlFor=""
                    >
                      {" "}
                      leslie Alexander
                    </label>
                  </div>
                  <div className=" flex items-center gap-3">
                    <input
                      className=" w-[20px] h-[20px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label
                      className=" text-[#6f7f92] text-[16px] font-sans font-[400]"
                      htmlFor=""
                    >
                      {" "}
                      leslie Alexander
                    </label>
                  </div>
                </div>
              </div>
              <div className=" md:w-[70%] w-full p-4 ">
                <div className=" w-full p-4 bg-[#E3F1F6] border-l-2 border-solid border-[#0099cc]">
                  <p className=" text-[#0099cc] text-[14px] font-[400] font-sans">
                    Select people to invite from your friends list.
                  </p>
                </div>
              </div>
            </div>

            <div className=" flex gap-4 justify-end font-sans mt-4 ">
              <NavLink to="/groupcover">
              <button className=" rounded bg- font-[600] sm:text-[14px] text-[10px] text-[#ffffff] bg-[#2A5AA6] hover:bg-[#24385a] transition-all duration-300 sm:px-5 sm:py-4 px-3 py-2">
                BACK TO PREVIOUS STEP
              </button>
              </NavLink>
              
              <button className=" rounded bg- font-[600] sm:text-[14px] text-[10px] text-[#ffffff] bg-[#2A5AA6] hover:bg-[#24385a] transition-all duration-300 sm:px-5 sm:py-4 px-3 py-2">
                FINISH
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Groupinvite;
