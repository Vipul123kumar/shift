import React from 'react'
import clock from './Assets/clock.png'
import employ from './Assets/Employe.png'
import status from './Assets/status.png'
import image from './Assets/image.png'
const Filterbar = ({ onOpenAdvancedFilter }) => {
  return (
    <div className='w-full '>

      <div className="flex justify-between items-center px-6 py-3 border-b bg-white">
        <div className="flex gap-3 text-sm">
          <div className='flex  w-[595px] h-[39px]  rounded-3xl  m-1 p-1 gap-[12px] '>

            <div className='flex w-[224px] h-[38px]  gap-3 bg-[#EDE9F5] rounded-[14px] '>
              <button className=" flex items-center gap-[10px] w-[109px] px-[12px] py-[5px] "> <span> <img src={clock} alt='clocek' className='h-[9px] w-[9px]' /> </span> <p className='text-[#9890A6] text-[14px] '>Shift view </p> </button>
              <button className=" flex items-center gap-[10px] bg-[#FFFFFF] w-[109px] rounded-[24px] px-[12px] py-[5px] "> <span> <img src={employ} alt='employ' className='h-[9px] w-[9px]' /> </span>  <p className='gap-[2px] text-[#110B1D] text-[14px] text-bold '>Staff view </p></button>
            </div>

            <button className=" flex w-[150px] h-[36px] px-[10px] py-[8px] rounded-[14px]  items-center bg-[#EDE9F5] border border-red-900 gap-2 "> <span> <img src={status} alt='status' className='h-[12px] w-[12px] ' /> </span> <p className=' gap-[2px] text-[14px] '> Status All</p></button>
            <button className=" w-[160px] h-[36px] px-3 py-1 bg-gray-300 rounded-3xl flex justify-center items-center gap-2"> <span> <img src={status} alt='status' className='h-[12px] w-[12px] m-1' /> </span><p className=' gap-[2px] text-[14px]'>Team All</p></button>
            <button className=" w-[200px] h-[34px] border border-red-900   text-[#32848F] items-center" onClick={onOpenAdvancedFilter}>+ Advanced Filter</button>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className='flex w-[200px] h-[36px]  gap-3 bg-[#EDE9F5] rounded-[14px] p-1'>

           <button className="flex items-center gap-[10px] bg-[#FFFFFF] w-[109px] rounded-[24px] px-[12px] py-[5px]">Week</button>
           <button className="flex items-center gap-[10px] w-[109px] px-[12px] py-[5px]">Month</button>
            </div>

          <button className=" w-[160px] h-[36px] px-3 py-1 bg-gray-300 rounded-3xl flex justify-center items-center gap-2">Current Week <span> <img src={image} alt='image' className='h-[5px] w-[9px]' /> </span></button>
        </div>
      </div>
      
    </div>
  )
}

export default Filterbar

