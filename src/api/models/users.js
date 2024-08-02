const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: [String],
      enum: ['gerente', 'comercial'],
      default: 'comercial'
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

const User = mongoose.model('users', userSchema, 'users')

module.exports = User
