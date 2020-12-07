const express = require('express')
const seasons = express.Router()
const Season = require('../models/season.model')
const Game = require('../models/game.model')
const PlayerStats = require('../models/playersStats.model')
const Player = require('../models/player.model')
const Team = require('../models/team.model')
const getStatsHistory = require('../middlewares/getStatsHistory')
const getMyDraftPick = require('../middlewares/getMyDraftPick')

// include: [
//   { model: Likes },
//   {
//     model: User,
//     include: [
//       {
//         model: Followers,
//       },
//     ],
//   },

seasons.get('/', async (req, res) => {
  try {
    const seasons = await Season.findAll()
    res.status(200).json(seasons)
  } catch (err) {
    res.status(400).json(err)
  }
})

seasons.get('/:UserUuid', async (req, res) => {
  const { UserUuid } = req.params
  try {
    const seasons = await Season.findAll({
      where: {
        UserUuid
      },
      include: [
        {
          model: Game,
          include: [
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
            }
          ]
        }
      ]
    })
    res.status(200).json(seasons)
  } catch (err) {
    res.status(400).json(err)
  }
})

seasons.get('/myseason/:uuid', async (req, res) => {
  const { uuid } = req.params
  try {
    const seasons = await Season.findOne({
      where: {
        uuid
      }
    })
    res.status(200).json(seasons)
  } catch (err) {
    res.status(400).json(err)
  }
})

seasons.get('/history/:UserUuid/:SeasonUuid', async (req, res) => {
  const { UserUuid, SeasonUuid } = req.params
  try {
    const test = await getStatsHistory(UserUuid, SeasonUuid)

    res.status(200).json(test)
  } catch (err) {
    res.status(400).json(err)
  }
})

// seasons.get('/', async (req, res) => {
//   try {
//     const seasons = await Season.findAll()
//     res.status(200).json(seasons)
//   } catch (error) {
//     res.status(400).json({
//       status: 'error',
//       message: 'Invalid request'
//     })
//   }
// })

seasons.post(
  '/mydraftpick/:SeasonUuid/:TeamUuid/:UserUuid',
  async (req, res) => {
    const { SeasonUuid, TeamUuid, UserUuid } = req.params
    try {
      const seasons = await getMyDraftPick(SeasonUuid, TeamUuid, UserUuid)
      res.status(201).json(seasons)
    } catch (err) {
      res.status(422).json(err)
    }
  }
)

seasons.post('/', async (req, res) => {
  const { startYear, endYear, UserUuid } = req.body
  try {
    const seasons = await Season.create({
      startYear,
      endYear,
      UserUuid
    })
    res.status(201).json(seasons)
  } catch (err) {
    res.status(422).json(err)
  }
})

// seasons.put('/:uuid', async (req, res) => {
//   const uuid = req.params.uuid
//   const { team1, team2 } = req.body
//   try {
//     const seasons = await Season.update(
//       {
//         team1,
//         team2
//       },
//       { where: { uuid } }
//     )
//     res.status(201).json(seasons)
//   } catch (err) {
//     res.status(422).json(err)
//   }
// })

module.exports = seasons
