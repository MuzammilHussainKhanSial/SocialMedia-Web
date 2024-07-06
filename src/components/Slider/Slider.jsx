// simple

// import React from "react";
// import { TbDots } from "react-icons/tb";

// const Slider = () => {
//   return (
//     <div className=" flex flex-col rounded gap-4">
//       <div className=" w-[500px] h-[250px] rounded">
//         <img
//           className=" w-full h-full object-cover object-center rounded"
//           src="/slider/image-1.jpg"
//           alt=""
//         />
//       </div>
//       <div className="div">
//         <h1 className=" text-center text-white font-[600] text-[28px] font-sans">
//           Conect With The World
//         </h1>
//       </div>
//       <div className="div">
//         <p className=" text-center text-white font-[400] font-sans text-[16px]">
//           It is a long established fact that a <br /> reader will be distracted
//           by the <br /> readable content.
//         </p>
//       </div>
//       <div className=" flex justify-center items-center">
//         <TbDots className=" text-white" size={50} />
//       </div>
//     </div>
//   );
// };

// export default Slider;

// map

// import React from "react";
// import { TbDots } from "react-icons/tb";

// const slides = [
//   {
//     imgSrc: "/slider/image-1.jpg",
//     h1Text: "Connect With The World",
//     pText: "It is a long established fact that a reader will be distracted by the readable content.",
//   },
//   {
//     imgSrc: "/slider/image-2.jpg",
//     h1Text: "Explore New Horizons",
//     pText: "Discover new places and experiences with just a few clicks.",
//   },
//   {
//     imgSrc: "/slider/image-3.jpg",
//     h1Text: "Stay Informed",
//     pText: "Stay up-to-date with the latest news and updates around the globe.",
//   },
// ];

// const Slider = () => {
//   return (
//     <div className="flex flex-col rounded gap-4">
//       {slides.map((slide, index) => (
//         <div key={index}>
//           <div className="w-[500px] h-[250px] rounded">
//             <img
//               className="w-full h-full object-cover object-center rounded"
//               src={slide.imgSrc}
//               alt=""
//             />
//           </div>
//           <div className="div">
//             <h1 className="text-center text-white font-[600] text-[28px] font-sans">
//               {slide.h1Text}
//             </h1>
//           </div>
//           <div className="div">
//             <p className="text-center text-white font-[400] font-sans text-[16px]">
//               {slide.pText.split("\n").map((line, i) => (
//                 <React.Fragment key={i}>
//                   {line}
//                   <br />
//                 </React.Fragment>
//               ))}
//             </p>
//           </div>
//           <div className="flex justify-center items-center">
//             <TbDots className="text-white" size={50} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Slider;

// slick slider

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    imgSrc: "/slider/image-1.jpg",
    h1Text: "Connect With The World", 
    pText:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    imgSrc: "/slider/image-2.jpg",
    h1Text: "Power UP Your Friendship ",
    pText: "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    imgSrc: "/slider/image-3.jpg",
    h1Text: "Together Is Better ",
    pText: "It is a long established fact that a reader will be distracted by the readable content.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, // Hide arrows
  dotsClass: "slick-dots slick-thumb", // Custom class for dots
};

const CustomSlider = () => {
  return (
    <div className="div">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="">
            <div className="w-[80%] m-auto h-[250px] rounded ">
              <img
                className="w-full h-full object-cover object-center  rounded"
                src={slide.imgSrc}
                alt=""
              />
            </div>
            <div className=" w-full p-4">
              <h1 className="text-center text-white font-[600] text-[28px] font-sans">
                {slide.h1Text}
              </h1>
            </div>
            <div className=" w-full px-20 py-4">
              <p className="text-center text-white font-[400] font-sans text-[16px]">
                {slide.pText.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;



