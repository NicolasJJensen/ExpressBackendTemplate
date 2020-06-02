require('dotenv').config({path: './.env'})

// Allow nicer require paths
require('module-alias/register')

// import DB stuff
const mongoose = require('mongoose')

// Import express stuff
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bodyParser = require('body-parser')

// setup server
const app = express()

// setup middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// setup Websocketing
let wss = require('@helpers/setupWebSocket')(app)

// set req.user to the current user's details if they are logged in
app.use(require('@middleware/auth'))

// use all routes
app.use(require('@routes'))

// Setup port
var port = process.env.PORT || '3001'
app.set('port', port)


// connect to database (mongoose)
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    require('@db/seed')()
    console.log('DB Connected')
  })

// Start listening for requests
app.listen(port, () => console.log("Server listening"))
