// express, controllers, middlewares.

const express = require('express')
const router = express.Router()
const controller = require('../controllers/homeCo')

router.get('/', controller.checkQuery)
router.get('/all/:name', controller.getAll)

module.exports = router