const User = require('../models/users')

const getUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' })
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

module.exports = {
  getUsers,
  updateUserRole,
  deleteUser
}
