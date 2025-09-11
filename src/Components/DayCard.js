import React from 'react'

const DayCard = ({day,date,hour,pay,idx}) => {
  return (
    <div className={`flex flex-col gap-1 p-3 m-1 w-36 h-30  ${idx===1 ? "bg-[#EDE9F5]" :"bg-[#FAF8FC]" }`}>
    
        <h3>{day}</h3>
        <p>{date}</p>
        <p className=''>{hour} <span className='m-3'>{pay}</span> </p>
    </div>
  )
}

export default DayCard
