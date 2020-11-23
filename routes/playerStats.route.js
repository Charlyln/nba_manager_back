const express = require('express')
const Player = require('../models/player.model')
const PlayerStats = require('../models/playersStats.model')
const playerStats = express.Router()

playerStats.get('/', async (req, res) => {
  try {
    const playerstats = await PlayerStats.findAll({
      include: [
        {
          model: Player
        }
      ]
    })
    res.status(200).json(playerstats)
  } catch (err) {
    res.status(400).json(err)
  }
})

playerStats.get('/:UserUuid', async (req, res) => {
  const UserUuid = req.params.UserUuid
  try {
    const playerstats = await PlayerStats.findAll({
      include: [
        {
          model: Player
        }
      ],
      where: {
        UserUuid
      }
    })
    res.status(200).json(playerstats)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }
})

playerStats.post('/', async (req, res) => {
  const {
    PlayerUuid,
    GameUuid,
    pts,
    reb,
    UserUuid,
    pas,
    teamIdAtTheGame
  } = req.body
  try {
    const playerstats = await PlayerStats.create({
      PlayerUuid,
      GameUuid,
      pts,
      reb,
      UserUuid,
      pas,
      teamIdAtTheGame
    })
    res.status(201).json(playerstats)
  } catch (err) {
    res.status(422).json(err)
  }
})

playerStats.put('/change/:uuid', async (req, res) => {
  const { pts, reb, pas } = req.body
  const uuid = req.params.uuid
  try {
    const playerstats = await PlayerStats.update(
      {
        pts,
        reb,
        pas
      },
      { where: { uuid } }
    )
    res.status(201).json(playerstats)
  } catch (err) {
    res.status(422).json(err)
  }
})
module.exports = playerStats
