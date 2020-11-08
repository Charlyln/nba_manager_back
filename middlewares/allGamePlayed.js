const Game = require('../models/game.model')
const PlayerStats = require('../models/playersStats.model')
const gamePlayed = require('./gamePlayed')
const Team = require('../models/team.model')
const Player = require('../models/player.model')
const Visitor = require('../models/visitor.model')

const allGamePlayed = async (uuid) => {
  const game = await Game.findAll({
    where: {
      SeasonUuid: uuid
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

  const res = Promise.all(
    game
      .filter((game) => game.PlayerStats.length < 1)
      .map(async (game) => {
        try {
          return gamePlayed(game.uuid)
        } catch (err) {
          console.log(err)
        }
      })
  )

  return res
}

module.exports = allGamePlayed
