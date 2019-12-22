const express = require('express')

module.exports = function (server) {

    const router = express.Router()
    server.use('/api', router)

    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

    const Manga = require('../api/manga/mangaService')
    Manga.register(router, '/mangas')
}