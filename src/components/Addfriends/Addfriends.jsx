import React from "react";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { MdOutlineCalendarMonth } from "react-icons/md";

function Addfriends() {
  const allMembers = [
    {
      id: 1,
      imgUrl: "/activity/pic-1.jpg",
      title: "Marvin McKinney",
      city: "United States",
      time: "8 minutes ago",
      btn_text: "Add Friend",
    },
    {
      id: 2,
      imgUrl: "/activity/pic-2.jpg",
      title: "Jenny Wilson",
      city: "United States",
      time: "a day ago",
      btn_text: "Add Friend",
    },
    {
      id: 3,
      imgUrl: "/activity/pic-3.jpg",
      title: "Aeron Janes",
      city: "United States",
      time: "2 days ago",
      btn_text: "Add Friend",
    },
    {
      id: 4,
      imgUrl: "/activity/pic4.jpg",
      title: "Jenny Wilson",
      city: "United States",
      time: "6 days ago",
      btn_text: "Add Friend",
    },
    {
      id: 5,
      imgUrl: "/activity/pic-5.jpg",
      title: "Fereya Davies",
      city: "United States",
      time: "8 days ago",
      btn_text: "Add Friend",
    },
  ];
  return (
    <div className="flex flex-col gap-[30px]">
      {allMembers.map((item) => (
        <div
          key={item.id}
          className="flex rounded-lg  sm:flex-row flex-col sm:gap-0 gap-3 justify-between w-full bg-[#F8F9FA]"
        >
          <div className="flex sm:w-[70%] w-full items-center gap-4 py-2">
            <div>
              <img
                className="w-16 h-16 object-cover rounded-full"
                src={item.imgUrl}
                alt={item.title}
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4" style={{ gap: "6px" }}>
                <div className="font-medium text-sm font-plus">
                  {item.title}
                </div>
                <div className="flex items-center justify-center rounded-full bg-[#3897F0]">
                  
                </div>
              </div>
              <div className="flex gap-2">
                <div className="font-plus text-[#6f7f92] items-center gap-2 font-[400] text-[14px] flex">
                  <CiLocationOn />
                  <div>{item.city}</div>
                </div>
                <div className="font-plus text-[#6f7f92] items-center gap-2 font-[400] text-[14px] flex">
                  <MdOutlineCalendarMonth />
                  <div>{item.time}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[30%] w-full">
            <div className="flex gap-3 sm:justify-end pr-3">
              <button className="rounded p-1 font-plus text-[#ffffff] text-[12px] font-[600] whitespace-nowrap">
                {item.btn_text}
              </button>
              {item.btn_text}
              <CiMail className="text-[#2f65b9]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Addfriends;
