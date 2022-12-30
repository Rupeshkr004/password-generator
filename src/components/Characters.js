import { useDispatch, useSelector } from "react-redux";
import { includeCharacter } from "../features/passwordSlice";

const Character = () => {

    const { uppercase, lowercase, numbers, symbols } = useSelector((state) => state.password.characters)
    const dispatch = useDispatch()

    const includeUppercase = (e) => {
        dispatch(includeCharacter({name: 'uppercase', value: e.target.checked}))
    }

    const includeLowercase = (e) => {
        dispatch(includeCharacter({name: 'lowercase', value: e.target.checked}))
    }

    const includeNumbers = (e) => {
        dispatch(includeCharacter({name: 'number', value: e.target.checked}))
    }

    const includeSymbols = (e) => {
        dispatch(includeCharacter({name: 'symbol', value: e.target.checked}))
    }

    return ( 
        <div className="w-full h-auto flex flex-col my-2 space-y-1">
            <div className="w-full h-8 flex flex-row">
                <div className="w-10 b flex justify-start items-center" >
                    <input type="checkbox" className="checkbox checkbox-accent" onChange={includeUppercase} checked={uppercase.include}/>
                </div>
                <div className="w-3/4 flex justify-start items-center" >
                    <h1 className="text-md text-gray-300">Include Uppercase Letters</h1>
                </div>
            </div>

            <div className="w-full h-8 flex flex-row">
                <div className="w-10 flex justify-start items-center" >
                    <input type="checkbox" className="checkbox checkbox-accent" onChange={includeLowercase}  checked={lowercase.include}/>
                </div>
                <div className="w-3/4 flex justify-start items-center" >
                    <h1 className="text-md text-gray-300">Include Lowerercase Letters</h1>
                </div>
            </div>

            <div className="w-full h-8 flex flex-row">
                <div className="w-10 flex justify-start items-center" >
                    <input type="checkbox" className="checkbox checkbox-accent" onChange={includeNumbers} checked={numbers.include}/>
                </div>
                <div className="w-3/4 flex justify-start items-center" >
                    <h1 className="text-md text-gray-300">Include Numbers</h1>
                </div>
            </div>

            <div className="w-full h-8 flex flex-row">
                <div className="w-10 flex justify-start items-center" >
                    <input type="checkbox" className="checkbox checkbox-accent" onChange={includeSymbols} checked={symbols.include}/>
                </div>
                <div className="w-3/4 flex justify-start items-center" >
                    <h1 className="text-md text-gray-300">Include Symbols</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Character;