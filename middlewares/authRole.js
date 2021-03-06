require('dotenv').config()
const jwt = require('jsonwebtoken')
const { SECRET } = process.env

const authRole = (role) => (req, res, next) => {
  let token

  if (req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (token) {
    jwt.verify(token, SECRET, (err, payload) => {
      if (err) res.status(400).json({ message: 'Invalid Token', error: err })

      if (payload.role === role) {
        next()
      } else {
        res.status(403).json({
          message: 'You are not allowed to access this'
        })
      }
    })
  } else {
    res.status(401).json({ message: 'no token provided' })
  }
}

module.exports = authRole
