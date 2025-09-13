import ShiftCard from "./ShiftCard";
import man from "../Components/Assets/man.png"
import setting from "../Components/Assets/setting.png"
import image from "../Components/Assets/image.png"
const StaffSection = ({ title, staff }) => {
    return (
        <div className="flex justify-between bg-[#FFFFFF] ">

       
        <div className="mb-5  w-full pt-2 ">
            <div className="  px-4 mb-2 flex justify-between ">
                 <p className="flex flex-row gap-3 items-center">
                     <span><img src={image} alt="image" className="h-[8px] w-[14px] mt-2 text-[#110B1D] "/>
                      </span>
                      <span className="font-bold text-[18px] ">{title}</span>
                       </p>
                        <span className="h-[36px] w-[36px] bg-[#EDE9F5] rounded-full flex items-center justify-center gap-[8px] "><img src={setting} alt="setting" className="h-[18px] w-[18px]   "/>
                        </span>
             </div>
                <div className=" rounded-lg p-1 shadow-sm  bg-[#FFFFFF] ">
                {staff.map((person, idx) => (
                    <div key={idx} className="flex  items-center mb-3 bg-[#FFFFFF]  rounded-lg p-1 gap-1 ">
                        <div className="flex items-center gap-2   h-[110px] w-[229px] bg-white rounded-lg p-2">
                            {/* <div className=" bg-cover rounded-full"> <img src={person.logo} alt="not" className="h-[24px] w-[24px]" /> </div> */}
                            <div className="flex flex-col  ">
                                <p className=" font-700 text-[16px] text-[#110B1D] font-bold flex gap-4 ">  <img src={person.logo} alt="not" className="h-[24px] w-[24px]" /> {person.name}</p>
                                <div className="flex  w-[190px] mt-2  gap-4">

                                
                                <p className=" text-[#746C82] ">{person.role}</p>
                                <p className="font-bold text-[#110B1D] ml-3 ">{person.pay}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex   gap-x-1 p-x-2   flex-wrap    ">
                            {person.shifts.map((shift, i) => (
                                <ShiftCard key={i} {...shift} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
         </div>
    );
};

export default StaffSection;