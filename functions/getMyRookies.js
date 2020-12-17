const Player = require('../models/player.model')

const getMyRookies = async (UserUuid, rookieTeam) => {
  const rookies = await Player.findAll({
    where: {
      UserUuid,
      rookieTeam
    }
  })
  return rookies
}

module.exports = getMyRookies
