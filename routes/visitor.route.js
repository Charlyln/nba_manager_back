const express = require('express')
const visitors = express.Router()
const Game = require('../models/game.model')
const Team = require('../models/team.model')
const Player = require('../models/player.model')
const Visitor = require('../models/visitor.model')

visitors.get('/', async (req, res) => {
  try {
    const games = await Visitor.findAll({
      include: [
        {
          model: Team
        }
      ]
    })
    res.status(200).json(games)
  } catch (err) {
    res.status(400).json(err)
  }
})

visitors.get('/:UserUuid', async (req, res) => {
  const { UserUuid } = req.params
  try {
    const games = await Visitor.findAll({
      where: {
        UserUuid
      },
      include: [
        {
          model: Team
        }
      ]
    })
    res.status(200).json(games)
  } catch (err) {
    res.status(400).json(err)
  }
})

visitors.post('/', async (req, res) => {
  const { TeamUuid, name, logo } = req.body
  try {
    const games = await Visitor.create({
      TeamUuid,
      name,
      logo
    })
    res.status(201).json(games)
  } catch (err) {
    res.status(422).json(err)
  }
})

module.exports = visitors
