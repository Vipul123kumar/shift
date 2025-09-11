
import './index.css'
import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import FilterBar from './Components/Filterbar';
import StaffSection from './Components/StaffSection';
import FloatingButton from './Components/FloatingButton';
import Daybar from './Components/Daybar';
import { useState } from 'react';
import AdvancedFilterPage from './Components/AdvanceFilterPage';
import staffData from './Components/Assets/StaffData';

function App() {
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);

return (
  <div className=" flex    bg-[#1E182A]" >
   <div className=' bg-[#1E182A] '>
      <Sidebar />
   </div>
   
    
    <div className='flex-1 flex flex-col bg-gray-100 rounded-lg m-2 '>
      <FilterBar onOpenAdvancedFilter={()=>setShowAdvancedFilter(true)} />
      <Daybar />
      <div className='p-6 gap-6 h-full '>
        {staffData.map((section, idx) => (
          <StaffSection key={idx} {...section} />
        ))}

      </div>
       {showAdvancedFilter && (<AdvancedFilterPage open={showAdvancedFilter} onClose={() => setShowAdvancedFilter(false)} onOpen={()=>setShowAdvancedFilter(true)} />)}
    </div>
    <FloatingButton />
     
  </div>
);
}

export default App;

