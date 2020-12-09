const Player = require('../models/player.model')

const putUpdateStatsBeg = async (UserUuid) => {
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
            ptsBeg: player.ptsMin,
            pasBeg: player.pasMin,
            rebBeg: player.rebMin
          },
          { where: { uuid: player.uuid } }
        )
      } catch (err) {
        console.log(err)
      }
    })
  )
}

module.exports = putUpdateStatsBeg
