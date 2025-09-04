import React from 'react'
import Data from './Assets/Days.js'
import DayCard from './DayCard.js'
const Daybar = () => {
  return (
    <div className='flex mt-2'>
      <div className='flex flex-col gap-2 p-2 bg-gray-200 w-60'>
        <h3>W33</h3>
        <p className='text-2xl '>$16.5K</p>
        <button className='text-blue-500 mr-28'>Weekly Budget</button>
        </div> 
        {
            Data.map((day,idx)=>(
                <DayCard key={idx}{...day}/>
            ))
        }

    </div>
  )
}

export default Daybar
