const jwt = require('jsonwebtoken')

module.exports = (token) => {
  return new Promise((res, rej) => {
    if(token){
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if(!err) {
          res(payload)
        } else {
          rej(err)
        }
      })
    } else {
      rej("No Access Token was sent with request")
    }
  })
}
