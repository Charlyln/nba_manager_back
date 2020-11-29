const express = require('express')
const dataCreation = express.Router()
const dataCreationFunction = require('../middlewares/dataCreation')
const gamesDataCreation = require('../middlewares/gamesCreation')
const GamesDataCreation2 = require('../middlewares/gamesCreation2')
const GamesDataCreationNewSeason = require('../middlewares/GamesDataCreationNewSeason')
const trophyDataCreation = require('../middlewares/trophyDataCreation')

dataCreation.post('/:uuid', async (req, res) => {
  const { uuid } = req.params
  try {
    const datacreation = await dataCreationFunction(uuid)
    res.status(201).json(datacreation)
  } catch (err) {
    res.status(422).json(err)
  }
})

dataCreation.post('/games/:uuid', async (req, res) => {
  const { uuid } = req.params
  try {
    const datacreation = await gamesDataCreation(uuid)
    res.status(201).json(datacreation)
  } catch (err) {
    res.status(422).json(err)
  }
})

dataCreation.post('/games2/:uuid', async (req, res) => {
  const { uuid } = req.params

  try {
    const datacreation = await GamesDataCreation2(uuid)
    res.status(201).json(datacreation)
  } catch (err) {
    res.status(422).json(err)
  }
})

dataCreation.post('/newSeason/:uuid', async (req, res) => {
  const { uuid } = req.params
  const { date } = req.body

  try {
    const datacreation = await GamesDataCreationNewSeason(uuid, date)
    res.status(201).json(datacreation)
  } catch (err) {
    res.status(422).json(err)
  }
})

dataCreation.post('/trophies/:uuid', async (req, res) => {
  const { uuid } = req.params
  try {
    const trophies = await trophyDataCreation(uuid)
    res.status(201).json(trophies)
  } catch (err) {
    res.status(422).json(err)
  }
})

module.exports = dataCreation
