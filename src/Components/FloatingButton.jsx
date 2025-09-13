
import plus from './Assets/plus.png'
const FloatingButton = ({onOpenShowNew}) => (
<button className="fixed bottom-6 right-6 bg-[#66CCCC5C] text-[#110B1D] p-4 rounded-full shadow-lg hover:bg-blue-600">
  <img src={plus} alt="plus" className="h-[20px] w-[20px] " onClick={onOpenShowNew}/>
</button>
);
export default FloatingButton;