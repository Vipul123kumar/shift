import React from 'react'
import ShiftData from './Assets/ShiftData';
const ShiftView = () => {
    const time = Array.from({length:9},(_,index)=>8 + index);
  return (
   <div className='flex h-full w-full  '>

 

    <div className='flex flex-col bg-white justify-between ml-2 p-2  '>
           {time.map((i)=>
        (
            <h1 key={i}> 0{i}:00 </h1>
        ))}  
    </div>

            <div className="bg-[#EDE9F5] h-full w-full p-2 flex flex-col gap-2">
        {ShiftData.map((item, index) => (
          <div key={index} className=" flex flex-row   gap-16">
            {item.map((shift, idx) => (
              <div
                key={idx}
                className="bg-white p-2 rounded shadow flex flex-col gap-1 w-40"
              >
                <h1 className="font-bold">{shift.time}</h1>
                <h1>{shift.hours}</h1>
                <p>{shift.price}</p>
                <p>{shift.employes}</p>
                {shift.logo && (
                  <img src={shift.logo} alt="logo" className="h-8 w-[106px] " />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>


      </div>
  )
}

export default ShiftView
