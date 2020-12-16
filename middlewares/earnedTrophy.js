const Trophy = require('../models/trophy.model')

const earnedTrophy = async (UserUuid, name) => {
  const trophyFind = await Trophy.findOne({
    where: {
      name,
      UserUuid
    }
  })

  var date = new Date()
  var dateToString = date.toString()

  const res = await Trophy.update(
    {
      earned: true,
      earnedAt: dateToString
    },
    { where: { uuid: trophyFind.dataValues.uuid } }
  )

  return res
}

module.exports = earnedTrophy
