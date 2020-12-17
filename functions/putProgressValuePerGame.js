const Player = require('../models/player.model')

const putProgressValuePerGame = async (UserUuid) => {
  const players = await Player.findAll({
    where: {
      UserUuid
    }
  })

  const playersFiltered = players.filter((player) => !player.isRookie)

  let results = Promise.all(
    playersFiltered.map(async (player) => {
      const {
        ptsMax,
        rebMin,
        rebMax,
        pasMin,
        blkMin,
        blkMax,
        stlMin,
        stlMax,
        pasMax,
        ptsMin,
        valueAdjust
      } = player

      const playerValue =
        (ptsMax + ptsMin) / 2 +
        ((rebMin + rebMax) / 2) * 3 +
        ((pasMin + pasMax) / 2) * 3 +
        ((blkMin + blkMax) / 2) * 9 +
        ((stlMin + stlMax) / 2) * 14 +
        valueAdjust

      const ptsMulti = player.ptsTraining / 50
      const rebMulti = player.rebTraining / 50
      const pasMulti = player.pasTraining / 50

      try {
        const res = await Player.update(
          {
            ptsMax:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.ptsMax + 0.3 * ptsMulti
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.ptsMax + 0.6 * ptsMulti
                : player.age > 33
                ? player.ptsMax - 0.3
                : player.ptsMax,
            rebMin:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.rebMin + 0.1 * rebMulti
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.rebMin + 0.2 * rebMulti
                : player.age > 33
                ? player.rebMin - 0.1
                : player.rebMin,
            rebMax:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.rebMax + 0.1 * rebMulti
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.rebMax + 0.2 * rebMulti
                : player.age > 33
                ? player.rebMax - 0.1
                : player.rebMax,
            pasMin:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.pasMin + 0.1 * pasMulti
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.pasMin + 0.2 * pasMulti
                : player.age > 33
                ? player.pasMin - 0.1
                : player.pasMin,
            blkMin:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.blkMin + 0.02
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.blkMin + 0.04
                : player.age > 33
                ? player.blkMin - 0.02
                : player.blkMin,
            blkMax:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.blkMax + 0.02
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.blkMax + 0.04
                : player.age > 33
                ? player.blkMax - 0.02
                : player.blkMax,
            stlMin:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.stlMin + 0.02
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.stlMin + 0.04
                : player.age > 33
                ? player.stlMin - 0.02
                : player.stlMin,
            stlMax:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.stlMax + 0.02
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.stlMax + 0.04
                : player.age > 33
                ? player.stlMax - 0.02
                : player.stlMax,
            pasMax:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.pasMax + 0.1 * pasMulti
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.pasMax + 0.2 * pasMulti
                : player.age > 33
                ? player.pasMax - 0.1
                : player.pasMax,
            ptsMin:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.ptsMin + 0.3 * ptsMulti
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.ptsMin + 0.6 * ptsMulti
                : player.age > 33
                ? player.ptsMin - 0.3
                : player.ptsMin,
            value: playerValue,
            valueAdjust:
              player.age < 28 &&
              player.potential > player.value &&
              player.potential <= 93
                ? player.valueAdjust - 1
                : player.age < 28 &&
                  player.potential > player.value &&
                  player.potential > 93
                ? player.valueAdjust - 2
                : player.age > 33
                ? player.valueAdjust + 1
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

module.exports = putProgressValuePerGame
