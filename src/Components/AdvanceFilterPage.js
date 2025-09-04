import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import AdvancedFilter from "./AdvancedFilter";
const  AdvancedFilterPage=({open,onClose,onOpen}) =>{
    
   


    return (
        <div className="flex bg-gray-100 min-h-screen relative">
         {open && <AdvancedFilter  onClose={onClose} />}


            <div className="flex-1 flex flex-col">
                {/* Top bar with Advanced Filter trigger */}
                <div className="flex justify-between items-center px-6 py-3 border-b bg-white">
                    <div className="flex gap-3 text-sm">
                        <button className="px-3 py-1 bg-gray-100 rounded">Shift view</button>
                        <button className="px-3 py-1 bg-gray-100 rounded">Staff view</button>
                        <button className="px-3 py-1 bg-gray-100 rounded">Status All</button>
                        <button className="px-3 py-1 bg-teal-100 text-teal-800 rounded">
                            Team 1 selected
                        </button>
                        <button
                            onClick={onOpen}
                            className="px-3 py-1 text-blue-600"
                        >
                            + Advanced filter
                        </button>
                    </div>


                    <div className="flex gap-3 items-center">
                        <button className="px-3 py-1 bg-gray-100 rounded">Week</button>
                        <button className="px-3 py-1 bg-gray-100 rounded">Month</button>
                        <button className="px-3 py-1 bg-gray-100 rounded">Current Week</button>
                    </div>
                </div>


                {/* Example of staff section */}
                <div className="p-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex gap-4 items-center mb-3">
                            <div className="flex items-center gap-2 w-40">
                                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                                <div>
                                    <p className="text-sm font-medium">Carol Saragosa</p>
                                    <p className="text-xs text-gray-500">Waitress - 16h</p>
                                </div>
                            </div>
                            <div className="flex gap-2 overflow-x-auto">
                                <div className="p-2 rounded text-xs bg-[#E8F4FA] min-w-[100px]">
                                    <div>08:00-12:00</div>
                                    <div>3.5h</div>
                                    <div>$80</div>
                                </div>
                            </div>
                        </div>


                        <div className="flex gap-4 items-center">
                            <div className="flex items-center gap-2 w-40">
                                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                                <div>
                                    <p className="text-sm font-medium">John Smith</p>
                                    <p className="text-xs text-gray-500">Waitress - 16h</p>
                                </div>
                            </div>
                            <div className="flex gap-2 overflow-x-auto">
                                <div className="p-2 rounded text-xs bg-[#FFD5D5] text-red-600 min-w-[100px]">
                                    <div>08:00-12:00</div>
                                    <div>Absent</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            );
}
export default AdvancedFilterPage;