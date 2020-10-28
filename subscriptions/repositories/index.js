let makeRedisClient = (config) => {
    // TODO: Configure and return Redis client.
    // This will likely be similar to the implementation for milestone 1.
}

module.exports = (config) => {

    const client = makeRedisClient(config)
    const subscriptionsRepo = require('./SubscriptionsRepository')(client)

    return {subscriptionsRepository: subscriptionsRepo}
}
