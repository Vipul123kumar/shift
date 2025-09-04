import React from 'react'


import Dashboard from '../Components/Assets/dashboard.svg';
import Employe from '../Components/Assets/employee-self-serve-portal-people-icon-png--m2i8N4N4A0b1m2H7.jpg';
import Report from '../Components/Assets/report.jpg';
import Shift from '../Components/Assets/shift.png';
import Setting from '../Components/Assets/setting.png';
const Sidebar = () => {
  return (
    <div className='w-60 bg-gray-800  h-100vh p-5 '>
         <div className='pl-24'>Minimize </div>
         <div> 
            <items className="flex flex-col text-gray-300 gap-4 m-4  ">
                <item className="flex flex-row gap-2"> <span><img src={Dashboard} alt='dash' width={50}/> </span> Dashboard</item>
                <item className=" flex flex-row bg-gray-400 text-white gap-2 rounded-3xl justify-center items-center  ">  <span><img src={Shift} alt='dash' width={50}/></span> Shifts</item>
                <item className="flex flex-row gap-2 ">  <span><img src={Employe} alt='dash' width={50}/></span> Employees</item>
                <item className="flex flex-row gap-2 ">  <span><img src={Report} alt='report' width={50}/></span> Reports</item>
                <item className="flex flex-row gap-2 ">  <span><img src={Dashboard} alt='item1' width={50}/></span> Item 5</item>
                <item className="flex flex-row gap-2 ">  <span><img src={Dashboard} alt='item6' width={50}/></span> Item 6</item>
                <item className="flex flex-row gap-2">  <span><img src={Dashboard} alt='item7' width={50}/></span> Item 7</item>
                <item className="flex flex-row gap-2">  <span><img src={Dashboard} alt='item8' width={50}/></span>Item 8</item>
                <item className="flex flex-row gap-2">  <span><img src={Dashboard} alt='item9' width={50}/></span>Item 9</item>
                <item className="flex flex-row gap-2">  <span><img src={Dashboard} alt='item10' width={50}/></span> Item 10</item>
                <item className="flex flex-row gap-2">  <span><img src={Setting}   alt='setting' width={50}/></span> Settings</item>
                

            </items>
         </div>
    </div>
  )
}

export default Sidebar






// import React from "react";
// import { ArrowRight, ChartLine, Users, Clock, BarChart3, Settings, Moon, Sun, Grid3X3 } from "lucide-react";
// import { useTheme } from "./ThemeProvider";
// import { Button } from "@/components/ui/button";

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
//           {navigationItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <li key={item.label}>
//                 <Button
//                   variant={item.active ? "default" : "ghost"}
//                   className={`w-full justify-start space-x-3 ${
//                     item.active 
//                       ? "bg-primary text-primary-foreground" 
//                       : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
//                   }`}
//                   data-testid={`nav-${item.label.toLowerCase()}`}
//                 >
//                   <Icon className="w-5 h-5" />
//                   <span>{item.label}</span>
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
