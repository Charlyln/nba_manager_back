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

  const ptsArray = team.Players.map((player) => {
    const arrayFiltered = player.PlayerStats.sort(function (a, b) {
      return new Date(Number(a.Game.date)) - new Date(Number(b.Game.date))
    })

    const finalArray = arrayFiltered.map((stat) => stat.pts)

    const object = {
      name: player.firstName + ' ' + player.lastName,
      data: finalArray
    }
    return object
  })

  const rebArray = team.Players.map((player) => {
    const arrayFiltered = player.PlayerStats.sort(function (a, b) {
      return new Date(Number(a.Game.date)) - new Date(Number(b.Game.date))
    })

    const finalArray = arrayFiltered.map((stat) => stat.reb)

    const object = {
      name: player.firstName + ' ' + player.lastName,
      data: finalArray
    }
    return object
  })

  const pasArray = team.Players.map((player) => {
    const arrayFiltered = player.PlayerStats.sort(function (a, b) {
      return new Date(Number(a.Game.date)) - new Date(Number(b.Game.date))
    })

    const finalArray = arrayFiltered.map((stat) => stat.pas)

    const object = {
      name: player.firstName + ' ' + player.lastName,
      data: finalArray
    }
    return object
  })

  const blkArray = team.Players.map((player) => {
    const arrayFiltered = player.PlayerStats.sort(function (a, b) {
      return new Date(Number(a.Game.date)) - new Date(Number(b.Game.date))
    })

    const finalArray = arrayFiltered.map((stat) => stat.blk)

    const object = {
      name: player.firstName + ' ' + player.lastName,
      data: finalArray
    }
    return object
  })

  const stlArray = team.Players.map((player) => {
    const arrayFiltered = player.PlayerStats.sort(function (a, b) {
      return new Date(Number(a.Game.date)) - new Date(Number(b.Game.date))
    })

    const finalArray = arrayFiltered.map((stat) => stat.stl)

    const object = {
      name: player.firstName + ' ' + player.lastName,
      data: finalArray
    }
    return object
  })

  const object = [ptsArray, rebArray, pasArray, blkArray, stlArray]
  return object
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
