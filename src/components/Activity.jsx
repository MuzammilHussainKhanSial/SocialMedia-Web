// import React from 'react'
// import { BiDotsHorizontalRounded } from "react-icons/bi";
// import { FaRegCommentDots } from "react-icons/fa";
// import { CiShare2 } from "react-icons/ci";




// const postData = [
//   {
//     id : 1,
//     profileHref: "/profile/64df39704180b81adfe41d0b",
//     profileImgSrc: "src/assest/profile/1696595070-bpfull.jpg",
//     profileImgAlt: "Chris",
//     name: "Aaron Jones",
//     postInfo: " shared Aaron Jones post",
//     time: "12 hours ago",
//     text: "The Bird in the Word",
//     imgSrc: "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692597858/SOCIALMEDIA/hdahstpztt1fvobc13st.png",
//     imgSrc: "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692597858/SOCIALMEDIA/hdahstpztt1fvobc13st.png",
//     imgSrc: "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692597858/SOCIALMEDIA/hdahstpztt1fvobc13st.png",
//     likes: 1,
//     comments: 0
//   }
// ];

// const PostComponent = () => {
//   return (
//     <>
//     {/* <div className="flex-1 h-full px-4 flex flex-col w-1/2 bg-white gap-6 overflow-y-auto rounded-lg">
//       {postData.map((post, index) => (
//         <div key={index} className="mb-2 p-4 rounded-xl">
//           <div className="flex gap-3 items-center mb-2">
//             <a href={post.profileHref}>
//               <img
//                 src={post.profileImgSrc}
//                 alt={post.profileImgAlt}
//                 className="w-14 h-14 object-cover rounded-full"
//               />
//             </a>
//             <div className="w-full flex justify-between">
//               <div>
//                 <a href={post.profileHref}>
//                   <div className="flex items-center w-[full] justify-between">
//                     <div className='flex flex-row items-center gap-x-[10px]'>
//                     <p className="text-[16px] font-medium plus hover:text-[#2f65b9]">{post.name}</p>
//                     <div className='flex items-center justify-between gap-x-[100px]'>
//                     <span className='text-[14px] font-medium plus hover:text-[#2f65b9]'>{post.postInfo}</span>
//                     <div className='flex items-center ms-[60px]'>
//                     <BiDotsHorizontalRounded  className='text-end' />
//                     </div>
//                     </div>
//                     </div>
//                   </div>
//                 </a>
//                 <span className="text-[12px] font-medium text-[#767676]">{post.time}</span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p className="text-ascent-2">{post.text}</p>
            
//             <img
//               src={post.imgSrc}
//               alt="post image"
//               className="w-full mt-2 rounded-lg"
//             />
//           </div>
//           <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
//             <div className='flex items-center gap-x-[40px]'>
//             <p className="flex gap-2 items-center text-base cursor-pointer">
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 strokeWidth={0}
//                 viewBox="0 0 24 24"
//                 color="blue"
//                 height={20}
//                 width={20}
//                 xmlns="http://www.w3.org/2000/svg"
//                 style={{ color: "blue" }}
//               >
//                 <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" />
//               </svg>
//               {post.likes} Likes
//             </p>
//             <p className="flex gap-2 items-center text-base cursor-pointer">
//             <FaRegCommentDots />

//               {post.likes} Likes
//             </p>
//             </div>
//             <p className="flex gap-2 items-center text-base cursor-pointer">
//             <CiShare2 />

//               {post.comments} Share
//             </p>
//           </div>
//         </div>
//       ))}
//     </div> */}

//     </>
//   );
// };

// export default PostComponent;




import React from "react";
import { TiTick } from "react-icons/ti";


const Activity = () => {
  const activityitems = [
    {
      id: 1,
      imgUrl: "/src/assest/avatar/1656592682-bpfull.jpg",
      title: "Marvin McKinney",
      subtitle: "shared",
      time: "3 hours ago",
    },
    {
      id: 2,
      imgUrl: "/src/assest/avatar/1656592682-bpfull.jpg",
      title: "Marvin McKinney",
      subtitle: "shared",
      time: "7 months ago",
    },
    {
      id: 3,
      imgUrl: "/src/assest/avatar/1656592682-bpfull.jpg",
      title: "Marvin McKinney",
      subtitle: "started",
      time: "a year ago",
    },
    {
      id: 4,
      imgUrl: "/src/assest/avatar/1656592682-bpfull.jpg",
      title: "keslie Alexander ",
      subtitle: "updated",
      time: "a year ago",
    },
    {
      id: 5,
      imgUrl: "/src/assest/avatar/1656592682-bpfull.jpg",
      title: "Curtis Campher ",
      subtitle: "posted ",
      time: "a year ago",
    },
  ];

  return (
    <div className=" flex flex-col "style={{ gap: "30px" }}>
 <div>
      <div className="  h-full w-full px-4 flex flex-col gap-12">
            <div className=" w-full bg-[#FFFFFF] rounded p-8 flex flex-col gap-6 font-sans">
              <div className=" text-[19px] plus font-[500] text-[#07142e]">
                <h1>Active User</h1>
              </div>
              <hr />
              <div className="plus text-[#6f7f92] font-[400] text-[16px]">
                <p>There are no recently active members</p>
              </div>
            </div>
            <div className=" w-full bg-[#FFFFFF] rounded plus p-8 flex flex-col gap-6 font-sans">
              <div className=" text-[19px] font-[500] text-[#07142e]">
                <h1>Latest Activities</h1>
              </div>
              <hr />
              {/* map components */}
          
   
      {activityitems.map((item) => {
        return (
         
          <div key={item.id} className="flex w-full gap-6 "style={{ borderBottom: "1px solid #c9cccf", paddingBottom:"20px" }}>
            <div className="w-12 h-12">
              <img
                className="w-full h-full plus object-cover rounded-full"
                src={item.imgUrl}
                alt="images"
              />
            </div>
            <div className="flex flex-col justify-center plus">
              <div className="flex items-center gap-x-[4px] plus">
                <div className=" font-[500] text-[14px] font-sans plus">
                  {item.title}
                </div>
                <div className="f rounded-full bg-[#3897F0]">
                  <TiTick className="" 
                    color="white"/>
                </div>
                <div className=" font-sans plus text-[14px] text-[#6f7f92]">
                  {item.subtitle}
                </div>
              </div>
              <div className=" plus font-sans text-[#6f7f92]  font-[400] text-[14px]">
                {item.time}
              </div>
            </div>
          </div>
        );
      })}
    </div>
    {/* Pic */}
      <div className="  w-[95%] sm:w-[60%] lg:w-full h-[450px] rounded m-auto plus">
              <div class="bg-[url('src/assest/profile/left-banner.webp')] bg-cover bg-center bg-no-repeat w-full h-full rounded flex flex-col items-center p-4 gap-6">
                <div className="pt-8">
                  <img className=" w-[150px]" src="src/assest/profile/logo-white.svg" alt="" />
                </div>
                <div className=" px-12 text-center text-[16px] text-[#ffffff] plus font-[400]">
                  <p>
                    Feel free to reach us anytime. we are avaliable 24 hours
                  </p>
                </div>
                <div className="div">
                  <button
                    className="text-[#07142e] text-[14px] font-[600] px-5 py-2 plus bg-white rounded"
                    type=""
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
    </div>
 
  );
};

export default Activity;