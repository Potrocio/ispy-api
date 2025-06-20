const express = require('express')
const targetsRouter = express.Router()
const targetsController = require('../controllers/targetsController')

targetsRouter.post('/:id/verify', targetsController.checkIfTargetFound)

module.exports = targetsRouter;