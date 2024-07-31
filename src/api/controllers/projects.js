const Product = require('../models/products')
const Project = require('../models/projects')

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find()
      .populate('createdBy', 'name email')
      .populate('products')
    res.json(projects)
  } catch (error) {
    res.status(500).json({ message: 'Error getting projects', error })
  }
}

const postProject = async (req, res) => {
  const { name, productType } = req.body

  try {
    const project = new Project({
      name,
      productType,
      createdBy: req.user._id
    })

    const createdProject = await project.save()
    res.status(201).json(createdProject)
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error })
  }
}

const updateProject = async (req, res) => {
  const { id } = req.params
  const { name, productType } = req.body

  try {
    const project = await Project.findById(id)

    if (!project) {
      return res.status(404).json({ message: 'Project not found' })
    }

    project.name = name || project.name
    project.productType = productType || project.productType

    const updatedProject = await project.save()
    res.json(updatedProject)
  } catch (error) {
    res.status(500).json({ message: 'Error updating project', error })
  }
}

const deleteProject = async (req, res) => {
  const { id } = req.params

  try {
    const project = await Project.findById(id)

    if (!project) {
      return res.status(404).json({ message: 'Project not found' })
    }

    await project.remove()
    res.json({ message: 'Project removed' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project', error })
  }
}

module.exports = {
  getProjects,
  postProject,
  updateProject,
  deleteProject
}
