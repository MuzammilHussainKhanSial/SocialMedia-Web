import React from "react";
import Hobbies from "@/components/ProfileSetting/Hobbies";
import LeftComponent from "@/components/ProfileSetting/LeftComponent";

const HobbiesAndInterest = () => {
  return (
    <div className="bg-[#F8F9FA]">
      <div className="flex lg:flex-row flex-col p-6 pt-8 gap-6">
        <LeftComponent />
        <div className=" lg:w-[65%] w-full ">
          <Hobbies />
        </div>
      </div>
    </div>
  );
};

export default HobbiesAndInterest;
