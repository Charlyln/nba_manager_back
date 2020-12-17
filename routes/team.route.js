const express = require('express')
const teams = express.Router()
const Team = require('../models/team.model')
const User = require('../models/user.model')
const Player = require('../models/player.model')
const PlayerStats = require('../models/playersStats.model')
const Game = require('../models/game.model')
const Visitor = require('../models/visitor.model')
const putSalaryCapLeft = require('../functions/putSalaryCapLeft')
const getSeasonCharts = require('../functions/getSeasonCharts')

teams.get('/', async (req, res) => {
  try {
    const teams = await Team.findAll({
      include: [
        {
          model: User
        },
        {
          model: Player
        }
      ]
    })
    res.status(200).json(teams)
  } catch (err) {
    res.status(400).json(err)
  }
})

teams.get('/myleague/:UserUuid', async (req, res) => {
  const { UserUuid } = req.params
  try {
    const teams = await Team.findAll({
      where: {
        UserUuid
      },
      order: [['name', 'ASC']],
      include: [
        {
          model: Player
        }
      ]
    })

    res.status(200).json(teams)
  } catch (err) {
    res.status(400).json(err)
  }
})

teams.get('/myteam/:UserUuid', async (req, res) => {
  const { UserUuid } = req.params
  try {
    const teams = await Team.findOne({
      where: {
        UserUuid: UserUuid,
        choice: true
      },
      include: [
        {
          model: Player
        }
      ]
    })
    res.status(200).json(teams)
  } catch (err) {
    res.status(400).json(err)
  }
})

teams.get('/myteam/stats/:UserUuid/:SeasonUuid', async (req, res) => {
  const { UserUuid, SeasonUuid } = req.params
  try {
    const teams = await Team.findOne({
      where: {
        UserUuid: UserUuid,
        choice: true
      },
      include: [
        {
          model: Player,
          include: [
            {
              model: PlayerStats,
              include: [
                {
                  model: Game,
                  include: [
                    {
                      model: Team
                    },
                    {
                      model: Visitor
                    }
                  ],
                  where: {
                    SeasonUuid
                  }
                }
              ]
            }
          ]
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
          model: Player
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

// teams.get('/myleague', async (req, res) => {
//   const UserUuid = req.params.uuid
//   try {
//     const teams = await Team.findAll()
//     res.status(200).json(teams)
//   } catch (error) {
//     res.status(400).json(err)
//   }
// })

teams.put('/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  const { choice } = req.body
  try {
    const teams = await Team.update(
      {
        choice
      },
      { where: { uuid } }
    )
    res.status(201).json(teams)
  } catch (err) {
    res.status(422).json(err)
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

teams.post('/salaryCap/:UserUuid/:TeamUuid', async (req, res) => {
  const { UserUuid, TeamUuid } = req.params
  try {
    const teams = await putSalaryCapLeft(UserUuid, TeamUuid)
    res.status(201).json(teams)
  } catch (err) {
    res.status(422).json(err)
  }
})

teams.post('/myteam/charts/:UserUuid', async (req, res) => {
  const { UserUuid } = req.params
  const { SeasonUuid, TeamUuid } = req.body

  try {
    const team = await getSeasonCharts(UserUuid, TeamUuid, SeasonUuid)
    res.status(201).json(team)
  } catch (err) {
    res.status(422).json(err)
  }
})

teams.post('/:uuid', async (req, res) => {
  const { name, UserUuid } = req.body
  const { uuid } = req.params
  try {
    const teams = await Team.create({
      name,
      UserUuid,
      uuid
    })
    res.status(201).json(teams)
  } catch (err) {
    res.status(422).json(err)
  }
})

module.exports = teams
