import { GeneratePassword } from 'js-generate-password'

export const generatePassword = (constraint, length) => {
    const password = GeneratePassword({
        length: length,
        lowercase: constraint.lowercase.include,
        uppercase: constraint.uppercase.include,
        numbers: constraint.numbers.include,
        symbols: constraint.symbols.include
    })

    return password
}