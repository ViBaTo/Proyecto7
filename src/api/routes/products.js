const express = require('express')

const {
  updateProduct,
  postProduct,
  deleteProduct,
  getProductsByProject,
  getProducts
} = require('../controllers/products')
const { isAdmin, isAuth } = require('../../middlewares/Auth')
const { upload } = require('../../middlewares/upload')

const productRoutes = express.Router()

productRoutes
  .route('/')
  .get(getProducts)
  .post(upload.single('img'), postProduct)

productRoutes
  .route('/:id')
  .put(updateProduct)
  .delete([isAuth], [isAdmin], deleteProduct)

productRoutes.route('/project/:projectId').get(getProductsByProject)

module.exports = productRoutes
