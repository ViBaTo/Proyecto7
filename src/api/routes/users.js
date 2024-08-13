const express = require('express')

const { isAdmin, isAuth } = require('../../middlewares/Auth')
const {
  getUsers,
  updateUserRole,
  deleteUser,
  register,
  login
} = require('../controllers/users')

const userRoutes = express.Router()

userRoutes.get('/', [isAuth], [isAdmin], getUsers)
userRoutes.post('/register', register)
userRoutes.post('/login', login)

userRoutes
  .route('/:id')
  .put([isAuth], [isAdmin], updateUserRole)
  .delete([isAuth], [isAdmin], deleteUser)

module.exports = userRoutes
