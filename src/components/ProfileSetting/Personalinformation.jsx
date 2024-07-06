import { FaCheck } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { CiUser, CiMail, CiImageOn } from "react-icons/ci";
import { MdOutlineIosShare } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import React, { useState } from "react";
import TextEditor from "./TextEditor";
import Change from "./Change";
import ReUseCompoent from "./ReUseCompoent";

const Personalinformation = () => {
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

  // Initial state for Date, Month, and Year
  const [selectedDate, setSelectedDate] = useState("1");
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");
  // Arrays for options
  const dates = Array.from({ length: 31 }, (_, i) => i + 1); // 1 to 31
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from({ length: 40 }, (_, i) => 2024 - i); // 2024 to 2015 (adjust as needed)

  // Event handlers for updating selected values
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div className="flex flex-col gap-6">
  <ReUseCompoent />
      <div className="bg-[#FFFFFF] p-6  w-full rounded">
        <main className="w-full h-full bg-[#F8F9FA] ">
          <div className="w-full">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-6 rounded w-full bg-[#FFFFFF] font-sans ">
                <div className="">
                  <h1 className="py-6 text-[#07142e] text-[23px] font-[500] font-plus">
                    Personal Informatation
                  </h1>
                  {/* New Component */}

                  <input
                    type="text"
                    className="w-full px-4 bg-white text-[14] sm:text-[16px] text-[#6f7f92] font-normal Plus py-3 border border-gray-300 rounded-md "
                    placeholder="Marvin Mckinny"
                    disabled
                  />
                  <p className="my-[15px] text-[14px] text-[#6f7f92] font-normal italic  Plus">
                    This field can be seen by :{" "}
                    <span className="text-[#07142e] Plus font-bold">
                      Everyone
                    </span>{" "}
                  </p>

                  {/* Gender */}

                  <select
                    name=""
                    id=""
                    className="w-full px-4 bg-white text-[14] sm:text-[16px] text-[#6f7f92] font-normal Plus py-3 border border-gray-300 rounded-md  outline-none"
                  >
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">_ _ _ _</option>
                  </select>
                  
                    <Change />
                  
                  {/* Date of Birth */}

                  <div className="flex items-center gap-x-[20px]">
                    <label  className="text-[#6f7f92] text-[14] sm:text-[16px] font-normal">Date: </label>
                    <select
                      value={selectedDate}
                      onChange={handleDateChange}
                      className=" border w-full border-gray-300 text-[#6f7f92] text-[14] sm:text-[16px]  rounded-md p-2 outline-none"
                    >
                      {dates.map((date) => (
                        <option key={date} value={date} className="text-[#6f7f92] text-[14] sm:text-[16px] ">
                          {date}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="month"  className="text-[#6f7f92] text-[14] sm:text-[16px] font-normal">Month</label>
                    <select
                      value={selectedMonth}
                      onChange={handleMonthChange}
                      className="border w-full border-gray-300 text-[#6f7f92] text-[14] sm:text-[16px]  rounded-md p-2 outline-none"
                    >
                      {months.map((month) => (
                        <option key={month} value={month} className="text-[#6f7f92] text-[14] sm:text-[16px] ">
                          {month}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="year" className="text-[#6f7f92] text-[14] sm:text-[16px] font-normal">Year</label>
                    {/* Year Selector */}
                    <select
                      value={selectedYear}
                      onChange={handleYearChange}
                      className=" border w-full border-gray-300 text-[#6f7f92] text-[14] sm:text-[16px]  rounded-md p-2 outline-none"
                    >
                      {years.map((year) => (
                        <option key={year} value={year} className="text-[#6f7f92] text-[14] sm:text-[16px] ">
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* change */}
                  <Change />

                  {/* Locations */}

                  <div className="flex items-center gap-x-[20px]">
                    <label  className="text-[#6f7f92] text-[14] sm:text-[16px] font-normal">Location: </label>
                    <input
                      type="text"
                      defaultValue={"United State"}
                      className=" border w-full text-[#6f7f92] text-[14] sm:text-[16px]  border-gray-300 rounded-md p-2 outline-none"
                    ></input>
                  </div>
                  {/* change */}
                  <Change />

                  {/* Website */}

                  <div className="flex items-center gap-x-[20px]">
                    <label  className="text-[#6f7f92] text-[14] sm:text-[16px] font-normal">Website: </label>
                    <input
                      type="text"
                      defaultValue={"https://iqonic.design/"}
                      className=" border w-full text-[14] sm:text-[16px] text-[#6f7f92] border-gray-300 rounded-md p-2 outline-none"
                    ></input>
                  </div>
                  {/* change */}
                  <Change />
                  <TextEditor />
                  <p className="my-[15px] text-[14px] text-[#6f7f92] font-normal italic  Plus">
                    This field can be seen by :{" "}
                    <span className="text-[#07142e] Plus font-bold">
                      Everyone
                    </span>{" "}
                  </p>
                  <div className="flex items-center justify-end">
                  <input type="submit" value={"Save Changes"} className="px-[28px] py-[12px] Plus mt-[15px]  text-end bg-[#2f65b9] rounded-md text-[14px] font-semibold text-white w-fit" />
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

export default Personalinformation;
