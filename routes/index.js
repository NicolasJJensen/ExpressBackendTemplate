const express = require('express')
const router = express.Router()
const httpRouter = express.Router()
const wsRouter = express.Router()

/* --------------------------------------------------------------------------- */
/* ------------------------------ EDIT BELOW --------------------------------- */
/* --------------------------------------------------------------------------- */

// Import Middleware
const validateLogin = require('@middleware/validateLogin')


// Import all HTTP routers
const usersHTTPRouter = require('@routes/users').httpRouter
const authHTTPRouter = require('@routes/auth').httpRouter


// Apply HTTP routes
httpRouter.use('/users', usersHTTPRouter)
httpRouter.use('/', authHTTPRouter)


// apply WebSocket routes

/* --------------------------------------------------------------------------- */
/* ------------------------------ EDIT ABOVE --------------------------------- */
/* --------------------------------------------------------------------------- */

router.use('/api', httpRouter)
router.use('/ws', wsRouter)

module.exports = router
