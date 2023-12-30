const asyncHandler = require('express-async-handler')
const { handleNotFound } = require('../utils//helpers')
const Destination = require('../models/destinationModel')

// @desc Get destinations
// @route GET /api/destinations
// @access Public
const getDestinations = asyncHandler(async (req, res) => {
  const destinations = await Destination.find()
  res.status(200).json(destinations)
})

// @desc Set destination
// @route POST /api/destinations
// @access Public
const addDestination = asyncHandler(async (req, res) => {
  const destination = await Destination.create(req.body)
  res.status(201).json(destination)
})

// @desc Update destinations
// @route PUT /api/destinations/:id
// @access Public
const updateDestination = asyncHandler(async (req, res) => {
  const destination = await Destination.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  handleNotFound(destination, 'Destination not found')

  res.status(200).json({ message: 'Updated destination', destination })
})

// @desc Delete destination
// @route DELETE /api/destinations/:id
// @access Public
const deleteDestination = asyncHandler(async (req, res) => {
  const destination = await Destination.findByIdAndDelete(req.params.id)

  handleNotFound(destination, 'Destination not found')

  res.status(200).json({ message: `Deleted destination ${destination.name}` })
})

module.exports = {
  getDestinations,
  addDestination,
  updateDestination,
  deleteDestination
}
