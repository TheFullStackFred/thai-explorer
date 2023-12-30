const express = require('express')
const router = express.Router()

const {
  getDestinations,
  addDestination,
  updateDestination,
  deleteDestination
} = require('../controller/destinationController')

router.route('/').get(getDestinations).post(addDestination)

router.route('/:id').put(updateDestination).delete(deleteDestination)

module.exports = router
