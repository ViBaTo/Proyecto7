const express = require('express')

const { isAdmin } = require('../../middlewares/Auth')
const {
  getUsers,
  updateUserRole,
  deleteUser,
  register,
  login
} = require('../controllers/users')

const userRoutes = express.Router()

userRoutes.get('/', [isAdmin], getUsers)
userRoutes.post('/register', register)
userRoutes.post('/login', login)

userRoutes.route('/:id').put(updateUserRole).delete(deleteUser)

module.exports = userRoutes
