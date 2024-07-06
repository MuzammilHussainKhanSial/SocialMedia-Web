import React from "react";
import { FaEdit } from "react-icons/fa";

const About = () => {
  return (
    <main className="bg-[#F8F9FA]">
      <div className="w-full">
        <div className=" w-full flex lg:flex-row flex-col">
          {/* left side*/}
          <div className=" lg:w-[65%] w-full flex gap-8 flex-col rounded">
            <div className=" flex flex-col gap-8">
              <div className="rounded-sm bg-[#FEFEFE]">
                <div className=" w-full  rounded flex flex-col gap-0 font-sans">
                  <div className=" text-[19px] font-[500] p-4 text-[#07142e] flex justify-between items-center">
                    <div className="div">
                      <h1>Personal Information</h1>
                    </div>
                    <div className="div bg-[#2A5AA6] p-2 rounded-sm cursor-pointer flex justify-center items-center">
                      <FaEdit size={15} className=" text-white" />
                    </div>
                  </div>
                  <hr />
                </div>
                <div className=" w-full flex flex-col gap-4 p-4">
                  <div className=" w-full flex sm:flex-row flex-col justify-between items-center py-2 gap-4 sm:gap-0">
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        Name
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        Marvin McKinney
                      </div>
                    </div>
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        GENDER
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500] cursor-pointer">
                        Male
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex sm:flex-row flex-col justify-between items-center py-2 gap-4 sm:gap-0">
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        BIRTHDATE
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        24/01/1994
                      </div>
                    </div>
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        LOCATION
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        Unites State
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex flex-col gap-4">
                    <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                      WEBSITE
                    </div>
                    <div className=" text-[#07142e] text-[16px] font-sans font-[500] cursor-pointer">
                      https://iqonic.design/
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-sm bg-[#FEFEFE]">
                <div className=" w-full  rounded flex flex-col gap-0 font-sans">
                  <div className=" text-[19px] font-[500] p-4 text-[#07142e] flex justify-between items-center">
                    <div className="div">
                      <h1>Hobbies And Interest</h1>
                    </div>
                    <div className="div bg-[#2A5AA6] p-2 rounded-sm cursor-pointer flex justify-center items-center">
                      <FaEdit size={15} className=" text-white" />
                    </div>
                  </div>
                  <hr />
                </div>
                <div className=" w-full flex flex-col gap-4 p-4">
                  <div className=" w-full flex sm:flex-row flex-col justify-between items-center py-2 gap-4 sm:gap-0">
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        MY HOBBIES
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        I like to play with myself on rainy days
                      </div>
                    </div>
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        MUSIC BRANDS
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        xvxv
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex sm:flex-row flex-col justify-between items-center py-2 gap-4 sm:gap-0">
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        TV SHOWS
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        xvxvxv
                      </div>
                    </div>
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        MOVIES
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        sfsfq
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex flex-col gap-4">
                    <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                      GAMES
                    </div>
                    <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                      badminton , football
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-sm bg-[#FEFEFE]">
                <div className=" w-full  rounded flex flex-col gap-0 font-sans">
                  <div className=" text-[19px] font-[500] p-4 text-[#07142e] flex justify-between items-center">
                    <div className="div">
                      <h1>Social Networks</h1>
                    </div>
                    <div className="div bg-[#2A5AA6] p-2 rounded-sm cursor-pointer flex justify-center items-center">
                      <FaEdit size={15} className=" text-white" />
                    </div>
                  </div>
                  <hr />
                </div>
                <div className=" w-full flex flex-col gap-4 p-4">
                  <div className=" w-full flex sm:flex-row flex-col justify-between items-center py-2 gap-4 sm:gap-0">
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        FACEBOOK
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500] break-words  w-full cursor-pointer">
                        https://cod.tracker.gg/warzone/profile/atvi/pancy%234945270/overview
                      </div>
                    </div>
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        TWITTER
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        tweet.com
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex sm:flex-row flex-col justify-between items-center py-2 gap-4 sm:gap-0">
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        YOUTUBE
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        youtube.com
                      </div>
                    </div>
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        INSTAGRAM
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        instagram.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-sm bg-[#FEFEFE]">
                <div className=" w-full  rounded flex flex-col gap-0 font-sans">
                  <div className=" text-[19px] font-[500] p-4 text-[#07142e] flex justify-between items-center">
                    <div className="div">
                      <h1>Billing Address</h1>
                    </div>
                    <div className="div bg-[#2A5AA6] p-2 rounded-sm cursor-pointer flex justify-center items-center">
                      <FaEdit size={15} className=" text-white" />
                    </div>
                  </div>
                  <hr />
                </div>
                <div className=" w-full flex flex-col gap-4 p-4">
                  <div className=" w-full flex sm:flex-row flex-col justify-between items-center py-2 gap-4 sm:gap-0">
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        FIRST NAME
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        Marvin{" "}
                      </div>
                    </div>
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        LAST NAME
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        McKinney
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex sm:flex-row flex-col justify-between items-center py-2 gap-4 sm:gap-0">
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        COMPANY
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        Iqonic Design
                      </div>
                    </div>
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        ADDRESS 1
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        Unites State
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex sm:flex-row flex-col justify-between items-center py-2 gap-4 sm:gap-0">
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        COMPANY
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        Iqonic Design
                      </div>
                    </div>
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        ADDRESS 1
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        Unites State
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex sm:flex-row flex-col justify-between items-center py-2 gap-4 sm:gap-0">
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        ADDRESS 2
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        Empire State Building
                      </div>
                    </div>
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        CITY
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        New york
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex sm:flex-row flex-col justify-between items-center py-2 gap-4 sm:gap-0">
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        POSTCODE
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        10001
                      </div>
                    </div>
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        COUNTRY
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500] cursor-pointer">
                        Egypt
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex sm:flex-row flex-col justify-between items-center py-2 gap-4 sm:gap-0">
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        STATE/COUNTY
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                        EGASN
                      </div>
                    </div>
                    <div className=" sm:w-[50%] w-full flex flex-col gap-4">
                      <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                        EMAIL ADDRESS
                      </div>
                      <div className=" text-[#07142e] text-[16px] font-sans font-[500] cursor-pointer">
                        marvinmckinney@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className=" w-full flex flex-col gap-4">
                    <div className=" text-[#6f7f92] text-[14px] font-sans font-[500] uppercase tracking-widest">
                      PHONE
                    </div>
                    <div className=" text-[#07142e] text-[16px] font-sans font-[500]">
                      12345678954
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right aside */}
          <div className=" lg:w-[35%] h-full w-full lg:px-4 px-0 flex flex-col gap-12">
            <div className=" w-full bg-[#FFFFFF] rounded p-4 flex flex-col gap-6 font-sans">
              <div className=" text-[19px] font-[500] text-[#07142e]">
                <h1>Active User</h1>
              </div>
              <hr />
              <div className=" text-[#6f7f92] font-[400] text-[16px]">
                <p>There are no recently active members</p>
              </div>
            </div>
            <div className=" w-full bg-[#FFFFFF] rounded p-4 flex flex-col gap-6 font-sans">
              <div className=" text-[19px] font-[500] text-[#07142e]">
                <h1>Latest Activities</h1>
              </div>
              <hr />
              <div className=" text-[#6f7f92] font-[400] text-[16px]">
                <p>No activity found!</p>
              </div>
            </div>
            <div className="  w-[95%] sm:w-[60%] lg:w-full h-[450px] rounded m-auto font-sans">
              <div class="bg-[url('/left-banner.webp')] bg-cover bg-center bg-no-repeat w-full h-full rounded flex flex-col items-center p-4 gap-6">
                <div className="pt-8">
                  <img className=" w-[150px]" src="/logo-white.svg" alt="" />
                </div>
                <div className=" px-12 text-center text-[16px] text-[#ffffff] font-[400]">
                  <p>
                    Feel free to reach us anytime. we are avaliable 24 hours
                  </p>
                </div>
                <div className="div">
                  <button
                    className="text-[#07142e] text-[14px] font-[600] px-5 py-2 bg-white rounded"
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
    </main>
  );
};

export default About;
