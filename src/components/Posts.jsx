import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaRegCommentDots, FaTimes } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { BiDislike } from "react-icons/bi";
import Activity from "./Activity";
import PostSlider from "./statusSlider"
const Posts = () => {
  const [isPostSliderOpen, setIsPostSliderOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "src/assest/profile/01.webp",
    "src/assest/profile/02.webp",
    "src/assest/profile/03.webp",
    "src/assest/profile/04.webp"
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsPostSliderOpen(true);
  };

  const closePostSlider = () => {
    setIsPostSliderOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="flex w-full gap-x-[30px] items-baseline mt-[80px] px-[40px]">
    <div className="w-[100%] lg:w-[70%]">
    <div className="bg-white  px-[32px] py-[20px] mt-[80px]">
        <a href="/profile/64df39704180b81adfe41d0b">
          <div className="flex items-center w-[full] justify-between">
            <div className="flex gap-3 items-center mb-2">
              <a href="/profile/64df39704180b81adfe41d0b">
                <img
                  src="src/assest/avatar/1716180000-bpfull.jpg"
                  alt="Chris"
                  className="w-14 h-14 object-cover rounded-full"
                />
              </a>
              <div className="w-full flex justify-between">
                <div>
                  <a href="/profile/64df39704180b81adfe41d0b">
                    <div className="flex  items-baseline w-[full] justify-between">
                      <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center gap-x-[10px]">
                        <p className="text-[16px] flex items-center gap-x-[10px] font-medium plus hover:text-[#2f65b9]">
                          Aaron Jones
                          <span className="w-[15px] h-[15px] rounded-full bg-[#3897F0] text-white flex items-center justify-center">
                            <TiTick />
                          </span>
                        </p>
                        <div className="flex items-center justify-between gap-x-[100px]">
                          <span className="text-[14px] font-medium plus hover:text-[#2f65b9]">
                            shared Aaron Jones post
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <span className="text-[12px] font-medium text-[#767676]">
                    18 hours ago
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <BiDotsHorizontalRounded className="text-end" />
            </div>
          </div>
        </a>

        {/* woh post  */}

        <div className="flex-1 h-full px-4 flex flex-col mt-[40px]  bg-[#f8f9fa] gap-6 overflow-y-auto rounded-lg">
          <div className="">
            <div className="mb-2 p-4 rounded-xl">
              <div className="flex gap-3 items-center mb-2">
                <a href="/profile/64df39704180b81adfe41d0b">
                  <img
                    src="src/assest/avatar/1656590220-bpfull.jpg"
                    alt="Chris"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                </a>
                <div className="w-full flex justify-between">
                  <div>
                    <a href="/profile/64df39704180b81adfe41d0b">
                      <div className="flex items-center w-[full] justify-between">
                        <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center gap-x-[10px]">
                          <p className="text-[16px] flex items-center gap-x-[10px] font-medium plus hover:text-[#2f65b9]">
                            Aaron Jones
                            <span className="w-[15px] h-[15px] rounded-full bg-[#3897F0] text-white flex items-center justify-center">
                              <TiTick />
                            </span>
                          </p>
                          <div className="flex items-center justify-between gap-x-[100px]">
                            <span className="text-[14px] font-medium plus hover:text-[#2f65b9]">
                              shared Aaron Jones post
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                    <span className="text-[12px] font-medium text-[#767676]">
                      12 hours ago
                    </span>
                  </div>
                </div>
              </div>
              <div>
      {!isPostSliderOpen ? (
        <div>
          <p className="text-ascent-2">The Bird in the Word</p>
          <div className="flex flex-wrap gap-x-[10px]">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="post image"
                className="mt-2 rounded-lg w-[48%] max-sm:w-[45%]"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="relative">
          <button onClick={closePostSlider} className="absolute top-2 right-2 text-white">
            <FaTimes  className="text-black"/>
          </button>
          <PostSlider selectedImage={selectedImage} />
        </div>
      )}
    </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-[10px] py-[10px]">
          <BiDislike className=" text-blue-800 text-[12px] md:text-2xl" />
          <p className="text-[#07142e]  text-[14px] font-normal plus flex items-center gap-x-[5px]">
            <span className="text-[#6f7f92]"> Reacted by </span>Marvin McKinney
          </p>
        </div>
        <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
          <div className="flex items-center gap-x-[10px] sm:gap-x-[20px] md:gap-x-[30px] lg:gap-x-[40px]">
            <p className="flex gap-2 items-center text-[12px] md:text-2xl text-base cursor-pointer">
              <BiDislike className=" text-blue-800 " />
              <span className="text-[12px]">
                <span>1 Dislike</span>
              </span>
            </p>
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <FaRegCommentDots />
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
          </div>
          <p className="flex gap-2 items-center text-base cursor-pointer">
            <CiShare2 />0 Share
          </p>
        </div>
      </div>


      {/* Post 2 */}

      <div className="bg-white  px-[32px] py-[20px] mt-[80px]">
        <a href="/profile/64df39704180b81adfe41d0b">
          <div className="flex items-center w-[full] justify-between">
            <div className="flex gap-3 items-center mb-2">
              <a href="/profile/64df39704180b81adfe41d0b">
                <img
                  src="src/assest/avatar/1716180000-bpfull.jpg"
                  alt="Chris"
                  className="w-14 h-14 object-cover rounded-full"
                />
              </a>
              <div className="w-full flex justify-between">
                <div>
                  <a href="/profile/64df39704180b81adfe41d0b">
                    <div className="flex  items-baseline w-[full] justify-between">
                      <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center gap-x-[10px]">
                        <p className="text-[16px] flex items-center gap-x-[10px] font-medium plus hover:text-[#2f65b9]">
                          Aaron Jones
                          <span className="w-[15px] h-[15px] rounded-full bg-[#3897F0] text-white flex items-center justify-center">
                            <TiTick />
                          </span>
                        </p>
                        <div className="flex items-center justify-between gap-x-[100px]">
                          <span className="text-[14px] font-medium plus hover:text-[#2f65b9]">
                            shared Aaron Jones post
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <span className="text-[12px] font-medium text-[#767676]">
                    18 hours ago
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <BiDotsHorizontalRounded className="text-end" />
            </div>
          </div>
        </a>

        {/* woh post  */}

        <div className="flex-1 h-full px-4 flex flex-col mt-[40px]  bg-[#f8f9fa] gap-6 overflow-y-auto rounded-lg">
          <div className="">
            <div className="mb-2 p-4 rounded-xl">
              <div className="flex gap-3 items-center mb-2">
                <a href="/profile/64df39704180b81adfe41d0b">
                  <img
                    src="src/assest/avatar/1656590220-bpfull.jpg"
                    alt="Chris"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                </a>
                <div className="w-full flex justify-between">
                  <div>
                    <a href="/profile/64df39704180b81adfe41d0b">
                      <div className="flex items-center w-[full] justify-between">
                        <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center gap-x-[10px]">
                          <p className="text-[16px] flex items-center gap-x-[10px] font-medium plus hover:text-[#2f65b9]">
                            Aaron Jones
                            <span className="w-[15px] h-[15px] rounded-full bg-[#3897F0] text-white flex items-center justify-center">
                              <TiTick />
                            </span>
                          </p>
                          <div className="flex items-center justify-between gap-x-[100px]">
                            <span className="text-[14px] font-medium plus hover:text-[#2f65b9]">
                              shared Aaron Jones post
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                    <span className="text-[12px] font-medium text-[#767676]">
                      12 hours ago
                    </span>
                  </div>
                </div>
              </div>
              <div>
      {!isPostSliderOpen ? (
        <div>
          <p className="text-ascent-2">The Bird in the Word</p>
          <div className="flex flex-wrap gap-x-[10px]">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="post image"
                className="mt-2 rounded-lg w-[48%] max-sm:w-[45%]"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="relative">
          <button onClick={closePostSlider} className="absolute top-2 right-2 text-white">
            <FaTimes  className="text-black"/>
          </button>
          <PostSlider selectedImage={selectedImage} />
        </div>
      )}
    </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-[10px] py-[10px]">
          <BiDislike className=" text-blue-800 text-[12px] md:text-2xl" />
          <p className="text-[#07142e]  text-[14px] font-normal plus flex items-center gap-x-[5px]">
            <span className="text-[#6f7f92]"> Reacted by </span>Marvin McKinney
          </p>
        </div>
        <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
          <div className="flex items-center gap-x-[10px] sm:gap-x-[20px] md:gap-x-[30px] lg:gap-x-[40px]">
            <p className="flex gap-2 items-center text-[12px] md:text-2xl text-base cursor-pointer">
              <BiDislike className=" text-blue-800 " />
              <span className="text-[12px]">
                <span>1 Dislike</span>
              </span>
            </p>
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <FaRegCommentDots />
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
          </div>
          <p className="flex gap-2 items-center text-base cursor-pointer">
            <CiShare2 />0 Share
          </p>
        </div>
      </div>

      {/* post 3 */}

      <div className="bg-white  px-[32px] py-[20px] mt-[80px]">
        <a href="/profile/64df39704180b81adfe41d0b">
          <div className="flex items-baseline flex-nowrap w-[full] justify-between">
            <div className="flex gap-3 items-center mb-2">
              <a href="/profile/64df39704180b81adfe41d0b">
                <img
                  src="src/assest/avatar/1716180000-bpfull.jpg"
                  alt="Chris"
                  className="w-14 h-14 object-cover rounded-full"
                />
              </a>
              <div className="w-full flex  justify-between">
                <div>
                  <a href="/profile/64df39704180b81adfe41d0b">
                    <div className="flex flex-wrap flex-row  itm w-[full] justify-between">
                      <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center gap-x-[10px]">
                        <p className="text-[16px] flex items-center gap-x-[10px] font-medium plus hover:text-[#2f65b9]">
                        Marvin McKinney
                          <span className="w-[15px] h-[15px] rounded-full bg-[#3897F0] text-white flex items-center justify-center">
                            <TiTick />
                          </span>
                        </p>
                        <div className="flex items-center justify-between gap-x-[100px]">
                          <span className="text-[14px] max-md:hidden font-medium plus hover:text-[#2f65b9]">
                          Verified started <span>the topic hahahaaah in the forum</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <span className="text-[16px] plus font-medium">
                    <p className="max-md:hidden">Animal Crackers</p>
                   <p className=" text-[#767676]"> 18 hours ago</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <BiDotsHorizontalRounded className="text-end" />
            </div>
          </div>
        </a>
        {/* woh post  */}
        <p className="py-[20px]">nice hahahahah</p>
        <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
          <div className="flex items-center gap-x-[10px] sm:gap-x-[20px] md:gap-x-[30px] lg:gap-x-[40px]">
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                color="blue"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "blue" }}
              >
                <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" />
              </svg>
              
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <FaRegCommentDots />
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
          </div>
          <p className="flex gap-2 items-center text-base cursor-pointer">
            <CiShare2 />0 Share
          </p>
        </div>
      </div>

      {/* post 4 */}

      <div className="bg-white  px-[32px] py-[20px] mt-[40px]">
      <a href="/profile/64df39704180b81adfe41d0b">
          <div className="flex items-center w-[full] justify-between">
            <div className="flex gap-3 items-center mb-2">
              <a href="/profile/64df39704180b81adfe41d0b">
                <img
                  src="src/assest/avatar/1656593693-bpfull.jpg"
                  alt="Chris"
                  className="w-14 h-14 object-cover rounded-full"
                />
              </a>
              <div className="w-full flex justify-between">
                <div>
                  <a href="/profile/64df39704180b81adfe41d0b">
                    <div className="flex  items-baseline w-[full] justify-between">
                      <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center gap-x-[10px]">
                        <p className="text-[16px] flex items-center gap-x-[10px] font-medium plus hover:text-[#2f65b9]">
                        leslie Alexander                          
                        </p>
                        <div className="flex items-center justify-between gap-x-[100px]">
                          <span className="text-[14px] font-medium plus hover:text-[#2f65b9]">
                          posted an update
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <span className="text-[12px] text-[#767676] plus font-medium">
                  18 hours ago
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <BiDotsHorizontalRounded className="text-end" />
            </div>
          </div>
        </a>
        {/* woh post  */}
        <p className="py-[20px] text-[12px] sm:text-[16px] font-normal text-[#212529] plus">
          Embracing the rhythm of the road and feeling the exhilaration with
          every stride. Jogging my way to new horizons, both physically and
          mentally. Join me on this journey of self-discovery and the pursuit of
          a healthier, stronger version of myself. #JoggingAdventures
          #FitnessGoals #HealthyLifestyle
        </p>
        <div>
          <img src="src/assest/profile/8-2 (1).jpg" alt="" />
        </div>
        <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
          <div className="flex items-center gap-x-[10px] sm:gap-x-[20px] md:gap-x-[30px] lg:gap-x-[40px]">
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                color="blue"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "blue" }}
              >
                <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" />
              </svg>
              
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <FaRegCommentDots />
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
          </div>
          <p className="flex gap-2 items-center text-base cursor-pointer">
            <CiShare2 />0 Share
          </p>
        </div>
      </div>

      {/* post 5*/}

      <div className="bg-white  px-[32px] py-[20px] mt-[40px]">
      <a href="/profile/64df39704180b81adfe41d0b">
          <div className="flex items-center w-[full] justify-between">
            <div className="flex gap-3 items-center mb-2">
              <a href="/profile/64df39704180b81adfe41d0b">
                <img
                  src="src/assest/avatar/1716180000-bpfull.jpg"
                  alt="Chris"
                  className="w-14 h-14 object-cover rounded-full"
                />
              </a>
              <div className="w-full flex justify-between">
                <div>
                  <a href="/profile/64df39704180b81adfe41d0b">
                    <div className="flex  items-baseline w-[full] justify-between">
                      <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center gap-x-[10px]">
                        <p className="text-[16px] flex items-center gap-x-[10px] font-medium plus hover:text-[#2f65b9]">
                        Marvin McKinney
                          <span className="w-[15px] h-[15px] rounded-full bg-[#3897F0] text-white flex items-center justify-center">
                            <TiTick />
                          </span>
                        </p>
                        <div className="flex items-center justify-between gap-x-[100px]">
                          <span className="text-[14px] font-medium plus hover:text-[#2f65b9]">
                          Verified started the topic hahahaaah in the forum
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <span className="text-[12px] plus text-[#767676] font-medium">
                    18 hours ago
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <BiDotsHorizontalRounded className="text-end" />
            </div>
          </div>
        </a>
        {/* woh post  */}
        <p className="py-[20px] text-[12px] sm:text-[16px] font-normal text-[#212529] plus">
          Football is like life. It requires perseverance, self-denial, hard
          work, sacrifice, dedication, and respect for authority.
        </p>
        <div>
          <img src="src/assest/profile/football.webp" alt="" />
        </div>
        <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
          <div className="flex items-center gap-x-[10px] sm:gap-x-[20px] md:gap-x-[30px] lg:gap-x-[40px]">
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                color="blue"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "blue" }}
              >
                <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" />
              </svg>
              
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <FaRegCommentDots />
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
          </div>
          <p className="flex gap-2 items-center text-base cursor-pointer">
            <CiShare2 />0 Share
          </p>
        </div>
      </div>

      {/* post 6*/}

      <div className="bg-white  px-[32px] py-[20px] mt-[40px]">
      <a href="/profile/64df39704180b81adfe41d0b">
          <div className="flex items-center w-[full] justify-between">
            <div className="flex gap-3 items-center mb-2">
              <a href="/profile/64df39704180b81adfe41d0b">
                <img
                  src="src/assest/avatar/1656593693-bpfull.jpg"
                  alt="Chris"
                  className="w-14 h-14 object-cover rounded-full"
                />
              </a>
              <div className="w-full flex justify-between">
                <div>
                  <a href="/profile/64df39704180b81adfe41d0b">
                    <div className="flex  items-baseline w-[full] justify-between">
                      <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center gap-x-[10px]">
                        <p className="text-[16px] flex items-center gap-x-[10px] font-medium plus hover:text-[#2f65b9]">
                        leslie Alexander                          
                        </p>
                        <div className="flex items-center justify-between gap-x-[100px]">
                          <span className="text-[14px] font-medium plus hover:text-[#2f65b9]">
                          posted an update
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <span className="text-[12px] text-[#767676] plus font-medium">
                  18 hours ago
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <BiDotsHorizontalRounded className="text-end" />
            </div>
          </div>
        </a>
        {/* woh post  */}
        <p className="py-[20px] text-[12px] sm:text-[16px] font-normal text-[#212529] plus">
          The best view comes after the hardest climb.⛰️
        </p>
        <div>
          <img src="src/assest/profile/hil-copy.webp" alt="" />
        </div>
        <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
          <div className="flex items-center gap-x-[10px] sm:gap-x-[20px] md:gap-x-[30px] lg:gap-x-[40px]">
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                color="blue"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "blue" }}
              >
                <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" />
              </svg>
              
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <FaRegCommentDots />
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
          </div>
          <p className="flex gap-2 items-center text-base cursor-pointer">
            <CiShare2 />0 Share
          </p>
        </div>
      </div>

      {/* post 7 */}
      <div className="bg-white  px-[32px] py-[20px] mt-[40px]">
      <a href="/profile/64df39704180b81adfe41d0b">
          <div className="flex items-center w-[full] justify-between">
            <div className="flex gap-3 items-center mb-2">
              <a href="/profile/64df39704180b81adfe41d0b">
                <img
                  src="src/assest/avatar/1656593693-bpfull.jpg"
                  alt="Chris"
                  className="w-14 h-14 object-cover rounded-full"
                />
              </a>
              <div className="w-full flex justify-between">
                <div>
                  <a href="/profile/64df39704180b81adfe41d0b">
                    <div className="flex  items-baseline w-[full] justify-between">
                      <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center gap-x-[10px]">
                        <p className="text-[16px] flex items-center gap-x-[10px] font-medium plus hover:text-[#2f65b9]">
                        leslie Alexander                          
                        </p>
                        <div className="flex items-center justify-between gap-x-[100px]">
                          <span className="text-[14px] font-medium plus hover:text-[#2f65b9]">
                          posted an update
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <span className="text-[12px] text-[#767676] plus font-medium">
                  18 hours ago
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <BiDotsHorizontalRounded className="text-end" />
            </div>
          </div>
        </a>
        {/* woh post  */}
        <p className="py-[20px] text-[12px] sm:text-[16px] font-normal text-[#212529] plus">
        What Is Data Visualization? Why Is It Important And How It Is Used –
        </p>
        <div className="flex justify-center items-center h-full bg-gray-100">
          <iframe
            className="rounded-lg shadow-lg w-full h-[400px]"
            src="https://www.youtube.com/embed/OCHFMJp93Rk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
          <div className="flex items-center gap-x-[10px] sm:gap-x-[20px] md:gap-x-[30px] lg:gap-x-[40px]">
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                color="blue"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "blue" }}
              >
                <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" />
              </svg>
              
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <FaRegCommentDots />
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
          </div>
          <p className="flex gap-2 items-center text-base cursor-pointer">
            <CiShare2 />0 Share
          </p>
        </div>
      </div>

      {/* post 8*/}

      <div className="bg-white  px-[32px] py-[20px] mt-[40px]">
      <a href="/profile/64df39704180b81adfe41d0b">
          <div className="flex items-center w-[full] justify-between">
            <div className="flex gap-3 items-center mb-2">
              <a href="/profile/64df39704180b81adfe41d0b">
                <img
                  src="src/assest/avatar/1656593693-bpfull.jpg"
                  alt="Chris"
                  className="w-14 h-14 object-cover rounded-full"
                />
              </a>
              <div className="w-full flex justify-between">
                <div>
                  <a href="/profile/64df39704180b81adfe41d0b">
                    <div className="flex  items-baseline w-[full] justify-between">
                      <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center gap-x-[10px]">
                        <p className="text-[16px] flex items-center gap-x-[10px] font-medium plus hover:text-[#2f65b9]">
                        leslie Alexander                          
                        </p>
                        <div className="flex items-center justify-between gap-x-[100px]">
                          <span className="text-[14px] font-medium plus hover:text-[#2f65b9]">
                          posted an update
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <span className="text-[12px] text-[#767676] plus font-medium">
                  18 hours ago
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <BiDotsHorizontalRounded className="text-end" />
            </div>
          </div>
        </a>       
         {/* woh post  */}
         <p className="py-[20px] text-[12px] sm:text-[16px] font-normal text-[#212529] plus">
         It feels Good to be Lost in the Right Direction


        </p>
        <div>
          <img src="src/assest/profile/bus.webp" alt="" />
        </div>
        <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
          <div className="flex items-center gap-x-[10px] sm:gap-x-[20px] md:gap-x-[30px] lg:gap-x-[40px]">
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                color="blue"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "blue" }}
              >
                <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" />
              </svg>
              
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <FaRegCommentDots />
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
          </div>
          <p className="flex gap-2 items-center text-base cursor-pointer">
            <CiShare2 />0 Share
          </p>
        </div>
      </div>

      {/* post 9 */}

      <div className="bg-white  px-[32px]  py-[20px] mt-[40px]">
      <a href="/profile/64df39704180b81adfe41d0b">
          <div className="flex items-center w-[full] justify-between">
            <div className="flex gap-3 items-center mb-2">
              <a href="/profile/64df39704180b81adfe41d0b">
                <img
                  src="src/assest/avatar/1656654204-bpfull.jpg"
                  alt="Chris"
                  className="w-14 h-14 object-cover rounded-full"
                />
              </a>
              <div className="w-full flex justify-between">
                <div>
                  <a href="/profile/64df39704180b81adfe41d0b">
                    <div className="flex  items-baseline w-[full] justify-between">
                      <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center gap-x-[10px]">
                        <p className="text-[16px] flex items-center gap-x-[10px] font-medium plus hover:text-[#2f65b9]">
                        Darlin Robertson                         
                        </p>
                        <div className="flex items-center justify-between gap-x-[100px]">
                          <span className="text-[14px] font-medium plus hover:text-[#2f65b9]">
                          posted an update
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <span className="text-[12px] text-[#767676] plus font-medium">
                  18 hours ago
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <BiDotsHorizontalRounded className="text-end" />
            </div>
          </div>
        </a>    
        {/* woh post  */}
        <p className="py-[20px] text-[12px] sm:text-[16px] font-normal text-[#212529] plus">
        Let the music take you away and set you free !!
        </p>
        <div className="flex justify-center items-center rounded-full bg-gray-100">
          <audio className="w-full max-w-md" controls>
            <source src="path/to/your/audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        </div>
        <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
          <div className="flex items-center gap-x-[10px] sm:gap-x-[20px] md:gap-x-[30px] lg:gap-x-[40px]">
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                color="blue"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "blue" }}
              >
                <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" />
              </svg>
              
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <FaRegCommentDots />
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
          </div>
          <p className="flex gap-2 items-center text-base cursor-pointer">
            <CiShare2 />0 Share
          </p>
        </div>
      </div>

      {/* post 10 */}
      <div className="bg-white  px-[32px] py-[20px] mt-[40px]">
      <a href="/profile/64df39704180b81adfe41d0b">
          <div className="flex items-center w-[full] justify-between">
            <div className="flex gap-3 items-center mb-2">
              <a href="/profile/64df39704180b81adfe41d0b">
                <img
                  src="src/assest/avatar/1656654204-bpfull.jpg"
                  alt="Chris"
                  className="w-14 h-14 object-cover rounded-full"
                />
              </a>
              <div className="w-full flex justify-between">
                <div>
                  <a href="/profile/64df39704180b81adfe41d0b">
                    <div className="flex  items-baseline w-[full] justify-between">
                      <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center gap-x-[10px]">
                        <p className="text-[16px] flex items-center gap-x-[10px] font-medium plus hover:text-[#2f65b9]">
                        Jerome Bell                          
                        </p>
                        <div className="flex items-center justify-between gap-x-[100px]">
                          <span className="text-[14px] font-medium plus hover:text-[#2f65b9]">
                          posted an update in the group Study Wars
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <span className="text-[12px] text-[#767676] plus font-medium">
                  18 hours ago
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <BiDotsHorizontalRounded className="text-end" />
            </div>
          </div>
        </a>   
        {/* woh post  */}
      
        <div>
          <img src="src/assest/profile/affg.webp" alt="" />
        </div>
        <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
          <div className="flex items-center gap-x-[10px] sm:gap-x-[20px] md:gap-x-[30px] lg:gap-x-[40px]">
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                color="blue"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "blue" }}
              >
                <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" />
              </svg>
              
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <FaRegCommentDots />
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
          </div>
          <p className="flex gap-2 items-center text-base cursor-pointer">
            <CiShare2 />0 Share
          </p>
        </div>
      </div>

      {/* post 11 */}

      <div className="bg-white  px-[32px] py-[20px] mt-[40px]">
      <a href="/profile/64df39704180b81adfe41d0b">
          <div className="flex items-center w-[full] justify-between">
            <div className="flex gap-3 items-center mb-2">
              <a href="/profile/64df39704180b81adfe41d0b">
                <img
                  src="src/assest/avatar/1656654204-bpfull.jpg"
                  alt="Chris"
                  className="w-14 h-14 object-cover rounded-full"
                />
              </a>
              <div className="w-full flex justify-between">
                <div>
                  <a href="/profile/64df39704180b81adfe41d0b">
                    <div className="flex  items-baseline w-[full] justify-between">
                      <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center gap-x-[10px]">
                        <p className="text-[16px] flex items-center gap-x-[10px] font-medium plus hover:text-[#2f65b9]">
                        Jerome Bell                          
                        </p>
                        <div className="flex items-center justify-between gap-x-[100px]">
                          <span className="text-[14px] font-medium plus hover:text-[#2f65b9]">
                          posted an update in the group Study Wars
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <span className="text-[12px] text-[#767676] plus font-medium">
                  18 hours ago
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <BiDotsHorizontalRounded className="text-end" />
            </div>
          </div>
        </a> 
        {/* woh post  */}
      
        <div>
          <img src="src/assest/profile/q-2.webp" alt="" />
        </div>
        <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
          <div className="flex items-center gap-x-[10px] sm:gap-x-[20px] md:gap-x-[30px] lg:gap-x-[40px]">
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                color="blue"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "blue" }}
              >
                <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" />
              </svg>
              
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <FaRegCommentDots />
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
          </div>
          <p className="flex gap-2 items-center text-base cursor-pointer">
            <CiShare2 />0 Share
          </p>
        </div>
      </div>

      {/* post 12*/}

      <div className="bg-white  px-[32px] py-[20px] mt-[40px]">
      <a href="/profile/64df39704180b81adfe41d0b">
          <div className="flex items-center w-[full] justify-between">
            <div className="flex gap-3 items-center mb-2">
              <a href="/profile/64df39704180b81adfe41d0b">
                <img
                  src="src/assest/avatar/1656654204-bpfull.jpg"
                  alt="Chris"
                  className="w-14 h-14 object-cover rounded-full"
                />
              </a>
              <div className="w-full flex justify-between">
                <div>
                  <a href="/profile/64df39704180b81adfe41d0b">
                    <div className="flex  items-baseline w-[full] justify-between">
                      <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center gap-x-[10px]">
                        <p className="text-[16px] flex items-center gap-x-[10px] font-medium plus hover:text-[#2f65b9]">
                        Jerome Bell                          
                        </p>
                        <div className="flex items-center justify-between gap-x-[100px]">
                          <span className="text-[14px] font-medium plus hover:text-[#2f65b9]">
                          posted an update in the group Study Wars
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <span className="text-[12px] text-[#767676] plus font-medium">
                  18 hours ago
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <BiDotsHorizontalRounded className="text-end" />
            </div>
          </div>
        </a> 
        {/* woh post  */}
      
        <div className="flex justify-center items-center h-full bg-gray-100">
          <iframe
            className="rounded-lg shadow-lg w-full h-[400px]"
            src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/mediapress/members/3/4950/mixkit-dolphins-performing-tricks-in-the-pool-32410-medium-1.mp4?_=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
          <div className="flex items-center gap-x-[10px] sm:gap-x-[20px] md:gap-x-[30px] lg:gap-x-[40px]">
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                color="blue"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "blue" }}
              >
                <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" />
              </svg>
              
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
            <p className="flex gap-2 items-center text-base cursor-pointer">
              <FaRegCommentDots />
              <span className="max-sm:text-[12px]">1 Likes</span>
            </p>
          </div>
          <p className="flex gap-2 items-center text-base cursor-pointer">
            <CiShare2 />0 Share
          </p>
        </div>
      </div>
    </div>

    {/* right side */}

    <div className="w-[30%] hidden lg:block">
      <Activity />
    </div>
    </div>
  );
};

export default Posts;
