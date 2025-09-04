import React from 'react'
import clock from './Assets/clock-icon-time-symbol-vector-22537698.webp'
import employ from './Assets/employee-self-serve-portal-people-icon-png--m2i8N4N4A0b1m2H7.jpg'
import status from './Assets/statusall.png'
import image from './Assets/images.png'
const Filterbar = ({onOpenAdvancedFilter}) => {
  return (
    <div className='w-full '>
         

          <div className="flex justify-between items-center px-6 py-3 border-b bg-white">
<div className="flex gap-3 text-sm">
  <div className='flex rounded-3xl bg-gray-300 m-1 p-1 gap-2 '>

 
<button className="px-3 py-1 bg-gray-300 rounded-3xl flex justify-center items-center "> <span> <img src={clock} alt='clock' className='bg-gray-200' width={20}/> </span>Shift view</button>
<button className="px-3 py-1 bg-white rounded-3xl flex justify-center items-center "> <span> <img src={employ} alt='employ' width={25}/> </span> Staff view</button>
 </div>
<button className="px-3 py-1 bg-gray-300 rounded-3xl flex justify-center items-center "> <span> <img src={status} alt='status' width={20}/> </span>Status All</button>
<button className="px-3 py-1 bg-gray-300 rounded-3xl flex justify-center items-center"> <span> <img src={status} alt='status' width={20}/> </span>Team All</button>
<button className="px-3 py-1 text-blue-600 justify-center items-center" onClick={onOpenAdvancedFilter}>+ Advanced Filter</button>
</div>
<div className="flex gap-3 items-center">
<button className="px-3 py-1 bg-gray-300 rounded-3xl ">Week</button>
<button className="px-3 py-1 bg-gray-300 rounded-3xl">Month</button>
<button className="px-3 py-1 bg-gray-300 rounded-3xl flex">Current Week <span> <img src={image} alt='image' width={30}/> </span></button>
</div>
</div>

    </div>
  )
}

export default Filterbar

