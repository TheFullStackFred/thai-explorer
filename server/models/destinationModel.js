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
      type: String,
      required: [true, 'Image URL is required']
    },
    tags: {
      type: [String],
      validate: {
        validator: (tagsArray) => tagsArray && tagsArray.length > 0,
        message: 'At least one tag is required'
      }
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Destination', destinationSchema)
