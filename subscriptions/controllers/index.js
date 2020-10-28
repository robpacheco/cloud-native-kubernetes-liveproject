module.exports = (app, repositories, logger) => {
    const loadPaymentsController = require('./SubscriptionsController')
    app.use("/api/subscriptions", loadPaymentsController(repositories, logger))

    const loadProbesController = require('./ProbesController')
    app.use("/probes", loadProbesController())
}

