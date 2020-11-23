const Player = require('../models/player.model')

const changePlayersAge = async (UserUuid) => {
  const players = await Player.findAll({
    where: {
      UserUuid
    }
  })

  let results = Promise.all(
    players.map(async (player) => {
      try {
        const res = await Player.update(
          {
            age: player.age + 1
          },
          { where: { uuid: player.uuid } }
        )
      } catch (err) {
        console.log(err)
      }
    })
  )
}

module.exports = changePlayersAge
