import React from "react";
import { CiSearch } from "react-icons/ci";
import Activity from "../../components/Activities/Activity";
import MembersContent from "@/components/MembersContent/MembersContent";
const Member = () => {
  return (
    <main className="bg-[#F8F9FA]">
    <div className="w-full">
      <div className=" w-full h-[350px] py-8">
        <div class="bg-[url('/banner/bp-banner.jpg')] bg-cover bg-no-repeat bg-center w-full h-full rounded-[10px] flex flex-col justify-center gap-3">
          <h1 className=" text-[#ffffff] font-sans pl-8 font-[600] text-[40px]">
          Member Directory
          </h1>
          <p className="text-[#ffffff] font-sans pl-8 font-[400] text-[16px]">
            Good Communication is the key to cop-up with good ideas
          </p>
        </div>
      </div>
      <div className=" w-full flex lg:flex-row flex-col">
        {/* left side*/}
        <div className=" lg:w-[65%] w-full flex gap-8 flex-col rounded ">
          <div className=" w-full bg-[#FFFFFF] p-4">
            <div className=" relative w-full h-full bg-[#F8F9FA] rounded flex">
              <input
                className=" rounded w-full h-full border-none outline-none focus:outline-blue-700 focus:outline-1 pl-4 p-3 font-sans text-[#07142e] font-[400] text-[14px] bg-[#E8F0FE]"
                type="text"
                placeholder="Search  Members..."
              />
              <div className=" cursor-pointer absolute right-0 top-0  p-3 bg-[#2F65B9] rounded">
                <CiSearch color="white" />
              </div>
            </div>
          </div>
          <MembersContent/>
        </div>
        {/* right aside */}
        <div className=" lg:w-[35%] h-full w-full px-4 flex flex-col gap-12">
          <div className=" w-full bg-[#FFFFFF] rounded p-4 flex flex-col gap-6 font-sans">
            <div className=" text-[19px] font-[500] text-[#07142e]">
              <h1>Active User</h1>
            </div>
            <hr />
            <div className=" text-[#6f7f92] font-[400] text-[16px]">
              <p>There are no recently active members</p>
            </div>
          </div>
          <div className=" w-full bg-[#FFFFFF] rounded p-4 flex flex-col gap-6 font-sans">
            <div className=" text-[19px] font-[500] text-[#07142e]">
              <h1>Latest Activities</h1>
            </div>
            <hr />
            {/* map components */}
            <Activity />
          </div>
          <div className="  w-[95%] sm:w-[60%] lg:w-full h-[450px] rounded m-auto font-sans">
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
  )
}

export default Member