const express = require('express')
const players = express.Router()
const Player = require('../models/player.model')

players.get('/', async (req, res) => {
  try {
    const players = await Player.findAll()
    res.status(200).json(players)
  } catch (err) {
    res.status(400).json(err)
  }
})

players.get('/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    const players = await Player.findOne({
      where: {
        uuid
      }
    })
    res.status(200).json(players)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }
})

players.post('/', async (req, res) => {
  const { firstName, lastName, TeamUuid } = req.body
  try {
    const players = await Player.create({
      firstName,
      lastName,
      TeamUuid
    })
    res.status(201).json(players)
  } catch (err) {
    res.status(422).json(err)
  }
})

players.put('/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  const { firstName, lastName, TeamUuid } = req.body
  try {
    const players = await Player.update(
      {
        firstName,
        lastName,
        TeamUuid
      },
      { where: { uuid } }
    )
    res.status(201).json(players)
  } catch (err) {
    res.status(422).json(err)
  }
})

module.exports = players
