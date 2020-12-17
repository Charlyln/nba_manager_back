const User = require('../models/user.model')
const Trophy = require('../models/trophy.model')

const trophyDataCreation = (uuid) => {
  return Promise.all([trophiesCreation(uuid)])
}

const trophiesCreation = async (uuid) => {
  await Trophy.create({
    name: 'Play a game',
    difficulty: 1,
    earned: false,
    UserUuid: uuid,
    color: 'bronze',
    isViewed: false
  })
  await Trophy.create({
    name: 'Use a training camp',
    difficulty: 2,
    earned: false,
    UserUuid: uuid,
    color: 'bronze',
    isViewed: false
  })
  await Trophy.create({
    name: 'Make a trade',
    difficulty: 3,
    earned: false,
    UserUuid: uuid,
    color: 'silver',
    isViewed: false
  })
  await Trophy.create({
    name: 'Fire a player',
    difficulty: 4,
    earned: false,
    UserUuid: uuid,
    color: 'bronze',
    isViewed: false
  })
  await Trophy.create({
    name: 'Sign a extention',
    difficulty: 5,
    earned: false,
    UserUuid: uuid,
    color: 'silver',
    isViewed: false
  })
  await Trophy.create({
    name: 'Sign a free agent',
    difficulty: 6,
    earned: false,
    UserUuid: uuid,
    color: 'bronze',
    isViewed: false
  })
  await Trophy.create({
    name: 'Sign a player option',
    difficulty: 6,
    earned: false,
    UserUuid: uuid,
    color: 'bronze',
    isViewed: false
  })
  await Trophy.create({
    name: 'You have the MVP of the season',
    difficulty: 8,
    earned: false,
    UserUuid: uuid,
    color: 'gold',
    isViewed: false
  })
}

module.exports = trophyDataCreation
