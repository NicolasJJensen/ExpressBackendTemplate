const httpRouter = require("express").Router()
const wsRouter = require("express").Router()
const htppController = require('@controllers/http/auth')


// HTTP Requests
httpRouter.route('/sign_in')
  .post(htppController.signIn)

httpRouter.route('/sign_up')
  .post(htppController.signUp)

httpRouter.route('/sign_out')
  .post(htppController.signOut)

httpRouter.route('/validate_login')
  .post(htppController.validateLogin)


// WebSocket Requests


// Exports
module.exports = {
  httpRouter: httpRouter,
  wsRouter: wsRouter
}
