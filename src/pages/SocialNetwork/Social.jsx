import React from "react";
import SocialNetwork from "@/components/ProfileSetting/SocialNetwork";
import LeftComponent from "@/components/ProfileSetting/LeftComponent";

const Social = () => {
  return (
    <div className="bg-[#F8F9FA]">
      <div className="flex lg:flex-row flex-col p-6 pt-8 gap-6">
        <LeftComponent />
        <div className=" lg:w-[65%] w-full ">
          <SocialNetwork />
        </div>
      </div>
    </div>
  );
};

export default Social;
