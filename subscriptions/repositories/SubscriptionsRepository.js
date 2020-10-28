const domain = require('../domain/Subscription')

class SubscriptionsRepository {
    constructor(client) {
        this.client = client
    }

    async addOrReplaceSubscription(subscription) {
        // TODO: Implementation       
    }

    async getSubscription() {
        // TODO: Implementation       
    }

    async removeSubscription() {
        // TODO: Implementation       
    }

    // This method will transform a domain representation to its
    // corresponding repository representation.
    transformToRepositoryFormat(subscription) {

        return {
            "product": subscription.product,
            "monthsPurchased": subscription.monthsPurchased,
            "status": subscription.status,
            "datePurchased": subscription.datePurchased
        }
    }

    // This method will transform a repository representation to its
    // corresponding domain representation.
    transformToDomainFormat(data) {

        const {product, monthsPurchased, datePurchased, status} = data

        return new domain.Subscription(product, monthsPurchased, datePurchased, status)
    }
}

module.exports = (client) => new SubscriptionsRepository(client)
