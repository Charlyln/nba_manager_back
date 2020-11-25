const express = require('express')
const users = express.Router()
const User = require('../models/user.model')

users.get('/', async (req, res) => {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (err) {
    res.status(400).json(err)
  }
})

users.get('/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    const user = await User.findOne({
      where: {
        uuid
      }
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }
})

users.post('/', async (req, res) => {
  const { pseudo } = req.body
  try {
    const user = await User.create({
      pseudo
    })
    res.status(201).json(user)
  } catch (err) {
    res.status(422).json(err)
  }
})

users.delete('/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    await User.destroy({ where: { uuid } })
    res.status(204).send('User a été supprimé')
  } catch (err) {
    res.status(422).json(err)
  }
})

module.exports = users
