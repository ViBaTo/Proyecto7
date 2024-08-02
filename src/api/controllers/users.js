const { generateSign } = require('../../config/jwt')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({})
    return res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ message: 'Error fetching users' })
  }
}

const updateUserRole = async (req, res) => {
  const { role } = req.body

  try {
    const user = await User.findById(req.params.id)

    if (user) {
      user.role = role
      const updatedUser = await user.save()
      res.json(updatedUser)
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating user role', error })
  }
}

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (user) {
      await user.remove()
      res.json({ message: 'User removed' })
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error })
  }
}

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      rol: 'comercial'
    })

    const duplicatedUser = await User.findOne({ email: req.body.email })

    if (duplicatedUser) {
      return res.status(400).json({ message: 'User already registered' })
    }

    const userSaved = await newUser.save()
    return res.status(201).json(userSaved)
  } catch (error) {
    res.status(400).json({ message: 'Register not working' })
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      return res.status(400).json({ message: 'User does not esxist' })
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    } else {
      return res.status(400).json({ message: 'Password invalid' })
    }
  } catch (error) {
    res.status(400).json({ message: "login doesn't working" })
  }
}

module.exports = {
  getUsers,
  updateUserRole,
  deleteUser,
  register,
  login
}
