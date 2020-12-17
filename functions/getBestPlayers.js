const Game = require('../models/game.model')
const Player = require('../models/player.model')
const PlayerStats = require('../models/playersStats.model')
const Team = require('../models/team.model')
const Season = require('../models/season.model')

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
            model: Game,
            where: {
              SeasonUuid
            }
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

  const bestPlayersSorted2 = reFilteredPlayers
    .sort(function (a, b) {
      const bSum = parseFloat(
        b.PlayerStats.reduce((a, v) => (a = a + v.pts), 0) /
          b.PlayerStats.length
      )
      const aSum = parseFloat(
        a.PlayerStats.reduce((a, v) => (a = a + v.pts), 0) /
          a.PlayerStats.length
      )
      return new Date(bSum) - new Date(aSum)
    })
    .slice(0, 12)

  const season = await Season.findOne({
    where: {
      uuid: SeasonUuid
    },
    include: [{ model: Game }]
  })

  const teams = await Team.findAll({
    where: {
      UserUuid
    }
  })

  const getWin = (team) => {
    const array = season.Games.filter((game) => game.teamWin === team.uuid)

    return array.length
  }

  const bestThreeTeamSorted = teams
    .sort(function (a, b) {
      return new Date(getWin(b)) - new Date(getWin(a))
    })
    .slice(0, 3)

  const test = bestPlayersSorted2.map((player) => {
    return {
      player,
      total: Number(
        player.PlayerStats.reduce((a, v) => (a = a + v.pts), 0) /
          player.PlayerStats.length
      )
    }
  })

  const testSorted = test.sort((a, b) => b.total - a.total)
  const bestPlayersSorted = testSorted.map((player) => player.player)
  const onlyThreePlayersBest = bestPlayersSorted.slice(0, 3)

  const TeamUuids = bestThreeTeamSorted.map((team) => team.uuid)

  const mvpFound = onlyThreePlayersBest.find((player) => {
    const found = TeamUuids.find((uuid) => player.TeamUuid === uuid)
    if (found) {
      return player
    }
  })

  if (mvpFound) {
    return { bestPlayersSorted, mvpFound }
  } else {
    return { bestPlayersSorted, mvpFound: bestPlayersSorted[0] }
  }
}

module.exports = getBestPlayers
