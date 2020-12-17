const Trophy = require('../models/trophy.model')

const viewedTrophy = async (UserUuid) => {
  const trophies = await Trophy.findAll({
    where: {
      UserUuid,
      isViewed: false,
      earned: true
    }
  })

  let results = Promise.all(
    trophies.map(async (trophy) => {
      try {
        const res = await Trophy.update(
          { isViewed: true },
          { where: { uuid: trophy.uuid } }
        )
      } catch (err) {
        console.log(err)
      }
    })
  )

  return trophies
}

module.exports = viewedTrophy
