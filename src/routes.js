const routes = require('express').Router();
const SessionController = require('./app/constrollers/SessionController')

routes.post('/sessions', SessionController.store)

module.exports = routes