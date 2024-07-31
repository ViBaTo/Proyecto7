const express = require('express')
const { protect, admin } = require('../../middlewares/Auth')
const {
  updateProduct,
  postProduct,
  deleteProduct,
  getProductsByProject
} = require('../controllers/products')

const productRoutes = express.Router()

productRoutes.route('/').get(protect, updateProduct).post(protect, postProduct)

productRoutes
  .route('/:id')
  .put(protect, updateProduct)
  .delete(protect, admin, deleteProduct)

productRoutes.route('/project/:projectId').get(protect, getProductsByProject)

module.exports = productRoutes
