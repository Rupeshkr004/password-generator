import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    password: {
        length: 11,
        value: '6km13ge8c8h',
        strength: ''
    },
    characters: {
        uppercase: {
            include: false,
        },
        lowercase: {
            include: true,
        },
        numbers: {
            include: true,
        },
        symbols: {
            include: false,
        }
    }
}

const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        setPassword: (state, action) => {
            state.password.value = action.payload.value
        },
        includeCharacter: (state, action) => {
            if(action.payload.name === 'uppercase'){
                state.characters.uppercase.include = action.payload.value
            }
            else if(action.payload.name === 'lowercase'){
                state.characters.lowercase.include = action.payload.value
            }
            else if(action.payload.name === 'number'){
                state.characters.numbers.include = action.payload.value
            }
            else if(action.payload.name === 'symbol'){
                state.characters.symbols.include = action.payload.value
            }
        },
        changePasswordLength: (state, action) => {
            state.password.length = action.payload.value
        },
        setPasswordStrength: (state, action) => {
            state.password.strength = action.payload.value
        }
    }
})

export const { setPassword, includeCharacter, changePasswordLength, setPasswordStrength } = passwordSlice.actions

export default passwordSlice.reducer;