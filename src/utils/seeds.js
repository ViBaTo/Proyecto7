const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err))
