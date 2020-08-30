const express = require('express')
const teams = express.Router()
const Team = require('../models/team.model')
const User = require('../models/user.model')

teams.get('/', async (req, res) => {
  try {
    const teams = await Team.findAll({
      include: [
        {
          model: User
        }
      ]
    })
    res.status(200).json(teams)
  } catch (err) {
    res.status(400).json(err)
  }
})

teams.get('/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    const teams = await Team.findOne({
      where: {
        uuid
      },
      include: [
        {
          model: User
        }
      ]
    })
    res.status(200).json(teams)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }
})

teams.post('/', async (req, res) => {
  const { name, UserUuid } = req.body
  try {
    const teams = await Team.create({
      name,
      UserUuid
    })
    res.status(201).json(teams)
  } catch (err) {
    res.status(422).json(err)
  }
})

module.exports = teams
