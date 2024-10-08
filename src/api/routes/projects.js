const express = require('express')

const {
  getProjects,
  postProject,
  updateProject,
  deleteProject
} = require('../controllers/projects')
const { getProductsByProject } = require('../controllers/products')
const { isAdmin, isAuth } = require('../../middlewares/Auth')

const projectRoutes = express.Router()

projectRoutes.route('/').get(getProjects).post(postProject)

projectRoutes
  .route('/:id')
  .put(updateProject)
  .delete([isAuth], [isAdmin], deleteProject)

projectRoutes.route('/:projectId/products').get(getProductsByProject)

module.exports = projectRoutes
