const express = require('express')

const {
  updateProduct,
  postProduct,
  deleteProduct,
  getProductsByProject
} = require('../controllers/products')
const { isAdmin } = require('../../middlewares/Auth')

const productRoutes = express.Router()

productRoutes.route('/').get(updateProduct).post(postProduct)

productRoutes.route('/:id').put(updateProduct).delete([isAdmin], deleteProduct)

productRoutes.route('/project/:projectId').get(getProductsByProject)

module.exports = productRoutes
