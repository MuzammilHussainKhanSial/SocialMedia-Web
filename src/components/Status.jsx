import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PostSlider from "./statusSlider"; // Ensure the path is correct

function Status() {
  const [isPostSliderOpen, setIsPostSliderOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const postSlider = [
    {
      id: 1,
      img1: "src/assest/slider/383b1ab32259e1720672fb2d55fefebf_banner.jpg-1.webp",
      img2: "src/assest/avatar/1659591625-bpfull.png",
      name: "Fleix Deo",
    },
    {
      id: 2,
      img1: "src/assest/slider/371e10b69fc2b81ec578acb47f24fcda_4.jpg-1.webp",
      img2: "src/assest/avatar/1696595070-bpfull.jpg",
      name: "Jenny Wilson",
    },
    {
      id: 3,
      img1: "src/assest/slider/264e040a24f9ceaa6345c22aca626ec6_2.jpg-1.webp",
      img2: "src/assest/avatar/1656593448-bpfull.jpg",
      name: "Freya Devies",
    },
    {
      id: 4,
      img1: "src/assest/slider/2cb55042e960ce1880df1aa5dd833099_6.jpg-1.webp",
      img2: "src/assest/avatar/1656654204-bpfull.jpg",
      name: "Robert Fox",
    },
    {
      id: 5,
      img1: "src/assest/slider/383b1ab32259e1720672fb2d55fefebf_banner.jpg-1.webp",
      img2: "src/assest/avatar/1656593693-bpfull.jpg",
      name: "leslie Alexnder",
    },
    {
      id: 6,
      img1: "src/assest/slider/371e10b69fc2b81ec578acb47f24fcda_4.jpg-1.webp",
      img2: "src/assest/avatar/1656590220-bpfull.jpg",
      name: "Aaron Jones",
    },
    {
      id: 7,
      img1: "src/assest/slider/04f52dbe5743ba7c5424f6d504ac8b09_3.jpg-1.webp",
      img2: "src/assest/avatar/1656590220-bpfull.jpg",
      name: "Jerry Welsioms",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsPostSliderOpen(true);
  };

  const closePostSlider = () => {
    setIsPostSliderOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      {!isPostSliderOpen ? (
        <div className="md:px-20 px-4 mt-[100px]">
          <Slider {...settings}>
            {postSlider.map((item) => (
              <div className="slide px-2" key={item.id} onClick={() => handleImageClick(item.img1)}>
                {/* Top Image */}
                <div>
                  <img
                    src={item.img1}
                    alt="Top Image"
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                {/* Bottom Centered Image */}
                <div className="relative">
                  <div className="absolute inset-x-0 bottom-0 flex justify-center transform translate-y-1/2">
                    <img
                      src={item.img2}
                      alt="Bottom Centered Image"
                      className="rounded-md w-10 h-10 border-4 border-white"
                    />
                  </div>
                </div>
                {/* Name Text */}
                <div className="mt-8 text-center pb-4">
                  <h2 className="text-[14px] font-semibold text-[#07142e] plus bottom-[-48px] text-center">
                    {item.name}
                  </h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <PostSlider selectedImage={selectedImage} onClose={closePostSlider} />
      )}
    </>
  );
}

export default Status;
