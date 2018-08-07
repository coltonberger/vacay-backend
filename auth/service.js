const jwt = require('jsonwebtoken')

const secrete = '812937einsdkflkajd'

const signToken = (id, email) => {
  return jwt.sign({ _id: id, email }, secrete, { expiresIn: 60 * 60 * 5 })
}

module.exports = {
  signToken: signToken, secrete: secrete
}
