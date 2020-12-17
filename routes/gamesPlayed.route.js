const express = require('express')
const gamesPlayed = express.Router()
const gamePlayed = require('../functions/gamePlayed')
const allGamePlayed = require('../functions/allGamePlayed')
const twoGamePlayed = require('../functions/twoGamePlayed')
const putProgressValuePerGame = require('../functions/putProgressValuePerGame')

gamesPlayed.post('/:uuid/:SeasonUuid/:TeamUuid/:UserUuid', async (req, res) => {
  const { uuid, SeasonUuid, TeamUuid, UserUuid } = req.params

  try {
    const test = await gamePlayed(uuid)
    const TwoOtherGamePlayed = await twoGamePlayed(SeasonUuid, TeamUuid)
    await putProgressValuePerGame(UserUuid)
    res.status(201).json(test)
  } catch (err) {
    res.status(422).json(err)
  }
})

gamesPlayed.post('/all/:SeasonUuid', async (req, res) => {
  const { SeasonUuid } = req.params

  try {
    const allgamesplayed = await allGamePlayed(SeasonUuid)
    res.status(201).json(allgamesplayed)
  } catch (err) {
    res.status(422).json(err)
  }
})

module.exports = gamesPlayed
