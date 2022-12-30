import { useSelector } from "react-redux";

const Strength = () => {
    const strength = useSelector((state) => state.password.password.strength)

    return ( 
        <div className="w-full h-14 flex flex-row bg-gray-700 p-3 rounded-md">
            <div className="w-1/2 h-full flex justify-start items-center">
                <h1 className="text-sm text-gray-400">STRENGTH</h1>
            </div>
            <div className="w-1/2 h-full flex">
                <div className="w-1/2 h-full flex justify-center items-center">
                    { strength === 1 && <h1 className="text-lg text-gray-300"> STRONG</h1> }
                    { strength === 2 && <h1 className="text-lg text-gray-300"> MEDIUM</h1> }
                    { strength === 3 && <h1 className="text-lg text-gray-300"> WEAK</h1> }
                </div>

                <div className="w-1/2 h-full flex justify-end items-center space-x-1 flex-row">
                    <div className={`${strength === 1 && 'bg-accent'} ${strength === 2 && 'bg-warning'} ${strength === 3 && 'bg-error'}  w-3 h-6 flex  outline outline-1 outline-slate-200`}></div>
                    <div className={`${strength === 1 && 'bg-accent'} ${strength === 2 && 'bg-warning'} w-3 h-6 flex  outline outline-1 outline-slate-200`}></div>
                    <div className={`${strength === 1 && 'bg-accent'} w-3 h-6 flex  outline outline-1 outline-slate-200`}></div>
                </div>
            </div>
        </div>
     );
}
 
export default Strength;