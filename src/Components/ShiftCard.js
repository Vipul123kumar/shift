import React from 'react'

const ShiftCard= ({time,hours,pay,type}) => {
    const colors = {
normal: "bg-[#E8F4FA] text-black",
evening: "bg-[#FFEEDB] text-black",
absent: "bg-[#FFD5D5] text-red-600",
leave: "bg-[#EDEBFA] text-gray-600",
};
  return (
    <div className={`p-2 rounded text-xs ${colors[type] || colors.normal} min-w-[150px]`}>
<div>{time}</div>
<div>{hours}</div>
<div>{pay}</div>
</div>
  )
}

export default ShiftCard
