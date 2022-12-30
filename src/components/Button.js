import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../features/passwordSlice";
import { generatePassword } from "../utils/generator";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Button = () => {

    const characters = useSelector((state) => state.password.characters)
    const length = useSelector((state) => state.password.password.length)
    const dispatch = useDispatch()

    const showErrorToast = () => {
        toast.error('Select a character', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })};

    const checkConstraintValidity = () => {
        const constraintArr = Object.values(characters).map(key => {return key.include})

        return constraintArr.includes(true)
    }

    const handleGenerate = () => {
        const constraintSatisfied = checkConstraintValidity()

        if(constraintSatisfied){
            const password = generatePassword(characters, length)
            dispatch(setPassword({value: password}))
        }
        else {
            showErrorToast()
        }
    }

    return ( 
        <Wrapper>
            <button className="btn w-full btn-accent text-lg rounded-md text-gray-200" onClick={handleGenerate}>GENERATE</button>
        </Wrapper>
     );
}

const Wrapper = ({children}) => {
    return ( 
        <div className="w-full h-14 flex flex-row justify-center items-center">
            {children}
        </div>

     );
}

export default Button;