const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const schema = require('./schema')
const validators = require('./validators')
const methods = require('./methods')
const hooks = require('./hooks')

// Setup Plugins
schema.plugin(uniqueValidator)

// Setup Validation
validators.forEach(validator => {
  validator.paths.forEach(path => {
    schema.path(path).validate(validator.function)
  })
})

// Setup Hooks
hooks.forEach(hook => {
  hook.onHooks.forEach(onHook => {
    schema.pre(onHook, hook.function)
  })
})

// Setup Methods
Object.keys(methods).forEach(key => {
  schema.methods[key] = methods[key]
})

// User Model
module.exports = mongoose.model('User', schema)
