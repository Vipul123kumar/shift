import React from 'react'


import Dashboard from './dashboard.svg';
import Employe from './employee-self-serve-portal-people-icon-png--m2i8N4N4A0b1m2H7.jpg';
import Report from './report.jpg';
import Shift from './shift.png';
import Setting from './setting.png';
const Sidebar = () => {
  return (
    <div className='w-60 bg-gray-800  h-100vh p-5 '>
         <div className='pl-24'>Minimize</div>
         <div> 
            <items className="flex flex-col text-gray-300 gap-4 m-4  ">
                <item className="flex flex-row "> <span><img src={Dashboard} alt='dash' width={50}/> </span> Dashboard</item>
                <item className=" flex flex-row bg-blue-500 ">  <span><img src={Shift} alt='dash' width={50}/></span> Shifts</item>
                <item className="flex flex-row ">  <span><img src={Employe} alt='dash' width={50}/></span> Employees</item>
                <item className="flex flex-row ">  <span><img src={Report} alt='report' width={50}/></span> Reports</item>
                <item className="flex flex-row ">  <span><img src={Dashboard} alt='item1' width={50}/></span> Item 5</item>
                <item className="flex flex-row ">  <span><img src={Dashboard} alt='item6' width={50}/></span> Item 6</item>
                <item className="flex flex-row ">  <span><img src={Dashboard} alt='item7' width={50}/></span> Item 7</item>
                <item className="flex flex-row ">  <span><img src={Dashboard} alt='item8' width={50}/></span>Item 8</item>
                <item className="flex flex-row ">  <span><img src={Dashboard} alt='item9' width={50}/></span>Item 9</item>
                <item className="flex flex-row ">  <span><img src={Dashboard} alt='item10' width={50}/></span> Item 10</item>
                <item className="flex flex-row ">  <span><img src={Setting}   alt='setting' width={50}/></span> Settings</item>
                

            </items>
         </div>
    </div>
  )
}

export default Sidebar
