import React from 'react'
import Data from './Assets/Days.js'
import arrow from './Assets/arrow.png'
import DayCard from './DayCard.jsx'
const Daybar = () => {
  return (
    <div className='flex mt-2  bg-[#FAF8FC] '>
      <div className='flex flex-col   bg-[#EDE9F5] w-[192px] h-[80px]  pt-[4px] pb-[16px] px-[8px]'>
        <p className='h-[14px] w-[176px] font-normal border  text-[10px]  '>W33</p>
        <p className='text-[18px] border  text-[#110B1D] text-bold font-bold  '>$16.5K</p>
        <button className='text-[#32848F] mr-auto font-semiBold h-[14px] w-[176px] '> <span><img src={arrow} alt='arrow' className=''/> </span></button>
        </div> 
        {/* <div className='flex h-[80px] justify-between     '> */}

       
        {
            Data.map((day,idx)=>(
                <DayCard key={idx}{...day} idx={idx}/>
            ))
        }
         {/* </div> */}

    </div>
  )
}

export default Daybar
