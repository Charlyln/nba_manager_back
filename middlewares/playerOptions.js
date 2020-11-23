const Player = require('../models/player.model')

const playerOptions = async (TeamUuid) => {
  const players = await Player.findAll({
    where: {
      TeamUuid
    }
  })

  let results = Promise.all(
    players
      .filter((player) => player.contractLeft === 0)
      .map(async (player) => {
        try {
          const res = await Player.update(
            {
              TeamUuid: null
            },
            { where: { uuid: player.uuid } }
          )
        } catch (err) {
          console.log(err)
        }
      })
  )
}

module.exports = playerOptions
