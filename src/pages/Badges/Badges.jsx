import React from "react";

const Badges = () => {
  const carditems = [
    {
      id: 1,
      imgUrl: "/cardImg/Group-1.png",
      title: "Photogenic",
      subtitle: "If user earned 50 points credit then unlocked this badge.",
    },
    {
      id: 2,
      imgUrl: "/cardImg/Group-2.png",
      title: "Influencer",
      subtitle: "If user earned 50 points credit then unlocked this badge.",
    },
    {
      id: 3,
      imgUrl: "/cardImg/Group-3.png",
      title: "Social Butterfly",
      subtitle: "If user earned 50 points credit then unlocked this badge.",
    },
    {
      id: 4,
      imgUrl: "/cardImg/Group-4.png",
      title: "Traveler",
      subtitle: "If user earned 50 points credit then unlocked this badge.",
    },
    {
      id: 5,
      imgUrl: "/cardImg/Group-5.png",
      title: "Night Owl",
      subtitle: "If user earned 50 points credit then unlocked this badge.",
    },
    {
      id: 6,
      imgUrl: "/cardImg/Group-6.png",
      title: "Wildfire",
      subtitle: "If user earned 50 points credit then unlocked this badge.",
    },
    {
      id: 7,
      imgUrl: "/cardImg/Group-7.png",
      title: "Thrive Shine",
      subtitle: "If user earned 50 points credit then unlocked this badge.",
    },
    {
      id: 8,
      imgUrl: "/cardImg/Group-8.png",
      title: "Dark Horze",
      subtitle: "If user earned 50 points credit then unlocked this badge.",
    },
    {
      id: 9,
      imgUrl: "/cardImg/Group-9.png",
      title: "Kids Zone",
      subtitle: "If user earned 50 points credit then unlocked this badge.",
    },
  ];
  return (
    <main className=" bg-[#F8F9FA]">
      <div className=" w-full">
        {/* banner */}
        <div className=" w-full h-[350px] py-8">
          <div class="bg-[url('/banner/bp-banner.jpg')] bg-cover bg-no-repeat bg-center w-full h-full rounded-[10px] flex flex-col justify-center gap-3">
            <h1 className=" text-[#ffffff] font-sans pl-8 font-[600] text-[40px]">
              Our Badges
            </h1>
            <p className="text-[#ffffff] font-sans pl-8 font-[400] text-[16px]">
              Good Communication is the key to cop-up with good ideas
            </p>
          </div>
        </div>
        {/* cards */}
        <div className=" w-full rounded-[5px] bg-[#FFFFFF] p-8">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {carditems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-[#F8F9FA] flex flex-col justify-center items-center py-[3em] px-[2em] rounded gap-6 border border-[#f1f1f1] border-solid font-sans"
                  >
                    <div className="div">
                      <img src={item.imgUrl} alt={item.title} />
                    </div>
                    <div className=" text-[#07142e] font-[500] text-[19px]">
                      {item.title}
                    </div>
                    <div className=" text-center text-[#6f7f92] text-[14px] font-[400]">
                      {item.subtitle}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Badges;
