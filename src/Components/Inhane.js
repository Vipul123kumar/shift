import React from 'react'

import Dashboard from '../Components/Assets/dashboard.svg';
import Employe from '../Components/Assets/employee-self-serve-portal-people-icon-png--m2i8N4N4A0b1m2H7.jpg';
import Report from '../Components/Assets/report.jpg';
import Shift from '../Components/Assets/shift.png';
import Setting from '../Components/Assets/setting.png';

const Inhane = ({ icon, label }) => {
    const picture = [{ icon: Dashboard, label: "Dashboard", }, { icon: Employe, label: "Employees", }, { icon: Shift, label: "Shifts", }, { icon: Report, label: "Reports", }, { icon: Setting, label: "Settings", }]
    return (
        <div className='h-10 flex item-center gap-3 px-4 border rounded-lg   '>
            <div className='w-6 h-6'>
                <img src={icon} alt='icon' className='h-full w-full ' />

            </div>
            <h2>{label}</h2>
        </div>
        
    )
}

export default Inhane
