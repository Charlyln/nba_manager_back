const Team = require('../models/team.model')
const Player = require('../models/player.model')
const Progress = require('../models/progress.model')

const getProgressCharts = async (TeamUuid) => {
  const progress = await Team.findOne({
    where: {
      uuid: TeamUuid
    },
    include: [
      {
        model: Player,
        include: [
          {
            model: Progress
          }
        ]
      }
    ]
  })

  const arrayFilter = progress.Players.map((player) => {
    const arrayFiltered = player.Progresses.sort(function (a, b) {
      return new Date(Number(a.year)) - new Date(Number(b.year))
    }).map((progress) => progress.value)

    const object = {
      name: player.firstName + ' ' + player.lastName,
      data: arrayFiltered
    }
    return object
  })

  return arrayFilter
}

module.exports = getProgressCharts
