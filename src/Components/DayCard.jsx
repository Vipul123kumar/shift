import React from 'react'

const DayCard = ({ day, date, hour, pay, idx }) => {
  return (



    <div className={`flex flex-col  w-full   pt-[4px] px-[8px] pb-[16px]  ${idx === 1 ? "bg-[#EDE9F5]" : "bg-[#FAF8FC]"}`}>

      <p className='text-normal font-400 text-[#5D5669] h-[14px] w-[94px]  mb-[5px] '>{day}</p>
      <p className='text-[#110B1D] font-bold h-[32px] w-[94px]'>{date}</p>
      <p className={`text-[10px] font-normal `}>{hour} 
        <span className={idx === 2 ? " m-3 text-red-500" : " m-3 text-[#5D5669] font-semibold"}>
          {pay}
          </span>
           </p>
    </div>

  )
}

export default DayCard
