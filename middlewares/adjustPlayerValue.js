const Player = require('../models/player.model')

const adjustPlayerValue = async (UserUuid) => {
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
        const res = await Player.update(
          {
            value: playerValue
          },
          { where: { uuid: player.uuid } }
        )
      } catch (err) {
        console.log(err)
      }
    })
  )
}

module.exports = adjustPlayerValue
