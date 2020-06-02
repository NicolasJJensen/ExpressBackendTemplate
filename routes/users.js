const httpRouter = require("express").Router()
const wsRouter = require("express").Router()
const htppController = require('@controllers/http/user')


// HTTP Requests
httpRouter.route('/')
  .get(htppController.getAll)

httpRouter.route('/me')
  .get(htppController.getMe)

httpRouter.route('/:id')
  .get(htppController.getOne)
  .put(htppController.updateOne)
  .delete(htppController.deleteOne)


// WebSocket Requests


// Exports
module.exports = {
  httpRouter: httpRouter,
  wsRouter: wsRouter
}
