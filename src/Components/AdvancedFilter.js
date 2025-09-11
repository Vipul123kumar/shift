import React, { useState } from "react";
import Calendar from "react-calendar";
import { DayPicker } from "react-day-picker";
// import { Plus, X } from "lucide-react";
import cross from './Assets/cross.png'
const AdvancedFilter = ({ onClose }) => {

    return (
        <div className="fixed top-0 left-0 w-80 h-full bg-white shadow-xl z-50 flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="font-semibold text-gray-700">Advanced Filter</h2>
                <button onClick={onClose}>

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
            <div className="p-4 space-y-4 text-sm">
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
    );
};
export default AdvancedFilter;
