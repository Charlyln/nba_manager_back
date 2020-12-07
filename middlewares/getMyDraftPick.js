const Season = require('../models/season.model')
const Game = require('../models/game.model')
const Team = require('../models/team.model')

const getMyDraftPick = async (SeasonUuid, TeamUuid, UserUuid) => {
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

  const teamSorted = teams.sort(function (a, b) {
    return new Date(getWin(b)) - new Date(getWin(a))
  })

  const myPickFound = (team) => team.uuid === TeamUuid
  const myPick = teamSorted.findIndex(myPickFound) + 1

  return myPick
}

module.exports = getMyDraftPick
