import { FaCheck } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { CiUser, CiMail, CiImageOn } from "react-icons/ci";
import { MdOutlineIosShare } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import React, { useState } from "react";

const ProfileAvatar = () => {
  const [view, setView] = useState("upload");

  const handleUploadClick = () => {
    setView("upload");
  };

  const handleDeleteClick = () => {
    setView("delete");
  };

  const handleTakePhotoClick = () => {
    setView("takePhoto");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[#FFFFFF] w-full rounded p-6 flex flex-col gap-4">
        <div className="w-full flex items-center gap-3">
          <div className="w-[80px] min-w-[80px] h-[80px] rounded">
            <img
              className="w-full h-full object-cover object-center rounded"
              src="/activity/pic-1.jpg"
              alt="User Avatar"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <h1 className="text-[#07142e] text-[23px] font-plus">
                Marvin McKinney
              </h1>
              <div className="p-1 rounded-full bg-[#3897F0]">
                <FaCheck className="text-white" />
              </div>
            </div>
            <h1 className="text-[#6f7f92] text-[16px] font-[400] font-plus">
              Member since 2022
            </h1>
          </div>
        </div>
        <hr />
        <div className="w-full pt-6 pb-3">
          <div className="flex flex-wrap gap-3">
            <div className="p-4 bg-[#F8F9FA] rounded">
              <GrHomeRounded className="text-[#6f7f92]" />
            </div>
            <div className="p-4 bg-[#F8F9FA] rounded">
              <CiUser className="text-[#6f7f92]" />
            </div>
            <div className="p-4 bg-[#F8F9FA] rounded">
              <CiMail className="text-[#6f7f92]" />
            </div>
            <div className="p-4 bg-[#F8F9FA] rounded">
              <MdOutlineIosShare className="text-[#6f7f92]" />
            </div>
            <div className="p-4 bg-[#F8F9FA] rounded">
              <CiImageOn className="text-[#6f7f92]" />
            </div>
            <div className="p-4 bg-[#F8F9FA] rounded">
              <HiOutlineLogout className="text-[#6f7f92]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] w-full rounded">
        <main className="w-full h-full bg-[#F8F9FA]">
          <div className="w-full">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-6 rounded w-full bg-[#FFFFFF] font-sans">
                <div>
                  <h1 className="p-6 text-[#07142e] text-[23px] font-[500] font-plus">
                    Change Avatar Photo
                  </h1>
                  <hr />
                </div>
                <div className="w-full bg-[#F8F9FA] rounded p-6">
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex gap-6 py-2 font-sans font-[500] text-[#6f7f92] text-[14px]">
                      <button onClick={handleUploadClick}>Upload</button>
                      <button onClick={handleTakePhotoClick}>Take Photo</button>
                      <button onClick={handleDeleteClick}>Delete</button>
                    </div>
                    {view === "upload" ? (
                      <div className="flex flex-col justify-center items-center w-full h-[300px] border-2 border-dashed border-[#6f7f92] font-sans">
                        <div className="text-[#07142e] text-[16px] font-[500]">
                          Drop your file here
                        </div>
                        <div className="text-[#767676] text-[18px] font-[400]">
                          or
                        </div>
                        <div className="mt-3">
                          <label
                            htmlFor="file-upload"
                            className="cursor-pointer rounded font-[600] sm:text-[14px] text-[10px] text-[#ffffff] bg-[#2A5AA6] hover:bg-[#24385a] transition-all duration-300 sm:px-5 sm:py-2 px-3 py-2"
                          >
                            SELECT YOUR FILE
                          </label>
                          <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                          ></input>
                        </div>
                      </div>
                    ) : view === "takePhoto" ? (
                      <div className="flex flex-col justify-center items-center w-full  font-plus">
                        <div className="text-[#f14646] text-[16px] font-[500] p-2 bg-[#F8EAEA] border-l-2 border-solid border-[#F14646]">
                          It looks like you do not have a webcam or we were
                          unable to get permission to use your webcam. Please
                          upload a photo instead.
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col w-full font-sans">
                        <div className="text-[#6f7f92] text-[16px] font-[400]">
                          If you'd like to delete your current profile photo but
                          not upload a new one, please use the delete profile
                          photo button.
                        </div>
                        <button className="mt-4 rounded w-fit font-[600] sm:text-[14px] text-[10px] text-[#ffffff] bg-[#F14646] hover:bg-[#ac4e4e] transition-all duration-300 sm:px-5 sm:py-2 px-5 py-4">
                          DELETE MY PROFILE PHOTO
                        </button>
                      </div>
                    )}
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

export default ProfileAvatar;
