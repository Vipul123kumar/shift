import ShiftCard from "./ShiftCard";
import man from "../Components/Assets/man.png"
import setting from "../Components/Assets/setting.png"
import image from "../Components/Assets/image.png"
const StaffSection = ({ title, staff }) => {
    return (
        <div className="mb-6">
            <div className="font-bold text-gray-700 px-4 mb-2 flex justify-between "> <p className="flex flex-row gap-2"> <span><img src={image} alt="image" className="h-[10px] w-[10px] mt-2  "/> </span><span>{title}</span> </p> <span><img src={setting} alt="setting" className="h-[18px] w-[18px] bg-[#EDE9F5]"/></span></div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
                {staff.map((person, idx) => (
                    <div key={idx} className="flex  items-center mb-3">
                        <div className="flex items-center gap-2 m-2 border border-red-900 h-[110px] w-[192px]">
                            <div className="w-8 h-8 bg-cover rounded-full"> <img src={person.logo} alt="not" width={50} /> </div>
                            <div className="flex flex-col  w-70">
                                <p className="text-sm font-medium">{person.name}</p>
                                <div className="flex ">

                                
                                <p className="text-xs text-gray-500">{person.role}</p>
                                <p className="text-xs text-gray-500">{person.pay}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 w-[1115px] h-[110px] flex-wrap border border-red-900 ">
                            {person.shifts.map((shift, i) => (
                                <ShiftCard key={i} {...shift} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaffSection;