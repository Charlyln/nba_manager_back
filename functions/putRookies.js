const Player = require('../models/player.model')
const Team = require('../models/team.model')
const Season = require('../models/season.model')
const Game = require('../models/game.model')

const putRookies = async (UserUuid, TeamUuid, rookieUuid, SeasonUuid) => {
  const team = await Team.findOne({
    where: {
      uuid: TeamUuid
    },
    include: [{ model: Player }]
  })

  const myRookie = await Player.findByPk(rookieUuid)

  const res = await Player.update(
    {
      TeamUuid: TeamUuid,
      isBench: team.Players.length > 4 ? true : false,
      isRookie: false,
      contractLeft: 4,
      salary: 5000000,
      contractYear1: 5000000,
      contractYear2: 5000000,
      contractYear3: 5000000,
      contractYear4: 5000000
    },
    { where: { uuid: myRookie.uuid } }
  )

  const players = await Player.findAll({
    where: {
      UserUuid,
      isRookie: true
    }
  })

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

  const filteredPlayers = players
    .filter((player) => player.uuid !== rookieUuid && player.age === 20)
    .sort(function (a, b) {
      return new Date(b.value) - new Date(a.value)
    })

  const filteredTeams = teams.filter((team) => team.uuid !== TeamUuid)

  const getWin = (team) => {
    const array = season.Games.filter((game) => game.teamWin === team.uuid)

    return array.length
  }

  const teamSorted = filteredTeams.sort(function (a, b) {
    return new Date(getWin(a)) - new Date(getWin(b))
  })

  const allTeamSorted = teams.sort(function (a, b) {
    return new Date(getWin(a)) - new Date(getWin(b))
  })

  const allData = []

  let results = Promise.all(
    filteredPlayers.map(async (player, i) => {
      try {
        const team = teamSorted[i]

        if (team) {
          allData.push({ player, team })
          const res = await Player.update(
            {
              TeamUuid: team.uuid,
              isBench: true,
              isRookie: false,
              contractLeft: 4,
              salary: 5000000,
              contractYear1: 5000000,
              contractYear2: 5000000,
              contractYear3: 5000000,
              contractYear4: 5000000
            },
            { where: { uuid: player.uuid } }
          )
        } else {
          const res = await Player.update(
            {
              isRookie: false
            },
            { where: { uuid: player.uuid } }
          )
        }
      } catch (err) {
        console.log(err)
      }
    })
  )

  allData.push({ player: myRookie, team })

  const allDataSorted = allData.sort(function (a, b) {
    return new Date(getWin(a.team)) - new Date(getWin(b.team))
  })

  return { allDataSorted }
}

module.exports = putRookies
