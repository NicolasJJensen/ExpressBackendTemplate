const mongoose = require('mongoose')
const schema = require('./schema')
const validator = require('./validators')
const methods = require('./methods')
const hooks = require('./hooks')


// Plugins

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

// Example Model
module.exports = mongoose.model('Example', schema)
