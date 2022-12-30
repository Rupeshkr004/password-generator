import { FaCopy } from "react-icons/fa";
import { useSelector } from "react-redux";

const Password = () => {
    const password = useSelector((state) => state.password.password)

    const copyPassword = () => {
        navigator.clipboard.writeText(password.value)
    }

    return ( 
        <div className="w-full h-16 bg-gray-800 flex flex-row justify-between p-3 rounded-t-md">
            <div className="w-3/4 h-full flex justify-start items-center">
                <h1 className="text-xl text-accent">{password.value}</h1>
            </div>
            <div className="w-1/4 h-full flex justify-end items-center">
                <div className="w-8 h-full flex justify-end items-center tooltip" data-tip="Click to copy">
                    <FaCopy className='text-accent text-xl hover:text-accent-focus cursor-pointer ' onClick={copyPassword}/>
                </div>
            </div>
        </div>
     );
}
 
export default Password;