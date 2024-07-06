import React, { useState } from "react";
import MembersActivity from "../MembersActivity/MembersActivity";

const allMembers = [
  {
    id: 1,
    imgUrl: "/activity/pic-1.jpg",
    title: "Marvin McKinney",
    city: "United States",
    time: "8 minutes ago",
    btn_text: "Profile Setting",
    isFriend: false,
  },
  {
    id: 2,
    imgUrl: "/activity/pic-2.jpg",
    title: "Jenny Wilson",
    city: "United States",
    time: "a day ago",
    btn_text: "Add Friend",
    isFriend: true,
  },
  {
    id: 3,
    imgUrl: "/activity/pic-3.jpg",
    title: "Aeron Janes",
    city: "United States",
    time: "2 days ago",
    btn_text: "Unfriend",
    isFriend: true,
  },
  {
    id: 4,
    imgUrl: "/activity/pic4.jpg",
    title: "Jenny Wilson",
    city: "United States",
    time: "6 days ago",
    btn_text: "Unfriend",
    isFriend: false,
  },
  {
    id: 5,
    imgUrl: "/activity/pic-5.jpg",
    title: "Fereya Davies",
    city: "United States",
    time: "8 days ago",
    btn_text: "Unfriend",
    isFriend: true,
  },
  {
    id: 6,
    imgUrl: "/activity/pic-6.jpg",
    title: "Fereya Davies",
    city: "United States",
    time: "8 days ago",
    btn_text: "Add Friend",
    isFriend: false,
  },
  {
    id: 7,
    imgUrl: "/activity/pic-6.jpg",
    title: "Fereya Davies",
    city: "United States",
    time: "8 days ago",
    btn_text: "Add Friend",
    isFriend: false,
  },
  {
    id: 8,
    imgUrl: "/activity/pic-6.jpg",
    title: "Fereya Davies",
    city: "United States",
    time: "8 days ago",
    btn_text: "Add Friend",
    isFriend: false,
  },
  {
    id: 9,
    imgUrl: "/activity/pic-6.jpg",
    title: "Fereya Davies",
    city: "United States",
    time: "8 days ago",
    btn_text: "Add Friend",
    isFriend: false,
  },
];

function MembersContent() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredMembers =
    activeTab === "all"
      ? allMembers
      : allMembers.filter(
          (member) => member.isFriend && member.btn_text === "Unfriend"
        );

  return (
    <div className="w-full bg-[#FFFFFF] px-6 rounded">
      <div className="w-full flex flex-col md:flex-row lg:h-[80px] h-[100px] lg:gap-0 gap-8">
        <div className="w-full lg:w-[60%] flex items-center pr-8 gap-4 font-sans">
          <div className="div">
            <button
              className={`text-[#6f7f92] font-[500] xl:text-[12px] text-[10px] hover:border-b-2 hover:border-[#6f7f92] hover:border-solid transition-all duration-300 ${
                activeTab === "all" ? "border-b-2 border-[#6f7f92]" : ""
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Members
            </button>
            <span className="ml-2 rounded-full px-[6px] py-[2px] bg-orange-400 text-[#ffffff] xl:text-[10px] text-[8px] font-sans font-[700]">
              11
            </span>
          </div>
          <div className="div">
            <button
              className={`text-[#6f7f92] font-[500] xl:text-[12px] text-[10px] hover:border-b-2 hover:border-[#6f7f92] hover:border-solid transition-all duration-300 ${
                activeTab === "my" ? "border-b-2 border-[#6f7f92]" : ""
              }`}
              onClick={() => setActiveTab("my")}
            >
              My Friends
            </button>
            <span className="ml-2 rounded-full px-[6px] py-[2px] bg-orange-400 text-[#ffffff] xl:text-[10px] text-[8px] font-sans font-[700]">
              3
            </span>
          </div>
        </div>
        <div className="w-full lg:w-[40%] flex justify-center items-center gap-3">
          <label
            className="font-sans text-[#6f7f92] font-[400] xl:text-[12px] text-[10px]"
            htmlFor="sort"
          >
            Sort By:
          </label>
          <select
            className="p-2 font-sans text-[#6f7f92] xl:text-[12px] text-[10px] font-[400] outline-none outline-[#6f7f92] outline-[1px] rounded-[1px] border-none"
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
        <MembersActivity members={filteredMembers} />
      </div>
    </div>
  );
}

export default MembersContent;
