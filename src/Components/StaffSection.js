import ShiftCard from "./ShiftCard";
import man from "../Components/Assets/man.png"
const StaffSection = ({ title, staff }) => {
return (
<div className="mb-6">
<h2 className="font-bold text-gray-700 px-4 mb-2">{title}</h2>
<div className="bg-white rounded-lg p-4 shadow-sm">
{staff.map((person, idx) => (
<div key={idx} className="flex gap-4 items-center mb-3">
<div className="flex items-center gap-2 m-2">
<div className="w-8 h-8 bg-cover rounded-full"> <img src={person.logo} alt="not" width={50}/> </div>
<div className="flex flex-col w-70">
<p className="text-sm font-medium">{person.name}</p>
<p className="text-xs text-gray-500">{person.role}</p>
</div>
</div>
<div className="flex gap-2 flex-wrap">
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