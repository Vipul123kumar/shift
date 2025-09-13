import React from 'react'
import status from '../Components/Assets/status.png'
import check from '../Components/Assets/check.zip'

const TeamSelect = () => {
  return (
    <div className='flex flex-col  bg-white'>
        <div className='flex gap-[12px] '> 
            <button className='flex bg-[#48A1AB3D] rounded-lg text-blue-500 ml-1 p-2 justify-between justify-center items-center w-[152px] h-[36px] justify-center '> <span><img src={status} alt=''/> </span>Team 1 selected</button>
            <p className='text-[#32848F] text-semiBold text-[10px] mt-3'>+Advanced filter</p>
        </div>
         <div className='flex flex-col h-[176px] w-[240px] border border-red-900 bg-[#FFFFFF] ml-1 p-2 '>
               <p className='flex justify-between  bg-[#48A1AB14] text-bold font-normal p-2 justify-center items-center '>Bar staff  <span> <img src={check} alt='check' className=' h-[20px] w-[10px]'/> </span></p>
               <p>Janitor </p>
                <p>Waitors/Waitresses </p>
                <div className='flex justify-between  '>
                    <button className='h-[36px] w-[106px] rounded-lg bg-[#EDE9F5] text-bold '>Reset</button>
                    <button className='h-[36px] w-[106px] rounded-lg bg-[#8AE3E5] text-bold text-[14px] text-[#110B1D] '>Apply</button>  
                    

                </div>
         </div>
    </div>
  )
}

export default TeamSelect
