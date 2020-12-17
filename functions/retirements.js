const Player = require('../models/player.model')

const retirements = async (UserUuid) => {
  const players = await Player.findAll({
    where: {
      UserUuid
    }
  })

  let results = Promise.all(
    players
      .filter((player) => player.age > 38)
      .map(async (player) => {
        try {
          const res = await Player.destroy({ where: { uuid: player.uuid } })
        } catch (err) {
          console.log(err)
        }
      })
  )
}

module.exports = retirements
