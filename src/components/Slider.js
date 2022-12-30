import { useDispatch, useSelector } from "react-redux";
import { changePasswordLength } from "../features/passwordSlice";

const Slider = () => {
    const length = useSelector((state) => state.password.password.length)
    const dispatch = useDispatch()

    const handleSliderChange = (e) => {
        dispatch(changePasswordLength({value: parseInt(e.target.value)}))
    }

    return ( 
        <div className="w-full h-5 flex justify-end items-center">
            <div className="w-full h-full flex justify-end items-center">
                <input type='range' width='full' min='8' max='16' className="w-full range range-xs range-accent" value={length} onChange={handleSliderChange}/>
            </div>
        </div>
     );
}
 
export default Slider;