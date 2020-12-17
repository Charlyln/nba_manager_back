const express = require('express')
const games = express.Router()
const Game = require('../models/game.model')
const Team = require('../models/team.model')
const Player = require('../models/player.model')
const Visitor = require('../models/visitor.model')
const PlayerStats = require('../models/playersStats.model')

games.get('/', async (req, res) => {
  try {
    const games = await Game.findAll({
      include: [
        {
          model: Team
        },
        {
          model: PlayerStats,
          include: [
            {
              model: Player,
              include: [
                {
                  model: Team
                }
              ]
            }
          ]
        },
        {
          model: Visitor,
          include: [
            {
              model: Team,
              include: [
                {
                  model: Player
                }
              ]
            }
          ]
        }
      ]
    })
    res.status(200).json(games)
  } catch (err) {
    res.status(400).json(err)
  }
})

games.get('/:SeasonUuid/:TeamUuid', async (req, res) => {
  const { SeasonUuid, TeamUuid } = req.params
  try {
    const games = await Game.findAll({
      where: {
        SeasonUuid
      },
      include: [
        {
          model: Team,
          include: [
            {
              model: Player
            }
          ]
        },
        {
          model: PlayerStats,
          include: [
            {
              model: Player,
              include: [
                {
                  model: Team
                }
              ]
            }
          ]
        },
        {
          model: Visitor,
          include: [
            {
              model: Team,
              include: [
                {
                  model: Player
                }
              ]
            }
          ]
        }
      ]
    })

    const gamesFiltered = games.filter(
      (game) => game.TeamUuid === TeamUuid || game.Visitor.TeamUuid === TeamUuid
    )
    res.status(200).json(gamesFiltered)
  } catch (err) {
    res.status(400).json(err)
  }
})

games.get('/:SeasonUuid', async (req, res) => {
  const { SeasonUuid } = req.params
  try {
    const games = await Game.findAll({
      where: {
        SeasonUuid
      },
      include: [
        {
          model: Team,
          include: [
            {
              model: Player
            }
          ]
        },
        {
          model: PlayerStats,
          include: [
            {
              model: Player,
              include: [
                {
                  model: Team
                }
              ]
            }
          ]
        },
        {
          model: Visitor,
          include: [
            {
              model: Team,
              include: [
                {
                  model: Player
                }
              ]
            }
          ]
        }
      ]
    })

    res.status(200).json(games)
  } catch (err) {
    res.status(400).json(err)
  }
})

games.get('/', async (req, res) => {
  try {
    const games = await Game.findAll()
    res.status(200).json(games)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }
})

games.post('/', async (req, res) => {
  const {
    TeamUuid,
    VisitorUuid,
    date,
    UserUuid,
    SeasonUuid,
    team1,
    team2
  } = req.body
  try {
    const games = await Game.create({
      TeamUuid,
      VisitorUuid,
      date,
      UserUuid,
      SeasonUuid,
      team1,
      team2
    })
    res.status(201).json(games)
  } catch (err) {
    res.status(422).json(err)
  }
})

games.put('/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  const {
    TeamUuid,
    VisitorUuid,
    date,
    UserUuid,
    SeasonUuid,
    team1,
    team2,
    teamWin,
    teamLoose
  } = req.body
  try {
    const games = await Game.update(
      {
        TeamUuid,
        VisitorUuid,
        date,
        UserUuid,
        SeasonUuid,
        team1,
        team2,
        teamWin,
        teamLoose
      },
      { where: { uuid } }
    )
    res.status(201).json(games)
  } catch (err) {
    res.status(422).json(err)
  }
})

module.exports = games
