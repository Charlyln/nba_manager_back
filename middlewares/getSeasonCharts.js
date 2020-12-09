const Team = require('../models/team.model')
const Player = require('../models/player.model')
const PlayerStats = require('../models/playersStats.model')
const Game = require('../models/game.model')
const Visitor = require('../models/visitor.model')

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

  const games = await Game.findAll({
    where: {
      SeasonUuid
    },
    include: [
      {
        model: Visitor
      }
    ]
  })

  const gamesFiltered = games
    .filter(
      (game) =>
        game.team1 &&
        (game.TeamUuid === TeamUuid || game.Visitor.TeamUuid === TeamUuid)
    )
    .sort(function (a, b) {
      return new Date(Number(a.date)) - new Date(Number(b.date))
    })

  const ptsArray = team.Players.map((player) => {
    const arrayFiltered = player.PlayerStats.sort(function (a, b) {
      return new Date(Number(a.Game.date)) - new Date(Number(b.Game.date))
    })

    const finalArray = gamesFiltered.map((game) => {
      const statFind = arrayFiltered.find((stat) => stat.GameUuid === game.uuid)

      if (statFind) {
        return statFind.pts
      } else {
        return null
      }
    })

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

    const finalArray = gamesFiltered.map((game) => {
      const statFind = arrayFiltered.find((stat) => stat.GameUuid === game.uuid)

      if (statFind) {
        return statFind.reb
      } else {
        return null
      }
    })

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

    const finalArray = gamesFiltered.map((game) => {
      const statFind = arrayFiltered.find((stat) => stat.GameUuid === game.uuid)

      if (statFind) {
        return statFind.pas
      } else {
        return null
      }
    })

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

    const finalArray = gamesFiltered.map((game) => {
      const statFind = arrayFiltered.find((stat) => stat.GameUuid === game.uuid)

      if (statFind) {
        return statFind.blk
      } else {
        return null
      }
    })

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

    const finalArray = gamesFiltered.map((game) => {
      const statFind = arrayFiltered.find((stat) => stat.GameUuid === game.uuid)

      if (statFind) {
        return statFind.stl
      } else {
        return null
      }
    })

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
