const UserModel = require('@db/user/model')
const authToken = require('@helpers/authToken')

async function signIn(req, res) {
  // Find user
  let user = await UserModel.findOne({ email: req.body.email.toLowerCase() })

  if(!user){
    return res.sendStatus(401)
  }

  // Check if the password is correct
  if(!await user.comparePassword(req.body.password)) {
    return res.sendStatus(401)
  }

  const accessToken = user.generateAuthToken()

  let remember_me = req.body.remember_me ? { expires: 1000 * 60 * 60 * 24 * 7 } : {}
  // Set token as a cookie
  res.cookie('access_token', accessToken, {
    httpOnly: true,
    sameSite: true,
    ...remember_me
    // secure: true
  })

  res.send(user)
}

async function signUp(req, res) {
  let user = new UserModel({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })

  try{
    await user.save()
  } catch(err) {
    return res.status(400).send(err)
  }

  const accessToken = user.generateAuthToken()

  let remember_me = req.body.remember_me ? { expires: 1000 * 60 * 60 * 24 * 7 } : {}
  // Set token as a cookie
  res.cookie('access_token', accessToken, {
    httpOnly: true,
    sameSite: true,
    ...remember_me
    // secure: true
  })

  res.send(user)
}

async function signOut(req, res) {
  res.clearCookie('access_token')

  res.sendStatus(200)
}

async function validateLogin(req, res) {
  res.send(req.user != undefined)
}

module.exports = {
  signIn: signIn,
  signUp: signUp,
  signOut: signOut,
  validateLogin: validateLogin
}
