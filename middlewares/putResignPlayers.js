const Player = require('../models/player.model')

const putResignPlayers = async (UserUuid, TeamUuid) => {
  const players = await Player.findAll({
    where: {
      UserUuid
    }
  })

  const filteredPlayers = players.filter(
    (player) =>
      player.TeamUuid && player.TeamUuid !== TeamUuid && !player.contractYear1
  )

  let results = Promise.all(
    filteredPlayers.map(async (player) => {
      try {
        const res = await Player.update(
          {
            contractYear1: player.salary,
            contractYear2: player.salary,
            contractYear3: player.salary,
            contractYear4: player.salary,
            contractLeft: 4
          },
          { where: { uuid: player.uuid } }
        )
      } catch (err) {
        console.log(err)
      }
    })
  )

  return filteredPlayers
}

module.exports = putResignPlayers
