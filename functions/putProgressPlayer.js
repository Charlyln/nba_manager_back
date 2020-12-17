const Player = require('../models/player.model')
const Progress = require('../models/progress.model')
const Season = require('../models/season.model')

const putProgressPlayer = async (UserUuid, SeasonUuid) => {
  const players = await Player.findAll({
    where: {
      UserUuid
    }
  })

  const season = await Season.findByPk(SeasonUuid)

  let results = Promise.all(
    players.map(async (player) => {
      try {
        const res = await Progress.create({
          value: player.value,
          PlayerUuid: player.uuid,
          year: season.startYear
        })
      } catch (err) {
        console.log(err)
      }
    })
  )

  return season
}

module.exports = putProgressPlayer
