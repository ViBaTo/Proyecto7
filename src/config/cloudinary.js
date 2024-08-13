const cloudinary = require('cloudinary').v2

const connectCloudinary = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_secret: process.env.API_SECRET,
      api_key: process.env.API_KEY
    })
    console.log({ message: 'Connected to Cloudinary' })
  } catch (error) {
    return res.status(400).json({ message: 'Failed to connect to cloudinary' })
  }
}

module.exports = { connectCloudinary }
