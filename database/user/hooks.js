const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

function hashPass(next) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next()

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err)

    // hash the password using our new salt
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err)

      // override the cleartext password with the hashed one
      this.password = hash
      next()
    })
  })
}

function lowerCaseEmail(next) {
  if (!this.isModified('email')) return next()

  this.email = this.email.toLowerCase()
  next()
}

module.exports = [
  {
    onHooks: ['save', 'update'],
    function: hashPass
  },
  {
    onHooks: ['save', 'update'],
    function: lowerCaseEmail
  }
]
