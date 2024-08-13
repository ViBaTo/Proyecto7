require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { connectDB } = require('./src/config/db')
/* const mongoose = require('mongoose') */
const projectRoutes = require('./src/api/routes/projects')
const userRoutes = require('./src/api/routes/users')
const productRoutes = require('./src/api/routes/products')
/* const seedData = require('./src/utils/seeds') */
const { connectCloudinary } = require('./src/config/cloudinary')
const app = express()

connectDB()
connectCloudinary()

const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/v1/projects', projectRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/products', productRoutes)

app.use('/ping', (req, res) => {
  res.status(200).json('pong')
})

app.use('*', (req, res) => {
  res.status(404).json('Route not found')
})

app.listen(PORT, () => {
  console.log(`Servidor desplegado en http://localhost:${PORT}`)
})
