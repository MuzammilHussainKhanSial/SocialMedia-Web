import React, { useState } from "react";
import FriendsActivity from "../FriendsActivity/FriendsActivity";
import RequestsActivity from "../RequestsActivity/RequestsActivity"; // New Component
import TimelineActivity from "../TimelineActivity/TimelineActivity";
import TimelineinvitationActivity from "../TimelineinvitationActivity/TimelineinvitationActivity";

const TimelineContents = () => {
  const [activeTab, setActiveTab] = useState("friendships");

  return (
    <div className="w-full bg-[#F4F5F6] p-4 rounded">
    <div className="w-full flex flex-col md:flex-row lg:h-[80px] lg:gap-0 gap-8 rounded bg-[#FFFFFF]">
      <div className="w-full lg:w-[60%] flex items-center pr-8 gap-4 font-plus p-6">
        <div className="div">
          <button
            onClick={() => setActiveTab("friendships")}
            className={`text-[#6f7f92] font-[500] xl:text-[16px] text-[12px] hover:border-b-2 hover:border-[#6f7f92] hover:border-solid transition-all duration-300 ${
              activeTab === "friendships" ? "border-b-2 border-[#6f7f92]" : ""
            }`}
          >
            Memberships
          </button>
        </div>
        <div className="div">
          <button
            onClick={() => setActiveTab("requests")}
            className={`text-[#6f7f92] font-[500] xl:text-[16px] text-[12px] hover:border-b-2 hover:border-[#6f7f92] hover:border-solid transition-all duration-300 ${
              activeTab === "requests" ? "border-b-2 border-[#6f7f92]" : ""
            }`}
          >
            Invitations
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[40%] flex md:justify-end justify-center items-center gap-3 border-l-2 border-solid border-[#F5F6F7] p-6">
        <label
          className="font-plus text-[#6f7f92] font-[400] xl:text-[12px] text-[10px]"
          htmlFor="sort"
        >
          Order By:
        </label>
        <select
          className="p-2 font-plus text-[#6f7f92] xl:text-[12px] text-[10px] font-[400] outline-none outline-[#6f7f92] outline-[1px] rounded-[1px] border-none"
          name="sort"
          id="sort"
        >
          <option value="lastActive">Last Active</option>
          <option value="mostMembers">Newest Registered</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>
    </div>
    <div className="w-full py-8">
      {activeTab === "friendships" && <TimelineActivity />}
      {activeTab === "requests" && <TimelineinvitationActivity />}
    </div>
  </div>
  )
}

export default TimelineContents