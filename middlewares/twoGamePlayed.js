const Game = require('../models/game.model')
const PlayerStats = require('../models/playersStats.model')
const gamePlayed = require('./gamePlayed')
const Team = require('../models/team.model')
const Player = require('../models/player.model')
const Visitor = require('../models/visitor.model')

const twoGamePlayed = async (uuid, TeamUuid) => {
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

  const gameFiltered = game.filter(
    (game) =>
      !game.teamWin &&
      game.TeamUuid !== TeamUuid &&
      game.Visitor.TeamUuid !== TeamUuid
  )

  const onlyTwoGame = gameFiltered.slice(0, 2)

  if (gameFiltered.length < 4) {
    const res = Promise.all(
      gameFiltered.map(async (game) => {
        try {
          return gamePlayed(game.uuid)
        } catch (err) {
          console.log(err)
        }
      })
    )
  } else {
    const res = Promise.all(
      onlyTwoGame.map(async (game) => {
        try {
          return gamePlayed(game.uuid)
        } catch (err) {
          console.log(err)
        }
      })
    )
  }

  return [gameFiltered, onlyTwoGame]
}

module.exports = twoGamePlayed
