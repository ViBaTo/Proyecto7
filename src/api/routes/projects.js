const express = require('express')
const { protect, admin } = require('../../middlewares/Auth')
const {
  getProjects,
  postProject,
  updateProject,
  deleteProject
} = require('../controllers/projects')
const { getProductsByProject } = require('../controllers/products')

const projectRoutes = express.Router()

projectRoutes.route('/').get(protect, getProjects).post(protect, postProject)

projectRoutes
  .route('/:id')
  .put(protect, updateProject)
  .delete(protect, admin, deleteProject)

projectRoutes.route('/:projectId/products').get(protect, getProductsByProject)

module.exports = projectRoutes
