import React from "react";
import { TiTick } from "react-icons/ti";

const Activity = () => {
  const activityitems = [
    {
      id: 1,
      imgUrl: "/activity/pic-1.jpg",
      title: "Marvin McKinney",
      subtitle: "started the topic",
      time: "3 hours ago",
    },
    {
      id: 2,
      imgUrl: "/activity/pic-2.jpg",
      title: "Jenny Wilson",
      subtitle: "posted an update",
      time: "7 months ago",
    },
    {
      id: 3,
      imgUrl: "/activity/pic-3.jpg",
      title: "Aeron Janes",
      subtitle: "posted an update",
      time: "a year ago",
    },
    {
      id: 4,
      imgUrl: "/activity/pic4.jpg",
      title: "Jenny Wilson",
      subtitle: "posted an update",
      time: "a year ago",
    },
    {
      id: 5,
      imgUrl: "/activity/pic-5.jpg",
      title: "Fereya Davies",
      subtitle: "posted an update",
      time: "a year ago",
    },
  ];

  return (
    <div className=" flex flex-col "style={{ gap: "30px" }}>
      {activityitems.map((item) => {
        return (
          <div key={item.id} className="flex w-full gap-2 "style={{ borderBottom: "1px solid #c9cccf", paddingBottom:"20px" }}>
            <div className="w-[15%] h-[15%] !rounded-[50%]">
              <img
                className="w-full h-full object-cover rounded-full"
                src={item.imgUrl}
                alt="images"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4" style={{gap:"6px"}}>
                <div className=" font-[500] text-[14px] font-sans">
                  {item.title}
                </div>
                <div className="flex items-center justify-center rounded-full bg-[#3897F0]">
                  <TiTick className="" 
                    color="white"/>
                </div>
                <div className=" font-sans text-[14px] text-[#6f7f92]">
                  {item.subtitle}
                </div>
              </div>
              <div className=" font-sans text-[#6f7f92]  font-[400] text-[14px]">
                {item.time}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Activity;
