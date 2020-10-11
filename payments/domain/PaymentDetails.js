class PaymentMethod {

    constructor(name, address, cardDetails) {
        this.name = name,
        this.address = address,
        this.cardDetails = cardDetails
    }
}

class Address {

    constructor(line1, line2, city, state, zip) {
        this.line1 = line1
        this.line2 = line2
        this.city = city
        this.state = state
        this.zip = zip
    }
}

class CardDetails {

    constructor(cardNumber, exp, cvv) {
        this.cardNumber = cardNumber
        this.exp = exp
        this.cvv = cvv
        this.last4 = cardNumber.substring(cardNumber.length - 4)
    }
}

module.exports = {
    PaymentMethod,
    Address,
    CardDetails
}
