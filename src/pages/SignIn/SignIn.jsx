import React, { useState } from "react";
import { TiUserAddOutline } from "react-icons/ti";
import { CiLock } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Slider from "../../components/Slider/Slider";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className=" flex flex-row h-screen">
      {/* main slider */}
      <div className=" relative w-[50%]  h-full hidden md:flex bg-[#012E6B] justify-center items-center">
        {/* animation */}
        <div className="absolute">
          <span className="relative flex h-80 w-80 z-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#193E6E] opacity-75 animate-expandContract"></span>
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#193E6E] opacity-75 animate-expandContract delay-1000"></span>
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#193E6E] opacity-75 animate-expandContract delay-2000"></span>
            <span className="relative inline-flex rounded-full h-80 w-80 bg-[#193E6E]"></span>
          </span>
        </div>
        <div className="w-[70%]">
          <Slider />
        </div>
      </div>
      <div className=" md:w-[50%] w-full h-full md:bg-[#FFFFFF] bg-[#2F65B9] flex flex-col justify-center items-center">
        {/* main user */}
        <div className=" flex flex-col gap-4 bg-[#FFFFFF] rounded-[10px] p-12">
          <div className=" flex items-center justify-center gap-2">
            <img className=" h-[38px]" src="/logo-mini.svg" alt="" />
            <p className=" text-[#07142e] font-[600] text-[29px] font-sans">
              SocialV
            </p>
          </div>
          <div className=" flex justify-center items-center">
            <p className=" text-center md:w-[80%] w-full text-[#6f7f92] md:text-[16px] text-[10px] font-[400] font-sans">
              Welcome to socialV, a platform to connect with the social world
            </p>
          </div>
          <div>
            <h1 className=" text-[#07142e] font-[700] text-[16px] font-sans">
              Username or Email Address
            </h1>
          </div>
          <div className=" w-full p-4 bg-[#F8F9FA] rounded flex items-center justify-center">
            <div>
              <TiUserAddOutline className="text-[#6f7f92]" size={18} />
            </div>
            <div className=" w-full">
              <input
                className=" w-full outline-none border-none pl-3 bg-[#F8F9FA] text-[#07142e] text-[16px] font-sans font-[400]"
                placeholder="Username"
                type="email"
                name=""
              />
            </div>
          </div>
          <div>
            <h1 className=" text-[#07142e] font-[700] text-[16px] font-sans">
              Your Password
            </h1>
          </div>
          <div className=" w-full p-4 bg-[#F8F9FA] rounded flex items-center justify-between">
            <div className="flex items-center">
              <CiLock className="text-[#6f7f92]" size={18} />
              <input
                className="outline-none  w-full border-none pl-3 bg-[#F8F9FA] text-[#07142e] text-[16px] font-sans font-[400]"
                type={showPassword ? "text" : "password"}
                name=""
                placeholder="Password"
              />
            </div>
            <button onClick={togglePasswordVisibility} className="ml-2">
              {showPassword ? (
                <FiEye className="text-[#6f7f92]" size={18} />
              ) : (
                <FiEyeOff className="text-[#6f7f92]" size={18} />
              )}
            </button>
          </div>
          <div className=" flex justify-between">
            <div className=" flex gap-2 items-center">
              <input type="checkbox" name="" id="" />
              <h1 className=" text-[#07142e] font-[700] text-[16px] font-sans">
                Remember Me
              </h1>
            </div>
            <div>
              <button className=" font-[500] font-sans italic text-[14px] text-[#2a5aa6]">
                Forgot Password?
              </button>
            </div>
          </div>
          <button className=" bg-[#2A5AA6] hover:bg-[#3e629c] transition-all duration-150 text-[#ffffff] text-[14px] font-sans font-[600] py-3 rounded">
            SIGN IN
          </button>
          <div className=" flex justify-center gap-2 mt-3">
            <p className=" text-[#07142e] font-[500] font-sans text-[16px]">
              Don&apos;t Have An Account?
            </p>
            <button className=" text-[#2f65b9] text-[16px] font-sans font-[500]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
