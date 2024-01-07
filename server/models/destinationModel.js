const mongoose = require('mongoose')

const destinationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    },
    imageUrl: {
      type: [String],
      validate: {
        validator: (arr) =>
          arr &&
          arr.every((url) => typeof url === 'string' && url.trim() !== ''),
        message: 'At least one image URL is required'
      }
    },
    tags: {
      type: [String],
      validate: {
        validator: (arr) =>
          arr && arr.every((tag) => typeof tag === 'string' && tag !== ''),
        message: 'At least one tag is required'
      }
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Destination', destinationSchema)
