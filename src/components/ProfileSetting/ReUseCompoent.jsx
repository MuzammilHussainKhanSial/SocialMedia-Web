import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { CiUser, CiMail, CiImageOn } from "react-icons/ci";
import { MdOutlineIosShare } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

const ReUseCompoent = () => {
  return (
    <div className="bg-[#FFFFFF] w-full rounded p-6 flex flex-col gap-4">
    <div className="w-full flex items-center gap-3">
      <div className="w-[80px] min-w-[80px] h-[80px] rounded">
        <img
          className="w-full h-full object-cover object-center rounded"
          src="/activity/pic-1.jpg"
          alt="User Avatar"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <h1 className="text-[#07142e] text-[23px] font-plus">
            Marvin McKinney
          </h1>
          <div className="p-1 rounded-full bg-[#3897F0]">
            <FaCheck className="text-white" />
          </div>
        </div>
        <h1 className="text-[#6f7f92] text-[14] sm:text-[16px] font-[400] font-plus">
          Member since 2022
        </h1>
      </div>
    </div>
    <hr />
    <div className="w-full pt-6 pb-3">
      <div className="flex flex-wrap gap-3">
        <div className="p-4 bg-[#F8F9FA] rounded">
          <GrHomeRounded className="text-[#6f7f92]" />
        </div>
        <div className="p-4 bg-[#F8F9FA] rounded">
          <CiUser className="text-[#6f7f92]" />
        </div>
        <div className="p-4 bg-[#F8F9FA] rounded">
          <CiMail className="text-[#6f7f92]" />
        </div>
        <div className="p-4 bg-[#F8F9FA] rounded">
          <MdOutlineIosShare className="text-[#6f7f92]" />
        </div>
        <div className="p-4 bg-[#F8F9FA] rounded">
          <CiImageOn className="text-[#6f7f92]" />
        </div>
        <div className="p-4 bg-[#F8F9FA] rounded">
          <HiOutlineLogout className="text-[#6f7f92]" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ReUseCompoent
