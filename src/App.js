
import './index.css'
import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import FilterBar from './Components/Filterbar';
import StaffSection from './Components/StaffSection';
import FloatingButton from './Components/FloatingButton';
import Daybar from './Components/Daybar';
import { useState } from 'react';
import AdvancedFilter from './Components/AdvancedFilter';
import TeamSelect from './Components/TeamSelect';
import ShiftView from './Components/ShiftView';
import staffData from './Components/Assets/StaffData';
import NewShift from './Components/NewShift';

function App() {
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);
  const [showShift,setShowShift]= useState(false);
  const [showTeamSelect, setShowTeamSelect] = useState(false);
  const [showNewShift,setShowNewShift]=useState(false);

  return (
    <div className=" flex bg-[#1E182A] bg-[#FFFFFF] hide-scroll w-full" >
      <div className=' bg-[#1E182A] '>
        {/* <Sidebar /> */}

         {showAdvancedFilter ? (
          <AdvancedFilter onOpenAdvancedFilter={() => setShowAdvancedFilter(false)} />
        ) : (
          <Sidebar />
        )}

  
      </div>


      <div className='flex-1 flex flex-col bg-gray-100 rounded-lg m-1  '>
        {/* {
          showAdvancedFilter ? (<FilterBar onOpenAdvancedFilter={() => setShowAdvancedFilter(true)}
           onOpenTeamSelect={() => setShowTeamSelect(false)} />):
          (<TeamSelect/>   )
        } */}
        <FilterBar onOpenAdvancedFilter={() => setShowAdvancedFilter(true)}  onShiftView={()=>setShowShift(true)} />
          {showAdvancedFilter && (<TeamSelect/>)}
        <Daybar />
        { showShift ? (<ShiftView/>): 
        (
        <div className='p-5 pl-1  h-full  '>
          {staffData.map((section, idx) => (
            <StaffSection key={idx} {...section} />
          ))}

        </div>  
           
        )
        
        }
        
       
      </div>
           
          { showNewShift && ( <FloatingButton onOpenShowNew={()=>setShowNewShift(true)} />) }
    </div>
  );
}

export default App; 

  {/* {showAdvancedFilter && (<AdvancedFilterPage open={showAdvancedFilter} onClose={() => setShowAdvancedFilter(false)} onOpen={() => setShowAdvancedFilter(true)} />)} */}

