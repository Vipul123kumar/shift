import React from 'react'
import clock from './Assets/clock.png'
import employ from './Assets/Employe.png'
import status from './Assets/status.png'
import image from './Assets/image.png'
const Filterbar = ({ onOpenAdvancedFilter ,onShiftView} ) => {
  return (
    <div className=' '>

      <div className="flex justify-between items-center px-6 py-3  ">
        <div className="flex gap-3 text-sm">
          <div className='flex   rounded-3xl  m-1 p-1 gap-[12px] '>

            <div className='flex w-[224px] h-[38px]  gap-3 bg-[#EDE9F5] rounded-[14px] '>
              <button className=" flex items-center gap-[10px] w-[109px] px-[12px] py-[5px] "> <span> <img src={clock} alt='clocek' className='h-[9px] w-[9px]' /> </span> <p className='text-[#9890A6] text-[14px] ' onClick={onShiftView}>Shift view </p> </button>
              <button className=" flex items-center gap-[10px] bg-[#FFFFFF] w-[109px] rounded-[24px] px-[12px] py-[5px] "> <span> <img src={employ} alt='employ' className='h-[9px] w-[9px]' /> </span>  <p className='gap-[2px] text-[#110B1D] text-[14px] text-bold font-semibold'>Staff view </p></button>
            </div>

            <button className=" flex w-[150px] h-[36px] px-[10px] py-[8px] rounded-[14px]  items-center bg-[#EDE9F5]  gap-2 "> <span> <img src={status} alt='status' className='h-[12px] w-[12px] ' /> </span> <p className=' gap-[2px] text-[14px] '> Status All</p></button>
            <button className=" w-[160px] h-[36px] px-3 py-1 bg-[#EDE9F5] rounded-3xl flex justify-center items-center gap-2"> <span> <img src={status} alt='status' className='h-[12px] w-[12px] m-1' /> </span><p className=' gap-[2px] text-[14px]' onClick={onOpenAdvancedFilter}>Team All</p></button>
            <button className=" w-[180px] h-[14px]   text-[#32848F] flex justify-center mt-2 items-center font-semibold   ">+ Advanced Filter</button>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className='flex h-[36px]  gap-3 bg-[#EDE9F5] rounded-[14px] p-1'>

           <button className="flex items-center gap-[10px] bg-[#FFFFFF]  rounded-[24px] px-[12px] py-[5px]">Week</button>
           <button className="flex items-center gap-[10px]  px-[12px] py-[5px]">Month</button>
            </div>

          <button className=" w-[160px] h-[36px] px-3 py-1 bg-[#EDE9F5] rounded-3xl flex justify-center items-center gap-2">Current Week <span> <img src={image} alt='image' className='h-[5px] w-[9px]' /> </span></button>
        </div>
      </div>
      
    </div>
  )
}

export default Filterbar

