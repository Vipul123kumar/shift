import React from 'react'


import Dashboard from '../Components/Assets/newdashboard.png';
import Employe from '../Components/Assets/Employe.png';
import Report from '../Components/Assets/report.jpg';
import Shift from '../Components/Assets/shift.png';
import Setting from '../Components/Assets/setting.png';
import arrow from '../Components/Assets/iconmd.png'
import entie from '../Components/Assets/Entite.png'
const Sidebar = () => {
  return (
    // <div className='w-full h-screen bg-[#1E182A] h-full justify-between flex flex-col  '> 
    <div className='w-full '>
      <div className='p-[4px] gap-[16px] rounded-tl-[8px] rounded-tr-[8px]  '>
        <div className='flex  rounded-[14px]  px-[66px] py-[6px] gap-[8px] bg-[#1E182A] text-right items-center  '>
          <p className='w-[40px] h-[24px] text-[10px] leading-[24px]  text-natural-400 items-center font-semibold'>Minimize </p>
          <img src={arrow} alt='arr' className='w-[16px] h-[16px] items-center  ' />

        </div>
        <ul className="flex flex-col w-[160px] h-full p-[4px] gap-[1px] ">


          <li className="flex flex-row max-w-[192px] h-[44px] gap-[12px] py-8 px-8  items-center justify-center ">
            <div className='  flex gap-[12px] '> <img src={Dashboard} alt='item8' className='h-[12px] w-[12px] mt-3 mr-5' />
              <p className='font-normal text-[#9890A6] text-[14px] mt-2 mr-1 '>Dashboard</p>
            </div>
          </li>

          <li className="flex flex-row  max-w-[192px] h-[44px] gap-[12px] py-8 px-8  items-center justify-center bg-[#484155] rounded-xl ">
              <div className='  flex gap-[12px] '> <img src={Shift} alt='item8' className='h-[12px] w-[12px] mt-3 mr-5' />
               <p className='font-manrope text-[#FFFFFF]  text-[14px] font-bold mt-2 mr-4   '>Shifts</p>
                </div>
                 </li>

          <li className=" flex flex-row  max-w-[192px] h-[44px] gap-[12px] py-8 px-8  items-center justify-center "> 
             <div className=' flex gap-[12px]'>  <img src={Employe} alt='item8' className='h-[12px] w-[12px] mt-3 mr-2' />
              <p className='font-normal text-[#9890A6] text-[14px] mt-2 mr-2 '>Employees</p>
               </div> 
               </li>
          <li className="flex flex-row max-w-[192px] h-[44px] gap-[12px] py-8 px-8  items-center justify-center  "> 
              <div className=' flex gap-[12px]'>  <img src={Report} alt='item8' className='h-[12px] w-[12px] mt-3 mr-4' /> 
              <p className='font-normal text-[#9890A6] text-[14px] mt-2 mr-4 '>Reports</p>
               </div>
               </li>

          <li className="flex flex-row  max-w-[192px] h-[44px] gap-[12px] py-8 px-8  items-center justify-center  ">
              <div className=' flex gap-[12px]'>  <img src={Dashboard} alt='item8' className='h-[12px] w-[12px] mt-3 mr-5' />
               <p className='font-normal text-[#9890A6] text-[14px] mt-2 mr-4 '>Item5</p>
                </div>
                </li>
          <li className="flex flex-row   max-w-[192px] h-[44px] gap-[12px] py-8 px-8  items-center justify-center  ">
              <div className=' flex gap-[12px]'>  <img src={Dashboard} alt='item8' className='h-[12px] w-[12px] mt-3 mr-5' />
               <p className='font-normal text-[#9890A6] text-[14px] mt-2 mr-4 '>Item6</p> 
               </div>
               </li>
          <li className="flex flex-row  max-w-[192px] h-[44px] gap-[12px] py-8 px-8  items-center justify-center "> 
              <div className=' flex gap-[12px]'>  <img src={Dashboard} alt='item8' className='h-[12px] w-[12px] mt-3 mr-5' /> 
              <p className='font-normal text-[#9890A6] text-[14px] mt-2 mr-4 '>Item7</p>
               </div>
               </li>
          <li className="flex flex-row  max-w-[192px] h-[44px] gap-[12px] py-8 px-8  items-center justify-center "> 
              <div className=' flex gap-[12px]'>  <img src={Dashboard} alt='item8' className='h-[12px] w-[12px] mt-3 mr-5' />
               <p className='font-normal text-[#9890A6] text-[14px] mt-2 mr-4 '>Item8</p>
                </div>
                </li>
          <li className="flex flex-row  max-w-[192px] h-[44px] gap-[12px] py-8 px-8  items-center justify-center "> 
             <div className=' flex gap-[12px]'>  <img src={Dashboard} alt='item8' className='h-[12px] w-[12px] mt-3 mr-5' /> 
             <p className='font-normal text-[#9890A6] text-[14px] mt-2 mr-4 '>Item8</p>
              </div></li>
          <li className="flex flex-row  max-w-[192px] h-[44px] gap-[12px] py-8 px-8  items-center justify-center ">  
             <div className=' flex gap-[12px]'>  <img src={Dashboard} alt='item8' className='h-[12px] w-[12px] mt-3 mr-5' />
              <p className='font-normal text-[#9890A6] text-[14px] mt-2 mr-4 '>Item9</p> 
              </div>
              </li>
          <li className="flex flex-row  max-w-[192px] h-[44px] gap-[12px] py-8 px-8  items-center justify-center "> 
              <div className=' flex gap-[12px]'>  <img src={Dashboard} alt='item8' className='h-[12px] w-[12px] mt-3 mr-5' />
               <p className='font-normal text-[#9890A6] text-[14px] mt-2 mr-4 '>Item10</p>
                </div>
               </li>
          <li className="flex flex-row  max-w-[192px] h-[44px] gap-[12px] py-8 px-8  items-center justify-center "> 
              <div className=' flex gap-[12px]'>  <img src={Setting} alt='item8' className='h-[12px] w-[12px] mt-3 mr-5' /> 
              <p className='font-normal text-[#9890A6] text-[14px] mt-2 mr-4 '>Settings</p>
               </div>
               </li>
          <li className="flex flex-row   max-w-[192px] h-[44px] gap-[10px] py-12  mt-20 items-center justify-center ">  
             <div className=' flex gap-[10px]'>  <img src={entie} alt='entile' className='h-[36px] w-[36px] mt-3 mr-5' /> 
             <p className='font-normal text-[#9890A6] text-[14px] mt-4 mr-4 text-[#FFFFFF] '>Entie LD</p> 
             </div>
             </li>

        </ul>
      </div>


    </div>


  )
}

