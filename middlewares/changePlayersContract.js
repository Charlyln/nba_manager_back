const Player = require('../models/player.model')

const changePlayersContract = async (UserUuid) => {
  const players = await Player.findAll({
    where: {
      UserUuid
    }
  })

  let results = Promise.all(
    players
      .filter((player) => player.contractLeft > 0)
      .map(async (player) => {
        try {
          const res = await Player.update(
            {
              contractLeft: player.contractLeft - 1
            },
            { where: { uuid: player.uuid } }
          )
        } catch (err) {
          console.log(err)
        }
      })
  )
}

module.exports = changePlayersContract
