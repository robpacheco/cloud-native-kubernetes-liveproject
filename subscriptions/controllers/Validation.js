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

let validateSubscription = (product, monthsPurchased) => {

    let errors = []
    let productError = validateString(product)

    if(productError != null) {
        errors.add(productError)
    }

    if(monthsPurchased < 1) {
        errors.add("months purchased must be at least 1")
    } else if(monthsPurchased > 12) {
        errors.add("months purchased must not be more than 12")
    }

    return errors
}

module.exports = {
    validateSubscription
}