export default Sidebar






// import React from "react";
// import { ArrowRight, ChartLine, Users, Clock, BarChart3, Settings, Moon, Sun, Grid3X3 } from "lucide-react";
// import { useTheme } from "./ThemeProvider";
// import { Button } from "@/900components/ui/button";

// const navigationItems = [
//   { icon: Grid3X3, label: "Dashboard", active: false },
//   { icon: Users, label: "Employees", active: false },
//   { icon: Clock, label: "Shifts", active: true },
//   { icon: BarChart3, label: "Reports", active: false },
//   { icon: Grid3X3, label: "Item5", active: false },
//   { icon: Grid3X3, label: "Item6", active: false },
//   { icon: Grid3X3, label: "Item7", active: false },
//   { icon: Grid3X3, label: "Item8", active: false },
//   { icon: Grid3X3, label: "Item9", active: false },
//   { icon: Grid3X3, label: "Item10", active: false },
//   { icon: Settings, label: "Settings", active: false },
// ];

// export function Sidebar() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className="w-64 bg-card border-r border-border flex flex-col">
//       {/* Logo Section */}
//       <div className="p-6 border-b border-border">
//         <div className="flex items-center space-x-3">
//           <ArrowRight className="text-primary w-6 h-6" />
//           <span className="font-semibold text-lg text-foreground">minimize</span>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 p-4">
//         <ul className="space-y-2">
//           {navigationItems.map((li) => {
//             const Icon = li.icon;
//             return (
//               <li key={li.label}>
//                 <Button
//                   variant={li.active ? "default" : "ghost"}
//                   className={`w-full justify-start space-x-3 ${
//                     li.active
//                       ? "bg-primary text-primary-foreground"
//                       : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
//                   }`}
//                   data-testid={`nav-${li.label.toLowerCase()}`}
//                 >
//                   <Icon className="w-5 h-5" />
//                   <span>{li.label}</span>
//                 </Button>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       {/* Theme Toggle */}
//       <div className="p-4 border-t border-border">
//         <Button
//           variant="ghost"
//           onClick={toggleTheme}
//           className="w-full justify-start space-x-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
//           data-testid="button-theme-toggle"
//         >
//           {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//           <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
//         </Button>
//       </div>
//     </div>
//   );
// }
