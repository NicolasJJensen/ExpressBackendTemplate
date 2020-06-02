module.exports = (app) => {
  const wss = require('express-ws')(app)
  app.use((req, res, next) => {
    req.wss = wss
    next()
  })
  return wss
}
