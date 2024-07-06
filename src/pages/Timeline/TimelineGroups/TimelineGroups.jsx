import React from "react";
import TimelineContents from "@/components/TimelineContents/TimelineContents";

const TimelineGroups = () => {
  return (
    <main className="bg-[#F8F9FA]">
      <div className="w-full">
        <div className=" w-full flex lg:flex-row flex-col">
          {/* left side*/}
          <div className=" lg:w-[65%] w-full flex gap-8 flex-col rounded ">
            <TimelineContents />
          </div>
          {/* right aside */}
          <div className=" lg:w-[35%] h-full w-full lg:px-4 px-0 flex flex-col gap-12 bg-[#F4F5F6]">
            <div className=" w-full bg-[#FFFFFF] rounded p-4 flex flex-col gap-6 font-plus mt-4">
              <div className=" text-[19px] font-[500] text-[#07142e]">
                <h1>Active User</h1>
              </div>
              <hr />
              <div className=" text-[#6f7f92] font-[400] text-[16px]">
                <p>There are no recently active members</p>
              </div>
            </div>
            <div className=" w-full bg-[#FFFFFF] rounded p-4 flex flex-col gap-6 font-plus">
              <div className=" text-[19px] font-[500] text-[#07142e]">
                <h1>Latest Activities</h1>
              </div>
              <hr />
              <div className=" text-[#6f7f92] font-[400] text-[16px]">
                <p>No activity found!</p>
              </div>
            </div>
            <div className="  w-[95%] sm:w-[60%] lg:w-full h-[450px] rounded m-auto font-plus">
              <div class="bg-[url('/left-banner.webp')] bg-cover bg-center bg-no-repeat w-full h-full rounded flex flex-col items-center p-4 gap-6">
                <div className="pt-8">
                  <img className=" w-[150px]" src="/logo-white.svg" alt="" />
                </div>
                <div className=" px-12 text-center text-[16px] text-[#ffffff] font-[400]">
                  <p>
                    Feel free to reach us anytime. we are avaliable 24 hours
                  </p>
                </div>
                <div className="div">
                  <button
                    className="text-[#07142e] text-[14px] font-[600] px-5 py-2 bg-white rounded"
                    type=""
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TimelineGroups;
