const express = require('express')
const { protect, admin } = require('../../middlewares/Auth')
const { getUsers, updateUserRole, deleteUser } = require('../controllers/users')

const userRoutes = express.Router()

userRoutes.route('/').get(protect, admin, getUsers)

userRoutes
  .route('/:id')
  .put(protect, admin, updateUserRole)
  .delete(protect, deleteUser)

module.exports = userRoutes
