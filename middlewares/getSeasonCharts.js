const Team = require('../models/team.model')
const Player = require('../models/player.model')
const PlayerStats = require('../models/playersStats.model')
const Game = require('../models/game.model')

const getSeasonCharts = async (UserUuid, TeamUuid, SeasonUuid) => {
  const team = await Team.findOne({
    where: {
      uuid: TeamUuid
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
                where: { SeasonUuid }
              }
            ]
          }
        ]
      }
    ]
  })

  const array = team.Players.map((player) => {
    const arrayFiltered = player.PlayerStats.map((stat) => stat.pts)

    const object = {
      name: player.firstName + ' ' + player.lastName,
      data: arrayFiltered
    }
    return object
  })

  return array
}

module.exports = getSeasonCharts

//   let maxs = []
//   let mins = []

// const playerMax = Math.max(...arrayFiltered)
// maxs.push(playerMax)

// const playerMin = Math.min(...arrayFiltered)
// mins.push(playerMin)

//   const max = Math.max(...maxs)

//   const min = Math.min(...mins)

//   return { array, max, min }
