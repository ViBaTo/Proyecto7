require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const { connectDB } = require('./src/config/db')
const authRoutes = require('./src/api/Routes/Auth')
const projectRoutes = require('./src/api/routes/projects')
const userRoutes = require('./src/api/routes/users')
const productRoutes = require('./src/api/routes/products')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/projects', projectRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/products', productRoutes)

app.use('/ping', (req, res) => {
  res.status(200).json('pong')
})

app.use('*', (req, res) => {
  res.status(404).json('Route not found')
})

app.listen(3001, () => {
  console.log('Servidor desplegado en http://localhost:3001')
})
