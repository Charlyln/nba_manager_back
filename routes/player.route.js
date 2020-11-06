const express = require('express')
const players = express.Router()
const Player = require('../models/player.model')
const Team = require('../models/team.model')
const PlayerStats = require('../models/playersStats.model')
const Game = require('../models/game.model')

players.get('/', async (req, res) => {
  try {
    const players = await Player.findAll({
      include: [
        {
          model: Team
        }
      ]
    })
    res.status(200).json(players)
  } catch (err) {
    res.status(400).json(err)
  }
})

players.get('/mystats/:TeamUuid', async (req, res) => {
  const { TeamUuid } = req.params
  try {
    const players = await Player.findAll({
      where: {
        TeamUuid
      },
      include: [
        {
          model: Team
        },
        {
          model: PlayerStats,
          include: [
            {
              model: Game
            }
          ]
        }
      ]
    })
    res.status(200).json(players)
  } catch (err) {
    res.status(400).json(err)
  }
})

players.get('/:UserUuid', async (req, res) => {
  const UserUuid = req.params.UserUuid
  try {
    const players = await Player.findAll({
      where: {
        UserUuid
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
  const { date, lastName, TeamUuid } = req.body
  try {
    const players = await Player.create({
      date,
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
  const {
    firstName,
    lastName,
    TeamUuid,
    ptsMin,
    ptsMax,
    rebMin,
    rebMax,
    pasMin,
    pasMax,
    salary,
    contractLeft
  } = req.body
  try {
    const players = await Player.update(
      {
        firstName,
        lastName,
        TeamUuid,
        ptsMin,
        ptsMax,
        rebMin,
        rebMax,
        pasMin,
        pasMax,
        salary,
        contractLeft
      },
      { where: { uuid } }
    )
    res.status(201).json(players)
  } catch (err) {
    res.status(422).json(err)
  }
})

module.exports = players
