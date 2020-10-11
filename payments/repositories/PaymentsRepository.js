const domain = require('../domain/PaymentDetails')

let paymentMethodKey = "payment"

class PaymentsRepository {
    constructor(client) {
        this.client = client
    }

    async addOrReplacePaymentMethod(paymentMethod) {

        let len = await this.client.hlen(paymentMethodKey)
        
        if(len > 0) {
            // If there is already an existing payment method, we're
            // going to replace that. Remove the old one first just
            // to make sure.
            await this.removePaymentMethod()
        }

        const data = this.transformToRepositoryFormat(paymentMethod)
        await this.client.hmset(paymentMethodKey, data)
    }

    async getPaymentMethod() {
        let len = await this.client.hlen(paymentMethodKey)
        
        if(len <= 0) {
            // If there is already an existing payment method, we're
            // going to replace that. Remove the old one first just
            // to make sure.
            return {} // TODO: Perhaps this should result in a 404?
        }

        const data = await this.client.hgetall(paymentMethodKey)
        return this.transformToDomainFormat(data)
    }

    async removePaymentMethod() {
        let len = await this.client.hlen(paymentMethodKey)
        
        if(len <= 0) {
            // If there is already an existing payment method, we're
            // going to replace that. Remove the old one first just
            // to make sure.
            return
        }

        let fields = await this.client.hkeys(paymentMethodKey)
        return await this.client.hdel(paymentMethodKey, fields)
    }

    transformToRepositoryFormat(paymentMethod) {

        return {
            "name": paymentMethod.name,
            "addressLine1": paymentMethod.address.line1,
            "addressLine2": paymentMethod.address.line2,
            "city": paymentMethod.address.city,
            "state": paymentMethod.address.state,
            "zip": paymentMethod.address.zip,
            "cardNumber": paymentMethod.cardDetails.cardNumber,
            "cardExp": paymentMethod.cardDetails.exp,
            "cardCvv": paymentMethod.cardDetails.cvv
        }
    }

    transformToDomainFormat(data) {

        const {name} = data
        const {addressLine1, addressLine2, city, state, zip} = data
        const {cardNumber, cardExp, cardCvv} = data

        return new domain.PaymentMethod(
            name,
            new domain.Address(addressLine1, addressLine2, city, state, zip),
            new domain.CardDetails(cardNumber, cardExp, cardCvv)
        )
    }
}

module.exports = (client) => new PaymentsRepository(client)
