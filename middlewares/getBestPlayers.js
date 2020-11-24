const Game = require('../models/game.model')
const Player = require('../models/player.model')
const PlayerStats = require('../models/playersStats.model')

const getBestPlayers = async (UserUuid, SeasonUuid) => {
  const players = await Player.findAll({
    where: {
      UserUuid
    },
    include: [
      {
        model: PlayerStats,
        include: [
          {
            model: Game
          },
          { model: Player }
        ]
      }
    ]
  })

  const filteredPlayers = players.filter(
    (player) => player.PlayerStats.length > 0
  )

  const reFilteredPlayers = filteredPlayers.filter((player) =>
    player.PlayerStats.filter((stat) => stat.Game.SeasonUuid === SeasonUuid)
  )

  const reReFilteredPlayers = reFilteredPlayers
    .sort(function (a, b) {
      return (
        new Date(b.PlayerStats.reduce((a, v) => (a = a + v.pts), 0)) -
        new Date(a.PlayerStats.reduce((a, v) => (a = a + v.pts), 0))
      )
    })
    .slice(0, 12)

  return reReFilteredPlayers
}

module.exports = getBestPlayers
