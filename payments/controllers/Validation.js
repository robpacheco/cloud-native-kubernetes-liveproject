let validateString = (s) => {

    if(typeof(s) != "string") {
        return `${s} is not a string`
    }

    if(!s) {
        return `${s} is null or undefined`
    }

    if(s.length == 0 || !s.trim()) {
        return `${s} is empty or blank`
    }

    return null
}

let validateStrings = (...ss) => {
    return ss.map(validateString).filter(x => x != null)
}

let validateName = (name) => {

    const err = validateString(name)

    if(err != null) {
        return [err]
    }

    return []
}

let validateAddress = (line1, line2, city, state, zip) => {
    return validateStrings(line1, city, state, zip)
}

let validateCard = (cardNum, exp, cvv) => {
    return validateStrings(cardNum, exp, cvv)
}

let validateProcessType = (type) => {

    const err = validateString(type)

    if(err != null) {
        return [err]
    }

    if(type !="refund" && type != "payment") {
        return [`Process type must either be 'refund' or 'payment'. Got ${type}`]
    }

    return []
}

let validateProcessAmount = (amount) => {

    if(!amount) {
        return [`amount is null or undefined`]
    }

    if(typeof(amount) != "number") {
        return [`${amount} is not a number`]
    }

    if(amount <= 0) {
        return [`${amount} must be a positive amount over 0`]
    }

    return []
}

module.exports = {
    validateName,
    validateAddress,
    validateCard,
    validateProcessType,
    validateProcessAmount
}