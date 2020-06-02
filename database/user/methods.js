const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require('@db/user/model')

// MUST USE keyword function and not arrow functions or this._id wont work
function generateAuthToken() {
  return jwt.sign(
    { _id: this._id },
    process.env.ACCESS_TOKEN_SECRET
  )
}

function comparePassword(candidatePassword) {
  const password = this.password
  return new Promise((res, rej) => {
    bcrypt.compare(candidatePassword, password, function(err, isMatch) {
      if(err) {
        rej(err)
      }
      res(isMatch)
    })
  })
}

module.exports = {
  generateAuthToken: generateAuthToken,
  comparePassword: comparePassword
}
