import React from "react";
import Personalinformation from "@/components/ProfileSetting/Personalinformation";
import LeftComponent from "@/components/ProfileSetting/LeftComponent";


const PersonalInformation = () => {
  return (
    <div className="bg-[#F8F9FA]">
      <div className="flex lg:flex-row flex-col p-6 pt-8 gap-6">
       <LeftComponent />
        <div className=" lg:w-[65%] w-full ">
          <Personalinformation />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
