import React from "react";
import { TiTick } from "react-icons/ti";
import { CiMail } from "react-icons/ci";

const allMembers = [
  {
    id: 1,
    imgUrl: "/activity/pic-1.jpg",
    title: "Marvin McKinney",
    name: "@jenny",
    btn_text: "6 hours ago",
  },
  {
    id: 2,
    imgUrl: "/activity/pic-2.jpg",
    title: "Jenny Wilson",
    name: "@jenny",
    btn_text: "7 hours ago",
  },
  {
    id: 3,
    imgUrl: "/activity/pic-3.jpg",
    title: "Aeron Janes",
    name: "@jenny",
    btn_text: "13 days ago",
  },
  {
    id: 4,
    imgUrl: "/activity/pic4.jpg",
    title: "Jenny Wilson",
    name: "@jenny",
    btn_text: "20 days ago",
  },
  {
    id: 5,
    imgUrl: "/activity/pic-5.jpg",
    title: "Fereya Davies",
    name: "@jenny",
    time: "8 days ago",
    btn_text: "20 days ago",
  },
  {
    id: 6,
    imgUrl: "/activity/pic-6.jpg",
    title: "Fereya Davies",
    name: "@jenny",
    btn_text: "20 days ago",
  },
  {
    id: 7,
    imgUrl: "/activity/pic-6.jpg",
    title: "Fereya Davies",
    name: "@jenny",
    btn_text: "20 days ago",
  },
  {
    id: 8,
    imgUrl: "/activity/pic-6.jpg",
    title: "Fereya Davies",
    name: "@jenny",
    btn_text: "20 days ago",
  },
  {
    id: 9,
    imgUrl: "/activity/pic-6.jpg",
    title: "Fereya Davies",
    name: "@jenny",
    btn_text: "20 days ago",
  },
];

const FriendsActivity = () => {
  return (
    <section>
      <div className="flex flex-col gap-[30px] rounded-xl bg-[#FFFFFF]">
        <div className=" w-full bg-[#FFFFFF] rounded p-4 flex flex-col gap-6 font-plus">
          <div className=" text-[19px] font-[500] text-[#07142e]">
            <h1>Friends (09)</h1>
          </div>
          <hr />
        </div>
        <div className="p-6 flex flex-col gap-4">
          {allMembers.map((item) => (
            <div
              key={item.id}
              className="flex rounded-lg  sm:flex-row flex-col sm:gap-0 gap-3 justify-between w-full bg-[#F8F9FA] p-2"
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
                  <div className="flex items-center gap-4">
                    <div className="font-medium text-sm font-plus">
                      {item.title}
                    </div>
                    <div className="flex items-center justify-center rounded-full bg-[#3897F0]">
                      <TiTick color="white" />
                    </div>
                  </div>
                  <div className="">
                    <div className="font-plus text-[#6f7f92] items-center gap-2 font-[400] text-[14px] flex">
                      <div>{item.name}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:w-[30%] w-full">
                <div className="flex flex-col gap-3  pr-3">
                  <div className=" flex sm:justify-end p-1 font-plus text-[#6f7f92] text-[14px] font-[400] ">
                    {item.btn_text}
                  </div>
                  <div className=" flex pl-6 sm:justify-end cursor-pointer">
                    <CiMail className="text-[#2f65b9]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendsActivity;
