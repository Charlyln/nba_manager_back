const Season = require('../models/season.model')
const Game = require('../models/game.model')
const putProgressValuePerGame = require('./putProgressValuePerGame')
const Player = require('../models/player.model')

const putProgressValuePerSeason = async (UserUuid, SeasonUuid) => {
  const games = await Season.findOne({
    where: {
      uuid: SeasonUuid
    },
    include: [{ model: Game }]
  })
  const gamesNotPLayed = games.Games.filter((game) => !game.team1)

  const multiplicatorGameLength = gamesNotPLayed.length / 3

  const players = await Player.findAll({
    where: {
      UserUuid
    }
  })

  const playersFiltered = players.filter((player) => !player.isRookie)

  let results = Promise.all(
    playersFiltered.map(async (player) => {
      const difference = player.potential - player.value
      let multiplicatorIfPotential
      if (player.potential <= 93 && difference < 3.6 && difference >= 0) {
        multiplicatorIfPotential = difference / 3.6
      } else if (player.potential > 93 && difference < 7.2 && difference >= 0) {
        multiplicatorIfPotential = difference / 7.2
      } else {
        multiplicatorIfPotential = 1
      }

      try {
        const res = await Player.update(
          {
            ptsMax:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.ptsMax +
                  0.3 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.ptsMax +
                  0.6 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age > 33
                ? player.ptsMax -
                  0.3 * multiplicatorGameLength * multiplicatorIfPotential
                : player.ptsMax,
            rebMin:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.rebMin +
                  0.1 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.rebMin +
                  0.2 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age > 33
                ? player.rebMin -
                  0.1 * multiplicatorGameLength * multiplicatorIfPotential
                : player.rebMin,
            rebMax:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.rebMax +
                  0.1 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.rebMax +
                  0.2 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age > 33
                ? player.rebMax -
                  0.1 * multiplicatorGameLength * multiplicatorIfPotential
                : player.rebMax,
            pasMin:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.pasMin +
                  0.1 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.pasMin +
                  0.2 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age > 33
                ? player.pasMin -
                  0.1 * multiplicatorGameLength * multiplicatorIfPotential
                : player.pasMin,
            blkMin:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.blkMin +
                  0.02 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.blkMin +
                  0.04 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age > 33
                ? player.blkMin -
                  0.02 * multiplicatorGameLength * multiplicatorIfPotential
                : player.blkMin,
            blkMax:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.blkMax +
                  0.02 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.blkMax +
                  0.04 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age > 33
                ? player.blkMax -
                  0.02 * multiplicatorGameLength * multiplicatorIfPotential
                : player.blkMax,
            stlMin:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.stlMin +
                  0.02 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.stlMin +
                  0.04 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age > 33
                ? player.stlMin -
                  0.02 * multiplicatorGameLength * multiplicatorIfPotential
                : player.stlMin,
            stlMax:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.stlMax +
                  0.02 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.stlMax +
                  0.04 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age > 33
                ? player.stlMax -
                  0.02 * multiplicatorGameLength * multiplicatorIfPotential
                : player.stlMax,
            pasMax:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.pasMax +
                  0.1 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.pasMax +
                  0.2 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age > 33
                ? player.pasMax -
                  0.1 * multiplicatorGameLength * multiplicatorIfPotential
                : player.pasMax,
            ptsMin:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.ptsMin +
                  0.3 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.ptsMin +
                  0.6 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age > 33
                ? player.ptsMin -
                  0.3 * multiplicatorGameLength * multiplicatorIfPotential
                : player.ptsMin,
            valueAdjust:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.valueAdjust -
                  1 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.valueAdjust -
                  2 * multiplicatorGameLength * multiplicatorIfPotential
                : player.age > 33
                ? player.valueAdjust +
                  1 * multiplicatorGameLength * multiplicatorIfPotential
                : player.valueAdjust
          },
          { where: { uuid: player.uuid } }
        )
      } catch (err) {
        console.log(err)
      }
    })
  )
}

module.exports = putProgressValuePerSeason
