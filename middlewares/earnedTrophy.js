const Trophy = require('../models/trophy.model')

const earnedTrophy = async (UserUuid, name) => {
  const trophyFind = await Trophy.findOne({
    where: {
      name,
      UserUuid
    }
  })

  const res = await Trophy.update(
    {
      earned: true
    },
    { where: { uuid: trophyFind.dataValues.uuid } }
  )

  return res
}

module.exports = earnedTrophy
