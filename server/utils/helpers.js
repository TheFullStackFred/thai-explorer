const handleNotFound = (data, errorMessage) => {
  if (!data) {
    const error = new Error(errorMessage)
    error.status = 404
    throw error
  }
}

module.exports = {
  handleNotFound
}
