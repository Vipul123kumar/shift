import React, { useState } from "react";
import Calendar from "react-calendar";
import { DayPicker } from "react-day-picker";
// import { Plus, X } from "lucide-react";
import cross from './Assets/cross.png'
import Dashboard from '../Components/Assets/newdashboard.png';
import Employe from '../Components/Assets/Employe.png';
import status from '../Components/Assets/status.png'
import Report from '../Components/Assets/report.jpg';
import Shift from '../Components/Assets/shift.png';
import Setting from '../Components/Assets/setting.png';
import arrow from '../Components/Assets/iconmd.png'
import entie from '../Components/Assets/Entite.png'
import equal from '../Components/Assets/equal.png'
const AdvancedFilter = ({onOpenAdvancedFilter}) => {

    return (
        <div className="flex w-full rounded-lg ">
          
               <div className="bg-[#1E182A]  w-[64px]  flex flex-col justify-between pb-[16px] rounded-[8px] ">
                <ul  className="h-full  flex flex-col items-center  mt-3 gap-[12px] gap-[16px]  ">
                    <li className=" items-center  flex justify-center mb-3 "><img src={equal} alt="das" className="h-[16px] w-[16px] "/></li>
                     <li className=" flex justify-center  "><img src={Dashboard} alt="das" className="h-[20px] w-[22px] rounded-[8px]"/></li>
                      <li className=" flex justify-center h-[44px] w-[44px] bg-[#484155] rounded-[8px] items-center "><img src={Shift} alt="das" className="h-[20px] w-[20px]"/></li>
                       <li className="  flex justify-center "><img src={Employe} alt="das" className="h-[20px] w-[20px]"/></li>
                        <li className="  flex justify-center "><img src={Report} alt="das" className="h-[20px] w-[20px]"/></li>
                         <li className=" flex justify-center "><img src={Dashboard} alt="das" className="h-[20px] w-[20px]"/></li>
                          <li className="  flex justify-center "><img src={Dashboard} alt="das" className="h-[20px] w-[20px]"/></li>
                           <li className="  flex justify-center "><img src={Dashboard} alt="das" className="h-[20px] w-[20px]"/></li>
                            <li className=" flex justify-center "><img src={Dashboard} alt="das" className="h-[20px] w-[20px]"/></li>
                             <li className="  flex justify-center "><img src={Dashboard} alt="das" className="h-[20px] w-[20px]"/></li>
                              <li className=" flex justify-center "><img src={Dashboard} alt="das" className="h-[20px] w-[20px]"/></li>
                                <li className="  flex justify-center "><img src={Dashboard} alt="das" className="h-[20px] w-[20px]"/></li>
                               <li className="  items-center  "><img src={Setting} alt="das" className="h-[20px] w-[20px]"/></li>
                               


                </ul>
                <div className="flex justify-center">
                    <img src={entie}alt="entile" className="h-[36] w-[36px] rounded[999px] "/>
                </div>
              </div>
        
             <div className=" top-0 left-2 w-80  bg-white shadow-xl z-50 flex flex-col gap-7 rounded-lg">
            

               <div className="flex justify-between items-center p-4 border-b">
                <div><img src={status} alt="status" className="h-[18px] w-[18px]"/></div>
                <h2 className="font-semibold text-gray-700">Advanced Filter</h2>
                <button onClick={onOpenAdvancedFilter}>

                    <img src={cross} alt="cross" className="h-[18px] w-[18px]" />
                </button>
              </div>


            {/* Calendar */}
            {/* <div className="p-4 grid grid-cols-7 gap-2 text-center ">
                {[...Array(31)].map((_, i) => (
                    <div
                        key={i}
                        className={`py-2 rounded-full cursor-pointer ${i === 6 ? "bg-black text-white" : "hover:bg-gray-100"
                            }`}
                    >
                        {i + 1}
                    </div>
                ))}
            </div> */}


             <Calendar className="p-4 border-b"/>

            {/* Filters */} 
            <div className="p-4  text-sm">
                <div>
                    <p className="text-gray-500 mb-1">By Status</p>
                    <div className="bg-gray-100 px-3 py-2 rounded">All</div>
                </div>


                <div>
                    <p className="text-gray-500 mb-1">By Team</p>
                    <div className=" text-teal-800 px-3 py-2 rounded flex flex-wrap gap-2">
                        <span className="bg-white px-2 py-1 rounded shadow text-xs">Bar staff ✕</span>
                        <span className="bg-white px-2 py-1 rounded shadow text-xs">Waiters/Waitresses ✕</span>
                    </div>
                </div>


                <div>
                    <p className="text-gray-500 mb-1">By Lorem Ipsum</p>
                    <div className="bg-gray-100 px-3 py-2 rounded">All</div>
                </div>


                <div>
                    <p className="text-gray-500 mb-1">By Lorem Ipsum</p>
                    <div className="bg-gray-100 px-3 py-2 rounded">All</div>
                </div>
            </div>


            <div className="p-4 mt-auto flex gap-3">
                <button className="flex-1 py-2 rounded bg-gray-100">Reset Filter</button>
                <button className="flex-1 py-2 rounded bg-teal-500 text-white">Apply</button>
            </div>
        </div>
        </div>
    );
};
export default AdvancedFilter;
