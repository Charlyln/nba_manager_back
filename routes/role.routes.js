const express = require('express')
const roles = express.Router()
const Role = require('../models/role.model')
const authRole = require('../middlewares/authRole')

roles.get('/', async (req, res) => {
  try {
    const roles = await Role.findAll()
    res.status(200).json(roles)
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = roles
