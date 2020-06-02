const authToken = require('@helpers/authToken')

module.exports = (req, res, next) => {
  const access_token = req.cookies['access_token']

  authToken(access_token)
  .then(data => {
    req.user = data
    next()
  })
  .catch(() => {
    res.clearCookie('access_token')
    next()
  })
}
