import React from "react";
import { PiClipboardText } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi2";

  const Groupcards = [
    {
      id: 1,
      bgUrl: "/groups/cover-1.jpg",
      imgUrl: "/groups/av-1.jpg",
      title: "Dfgsdfgas",
      post: "0 Posts",
      member: "Members 10",
      users: "No Members",
      button: "LEAVE GROUP",
    },
    {
      id: 2,
      bgUrl: "/groups/cover-2.jpg",
      imgUrl: "/groups/av-2.jpg",
      title: "Animal Crackers",
      post: "0 Posts",
      member: "Members 8",
      users: "No Members",
      button: "LEAVE GROUP",
    },
    {
      id: 3,
      bgUrl: "/groups/cover-3.jpg",
      imgUrl: "/groups/av-3.jpg",
      title: "Ultimate Nerds",
      post: "0 Posts",
      member: "Members 10",
      users: "No Members",
      button: "LEAVE GROUP",
    },
    {
      id: 4,
      bgUrl: "/groups/cover-4.jpg",
      imgUrl: "/groups/av-4.jpg",
      title: "Game Of Phones",
      post: "0 Posts",
      member: "Members 12",
      users: "No Members",
      button: "LEAVE GROUP",
    },
    {
      id: 5,
      bgUrl: "/groups/cover-5.jpg",
      imgUrl: "/groups/av-5.jpg",
      title: "Game Of Phones",
      post: "0 Posts",
      member: "Members 12",
      users: "No Members",
      button: "LEAVE GROUP",
    },
    {
      id: 6,
      bgUrl: "/groups/cover-6.jpg",
      imgUrl: "/groups/av-6.jpg",
      title: "Game Of Phones",
      post: "0 Posts",
      member: "Members 12",
      users: "No Members",
      button: "LEAVE GROUP",
    },
    {
      id: 7,
      bgUrl: "/groups/cover-7.jpg",
      imgUrl: "/groups/av-7.jpg",
      title: "Parrot Lover",
      post: "0 Posts",
      member: "Members 2",
      users: "No Members",
      button: "LEAVE GROUP",
    },
  ];
const TimelineActivity = () => {
  return (
    <section>
    <div className="flex flex-col gap-[30px] rounded-xl bg-[#FFFFFF]">
      <div className=" w-full bg-[#FFFFFF] rounded p-4 flex flex-col gap-6 font-plus">
        <div className=" text-[19px] font-[500] text-[#07142e]">
          <h1>Groups (07)</h1>
        </div>
        <hr />
      </div>
       <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-10  ">
         {Groupcards.map((item) => {
          return (
            <div
              key={item.id}
              className=" relative flex flex-col w-[100%] rounded-[10px] border border-solid border-[#c9cccf] m-auto pb-8"
            >
              <div className=" absolute w-20 h-20 border-4 border-white rounded top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                  className=" object-cover bg-center bg-no-repeat w-full h-full cursor-pointer"
                  src={item.imgUrl}
                  alt={item.title}
                />
              </div>

              <div className=" w-full h-[100px] rounded-t-[10px] border-t border-solid border">
                <img
                  className=" w-full h-full object-cover rounded-t-[10px]"
                  src={item.bgUrl}
                  alt=""
                />
              </div>
              <div className=" flex items-center flex-col pt-10 pb-6 border-b border-solid border-[#bfc3c7]">
                <div className=" text-[#07142e] text-[19px] font-[500] cursor-pointer">
                  {item.title}
                </div>
                <div className=" flex gap-2 items-center">
                  <PiClipboardText className=" text-[#6f7f92] hover:text-[#2F65B9] transition-all duration-300 cursor-pointer" />
                  <div className=" font-[500] text-[14px] text-[#6f7f92] hover:text-[#2F65B9] transition-all duration-300 cursor-pointer ">
                    {item.post}
                  </div>
                  <HiOutlineUsers className=" text-[#6f7f92] hover:text-[#2F65B9] transition-all duration-300 cursor-pointer" />
                  <div className=" font-[500] text-[14px] text-[#6f7f92] hover:text-[#2F65B9] transition-all duration-300 cursor-pointer">
                    {item.member}
                  </div>
                </div>
              </div>
              <div className="div">
                <p className=" text-center py-6 font-[400] font-sans text-[16px] text-[#6f7f92]">
                  {item.users}
                </p>
              </div>
              <div className=" flex justify-center items-center p-3">
                <button
                  className="rounded py-3 px-6 bg-red-100 text-red-500  hover:bg-red-500 hover:text-[#ffffff] transition-all duration-300 font-sans font-[600] text-[14px]"
                  type=""
                >
                  {item.button}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      </div>
  </section>
  )
}

export default TimelineActivity