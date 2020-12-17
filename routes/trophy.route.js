const express = require('express')
const viewedTrophy = require('../functions/viewedTrophy')
const earnedTrophy = require('../functions/earnedTrophy')
const trophies = express.Router()
const Trophy = require('../models/trophy.model')

trophies.get('/', async (req, res) => {
  try {
    const trophies = await Trophy.findAll()
    res.status(200).json(trophies)
  } catch (err) {
    res.status(400).json(err)
  }
})

trophies.get('/:UserUuid', async (req, res) => {
  const { UserUuid } = req.params
  try {
    const trophy = await Trophy.findAll({
      where: {
        UserUuid
      }
    })
    res.status(200).json(trophy)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }
})

trophies.get('/:name/:UserUuid', async (req, res) => {
  const { UserUuid, name } = req.params
  try {
    const trophy = await Trophy.findOne({
      where: {
        UserUuid,
        name
      }
    })
    res.status(200).json(trophy)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }
})

trophies.post('/', async (req, res) => {
  const { name, difficulty, earned, UserUuid } = req.body
  try {
    const trophy = await Trophy.create({
      name,
      difficulty,
      earned,
      UserUuid
    })
    res.status(201).json(trophy)
  } catch (err) {
    res.status(422).json(err)
  }
})

trophies.post('/earned/:UserUuid', async (req, res) => {
  const { UserUuid } = req.params
  const { name } = req.body

  try {
    const test = await earnedTrophy(UserUuid, name)

    res.status(201).json(test)
  } catch (err) {
    res.status(422).json(err)
  }
})

trophies.post('/viewed/:UserUuid', async (req, res) => {
  const { UserUuid } = req.params

  try {
    const test = await viewedTrophy(UserUuid)

    res.status(201).json(test)
  } catch (err) {
    res.status(422).json(err)
  }
})

module.exports = trophies
