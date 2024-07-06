import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Groupphoto = () => {
  const [view, setView] = useState("upload");

  const handleUploadClick = () => {
    setView("upload");
  };

  const handleDeleteClick = () => {
    setView("delete");
  };

  return (
    <main className="w-full h-full bg-[#F8F9FA]">
      <div className="w-full">
        <div className="flex flex-col p-4 gap-8 w-full py-8">
          <div className="rounded w-full bg-[#FFFFFF] p-8 flex flex-wrap gap-12 font-sans text-[16px]">
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">1.Details</button>
            </div>
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">2.Setting</button>
            </div>
            <div>
              <button className="text-[#6f7f92] font-[400]">3.Forum</button>
            </div>
            <div className="div">
              <button className="text-[#07142e] font-[500]">4.Photo</button>
            </div>
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">
                5.Cover Image
              </button>
            </div>
            <div className="div">
              <button className="text-[#6f7f92] font-[400]">6.Invites</button>
            </div>
          </div>
          {/* Gallery */}
          <div className="flex flex-col gap-6 rounded w-full bg-[#FFFFFF] p-8 font-sans">
            <div className="flex gap-2">
              <div className="rounded">
                <img
                  className="h-[160px] w-[160px] min-w-[160px] rounded object-cover"
                  src="/default-avatar.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3 py-6 px-2 text-[#6f7f92] font-sans font-[400] sm:text-[16px] text-[12px]">
                <p>
                  Upload an image to use as a profile photo for this group. The
                  image will be shown on the main group page, and in search
                  results.
                </p>
                <p>
                  To skip the group profile photo upload process, hit the "Next
                  Step" button.
                </p>
              </div>
            </div>
            <div className="w-full bg-[#F8F9FA] rounded p-6">
              <div className="w-full flex flex-col gap-2">
                <div className="flex gap-6 py-2 font-sans font-[500] text-[#6f7f92] text-[14px]">
                  <button onClick={handleUploadClick}>Upload</button>
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
                ) : (
                  <div className="flex flex-col w-full font-sans">
                    <div className="text-[#6f7f92] text-[16px] font-[400]">
                      If you'd like to remove the existing group profile photo
                      but not upload a new one, please use the delete group
                      profile photo button.
                    </div>
                    <div className="div">
                      <button className="mt-4 rounded font-[600] sm:text-[14px] text-[10px] text-[#ffffff] bg-[#F14646] hover:bg-[#ac4e4e] transition-all duration-300 sm:px-5 sm:py-2 px-5 py-4">
                        DELETE FROUP PROFILE PHOTO
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className=" w-full p-4 bg-[#F8EAEA] border-l-2 border-solid rounded-r-lg border-[#F14646]">
                  <p className=" text-[#f14646] text-[14px] font-[400] font-sans ">
                  If you'd like to delete the existing profile photo but not upload a new one, please use the delete tab.
                  </p>
                </div>
            
            <div className="flex gap-4 justify-end font-sans mt-4">
              <NavLink to="/groupforum">
              <button className="rounded bg- font-[600] sm:text-[14px] text-[10px] text-[#ffffff] bg-[#2A5AA6] hover:bg-[#24385a] transition-all duration-300 sm:px-5 sm:py-4 px-3 py-2">
                BACK TO PREVIOUS STEP
              </button>

              </NavLink>
              
              <NavLink to="/groupcover">
              <button className="rounded bg- font-[600] sm:text-[14px] text-[10px] text-[#ffffff] bg-[#2A5AA6] hover:bg-[#24385a] transition-all duration-300 sm:px-5 sm:py-4 px-3 py-2">
                NEXT STEP
              </button>
              </NavLink>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Groupphoto;
