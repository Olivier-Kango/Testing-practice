function uppercase(value) {
  try {
    return value.toUpperCase()
  } catch(e) {
    return value
  }
}

module.exports = uppercase