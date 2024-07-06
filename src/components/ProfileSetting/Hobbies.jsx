import { FaCheck } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { CiUser, CiMail, CiImageOn } from "react-icons/ci";
import { MdOutlineIosShare } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import React, { useState } from "react";
import TextEditor from "./TextEditor";
import Change from "./Change";
import ReUseCompoent from "./ReUseCompoent";

const Hobbies = () => {
  const [name, setName] = useState("");
  const [nameVisibility, setNameVisibility] = useState("hidden");
  const [selectedVisibility, setSelectedVisibility] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const toggleVisibility = () => {
    setNameVisibility(nameVisibility === "hidden" ? "visible" : "hidden");
  };

  const handleClose = () => {
    setNameVisibility("hidden");
    setName(""); // Clear the name input when closing
  };

  const handleOptionChange = (option) => {
    const index = selectedVisibility.indexOf(option);
    if (index === -1) {
      setSelectedVisibility([...selectedVisibility, option]);
    } else {
      setSelectedVisibility(
        selectedVisibility.filter((item) => item !== option)
      );
    }
  };

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-6">
      <ReUseCompoent />
      <div className="bg-[#FFFFFF] w-full rounded p-6">
        <main className="w-full h-full bg-[#F8F9FA]">
          <div className="w-full">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-6 rounded w-full bg-[#FFFFFF] font-sans">
                <div>
                  <h1 className="py-6 text-[#07142e] text-[23px] font-[500] font-plus">
                    Hobbies And Interest
                  </h1>
                  <hr />
                  {/* New Component */}
                  {/* part 1 */}

                  <h4 className="mt-[40px]  my-[20px] w-full text-[#07142e] text-[14] sm:text-[16px]   rounded-md p-2 outline-none">
                    My Hobbies
                  </h4>
                  <TextEditor />
                  <p className="  w-full text-[#6f7f92] text-[14] sm:text-[16px]  rounded-md p-2 outline-none">
                    Write Here Your Favourite Hobbies
                  </p>
                  <Change />

                  {/* part 2 */}

                  <h4 className=" my-[20] w-full text-[#07142e] text-[14] sm:text-[16px]  rounded-md p-2 outline-none">
                    Music Brand
                  </h4>
                  <TextEditor />
                  <p className=" w-full text-[#6f7f92] text-[14] sm:text-[16px]   rounded-md p-2 outline-none">
                    Write Here Your Favourite Brands name and artist
                  </p>
                  <Change />

                  {/* part 3 TV Show */}

                  <h4 className=" my-[20] w-full text-[#07142e] text-[14] sm:text-[16px]  rounded-md p-2 outline-none">
                    TV Show{" "}
                  </h4>
                  <TextEditor />
                  <p className=" w-full text-[#6f7f92] text-[14] sm:text-[16px]   rounded-md p-2 outline-none">
                    Write Here Your Favourite Tv Shows name here
                  </p>
                  <Change />

                  {/* part 4 Movies */}

                  <h4 className=" my-[20] w-full text-[#07142e] text-[14] sm:text-[16px]  rounded-md p-2 outline-none">
                    Movies{" "}
                  </h4>
                  <TextEditor />
                  <p className=" w-full text-[#6f7f92] text-[14] sm:text-[16px]   rounded-md p-2 outline-none">
                    Write Here Your Favourite movies name here
                  </p>
                  <Change />

                  {/* Games */}

                  <div>
                    <div className="relative border">
                      <input
                        type="text"
                        id="floating_outlined"
                        className="block px-2.5 text-[#6f7f92] pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        defaultValue={"Badmintan,Football"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="floating_outlined"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform origin-[0] -translate-y-4 scale-75 top-2 bg-white  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        Game
                      </label>
                    </div>
                    <p className="  w-full text-[#6f7f92] text-[14] sm:text-[16px]   rounded-md p-2 outline-none">
                      Write your other Activities{" "}
                    </p>
                    <Change />
                  </div>
                  <div className="flex items-center justify-end">
                    <input
                      type="submit"
                      value={"Save Changes"}
                      className="px-[28px] py-[12px] Plus mt-[15px]  text-end bg-[#2f65b9] rounded-md text-[14px] font-semibold text-white w-fit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hobbies;
