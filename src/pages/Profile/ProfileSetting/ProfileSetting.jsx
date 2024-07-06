import React, { useState } from 'react';
import ProfileAvatar from '@/components/ProfileAvatar/ProfileAvatar';
import LeftComponent from '@/components/ProfileSetting/LeftComponent';

const ProfileSetting = () => {
 

  return (
    <div className='bg-[#F8F9FA]'>
      <div className="flex lg:flex-row flex-col p-6 pt-8 gap-6">
      <LeftComponent />
        <div className=" lg:w-[65%] w-full ">
            <ProfileAvatar />
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
