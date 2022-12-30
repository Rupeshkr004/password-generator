import { useDispatch, useSelector } from "react-redux";
import { setPasswordStrength } from "../features/passwordSlice";

const CharacterLength = () => {

    const dispatch = useDispatch()

    const passwordLength = useSelector((state) => state.password.password.length)
    const characters = useSelector((state) => state.password.characters)

    const constraintArr = Object.values(characters).map(key => {return key.include})

    const numberOfSelected = constraintArr.filter((item) => item === true).length

    if((numberOfSelected === 4 && passwordLength >= 13) || (numberOfSelected >= 3 && passwordLength >= 14)){
        dispatch(setPasswordStrength({value: 1}))
    }
    else if((numberOfSelected >= 2 && passwordLength >= 10 ) || (numberOfSelected >= 3 && (passwordLength >= 9 && passwordLength <= 12))){
        dispatch(setPasswordStrength({value: 2}))
    }else {
        dispatch(setPasswordStrength({value: 3}))
    }

    return ( 
        <Wrapper>
            <Lable />
            <PasswordLength length={passwordLength}/>
        </Wrapper>
     );
}

const Wrapper = ({children}) => {
    return ( 
        <div className="w-full h-8 flex flex-row justify-between">
            {children}
        </div>
     );
}

const Lable = () => {
    return ( 
        <div className="w-3/4 h-full flex justify-start items-center">
            <h1 className="text-md text-gray-300">Character length</h1>
        </div>
     );
}

const PasswordLength = ({length}) => {
    return ( 
        <div className="w-1/4 h-full flex justify-end items-center">
            <h1 className="text-3xl text-accent">{length}</h1>
        </div>
     );
}
 
 
export default CharacterLength;