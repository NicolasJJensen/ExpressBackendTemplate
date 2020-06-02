const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

function checkEmail(email) {
  emailRegex.test(email)
}

module.exports = [
  {
    paths: ['email'],
    function: checkEmail
  }
]
