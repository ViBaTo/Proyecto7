require('dotenv').config()
const mongoose = require('mongoose')
const User = require('./src/api/models/users')
const Project = require('./src/api/models/projects')
const Product = require('./src/api/models/products')

const seedData = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)

    // Crear usuarios
    const user1 = new User({
      name: 'Admin',
      email: 'admin@example.com',
      password: 'password',
      role: 'gerente'
    })
    const user2 = new User({
      name: 'User',
      email: 'user@example.com',
      password: 'password',
      role: 'comercial'
    })

    await user1.save()
    await user2.save()

    // Crear proyectos
    const project1 = new Project({ name: 'Project 1', createdBy: user1._id })
    const project2 = new Project({ name: 'Project 2', createdBy: user2._id })

    await project1.save()
    await project2.save()

    // Crear productos
    const product1 = new Product({
      name: 'Product 1',
      productType: 'Type 1',
      project: project1._id,
      createdBy: user1._id
    })
    const product2 = new Product({
      name: 'Product 2',
      productType: 'Type 2',
      project: project2._id,
      createdBy: user2._id
    })

    await product1.save()
    await product2.save()

    console.log('Data seeded successfully')
    mongoose.connection.close()
  } catch (error) {
    console.error('Error seeding data:', error)
    mongoose.connection.close()
  }
}

seedData()
