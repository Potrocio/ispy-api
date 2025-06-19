const express = require('express')
const targetsRouter = express.Router()
const targetsController = require('../controllers/targetsController')

targetsRouter.get('/:id', targetsController.checkIfTargetFound)

module.exports = targetsRouter;