const express = require('express')
const gamesPlayed = express.Router()
const gamePlayed = require('../middlewares/gamePlayed')
const allGamePlayed = require('../middlewares/allGamePlayed')

gamesPlayed.post('/:uuid', async (req, res) => {
  const { uuid } = req.params

  try {
    const gamesplayed = await gamePlayed(uuid)
    res.status(201).json(gamesplayed)
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
