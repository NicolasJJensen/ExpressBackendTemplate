const userModel = require('@db/user/model')

async function getAll(req, res) {
  res.send("Getting other users isn't supported yet!")
}

function getOne(req, res) {
  res.send("Getting other users isn't supported yet!")
}

function updateOne(req, res) {
  res.send("Updating isn't supported yet!")
}

function deleteOne(req, res) {
  res.send("Deleting isn't supported yet!")
}

function getMe(req, res) {
  userModel.findOne({ _id: req.user._id }).populate('friends').exec()
  .then(user => {
    res.send(user)
  })
}

module.exports = {
  getAll: getAll,
  getOne: getOne,
  updateOne: updateOne,
  deleteOne: deleteOne,
  getMe: getMe
}