const Game = require('../models/game.model')
const Team = require('../models/team.model')
const Visitor = require('../models/visitor.model')
const Season = require('../models/season.model')

const getMulitpledata = async (UserUuid, TeamUuid, SeasonUuid) => {
  // Games
  const games = await Game.findAll({
    where: {
      UserUuid
    },
    include: [{ model: Team }, { model: Visitor }]
  })

  const gamesPlayed = games.filter(
    (game) =>
      (game.team1 && game.TeamUuid === TeamUuid) ||
      (game.team1 && game.Visitor.TeamUuid === TeamUuid)
  )

  const gamesWined = games.filter(
    (game) =>
      (game.TeamUuid === TeamUuid && game.team1 > game.team2) ||
      (game.Visitor.TeamUuid === TeamUuid && game.team1 < game.team2)
  )

  //   const gamesMyTeamPlayHome = games.filter(
  //     (game) => game.team1 && game.TeamUuid === TeamUuid
  //   )

  //   const gamesMyTeamPlayOutside = games.filter(
  //     (game) => game.Visitor.TeamUuid === TeamUuid
  //   )

  const nbrGamePlayed = gamesPlayed.length
  const nbrGameWined = gamesWined.length
  const nbrGameLoosed = nbrGamePlayed - nbrGameWined
  const percentageWining = (nbrGameWined / nbrGamePlayed) * 100

  // Seasons

  const seasons = await Season.findAll({
    where: {
      UserUuid
    },
    include: [{ model: Game }]
  })

  const nbrSeasons = seasons.length

  const seasonsFiltered = seasons.filter((season) =>
    season.Games.filter((game) => game.team1).length === season.Games.length
      ? true
      : false
  )
  const nbrSeasonsCompleted = seasonsFiltered.length

  const multipleData = {
    nbrGamePlayed,
    nbrSeasons,
    nbrSeasonsCompleted,
    nbrGameWined,
    nbrGameLoosed,
    percentageWining
  }

  return multipleData
}

module.exports = getMulitpledata
