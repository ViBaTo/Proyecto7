const express = require('express')
const { registerUser, authUser, registerAdmin } = require('../Controllers/Auth')

const authRoutes = express.Router()

authRoutes.post('/register', registerUser)
authRoutes.post('/login', authUser)
authRoutes.post('/register-admin', registerAdmin)

module.exports = authRoutes
