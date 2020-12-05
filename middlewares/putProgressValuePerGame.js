const Player = require('../models/player.model')

const putProgressValuePerGame = async (UserUuid) => {
  const players = await Player.findAll({
    where: {
      UserUuid
    }
  })

  let results = Promise.all(
    players.map(async (player) => {
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

      try {
        if (player.potential > player.value) {
          const res = await Player.update(
            {
              ptsMax:
                player.age < 28
                  ? player.ptsMax + 0.01
                  : player.age > 33
                  ? player.ptsMax - 0.01
                  : player.ptsMax,
              rebMin:
                player.age < 28
                  ? player.rebMin + 0.01
                  : player.age > 33
                  ? player.rebMin - 0.01
                  : player.rebMin,
              rebMax:
                player.age < 28
                  ? player.rebMax + 0.01
                  : player.age > 33
                  ? player.rebMax - 0.01
                  : player.rebMax,
              pasMin:
                player.age < 28
                  ? player.pasMin + 0.01
                  : player.age > 33
                  ? player.pasMin - 0.01
                  : player.pasMin,
              blkMin:
                player.age < 28
                  ? player.blkMin + 0.001
                  : player.age > 33
                  ? player.blkMin - 0.001
                  : player.blkMin,
              blkMax:
                player.age < 28
                  ? player.blkMax + 0.001
                  : player.age > 33
                  ? player.blkMax - 0.001
                  : player.blkMax,
              stlMin:
                player.age < 28
                  ? player.stlMin + 0.001
                  : player.age > 33
                  ? player.stlMin - 0.001
                  : player.stlMin,
              stlMax:
                player.age < 28
                  ? player.stlMax + 0.001
                  : player.age > 33
                  ? player.stlMax - 0.001
                  : player.stlMax,
              pasMax:
                player.age < 28
                  ? player.pasMax + 0.01
                  : player.age > 33
                  ? player.pasMax - 0.01
                  : player.pasMax,
              ptsMin:
                player.age < 28
                  ? player.ptsMin + 0.01
                  : player.age > 33
                  ? player.ptsMin - 0.01
                  : player.ptsMin,
              value: playerValue
            },
            { where: { uuid: player.uuid } }
          )
        }
      } catch (err) {
        console.log(err)
      }
    })
  )
}

module.exports = putProgressValuePerGame
