import React from 'react'

const TimelineinvitationActivity = () => {
  return (
    <section>
    <div className="flex flex-col  rounded-xl bg-[#FFFFFF]">
      {/* <div className="w-full bg-[#FFFFFF] rounded p-4 flex flex-col gap-6 font-plus">
        <div className="text-[19px] font-[500] text-[#07142e]">
          <h1>Friends Requests (00)</h1>
        </div>
        <hr />
      </div> */}
      <div className=" p-4 pr-8">
        <div className="text-[#0099cc] text-[14px] font-[400] border-l-2 border-solid border-[#0099CC] p-4 font-plus bg-[#E3F1F6]">
          <p>You have no outstanding group invites.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TimelineinvitationActivity