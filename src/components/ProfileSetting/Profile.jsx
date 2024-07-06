import React, { useState } from 'react';
import { TiUserOutline } from "react-icons/ti";
import { IoChevronForward, IoChevronDown } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import ProfileAvatar from '@/components/ProfileAvatar/ProfileAvatar';

const Profile = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  return (
    <div className='bg-[#F8F9FA]'>
      <div className="flex lg:flex-row flex-col p-6 pt-8 gap-6">
        <div className="lg:w-[35%] w-full">
          {/* Profile Setting */}
          <div 
            className={`flex justify-between p-4 rounded items-center cursor-pointer font-plus text-[#6f7f92] transition-colors duration-300 ${
              isProfileDropdownOpen ? 'bg-[#2F65B9] text-white' : 'bg-[#FFFFFF]'
            }`} 
            onClick={toggleProfileDropdown}
          >
            <div className="flex gap-2 items-center">
              <TiUserOutline />
              <button className='font-[500]'>
                Profile Setting
              </button>
            </div>
            {isProfileDropdownOpen ? <IoChevronDown /> : <IoChevronForward />}
          </div>
          {isProfileDropdownOpen && (
            <div className="bg-[#FFFFFF] rounded mt-2 p-4 shadow transition-all duration-300 flex flex-col gap-2">
              <button className="block w-full text-left p-2 ">Profile</button>
              <hr />
              <button className="block w-full text-left p-2 ">Social</button>
              <hr />
              <button className="block w-full text-left p-2 ">Billing</button>
              <hr />
              <button className="block w-full text-left p-2 ">Shopping</button>
              <hr />
              <button className="block w-full text-left p-2 ">Hobbies</button>
            </div>
          )}

          {/* Account Setting */}
          <div 
            className={`flex justify-between p-4 mt-4 rounded items-center cursor-pointer font-plus text-[#6f7f92] transition-colors duration-300 ${
              isAccountDropdownOpen ? 'bg-[#2F65B9] text-white' : 'bg-[#FFFFFF]'
            }`} 
            onClick={toggleAccountDropdown}
          >
            <div className="flex gap-2 items-center">
              <IoSettingsOutline />
              <button className='font-[500]'>
                Account Setting
              </button>
            </div>
            {isAccountDropdownOpen ? <IoChevronDown /> : <IoChevronForward />}
          </div>
          {isAccountDropdownOpen && (
            <div className="bg-[#FFFFFF] rounded mt-2 p-4 shadow transition-all duration-300 flex flex-col gap-2">
              <button className="block w-full text-left p-2 ">Profile Visibility</button>
              <hr />
              <button className="block w-full text-left p-2 ">Privacy</button>
              <hr />
              <button className="block w-full text-left p-2 ">Shop</button>
              <hr />
              <button className="block w-full text-left p-2 ">Blocklist</button>
              <hr />
              <button className="block w-full text-left p-2 ">Export Data</button>
            </div>
          )}
        </div>
        <div className=" lg:w-[65%] w-full ">
            <ProfileAvatar />
        </div>
      </div>
    </div>
  );
};

export default Profile;
