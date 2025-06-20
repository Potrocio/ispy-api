const express = require('express')
const usersRouter = express.Router()
const usersController = require("../controllers/usersController")

usersRouter.get('/scores', usersController.getUserScores)
usersRouter.post('/', usersController.createUser)
usersRouter.patch('/:id', usersController.submitUserScore)

module.exports = usersRouter;