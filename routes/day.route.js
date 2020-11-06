const express = require('express')
const days = express.Router()
const Day = require('../models/day.model')
const Game = require('../models/game.model')

days.get('/', async (req, res) => {
  try {
    const days = await Day.findAll({
      include: [
        {
          model: Game
        }
      ]
    })
    res.status(200).json(days)
  } catch (err) {
    res.status(400).json(err)
  }
})

days.get('/:UserUuid', async (req, res) => {
  const UserUuid = req.params.UserUuid
  try {
    const days = await Day.findAll({
      where: {
        UserUuid
      }
    })
    res.status(200).json(days)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }
})

days.post('/', async (req, res) => {
  const { date, GameUuid } = req.body
  try {
    const days = await Day.create({
      date,
      GameUuid
    })
    res.status(201).json(days)
  } catch (err) {
    res.status(422).json(err)
  }
})

// days.put('/:uuid', async (req, res) => {
//   const uuid = req.params.uuid
//   const { firstName, lastName, TeamUuid } = req.body
//   try {
//     const days = await Day.update(
//       {
//         firstName,
//         lastName,
//         TeamUuid
//       },
//       { where: { uuid } }
//     )
//     res.status(201).json(days)
//   } catch (err) {
//     res.status(422).json(err)
//   }
// })

module.exports = days
