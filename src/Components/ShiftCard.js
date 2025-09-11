import React from 'react'

const ShiftCard= ({time,hours,pay,type}) => {
    const colors = {
normal: "bg-[#48A1AB3D] text-black",
evening: "bg-[#FFEEDB] text-black",
absent: "bg-[#FB747D] text-[#FFFFFF]",
leave: "bg-[#EDEBFA] text-gray-600",
};
  return (
    <div className={`p-2 rounded text-xs  h-[52px] border border-red-900 rounded-lg  ${colors[type] || colors.normal} min-w-[150px] `}>
<div>{time}</div>
<div className='flex flex-row justify-between '>
  
  <p>{hours}</p>
   <p>{pay}</p>
  
  </div>

</div>
  )
}

export default ShiftCard
