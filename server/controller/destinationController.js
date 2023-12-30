const asyncHandler = require('express-async-handler')

// @desc Get destinations
// @route GET /api/destinations
// @access Public
const getDestinations = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get destinations' })
})

// @desc Set destination
// @route POST /api/destinations
// @access Public
const setDestination = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(202).json({ message: 'Set destination' })
})

// @desc Update destinations
// @route PUT /api/destinations/:id
// @access Public
const updateDestination = asyncHandler(async (req, res) => {
  res.status(202).json({ message: `Update destination ${req.params.id}` })
})

// @desc Delete destination
// @route DELETE /api/destinations/:id
// @access Public
const deleteDestination = asyncHandler(async (req, res) => {
  res.status(202).json({ message: `Delete destination ${req.params.id}` })
})

module.exports = {
  getDestinations,
  setDestination,
  updateDestination,
  deleteDestination
}
