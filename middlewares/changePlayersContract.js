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
              contractLeft: player.contractLeft - 1,
              contractYear1: !player.contractYear2
                ? null
                : player.contractYear1,
              contractYear2: !player.contractYear3
                ? null
                : player.contractYear2,
              contractYear3: !player.contractYear4
                ? null
                : player.contractYear3,
              contractYear4: null
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
