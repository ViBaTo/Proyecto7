const Product = require('../models/products')
const Project = require('../models/projects')

const getProducts = async (req, res) => {
  try {
    const products = await Project.find({})
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'Error getting products', error })
  }
}

const postProduct = async (req, res) => {
  const { name, productType, project } = req.body

  try {
    const product = new Product({
      name,
      productType,
      project,
      createdBy: req.user._id
    })

    const createdProduct = await product.save()

    // Add the product to the project's products array
    const projectToUpdate = await Project.findById(project)
    if (projectToUpdate) {
      projectToUpdate.products.push(createdProduct._id)
      await projectToUpdate.save()
    }

    res.status(201).json(createdProduct)
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error })
  }
}

const updateProduct = async (req, res) => {
  const { id } = req.params
  const { name, productType, project } = req.body

  try {
    const product = await Product.findById(id)

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    product.name = name || product.name
    product.productType = productType || product.productType
    product.project = project || product.project

    const updatedProduct = await product.save()

    res.json(updatedProduct)
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error })
  }
}

const deleteProduct = async (req, res) => {
  const { id } = req.params

  try {
    const product = await Product.findById(id)

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    await product.remove()

    res.json({ message: 'Product removed' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error })
  }
}

const getProductsByProject = async (req, res) => {
  const { projectId } = req.params

  try {
    const products = await Product.find({ project: projectId }).populate(
      'createdBy',
      'name email'
    )
    res.json(products)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error getting products by project', error })
  }
}

module.exports = {
  getProducts,
  postProduct,
  updateProduct,
  deleteProduct,
  getProductsByProject
}
