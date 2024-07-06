import { FaCheck } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { CiUser, CiMail, CiImageOn } from "react-icons/ci";
import { MdOutlineIosShare } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import React, { useState } from "react";
import TextEditor from "./TextEditor";
import Change from "./Change";
import ReUseCompoent from "./ReUseCompoent";

const SocialNetwork = () => {
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-6">
      <ReUseCompoent />
      <div className="bg-[#FFFFFF] w-full p-6 rounded">
        <main className="w-full h-full bg-[#F8F9FA]">
          <div className="w-full">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-6 rounded w-full bg-[#FFFFFF] font-sans">
                <>
                  <h1 className="py-6 mb-[20px] text-[#07142e] text-[23px] font-[500] font-plus">
                    Social Network
                  </h1>
                  <hr />
                  {/* New Component */}
                  {/* Facebook */}

                  <div>
                    <div className="relative border">
                      <input
                        type="text"
                        id="floating_outlined"
                        className="block px-2.5 text-[#6f7f92] sm:text-[14px] text-[16px] Plus pb-2.5 pt-4 w-full  bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        defaultValue={
                          "https://cod.tracker.gg/warzone/profile/atvi/pancy%234945270/overview"
                        }
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="floating_outlined"
                        className="absolute text-sm text-[#6f7f92]  duration-300 transform origin-[0] -translate-y-4 scale-75 top-2 bg-white  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        Facebook
                      </label>
                    </div>
                    <Change />
                  </div>
                  {/* Twitter */}
                  <div>
                    <div className="relative border">
                      <input
                        type="text"
                        id="floating_outlined"
                        className="block px-2.5 text-[#6f7f92] sm:text-[14px] text-[16px] Plus pb-2.5 pt-4 w-full  bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        defaultValue={"tweet.com"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="floating_outlined"
                        className="absolute text-sm text-[#6f7f92]  duration-300 transform origin-[0] -translate-y-4 scale-75 top-2 bg-white  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        Game
                      </label>
                    </div>
                    <Change />
                  </div>

                  {/* Dribbled */}
                  <div>
                    <div className="relative border bg-[#f7f8f9]  ">
                      <input
                        type="text"
                        id="floating_outlined"
                        className="block px-2.5 text-[#6f7f92] bg-[#f7f8f9]   sm:text-[14px] text-[16px] Plus pb-2.5 pt-4 w-full  bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={inputValue}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="floating_outlined"
                        className={`absolute text-sm text-[#6f7f92] bg-[#f7f8f9]   duration-300 transform origin-[0] ${
                          inputValue
                            ? "-translate-y-4 scale-75 top-2 bg-white"
                            : "scale-100 -translate-y-1/2 top-1/2"
                        } bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
                      >
                        Dribbled
                      </label>
                    </div>
                    <Change />
                  </div>

                  {/* Behance */}
                  <div>
                    <div className="relative border bg-[#f7f8f9]">
                      <input
                        type="text"
                        id="floating_outlined"
                        className="block px-2.5 text-[#6f7f92] bg-[#f7f8f9]  sm:text-[14px] text-[16px] Plus pb-2.5 pt-4 w-full  bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={inputValue}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="floating_outlined"
                        className={`absolute text-sm text-[#6f7f92] bg-[#f7f8f9] Plus  duration-300 transform origin-[0] ${
                          inputValue
                            ? "-translate-y-4 scale-75 top-2"
                            : "scale-100 -translate-y-1/2 top-1/2"
                        } bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
                      >
                        Behance
                      </label>
                    </div>
                    <Change />
                  </div>

                  {/* youtube */}
                  <div>
                    <div className="relative border">
                      <input
                        type="text"
                        id="floating_outlined"
                        className="block px-2.5 text-[#6f7f92] sm:text-[14px] text-[16px] Plus pb-2.5 pt-4 w-full  bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        defaultValue={"Youtube.com"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="floating_outlined"
                        className="absolute text-sm text-[#6f7f92]  duration-300 transform origin-[0] -translate-y-4 scale-75 top-2 bg-white  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        youtube
                      </label>
                    </div>
                    <Change />
                  </div>
                  {/* Instagrame */}
                  <div>
                    <div className="relative border">
                      <input
                        type="text"
                        id="floating_outlined"
                        className="block px-2.5 text-[#6f7f92] sm:text-[14px] text-[16px] Plus pb-2.5 pt-4 w-full  bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        defaultValue={"Instagrame"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="floating_outlined"
                        className="absolute text-sm text-[#6f7f92]  duration-300 transform origin-[0] -translate-y-4 scale-75 top-2 bg-white  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        Instagrame
                      </label>
                    </div>
                    <Change />
                  </div>
                  <div className="flex items-center justify-end">
                    <input
                      type="submit"
                      value={"Save Changes"}
                      className="px-[28px] py-[12px] Plus mt-[15px]  text-end bg-[#2f65b9] rounded-md text-[14px] font-semibold text-white w-fit"
                    />
                  </div>
                </>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SocialNetwork;
