const express = require('express')
const players = express.Router()
const Player = require('../models/player.model')
const Team = require('../models/team.model')
const PlayerStats = require('../models/playersStats.model')
const Game = require('../models/game.model')
const changePlayersAge = require('../middlewares/changePlayersAge')
const changePlayersContract = require('../middlewares/changePlayersContract')
const retirements = require('../middlewares/retirements')
const playerOptions = require('../middlewares/playerOptions')
const getBestPlayers = require('../middlewares/getBestPlayers')

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

players.get('/bestPlayers/:UserUuid/:SeasonUuid', async (req, res) => {
  const { UserUuid, SeasonUuid } = req.params
  try {
    const bestPlayers = await getBestPlayers(UserUuid, SeasonUuid)
    res.status(200).json(bestPlayers)
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

players.post('/changeAge/:UserUuid', async (req, res) => {
  const UserUuid = req.params.UserUuid
  try {
    const changeage = await changePlayersAge(UserUuid)
    res.status(201).json(changeage)
  } catch (err) {
    res.status(422).json(err)
  }
})

players.post('/changeContract/:UserUuid', async (req, res) => {
  const UserUuid = req.params.UserUuid
  try {
    const changecontract = await changePlayersContract(UserUuid)
    res.status(201).json(changecontract)
  } catch (err) {
    res.status(422).json(err)
  }
})

players.post('/retirements/:UserUuid', async (req, res) => {
  const UserUuid = req.params.UserUuid
  try {
    const retirement = await retirements(UserUuid)
    res.status(201).json(retirement)
  } catch (err) {
    res.status(422).json(err)
  }
})

players.post('/playerOptions/:TeamUuid', async (req, res) => {
  const TeamUuid = req.params.TeamUuid
  try {
    const playerOption = await playerOptions(TeamUuid)
    res.status(201).json(playerOption)
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
    contractLeft,
    age
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
        contractLeft,
        age
      },
      { where: { uuid } }
    )
    res.status(201).json(players)
  } catch (err) {
    res.status(422).json(err)
  }
})

// players.delete('/:uuid', async (req, res) => {
//   const uuid = req.params.uuid
//   try {
//     await Travel.destroy({ where: { uuid, age } })
//     res.status(204).send('Votre travel a été supprimé')
//   } catch (err) {
//     res.status(422).json(err)
//   }
// })

module.exports = players
