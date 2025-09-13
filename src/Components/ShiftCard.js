import React from 'react'
import clock from './Assets/clock.png'
const ShiftCard= ({time,hours,pay,type}) => {
    const colors = {
normal: "bg-[#48A1AB3D] text-[#110B1D]",
evening: "bg-[#EDE9F5] text-black",
absent: "bg-[#EDE9F5] text-[#746C82]",
leave: "bg-[#F59E0B29] text-[#110B1D]",
fire:"bg-[#FB747D] text-[#FFFFFF] "
};
  return (
    <div className={`p-2 rounded text-xs  h-[52px]   rounded-lg    ${colors[type] || colors.normal} min-w-[140px]`}>
<div className=' text-bold font-bold text-[12px]  '>{time}</div>
<div className='flex flex-row justify-between mt-1  '>
  
  <p className='flex  gap-[10px]'> {hours && (<span><img src={clock} alt='clock' className='h-[12px] w-[12px]'/> </span>)}  {hours}</p>
   <p>{pay}</p>
  
  </div> 

</div>
  )
}

export default ShiftCard
